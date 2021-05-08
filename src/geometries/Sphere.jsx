import React, { useRef, useState } from 'react'

const Sphere = props =>{
    const sphereMesh = useRef()
    const [state, setState] = useState({ isHovered: false, isActive: false })

    return(
        <mesh 
        ref={sphereMesh}
        position={[props.args.x,props.args.y,props.args.z]}
        scale={state.isHovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onClick={(e) => setState({ ...state, isActive: !state.isActive })}
        onPointerOver={(e) => setState({ ...state, isHovered: true })}
        onPointerOut={(e) => setState({ ...state, isHovered: false })}>
        <sphereBufferGeometry args={[props.args.radius,64,64]} />
        <meshPhongMaterial color={state.isActive ? '#820263' : '#D90368'} />
        </mesh>
    )
}

export default Sphere;