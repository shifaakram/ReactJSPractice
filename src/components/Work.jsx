import React from 'react'
import WorkItem from './WorkItem'
const data = [
  {
    year:'2024',
    title:'Forex Trading',
    duration:'2 Years',
    details:'A motivated and experienced Forex Trader with 2 years of experience in the financial market. Strong background in technical analysis and specialized in developing trading strategies to maximize returns while minimizing risks. Possesses excellent problem-solving skills, a high level of attention to detail, and a passion for trading.',
},
{
  year:2020,
  title:'Client Service Manager',
  duration:'2 Years',
  details:'I worked as a liaison between the client and technical team in a marketing agency where I resolved clients queries in the best possible way while keeping in mind the budget and its brand persona with the help of the technical team.',
},
{
  year:2015,
  title:'Trainer',
  duration:'2 Years',
  details:'Worked as head of operations in various wilderness programs and conferences in which I have planned various travel plans for personal as well as logistics.',
},
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-blue'>Work</h1>
      {data.map((item,idx)=>
      (
        <WorkItem
        key={idx}
        year={item.year}
        title={item.title}
        duration={item.duration}
        details={item.details}
        />
      ))}
    </div>
  );
}

export default Work
