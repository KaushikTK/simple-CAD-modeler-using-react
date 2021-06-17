import React, { useRef } from 'react'

const Cylinder = props=>{
    const cylinderMesh = useRef()
    const c = -1;

    return(
        <mesh 
        ref={cylinderMesh}
        userData={props.k}
        position={[props.args.x, props.args.y, props.args.z*c]}
        scale={[1,1,1]}
        onClick={(e) => {props.setSelectedObject(cylinderMesh);}}>
        <cylinderBufferGeometry args={[props.args.topRadius,props.args.bottomRadius,props.args.height,props.args.radialSegments]} />
        <meshPhongMaterial color='steelblue' />
        </mesh>
    )
}

export default Cylinder;