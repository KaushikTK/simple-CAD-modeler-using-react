import React, { useRef } from 'react'
//import { Canvas, useFrame } from 'react-three-fiber'

function Box(props) {
  const boxMesh = useRef()
  const c = -1;

  // useFrame((state) => {
  //   const time = state.clock.getElapsedTime()
  //   mesh.current.position.y = mesh.current.position.y + Math.sin(time * 2) / 100
  //   mesh.current.rotation.y = mesh.current.rotation.x += 0.01
  // })

  return (
    <mesh 
      ref={boxMesh}
      userData={props.k}
      position={[(props.args.x),(props.args.y),(props.args.z*c)]}
      scale={[1,1,1]}
      onClick={(e) => {props.setSelectedObject(boxMesh);}}>
      <boxBufferGeometry args={[props.args.length,props.args.breadth,props.args.height]} />
      <meshPhongMaterial color='steelblue' />
    </mesh>
  )
}

export default Box;