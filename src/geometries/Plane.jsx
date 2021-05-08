import React from 'react'
import { usePlane } from 'use-cannon'

const Plane = props=>{

    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props, type: 'Static' }))
    console.log(ref);

    return(
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry attach="geometry" args={[1009, 1000]} />
            <shadowMaterial attach="material" color="#171717" />
        </mesh>
    )
}

export default Plane