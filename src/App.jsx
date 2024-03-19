import { useState, useContext, useEffect } from 'react';
import { getMonth } from './util';
import Month from './component/Month';
import Sidebar from './component/Sidebar';
import React from 'react';
import GlobalContext from './context/GlobalContext';
import dayjs from 'dayjs';
import './App.css';

function App() {
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const {monthIndex} = useContext(GlobalContext); 
    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }
    , [monthIndex]);
    return (
        <>
            <React.Fragment>
                <div className="h-screen flex flex-cols space-x-5">
                    <Sidebar month={currentMonth} />
                    <div className="flex flex-1">
                        <Month month={currentMonth}/>                                             
                    </div>
                </div>
            </React.Fragment>
        </>
    );
}

export default App;
