import React, { useRef, useState } from 'react'
import { Canvas, useThree, useFrame, extend } from 'react-three-fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import NavBar from './NavBar'

extend({OrbitControls})

const CameraControls = () => {
  const {    camera,    gl: { domElement } } = useThree();
  camera.position.x = 0
  camera.position.y = 0
  camera.position.z = 20

  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} enableZoom={true} />;
};


export default function App() {
  const [boxes,setBoxes] = useState([])
  const [spheres, setSpheres] = useState([])
  const [cylinders, setCylinders] = useState([])

  const [canvasSize, _] = useState({
    width:parseInt(window.screen.width)-50,
    height:parseInt(0.7 * window.screen.height)
  })

  return (
    <>
      <NavBar boxesFunction={setBoxes} boxes={boxes} spheresFunction={setSpheres} spheres={spheres} cylinders={cylinders} cylindersFunction={setCylinders} />
      <Canvas className='vh-100' style={canvasSize} >
        <CameraControls />
        <ambientLight intensity={0.75} />
        <spotLight position={[100, 100, 100]} angle={0} penumbra={1} />
        <pointLight position={[100, 100, 100]} />
        {boxes.map((box)=>box)}
        {spheres.map((sphere)=>sphere)}
        {cylinders.map(cylinder=>cylinder)}
      </Canvas>
    </>
  )

}

