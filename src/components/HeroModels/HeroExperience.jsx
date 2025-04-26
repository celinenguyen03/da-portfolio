import { Canvas } from '@react-three/fiber'
import {OrbitControls} from "@react-three/drei";
import { useMediaQuery} from "react-responsive";
import { Room } from './Room.jsx'
import { Japan } from './Japan.jsx'
import HeroLights from "./HeroLights.jsx";
import Particles from "./Particles.jsx";

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});
    const isMobile = useMediaQuery({ query: '(max-width: 768px)'});
    return (
        <Canvas camera = {{ position: [-5, 0, 25], fov: 45 }}>


            <OrbitControls
                enablePan = {false}
                enableZoom = {!isTablet}
                maxDistance = {30}
                minDistance = {20}
                minPolarAngle = {Math.PI / 5}
                maxPolarAngle = {Math.PI / 2}
            />

            <HeroLights />

            <Particles count = {100}/>
            <group
            scale = {isMobile? 0.7 : 1}
            position = {[0, -5.0, 0]}
            rotation = {[0, -Math.PI / 4, 0]}>
                <Japan />
            </group>

        </Canvas>
    )
}
export default HeroExperience
