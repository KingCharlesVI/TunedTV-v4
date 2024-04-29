// components/LiveStream.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../App.css';

function LiveStream() {
  // Sample past broadcasts data (replace with your actual data)
  const pastBroadcasts = [
    { id: 1, title: 'Past Broadcast 1', year: 2023, league: 'League A', carType: 'Car A' },
    { id: 2, title: 'Past Broadcast 2', year: 2023, league: 'League B', carType: 'Car B' },
    // Add more past broadcasts
  ];

  // Filter state
  const [filter, setFilter] = useState({ year: '', league: '', carType: '' });

  return (
    <div className="live-stream">
      <h1>Live Stream</h1>
      <div className="live-player">
        {/* Insert Twitch Embed Player here */}
        {/* Example: <iframe src="https://player.twitch.tv/?channel=apexracingtv&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe> */}
      </div>
      <Routes>
        <Route path="/" element={<PastBroadcasts pastBroadcasts={pastBroadcasts} filter={filter} setFilter={setFilter} />} />
      </Routes>
    </div>
  );
}

function PastBroadcasts({ pastBroadcasts, filter, setFilter }) {
  return (
    <div className="past-broadcasts">
      <h2>Past Broadcasts</h2>
      {/* Filter options */}
      <div className="filter-options">
        <select value={filter.year} onChange={(e) => setFilter({ ...filter, year: e.target.value })}>
          <option value="">All Years</option>
          {/* Populate years dynamically */}
        </select>
        <select value={filter.league} onChange={(e) => setFilter({ ...filter, league: e.target.value })}>
          <option value="">All Leagues</option>
          {/* Populate leagues dynamically */}
        </select>
        <select value={filter.carType} onChange={(e) => setFilter({ ...filter, carType: e.target.value })}>
          <option value="">All Car Types</option>
          {/* Populate car types dynamically */}
        </select>
      </div>
      {/* Grid of past broadcasts */}
      <div className="past-broadcasts-grid">
        {pastBroadcasts.map((broadcast) => (
          <div key={broadcast.id} className="broadcast-card">
            <h3>{broadcast.title}</h3>
            <p>{broadcast.year} | {broadcast.league} | {broadcast.carType}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveStream;