"use client";


import CountUp from 'react-countup';


const AnimatedCounter = ({amount}: {amount: number }) => {
  return (
    <div className='w-full'>
     <CountUp 
     decimal='.'
     prefix='KES'
     duration={4}
     decimals={3}
     end={amount}/>
    </div>
  )
}

export default AnimatedCounter
