import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useThree, useFrame, extend } from 'react-three-fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import NavBar from './NavBar'

extend({OrbitControls})

const CameraControls = () => {
  const {    camera,    gl: { domElement },  } = useThree();  
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} enableZoom={true} />;
};


export default function App() {
  const [boxes,setBoxes] = useState([])
  const [spheres, setSpheres] = useState([])

  const [canvasSize, setCanvasSize] = useState({
    width:parseInt(window.screen.width)-50,
    height:parseInt(0.75 * window.screen.height)
  })

  return (
    <>
      <NavBar boxesFunction={setBoxes} boxes={boxes} spheresFunction={setSpheres} spheres={spheres} />
      <Canvas className='vh-100' style={canvasSize} >
        <CameraControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        {boxes.map((box)=>box)}
        {spheres.map((sphere)=>sphere)}
      </Canvas>
    </>
  )

}

