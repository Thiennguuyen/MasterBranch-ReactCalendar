import React, { useContext } from 'react';
import Day from './Day';
import dayjs from 'dayjs';
import GlobalContext from '../context/GlobalContext';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Month = ({month}) => {
    const {monthIndex, setMonthIndex} = useContext(GlobalContext);
    const handlePrevMonth = () => {
        setMonthIndex(monthIndex - 1);
    }
    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1);
    }

    const handleToday = () => {
        setMonthIndex(dayjs().month());
    }
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
        <>
            <div className='flex flex-1 flex-col bg-white text-stone-950 max-h-[650px]'>
                <div className="flex flex-row" style={{justifyContent:"space-between"}}>
                    <div className='m-3 py-2 h-10 px-4 text-sm rounded-xl border border-[#0F4C81] text-[#0F4C81] cursor-pointer hover:bg-[#5684AE] hover:text-[#E4F6ED] hover:border-[#5684AE]'
                        onClick={handleToday}
                    >
                        <p>Today</p>
                    </div>
                    <button className='border border-white hover:border-[#5684AE] h-[40px] my-4' onClick={handlePrevMonth}>
                        <IoIosArrowBack className='text-2xl text-[#5684AE] mx-2' />
                    </button>
                    <button className='border border-white hover:border-[#5684AE] h-[40px] my-4' onClick={handleNextMonth}>
                        <IoIosArrowForward className='text-2xl text-[#5684AE] mx-2' />
                    </button>
                    <h2 className='m-3 py-2 px-4 text-[#0F4C81] text-2xl font-bold'>
                        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
                    </h2>
                    <div className='flex-1 grid grid-col-5 justify-end'>
                        <div className='select-btn'>
                            <IoIosArrowDown className='text-[#E4F6ED] absolute right-5 top-8' />
                            <select className='text-sm mx-3 my-5 py-2 pl-4 pr-7 rounded-lg bg-[#5684AE] text-[#E4F6ED]' defaultValue={"month"}>
                                
                                <option value="month">Month</option>
                                <option value="year">Year</option>
                                <option value="decade">Decade</option>
                            </select>
                        </div>                       
                    </div>                                
                </div>
                  
                <div className='flex flex-row'>
                    {week.map((day, i) => (
                        <div key={i} className='flex-1 text-center p-2 text-gray-400 font-medium text-lg'>
                            {day}
                        </div>
                    ))}
                </div>
                <div className='flex-1 grid grid-cols-7 grid-rows-5'>               
                    {month.map((row, i) => {
                        return <React.Fragment key={i}>
                            {row.map((day, j) => {
                                return <Day day={day} key={j} monthIndex={monthIndex} />
                            })}
                        </React.Fragment>
                    })}
                </div>                           
            </div>
            
        </>
    )
};

export default Month;