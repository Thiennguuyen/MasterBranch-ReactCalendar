import React from 'react'

const MiniDay = ({day, monthIndex}) => {
    const isToday = day.isSame(new Date(), 'day') ? 'bg-[#5684AE] text-[#E4F6ED] rounded-full' : '';

    const isInCurrentMonth = () => {
        if (day.month() !== monthIndex) {
            return 'text-gray-300';
        }
        return '';
    }
    return (
        <div className={`flex flex-1 text-center p-2 border border-white rounded-full ${isInCurrentMonth()} ${isToday} items-center justify-center 
            hover:border-[#5684AE] cursor-pointer hover:text-[#5684AE]`}
        >
            <p className='w-full h-full'>
                {day.format('DD')}
            </p>
        </div>
    )
}

export default MiniDay