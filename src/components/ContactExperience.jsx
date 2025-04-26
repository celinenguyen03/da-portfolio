import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Capybaras } from "./Capybaras.jsx";

const ContactExperience = () => {
    return (
        <Canvas shadows camera={{ position: [8, 1, 8], fov: 45 }}>
            {/* Warm ambient light for hot spring atmosphere */}
            <ambientLight intensity={0.7} color="#ff9966" />

            {/* Main directional light with warm orange glow */}
            <directionalLight position={[5, 5, 3]} intensity={1.8} color="#ffcc99" />

            {/* Secondary light for highlights */}
            <directionalLight
                position={[5, 9, 1]}
                castShadow
                intensity={1.5}
                color="#ff7f50"
            />

            {/* Additional soft fill light */}
            <pointLight position={[-3, 2, 1]} intensity={0.8} color="#ffe6cc" />

            <OrbitControls
                enableZoom={false}
                minPolarAngle={Math.PI / 2 - Math.PI / 6}
                maxPolarAngle={Math.PI / 2 - Math.PI / 24}
                target={[0, -1, 0]}
            />

            <group scale={[1, 1, 1]}>
                {/* Water surface */}
                <mesh
                    receiveShadow
                    position={[0, -0.9, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                >
                    <planeGeometry args={[30, 30]} />
                    <meshStandardMaterial color="#4fa4c4" roughness={0.3} metalness={0.6} transparent opacity={0.8} />
                </mesh>
            </group>

            {/* Capybaras in hot spring - centered and scaled up */}
            <group scale={0.8} position={[0, -0.8, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
                <Capybaras />
            </group>
        </Canvas>
    );
};

export default ContactExperience;
