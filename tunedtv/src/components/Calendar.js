// components/Calendar.js
import React from 'react';
import '/App.css';

function Calendar() {
  // Sample events data (replace with your actual data)
  const events = [
    { title: 'Event 1', date: '2024-05-01' },
    { title: 'Event 2', date: '2024-06-15' },
    // Add more events as needed
  ];

  return (
    <div className="calendar">
      <h1>Calendar</h1>
      <div className="calendar-grid">
        {events.map((event, index) => (
          <div key={index} className="event">
            <div className="event-info">
              <p className="event-title">{event.title}</p>
              <p className="event-date">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;