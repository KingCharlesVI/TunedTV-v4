// components/News.js
import React from 'react';
import './App.css';

function News() {
  // Hardcoded news articles (replace with your actual content)
  const articles = [
    {
      title: "Exciting Announcement: New Sim Racing Series Coming Soon!",
      date: "April 25, 2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan tempor dui, eget vulputate enim rhoncus et. Nullam sodales, mauris vel efficitur gravida, leo leo vehicula libero, nec tempus ex felis vel dui."
    },
    {
      title: "TunedTV Partners with Leading Sim Racing Teams",
      date: "April 20, 2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan tempor dui, eget vulputate enim rhoncus et. Nullam sodales, mauris vel efficitur gravida, leo leo vehicula libero, nec tempus ex felis vel dui."
    },
    // Add more articles as needed
  ];

  return (
    <div className="news">
      <h1>News</h1>
      {articles.map((article, index) => (
        <div key={index} className="article">
          <h2>{article.title}</h2>
          <p className="date">{article.date}</p>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default News;
