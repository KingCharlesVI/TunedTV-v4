// components/Schedule.js
import React from 'react';
import '../App.css';

function Schedule() {
  // Sample schedule data (replace with your actual data)
  const scheduleData = [
    { month: 'May', date: '01', event: '1000KM Le Mans', league: 'RFRO', description: 'The final round of the RFRO 1000km series is upon us. Join us as the RFRO grid race around the iconic Circuit De La Sarthe!', thumbnail: 'https://i.imgur.com/RCodNKv.png', time: '14:00 BST' },
    // Add more events as needed
  ];

  return (
    <div className="schedule">
      <h1>Schedule</h1>
      <div className="schedule-container">
        {scheduleData.map((item, index) => (
          <div key={index} className="schedule-item">
            <div className="date">{item.month} {item.date}</div>
            <div className="time">{item.time}</div>
            <div className="thumbnail"><img src={item.thumbnail} alt="Thumbnail" /></div>
            <div className="details">
              <div className="title">{item.event}</div>
              <div className="info">
                <div className="league">{item.league}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;