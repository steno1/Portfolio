import Card from '../../../Components/card/Card'
import MyProject from '../MyProject/MyProject'
import React from 'react'

const Projects = ({projects}) => {
  return (
    <div className='portfolio__projects'>
{projects.map(project=>(
  <MyProject key={project.id} project={project}/>
))}
    </div>
  )
}

export default Projects
