import React from 'react'
import ProjectItem from './ProjectItem'
import picone from '../assets/textile.jpg'
import pictwo from '../assets/trade.jpg'
import picthree from '../assets/trade2.jpg'
import picfour from '../assets/training.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1048px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Dynamic and results-oriented professional with extensive experience in trading, training, and education. Proven track record in financial markets as a skilled trader, leveraging strong analytical skills to make data-driven decisions and manage risk effectively. As a trainer, adept at designing and delivering engaging learning experiences, with a focus on adult learning principles and continuous improvement. Committed educator with a passion for fostering growth and development, both in financial acumen and academic achievement. Excels in fast-paced environments, demonstrating exceptional communication, leadership, and organizational skills.</p>
        <div className='grid sm:grid-cols-2 gap-7'>
            <ProjectItem img={picone} title='Merchandising'/>
            <ProjectItem img={pictwo} title='Trading'/>
            <ProjectItem img={picthree} title='Forex'/>
            <ProjectItem img={picfour} title='Training'/>
        </div>
      
    </div>
  )
}

export default Projects
