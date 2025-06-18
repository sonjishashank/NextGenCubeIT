"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei"
import { useRef } from "react"
import type * as THREE from "three"

function AnimatedSphere({
  position,
  color,
  speed = 1,
}: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial color={color} attach="material" distort={0.4} speed={2} roughness={0.1} metalness={0.8} />
      </Sphere>
    </Float>
  )
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const particleCount = 100

  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={particleCount} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ef4444" transparent opacity={0.6} />
    </points>
  )
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ef4444" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />

        <AnimatedSphere position={[-4, 2, -2]} color="#ef4444" speed={0.8} />
        <AnimatedSphere position={[4, -2, -3]} color="#3b82f6" speed={1.2} />
        <AnimatedSphere position={[0, 0, -5]} color="#f59e0b" speed={0.6} />

        <ParticleField />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
