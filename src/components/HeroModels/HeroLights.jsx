import * as THREE from 'three';

const HeroLights = () => {
    return (
        <>
            <primitive
                object = {new THREE.RectAreaLight('#e9773d', 100, 50, 1)}
                position = {[10, 15, 15]}
                intensity = {50}
                rotation = {[0, Math.PI / 4, 0]}
            />

            <primitive
                object = {new THREE.RectAreaLight('#e9773d', 100, 20, 10)}
                position = {[-3, 20, -10]}
                intensity = {100}
                rotation = {[-Math.PI / 4, Math.PI / 4, 0]}
            />

            <primitive
                object = {new THREE.RectAreaLight('#e9773d', 100, 50, 1)}
                position = {[12, 5, -3]}
                intensity = {10}
                rotation = {[Math.PI / 4, Math.PI / 2, 0]}
            />


            <spotLight
                position = {[0, 0, 10]}
                angle = {0.4}
                intensity = {700}
                penumbra = {0.2}
                color = '#e9773d'
            />

            <spotLight
                position = {[-6, 15, 10]}
                angle = {0.2}
                intensity = {200}
                penumbra = {1}
                color = 'white'
            />

            <pointLight
                position = {[0, 0, 5]}
                intensity = {100}
                color = "#f44122"
            />

            <pointLight
                position = {[-5, 0, 5]}
                intensity = {100}
                color = "#f44122"
            />

            <pointLight
                position = {[-10, 0, 5]}
                intensity = {100}
                color = "#f44122"
            />
        </>
    )
}
export default HeroLights
