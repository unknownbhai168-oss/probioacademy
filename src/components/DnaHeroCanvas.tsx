import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Dna } from 'lucide-react';

interface DnaHeroCanvasProps {
  className?: string;
  interactive?: boolean;
}

export const DnaHeroCanvas: React.FC<DnaHeroCanvasProps> = ({
  className = '',
  interactive = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const rotationRef = useRef(true);
  rotationRef.current = isRotating;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // On mobile, skip 3D WebGL completely and use the lightweight animated illustration
    if (isMobile) return;

    const mountEl = mountRef.current;
    if (!mountEl) return;

    let frameId = 0;
    let resizeObserver: ResizeObserver | null = null;

    // Detect software WebGL
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return true;
      }
    })();

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x071426, 0.025);

    const width = mountEl.clientWidth || 800;
    const height = mountEl.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 16);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    mountEl.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x0b2545, 1.8);
    scene.add(ambientLight);

    const keyCyanLight = new THREE.DirectionalLight(0x35e0f2, 3.2);
    keyCyanLight.position.set(8, 12, 10);
    scene.add(keyCyanLight);

    const rimMintLight = new THREE.DirectionalLight(0x62f5b0, 2.5);
    rimMintLight.position.set(-10, -6, -8);
    scene.add(rimMintLight);

    const deepBlueFill = new THREE.PointLight(0x1d4ed8, 2.5, 30);
    deepBlueFill.position.set(0, -8, 8);
    scene.add(deepBlueFill);

    // DNA Double Helix
    const dnaGroup = new THREE.Group();
    scene.add(dnaGroup);

    const totalPairs = isSoftwareGl ? 28 : 38;
    const heightSpan = 22;
    const radius = 2.4;
    const twists = 2.8;

    const cyanStrandMat = new THREE.MeshStandardMaterial({
      color: 0x35e0f2,
      metalness: 0.6,
      roughness: 0.25,
      emissive: 0x083344,
      emissiveIntensity: 0.4,
    });

    const mintStrandMat = new THREE.MeshStandardMaterial({
      color: 0x62f5b0,
      metalness: 0.6,
      roughness: 0.25,
      emissive: 0x064e3b,
      emissiveIntensity: 0.3,
    });

    const baseAdenineMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.4,
      roughness: 0.3,
    });

    const baseThymineMat = new THREE.MeshStandardMaterial({
      color: 0x34d399,
      metalness: 0.4,
      roughness: 0.3,
    });

    const nodeGeo = new THREE.SphereGeometry(0.24, 12, 12);
    const rungCylinderGeo = new THREE.CylinderGeometry(0.08, 0.08, 1, 10);
    rungCylinderGeo.rotateX(Math.PI / 2);

    const curvePointsA: THREE.Vector3[] = [];
    const curvePointsB: THREE.Vector3[] = [];

    for (let i = 0; i <= totalPairs; i++) {
      const progress = i / totalPairs;
      const y = (progress - 0.5) * heightSpan;
      const angle = progress * Math.PI * 2 * twists;

      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;

      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;

      const p1 = new THREE.Vector3(x1, y, z1);
      const p2 = new THREE.Vector3(x2, y, z2);

      curvePointsA.push(p1);
      curvePointsB.push(p2);

      const nodeA = new THREE.Mesh(nodeGeo, cyanStrandMat);
      nodeA.position.copy(p1);
      dnaGroup.add(nodeA);

      const nodeB = new THREE.Mesh(nodeGeo, mintStrandMat);
      nodeB.position.copy(p2);
      dnaGroup.add(nodeB);

      if (i < totalPairs) {
        const midPoint = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);

        const rungA = new THREE.Mesh(rungCylinderGeo, baseAdenineMat);
        const halfDistA = p1.distanceTo(midPoint);
        rungA.scale.set(1, 1, halfDistA);
        rungA.position.copy(new THREE.Vector3().addVectors(p1, midPoint).multiplyScalar(0.5));
        rungA.lookAt(midPoint);
        dnaGroup.add(rungA);

        const rungB = new THREE.Mesh(rungCylinderGeo, baseThymineMat);
        const halfDistB = p2.distanceTo(midPoint);
        rungB.scale.set(1, 1, halfDistB);
        rungB.position.copy(new THREE.Vector3().addVectors(p2, midPoint).multiplyScalar(0.5));
        rungB.lookAt(midPoint);
        dnaGroup.add(rungB);
      }
    }

    const curveA = new THREE.CatmullRomCurve3(curvePointsA);
    const curveB = new THREE.CatmullRomCurve3(curvePointsB);

    const tubeGeoA = new THREE.TubeGeometry(curveA, 80, 0.09, 8, false);
    const tubeGeoB = new THREE.TubeGeometry(curveB, 80, 0.09, 8, false);

    const backboneA = new THREE.Mesh(tubeGeoA, cyanStrandMat);
    const backboneB = new THREE.Mesh(tubeGeoB, mintStrandMat);
    dnaGroup.add(backboneA);
    dnaGroup.add(backboneB);

    // Floating molecules
    const moleculesGroup = new THREE.Group();
    scene.add(moleculesGroup);

    const ringAtomGeo = new THREE.SphereGeometry(0.18, 10, 10);
    const ringBondGeo = new THREE.CylinderGeometry(0.04, 0.04, 1, 6);
    ringBondGeo.rotateZ(Math.PI / 2);

    const createBenzeneRing = (color: number, scale = 1) => {
      const ring = new THREE.Group();
      const atomMat = new THREE.MeshStandardMaterial({ color, roughness: 0.3, metalness: 0.5 });
      const bondMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.4, metalness: 0.7 });

      const sides = 6;
      const r = 1.1 * scale;
      const vertices: THREE.Vector3[] = [];

      for (let s = 0; s < sides; s++) {
        const theta = (s / sides) * Math.PI * 2;
        const v = new THREE.Vector3(Math.cos(theta) * r, Math.sin(theta) * r, 0);
        vertices.push(v);
        const atom = new THREE.Mesh(ringAtomGeo, atomMat);
        atom.position.copy(v);
        ring.add(atom);
      }

      for (let s = 0; s < sides; s++) {
        const v1 = vertices[s];
        const v2 = vertices[(s + 1) % sides];
        const bond = new THREE.Mesh(ringBondGeo, bondMat);
        const dist = v1.distanceTo(v2);
        bond.scale.set(dist, 1, 1);
        bond.position.copy(new THREE.Vector3().addVectors(v1, v2).multiplyScalar(0.5));
        bond.lookAt(v2);
        bond.rotateY(Math.PI / 2);
        ring.add(bond);
      }
      return ring;
    };

    const ring1 = createBenzeneRing(0x35e0f2, 0.9);
    ring1.position.set(-6, 3, -2);
    moleculesGroup.add(ring1);

    const ring2 = createBenzeneRing(0x62f5b0, 0.75);
    ring2.position.set(6, -4, -1);
    moleculesGroup.add(ring2);

    // Particle field
    const particleCount = isSoftwareGl ? 50 : 160;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let p = 0; p < particleCount; p++) {
      particlePositions[p * 3] = (Math.random() - 0.5) * 24;
      particlePositions[p * 3 + 1] = (Math.random() - 0.5) * 24;
      particlePositions[p * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x35e0f2,
      size: 0.12,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    dnaGroup.position.set(2.8, 0.5, 0);
    dnaGroup.rotation.z = 0.22;
    dnaGroup.rotation.x = 0.15;

    // Pointer parallax
    const targetRotation = { x: 0.15, y: 0 };
    const currentRotation = { x: 0.15, y: 0 };

    const handlePointerMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = mountEl.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotation.y = x * 0.45;
      targetRotation.x = 0.15 - y * 0.3;
    };

    window.addEventListener('mousemove', handlePointerMove);

    const handleResize = () => {
      if (!mountEl) return;
      const w = mountEl.clientWidth;
      const h = mountEl.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mountEl);

    // Software WebGL pacing helper (as prescribed in threejs skill)
    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 60);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    let lastTime = performance.now();
    const tick = () => {
      const now = performance.now();
      const delta = (now - lastTime) * 0.001;
      lastTime = now;

      if (rotationRef.current) {
        dnaGroup.rotation.y += delta * 0.6;
        ring1.rotation.z += delta * 0.3;
        ring2.rotation.x += delta * 0.25;
        particles.rotation.y += delta * 0.05;
      }

      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.05;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.05;
      camera.position.x = currentRotation.y * 2.5;
      camera.position.y = (currentRotation.x - 0.15) * 2.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    };

    if (isSoftwareGl) {
      afterDraw(tick);
    } else {
      frameId = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      window.removeEventListener('mousemove', handlePointerMove);
      if (resizeObserver) resizeObserver.disconnect();
      if (mountEl && renderer.domElement && mountEl.contains(renderer.domElement)) {
        mountEl.removeChild(renderer.domElement);
      }

      nodeGeo.dispose();
      rungCylinderGeo.dispose();
      tubeGeoA.dispose();
      tubeGeoB.dispose();
      ringAtomGeo.dispose();
      ringBondGeo.dispose();
      particleGeo.dispose();

      cyanStrandMat.dispose();
      mintStrandMat.dispose();
      baseAdenineMat.dispose();
      baseThymineMat.dispose();
      particleMat.dispose();

      renderer.dispose();
    };
  }, [interactive, isMobile]);

  // On Mobile: Render lightweight animated scientific SVG illustration
  if (isMobile) {
    return (
      <div className={`relative w-full h-full overflow-hidden flex items-center justify-center ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/20 via-transparent to-emerald-950/20" />
        <div className="relative z-0 flex flex-col items-center justify-center opacity-30 select-none pointer-events-none">
          <Dna className="w-56 h-56 text-cyan-400 animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <div 
        ref={mountRef} 
        className="w-full h-full absolute inset-0 pointer-events-none" 
        data-testid="dna-canvas"
      />
      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-[#071426]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/20 text-xs text-slate-300">
        <button
          type="button"
          onClick={() => setIsRotating(!isRotating)}
          className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer"
          aria-label={isRotating ? 'Pause 3D rotation' : 'Resume 3D rotation'}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
          <span>{isRotating ? '3D Active' : '3D Paused'}</span>
        </button>
      </div>
    </div>
  );
};
