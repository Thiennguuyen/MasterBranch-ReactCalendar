import React, {useContext} from 'react'
import dayjs from 'dayjs';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import GlobalContext from '../context/GlobalContext';
import MiniDay from './MiniDay';

const Sidebar = ({month}) => {
    const {monthIndex, setMonthIndex} = useContext(GlobalContext);
    const handlePrevMonth = () => {
        setMonthIndex(monthIndex - 1);
    }
    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1);
    }
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
        <div className='flex flex-2 flex-col w-1/4 bg-white text-stone-950'>
            <div className='flex flex-row items-center justify-center'>
                <button className='border border-white hover:border-[#5684AE] h-[40px] my-4' onClick={handlePrevMonth}>
                    <IoIosArrowBack className='text-xl text-[#5684AE] mx-2' />
                </button>
                <h2 className='m-3 py-2 px-4 text-[#0F4C81] text-lg font-bold'>
                    {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
                </h2>
                <button className='border border-white hover:border-[#5684AE] h-[40px] my-4' onClick={handleNextMonth}>
                    <IoIosArrowForward className='text-xl text-[#5684AE] mx-2' />
                </button>
            </div> 
            <div className='flex items-center justify-center'>
                <div className='flex flex-row text-xs w-4/5 flex-wrap'>
                    {week.map((day, i) => (
                        <div key={i} className='flex-1 text-center p-1 text-gray-400'>
                            {day.toUpperCase()}
                        </div>
                    ))}
                </div> 
            </div>           
                {month.map((row, i) => {                       
                    return <div className='flex items-center justify-center' key={i}>
                        <div className='flex flex-row text-xs w-4/5 flex-wrap'>
                            {
                                row.map((day, j) => {
                                    return <MiniDay day={day} key={j} monthIndex={monthIndex} />
                                })
                            }
                        </div>
                    </div>
                })}
            <div className='mt-3 border-t-2'>

            </div>
            <div className='flex flex-row mb-[-15px]' style={{justifyContent:"space-between"}}>
                <h2 className='my-3 mx-2 py-2 px-3 text-[#0F4C81] text-lg font-bold'>
                    Upcoming Events
                </h2>
                <button className='text-xs mx-3 my-5 px-3 rounded-2xl bg-[#0F4C81] h-7 text-[#E4F6ED]'> 
                    View All
                </button>
            </div>
            <div className='text-sm font-semibold text-gray-500 text-left mx-5'>
                Today, {dayjs().format('DD MMMM')}
            </div>
            <div className='flex flex-row bg-[#FFE4C8] mx-4 mt-4 mb-1 rounded-md event' style={{justifyContent: "space-between"}}>
                <div className='flex flex-col w-3/4'>
                    <p className='text-sm ml-[7%] mt-3 text-[#0F4C81] font-semibold text-left'>First Session with Alex Stan</p>
                    <p className='text-xs ml-[7%] my-1 text-[#5684AE] font-normal text-left'>9:00 AM - 10:00 AM GMT+8</p>
                    <div className='flex flex-row ml-[7%] mt-1 mb-3'>
                        <img src="https://cdn.shopify.com/s/files/1/0601/5415/1102/files/sharp-700x700.jpg" className='w-6 h-6 rounded-full' />
                        <a href="#" className='text-xs text-[#5684AE] font-normal text-left underline mx-3 mt-1 mb-2'>View Client Profile</a>
                    </div>
                </div>
                <div className='flex items-center justify-center h-10 w-10 rounded-full bg-[#0F4C81] mx-3 my-3 cursor-pointer'>
                    <HiOutlineVideoCamera className='text-[#E4F6ED] mx-2 my-2 text-lg' />
                </div>
            </div>
            <div className='flex flex-row bg-[#F9BE81] mx-4 my-1 rounded-md event-1' style={{justifyContent: "space-between"}}>
                <div className='flex flex-col w-3/4'>
                    <p className='text-sm ml-[7%] mt-3 text-[#0F4C81] font-semibold text-left'>Wenbinar: How to cope with trauma in professional life</p>
                    <p className='text-xs ml-[7%] mt-1 mb-3 text-[#5684AE] font-normal text-left'>9:00 AM - 10:00 AM GMT+8</p>
                </div>
            </div>
            <div className='flex flex-row bg-[#5684AE] mx-4 my-1 rounded-md event-2' style={{justifyContent: "space-between"}}>
                <div className='flex flex-col w-3/4'>
                    <p className='text-sm ml-[7%] mt-3 text-[#E4F6ED] font-semibold text-left'>First Session with Alex Stan</p>
                    <p className='text-xs ml-[7%] my-1 text-[#E4F6ED] font-normal text-left'>9:00 AM - 10:00 AM GMT+8</p>
                    <div className='flex flex-row ml-[7%] mt-1 mb-3'>
                        <img src="https://cdn.shopify.com/s/files/1/0601/5415/1102/files/sharp-700x700.jpg" className='w-6 h-6 rounded-full' />
                        <a href="#" className='text-xs text-[#E4F6ED] font-normal text-left underline mx-3 mt-1 mb-2'>View Client Profile</a>
                    </div>
                </div>
                <div className='flex items-center justify-center h-10 w-10 rounded-full bg-[#E4F6ED] mx-3 my-3 cursor-pointer'>
                    <HiOutlineVideoCamera className='text-[#0F4C81] mx-2 my-2 text-lg' />
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar