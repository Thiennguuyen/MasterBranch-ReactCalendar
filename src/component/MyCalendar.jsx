import React, { useState } from 'react';
import '../css/Calendar.css'

const MyCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    const getDaysInMonth = (year, month) => {
      return new Date(year, month + 1, 0).getDate();
    };
  
    const getFirstDayOfMonth = (year, month) => {
      return new Date(year, month, 1).getDay();
    };
  
    const handleDateClick = (day) => {
      setSelectedDate(day);
      // You can perform any action on date selection here
    };
  
    const renderCalendar = () => {
      const year = selectedDate.getFullYear();
      const month = selectedDate.getMonth();
  
      const totalDays = getDaysInMonth(year, month);
      const firstDay = getFirstDayOfMonth(year, month);
  
      const blanks = [];
      for (let i = 0; i < firstDay; i++) {
        blanks.push(<div key={`blank-${i}`} className="calendar-day empty"></div>);
      }
  
      const days = [];
      for (let d = 1; d <= totalDays; d++) {
        const date = new Date(year, month, d);
        days.push(
          <div
            key={d}
            className={`calendar-day${date.toDateString() === selectedDate.toDateString() ? ' selected' : ''}`}
            onClick={() => handleDateClick(date)}
          >
            {d}
          </div>
        );
      }
  
      return [...blanks, ...days];
    };
  
    return (
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, selectedDate.getDate()))}>Previous</button>
          <span>{selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
          <button onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, selectedDate.getDate()))}>Next</button>
        </div>
        <div className="calendar-body">
          <div className="calendar-days">
            {daysOfWeek.map(day => (
              <div key={day} className="calendar-day header">{day}</div>
            ))}
          </div>
          <div className="calendar-grid">
            {renderCalendar()}
          </div>
        </div>
      </div>
    );
  };
  
  export default MyCalendar;