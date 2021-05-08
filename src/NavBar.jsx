import React, { useState } from 'react'
import Box from './geometries/Box'
import Sphere from './geometries/Sphere'

const NavBar = props=>{

    const [boxClicked,setBoxClicked] = useState(false)
    const [sphereClicked,setSphereClicked] = useState(false)

    const [boxParams,setBoxParams] = useState({
        length:1,
        breadth:1,
        height:1,
        x:1,
        y:1,
        z:1
    })
    const [sphereParams,setSphereParams] = useState({
        radius:1,
        x:1,
        y:1,
        z:1
    })

    const createBox = ()=>{
        const boxes = props.boxes;
        const boxesFunction = props.boxesFunction;
        let key = boxes.length
        let box = <Box key={key} args={boxParams} />
        boxesFunction([...boxes,box]);

        setBoxClicked(false);
        setSphereClicked(false);
    }

    const createSphere = ()=>{
        const spheres = props.spheres;
        const spheresFunction = props.spheresFunction;
        let key = spheres.length
        let sphere = <Sphere key={key} args={sphereParams} />
        spheresFunction([...spheres,sphere]);
        
        setBoxClicked(false);
        setSphereClicked(false);
    }

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <p className='display-4 pr-4' style={{fontSize:'2rem'}}>KAUSCAD</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <button className="btn-sm btn-dark mr-1 mb-1" onClick={e=>{setBoxClicked(!boxClicked); if(sphereClicked) setSphereClicked(false)}}>Box</button>
                <button className="btn-sm btn-dark mr-1 mb-1" onClick={e=>{ setSphereClicked(!sphereClicked); if(boxClicked) setBoxClicked(false); }}>Sphere</button>
                </div>

            {boxClicked &&
                    <div className='form-inline'>
					<label for="length">L</label>
                    <input type="number" id='length' value={boxParams.length} onChange={e=>{setBoxParams({...boxParams,length:parseFloat(e.target.value)})}} className='form-control form-control-sm'/>

					<label for="breadth">B</label>
                    <input type="number" id='breadth' value={boxParams.breadth} onChange={e=>{setBoxParams({...boxParams,breadth:parseFloat(e.target.value)})}} className='form-control form-control-sm'/>
					
					<label for="height">H</label>                    
                    <input type="number" id='height' value={boxParams.height} className='form-control form-control-sm' onChange={e=>{setBoxParams({...boxParams,height:parseFloat(e.target.value)})}}/>
					
					<label for="x-position">X</label>                    
                    <input type="number" id='x-position' value={boxParams.x} className='form-control form-control-sm' onChange={e=>{setBoxParams({...boxParams,x:parseInt(e.target.value)})}} />

					<label for="y-position">Y</label>                    
                    <input type="number" id='y-position' value={boxParams.y} onChange={e=>{setBoxParams({...boxParams,y:parseInt(e.target.value)})}} className='form-control form-control-sm'/>
                    
					<label for="y-position">Z</label>                    					
                    <input type="number" id='z-position' value={boxParams.z} className='form-control form-control-sm' onChange={e=>{setBoxParams({...boxParams,z:parseInt(e.target.value)})}} />

                    <button type='button' className='btn btn-block btn-sm btn-dark mt-1' onClick={createBox}>CREATE BOX</button>
                </div>
            }


            {sphereClicked &&
                    <div className='form-inline' style={{width:'100%'}}>
                    
					<label for="radius">Radius</label>                    
                    <input type="number" id='radius' value={sphereParams.radius} className='form-control form-control-sm' onChange={e=>{setSphereParams({...sphereParams,radius:parseFloat(e.target.value)})}}/>

					<label for="x-position">X</label>                    
                    <input type="number" id='x-position' value={sphereParams.x} className='form-control form-control-sm' onChange={e=>{setSphereParams({...sphereParams,x:parseInt(e.target.value)})}} />
					
					<label for="y-position">Y</label>                    
                    <input type="number" id='y-position' value={sphereParams.y} onChange={e=>{setSphereParams({...sphereParams,y:parseInt(e.target.value)})}} className='form-control form-control-sm'/>
                    
					<label for="z-position">Z</label>                    
                    <input type="number" id='z-position' value={sphereParams.z} className='form-control form-control-sm' onChange={e=>{setSphereParams({...sphereParams,z:parseInt(e.target.value)})}} />
                    
                    <button type='button' className='btn btn-block btn-sm btn-dark mt-1' onClick={createSphere}>create sphere</button>
                </div>
            }

            </div>
            </nav>
        </>
    )
}

export default NavBar