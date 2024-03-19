import dayjs from 'dayjs';
import React from 'react'

const Day = ({ day, rowIdx, monthIndex }) => {
    const isToday = day.isSame(new Date(), 'day') ? 'bg-[#0F4C81] text-[#E4F6ED] rounded-full w-7' : '';
    const ListEvent = [
        {
            title: 'First Session with Alex Stan',
            time: '9:00 - 11:00',
            location: 'Online',
            type: 'meeting',
            date: '2024-03-20'
        },
        {
            title: 'First Session with Alex Stan',
            time: '9:00 - 11:00',
            location: 'Online',
            type: 'meeting',
            date: '2024-03-18'
        },
        {
            title: 'First Session with Alex Stan',
            time: '9:00 - 11:00',
            location: 'Online',
            type: 'meeting',
            date: '2024-03-18'
        },
        {
            title: 'First Session with Alex Stan',
            time: '10:00 - 11:00',
            location: 'Online',
            type: 'meeting-1',
            date: '2024-03-20'
        },
        {
            title: 'Webinar: How to cope with trauma in professional life',
            time: '9:00 - 11:00',
            location: 'Online',
            type: 'webinar',
            date: '2024-03-20'
        },
        {
            title: 'Webinar: How to cope with trauma in professional life',
            time: '9:00 - 11:00',
            location: 'Online',
            type: 'webinar',
            date: '2024-03-14'
        }
    ]

    const changeBgColorByType = (type) => {
        switch (type) {
            case 'meeting':
                return 'bg-[#FFE4C8]';
            case 'webinar':
                return 'bg-[#F9BE81]';
            case 'meeting-1':
                return 'bg-[#0F4C81]';
            default:
                return 'bg-[#FFE4C8]';
        }
    }

    const changeTextColorByType = (type) => {
        switch (type) {
            case 'meeting':
                return 'text-[#0F4C81]';
            case 'webinar':
                return 'text-[#0F4C81]';
            case 'meeting-1':
                return 'text-[#E4F6ED]';
            default:
                return 'text-[#0F4C81]';
        }
    }

    const changeBeforeColorByType = (type) => {
        switch (type) {
            case 'meeting':
                return 'event';
            case 'webinar':
                return 'event-1';
            case 'meeting-1':
                return 'event-2';
            default:
                return 'event';
        }
    }

    const changeParentBgColor = () => {
        for (let i = 0; i < ListEvent.length; i++) {
            if (dayjs(ListEvent[i].date).isSame(day, 'day')) {
                return 'bg-[#b8f1de]';
            }
        }
    }

    let newListOfEvent = [];
    let completeListOfEvent = [];
    for (let i = 0; i < ListEvent.length; i++) {
        if (dayjs(ListEvent[i].date).isSame(day, 'day')) {
            newListOfEvent.push(ListEvent[i]);
            if (completeListOfEvent.length < 2) {
                completeListOfEvent.push(ListEvent[i]);
            }
        }      
    }

    const isInCurrentMonth = () => {
        if (day.month() !== monthIndex) {
            return 'text-gray-300';
        }
    }
    return (
        <div className={`border border-gray-300 flex flex-col hover:bg-[#b8f1de] ${isInCurrentMonth()} cursor-pointer ${changeParentBgColor()}`}>
            <header className='flex flex-col item-center'>
                <div className="flex flex-col">
                    <div className='flex items-center justify-center mt-px'>
                        <p className={`text-sm p-1 my-px ${isToday}`}>
                            {day.format('DD')}
                        </p>
                    </div>
                    
                    {
                        completeListOfEvent.map((event, index) => {
                            return <div key={index} className={`${changeBgColorByType(event.type)}  my-px rounded-md w-full ${changeBeforeColorByType(event.type)}`}>
                                <p className={`text-xs text-left ml-[3%] p-1 ${changeTextColorByType(event.type)} truncate`}>{event.title}</p>
                            </div>
                        })
                    }
                    {
                        newListOfEvent.length > 2 && (
                            <div className='my-px'>
                                <p className='text-xs text-left text-[#0F4C81] hover:underline ml-1'>{newListOfEvent.length - 2} more</p>
                            </div>
                        )
                    }
                </div>               
            </header>
        </div>
    )
}

export default Day;