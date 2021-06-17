import React, { useState, useEffect } from 'react'
import Box from './geometries/Box'
import Sphere from './geometries/Sphere'

var objectNumber = 1;

const NavBar = props=>{

    const [boxClicked,setBoxClicked] = useState(false)
    const [sphereClicked,setSphereClicked] = useState(false)
    const [selectedObject, setSelectedObject] = useState(null)
    const c = -1;

    // default box params
    const [boxParams,setBoxParams] = useState({
        length:1,
        breadth:1,
        height:1,
        x:1,
        y:1,
        z:1
    })

    // default sphere params
    const [sphereParams,setSphereParams] = useState({
        radius:1,
        x:1,
        y:1,
        z:1
    })

    const createBox = ()=>{
        let boxes = props.boxes;
        let boxesFunction = props.boxesFunction;
        let box;

        if(selectedObject){
            var tempBoxes = []

            for(let i=0;i<boxes.length;i++){
                if(parseInt(boxes[i].key) == parseInt(selectedObject.current.userData)) continue;
                else tempBoxes.push(boxes[i]);
            }

            box = <Box key={objectNumber} args={boxParams} setSelectedObject={setSelectedObject} k={objectNumber} />
            boxesFunction([...tempBoxes, box])
        }else{
            box = <Box key={objectNumber} args={boxParams} setSelectedObject={setSelectedObject} k={objectNumber} />
            boxesFunction([...boxes,box]);
        }

        objectNumber += 1;
        setBoxClicked(false);
        setSphereClicked(false);
        setSelectedObject(null)
        setBoxParams({length:1,breadth:1,height:1,x:1,y:1,z:1})
    }

    const createSphere = ()=>{
        const spheres = props.spheres;
        const spheresFunction = props.spheresFunction;
        let sphere;

        if(selectedObject){
            var tempSpheres = []

            for(let i=0;i<spheres.length;i++){
                if(parseInt(spheres[i].key) == parseInt(selectedObject.current.userData)) continue;
                else tempSpheres.push(spheres[i]);
            }
            sphere = <Sphere key={objectNumber} args={sphereParams} setSelectedObject={setSelectedObject} k={objectNumber} />
            spheresFunction([...tempSpheres, sphere])
        }else{
            sphere = <Sphere key={objectNumber} args={sphereParams} setSelectedObject={setSelectedObject} k={objectNumber} />
            spheresFunction([...spheres,sphere]);
        }

        objectNumber += 1
        setBoxClicked(false);
        setSphereClicked(false);
        setSelectedObject(null);
        setSphereParams({radius:1,x:1,y:1,z:1});
    }

    useEffect(()=>{
        if(!selectedObject) return;

        let geometryType = selectedObject.current.geometry.type
        let position = selectedObject.current.position
        
        if(geometryType === 'SphereGeometry'){
            let radius = selectedObject.current.geometry.parameters.radius
            setSphereClicked(true);
            setBoxClicked(false);
            setSphereParams({radius:parseFloat(radius), x:parseInt(position.x), y:parseInt(position.y), z:parseInt(position.z*c)})
        }
        
        else if(geometryType === 'BoxGeometry'){
            let height = selectedObject.current.geometry.parameters.depth
            let breadth = selectedObject.current.geometry.parameters.height
            let length = selectedObject.current.geometry.parameters.width
            setBoxClicked(true);
            setSphereClicked(false);
            setBoxParams({length:parseFloat(length), breadth:parseFloat(breadth), height:parseFloat(height), x:parseInt(position.x), y:parseInt(position.y), z:parseInt(position.z*c)})
        }
      },[selectedObject])
    

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <p className='display-4 pr-4 my-auto' style={{fontSize:'1.75rem'}}>KAUSHIK'S CAD</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <button className="btn-sm btn-dark mr-1 mb-1" onClick={e=>{setBoxClicked(!boxClicked); if(sphereClicked) setSphereClicked(false); setSelectedObject(null);}}>Box</button>
                <button className="btn-sm btn-dark mr-1 mb-1 mr-3" onClick={e=>{ setSphereClicked(!sphereClicked); if(boxClicked) setBoxClicked(false); setSelectedObject(null); }}>Sphere</button>
                </div>

            {boxClicked &&
            <>
                    <div className='form-inline'>
                    
                    <div className="card-sm">
					<label htmlFor="length">Length</label>
                    <input type="number" id='length' value={boxParams.length} onChange={e=>{setBoxParams({...boxParams,length:parseFloat(e.target.value)})}} className='form-control form-control-sm'/>
                    </div>

                    <div className='card-sm'>
					<label htmlFor="breadth">Breadth</label>
                    <input type="number" id='breadth' value={boxParams.breadth} onChange={e=>{setBoxParams({...boxParams,breadth:parseFloat(e.target.value)})}} className='form-control form-control-sm'/>
					</div>

                    <div className='card-sm'>
					<label htmlFor="height">Height</label>                    
                    <input type="number" id='height' value={boxParams.height} className='form-control form-control-sm' onChange={e=>{setBoxParams({...boxParams,height:parseFloat(e.target.value)})}}/>
					</div>

                    <div className="card-sm">
					<label htmlFor="x-position">X Position</label>                    
                    <input type="number" id='x-position' value={boxParams.x} className='form-control form-control-sm' onChange={e=>{setBoxParams({...boxParams,x:parseInt(e.target.value)})}} />
                    </div>

                    <div className='card-sm'>
					<label htmlFor="y-position">Y Position</label>                    
                    <input type="number" id='y-position' value={boxParams.y} onChange={e=>{setBoxParams({...boxParams,y:parseInt(e.target.value)})}} className='form-control form-control-sm'/>
                    </div>

                    <div className='card-sm'>
					<label htmlFor="y-position">Z Position</label>	
                    <input type="number" id='z-position' value={boxParams.z} className='form-control form-control-sm' onChange={e=>{setBoxParams({...boxParams,z:parseInt(e.target.value)})}} />
                    </div>
                </div>
                <button type='button' className='btn btn-sm btn-dark col-sm-2 mx-auto' onClick={createBox}>CREATE BOX</button>
            </>
                
            }


            {sphereClicked &&
            <>
                    <div className='form-inline' style={{width:'100%'}}>
                    
                    <div className='card-sm'>
					<label htmlFor="radius">Radius</label>                    
                    <input type="number" id='radius' value={sphereParams.radius} className='form-control form-control-sm' onChange={e=>{setSphereParams({...sphereParams,radius:parseFloat(e.target.value)})}}/>
                    </div>

                    <div className='card-sm'>
					<label htmlFor="x-position">X Position</label>                    
                    <input type="number" id='x-position' value={sphereParams.x} className='form-control form-control-sm' onChange={e=>{setSphereParams({...sphereParams,x:parseInt(e.target.value)})}} />
					</div>

                    <div className='card-sm'>
					<label htmlFor="y-position">Y Position</label>                    
                    <input type="number" id='y-position' value={sphereParams.y} onChange={e=>{setSphereParams({...sphereParams,y:parseInt(e.target.value)})}} className='form-control form-control-sm'/>
                    </div>

                    <div className='card-sm'>
					<label htmlFor="z-position">Z Position</label>                    
                    <input type="number" id='z-position' value={sphereParams.z} className='form-control form-control-sm' onChange={e=>{setSphereParams({...sphereParams,z:parseInt(e.target.value)})}} />
                    </div>

                    </div>
                    <button type='button' className='btn btn-sm btn-dark mt-1 mb-1 col-sm-2 mx-auto' onClick={createSphere}>CREATE SPHERE</button>
            </>
            }

            </div>
            </nav>
        </>
    )
}

export default NavBar