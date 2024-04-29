// components/Calendar.js
import React from 'react';
import './Calendar.css';

function Calendar() {
  // Sample events data (replace with your actual data)
  const events = [
    { event: 'Event 1', date: '2024-05-01', time: '12:00 PM GMT' },
    { event: 'Event 2', date: '2024-06-15', time: '3:00 PM GMT' },
    // Add more events as needed
  ];

  return (
    <div className="calendar">
      <h1>Calendar</h1>
      <div className="schedule-table">
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Date</th>
              <th>Time (GMT)</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index}>
                <td>{event.event}</td>
                <td>{event.date}</td>
                <td>{event.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calendar;