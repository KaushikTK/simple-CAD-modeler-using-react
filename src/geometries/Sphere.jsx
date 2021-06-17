import React, { useRef } from 'react'

const Sphere = props =>{
    const sphereMesh = useRef()
    const c = -1

    return(
        <mesh 
        ref={sphereMesh}
        userData={props.k}
        position={[props.args.x, props.args.y, props.args.z*c]}
        scale={[1,1,1]}
        onClick={(e) => {props.setSelectedObject(sphereMesh);}}>
        <sphereBufferGeometry args={[props.args.radius,64,64]} />
        <meshPhongMaterial color='steelblue' />
        </mesh>
    )
}

export default Sphere;