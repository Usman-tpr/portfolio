import React from 'react'
import './project.css'

export const Project = () => {
    const project=[
        {
            title:'MERN Project',
            des:"this is an employe registration Project Created only through Mern Technologies",
            tech:[
                {
                    tech:'React.js'
                },
                {
                    tech:'Node.js'
                },
                {
                    tech:'Express.js'
                },
                {
                    tech:'Mongodb'
                },
                
            ]
        },

        {
            title:'MEAN Project',
            des:"this is an employe registration Project Created only through Mern Technologies",
            tech:[
                {
                    tech:'Angular.js'
                },
                {
                    tech:'Node.js'
                },
                {
                    tech:'Express.js'
                },
                {
                    tech:'Mongodb'
                },
                
            ]
        },

        {
            title:'MEVN Project',
            des:"this is an employe registration Project Created only through Mern Technologies",
            tech:[
                {
                    tech:'Vuev.js'
                },
                {
                    tech:'Node.js'
                },
                {
                    tech:'Express.js'
                },
                {
                    tech:'Mongodb'
                },
                
            ]
        },
    ]
    return (
        <div className='container'>

            <div className="section-title">
                <h5>Projects</h5>
                <span className='line'></span>
            </div>
            <div className='row'>
            {project.map((items,index)=>
             
             <div className="col-xl-6 col-md-6 col-sm-12">
      {items.title}
             </div>
        
            
            )}
             </div>
               
        </div>
    )
}
export default Project
