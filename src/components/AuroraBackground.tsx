import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

// Aurora Particles Component
function AuroraParticles() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate particles in aurora-like patterns
  const particleCount = 2000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    // Create wave-like patterns for aurora effect
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = Math.sin(i * 0.01) * 5 + (Math.random() - 0.5) * 3;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    
    // Aurora colors: blue, cyan, purple, green
    const colorIndex = Math.floor(Math.random() * 4);
    switch (colorIndex) {
      case 0: // Blue
        colors[i * 3] = 0.3;
        colors[i * 3 + 1] = 0.8;
        colors[i * 3 + 2] = 1;
        break;
      case 1: // Cyan
        colors[i * 3] = 0.3;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 0.9;
        break;
      case 2: // Purple
        colors[i * 3] = 0.8;
        colors[i * 3 + 1] = 0.3;
        colors[i * 3 + 2] = 1;
        break;
      case 3: // Green
        colors[i * 3] = 0.3;
        colors[i * 3 + 1] = 1;
        colors[i * 3 + 2] = 0.6;
        break;
    }
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial 
        size={0.05} 
        vertexColors 
        transparent 
        opacity={0.6}
        sizeAttenuation={false}
      />
    </Points>
  );
}

// Floating Geometric Shapes
function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating cubes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i * 0.8) * 8,
            Math.cos(i * 0.5) * 3,
            Math.sin(i * 1.2) * 6
          ]}
        >
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshPhongMaterial 
            color={i % 2 === 0 ? '#4FC3F7' : '#9C27B0'} 
            transparent 
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#4FC3F7" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#9C27B0" />
          
          <AuroraParticles />
          <FloatingShapes />
        </Suspense>
      </Canvas>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40 pointer-events-none" />
    </div>
  );
}