import Card from '../../../Components/card/Card'
import React from 'react'

const MyProject = ({project}) => {
  return (
    <Card className='portfolio__project'>
<div className='portfolio__project-image'>
<img src={project.images} alt='portfolioImage'/>
</div>
<h4>{project.title}</h4>
<p>{project.desc}</p>
<div className='portfolio__project-cta'>
<a href={project.demo} className='btn sm' target='_blank'
rel='noopener noreferrer'>Demo</a>
<a href={project.demo} className='btn primary' target='_blank'
rel='noopener noreferrer'>Github</a>
</div>

    </Card>
  )
}

export default MyProject
