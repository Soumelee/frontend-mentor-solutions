import { useState } from 'react'
import Profile from './Profile'
import Card from "./Card"
import data from '../data.json'

const Dashboard = () => {
    const [selectedOption, setSelectedOption] = useState('daily');
    const handleOptionClick = (option) => {
        setSelectedOption(option)
    }
    
    return (
        <div className="flex gap-4 flex-col lg:flex-row">
            <div className='w-full lg:w-60 h-full'>
                <Profile />
                <div className='flex-row justify-between bg-Dark-blue flex lg:flex-col p-8 gap-2 rounded-xl -mt-4 pt-12'>
                    <button className={`w-fit hover:text-white ${selectedOption === 'daily' ? '' : 'text-Pale-Blue'}`}
                        onClick={() => handleOptionClick('daily')}>Daily</button>
                    <button className={`w-fit hover:text-white ${selectedOption === 'weekly' ? '' : 'text-Pale-Blue'}`}
                        onClick={() => handleOptionClick('weekly')}>Weekly</button>
                    <button className={`w-fit hover:text-white ${selectedOption === 'monthly' ? '' : 'text-Pale-Blue'}`}
                        onClick={() => handleOptionClick('monthly')}>Monthly</button>
                </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {data.map((item, index) => (
                    <Card key={index}
                        title={item.title}
                        type={selectedOption === 'daily'?'daily':selectedOption==='weekly'?'weekly':'monthly'}
                        current={selectedOption === 'daily'?item.timeframes.daily.current: selectedOption=='weekly'?item.timeframes.weekly.current:item.timeframes.monthly.current}
                        previous={selectedOption === 'daily'?item.timeframes.daily.previous: selectedOption=='weekly'?item.timeframes.weekly.previous:item.timeframes.monthly.previous}
                        img={`/images/icon-${item.title.toLowerCase()}.svg`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Dashboard