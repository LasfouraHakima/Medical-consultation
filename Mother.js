import React, { useState } from 'react';
import headersimg from './mother2.jpg';
import './Mother.css';

function PregnancyCalendar() {
  return (
    <div>
      <h2 className="section-title">📅 Pregnancy Calendar</h2>
      <p className="paragraph">
        Pregnancy lasts around 40 weeks. Here's a quick overview of the main phases:
      </p>
      <ul className="list">
        <li>🍼 First Trimester (1–12): Organs and body systems start forming.</li>
        <li>🧠 Second Trimester (13–26): Baby begins to move and brain develops.</li>
        <li>👶 Third Trimester (27–40): Rapid growth and preparation for birth.</li>
      </ul>
    </div>
  );
}

function WeeklyRecommendations({ week }) {
  const recommendations = {
    20: 'Make sure to get enough rest and start preparing baby essentials.',
    21: 'Practice breathing exercises and check baby’s growth via ultrasound.',
    22: 'Stay hydrated and maintain a healthy sleep routine.',
    23: 'Consider discussing your birth plan with your doctor.',
  };

  return (
    <div>
      <h2 className="section-title">📖 Week {week} Recommendations</h2>
      <p className="paragraph">
        {recommendations[week] || 'No specific recommendation for this week.'}
      </p>
    </div>
  );
}

function NutritionTips() {
  return (
    <div>
      <h2 className="section-title">🥗 Nutrition Tips</h2>
      <ul className="list">
        <li>🍎 Eat plenty of fruits and vegetables rich in vitamins.</li>
        <li>🥛 Include calcium from milk or alternatives in your diet.</li>
        <li>🐟 Choose safe sources of Omega-3 like well-cooked fish.</li>
        <li>🚫 Avoid raw or unpasteurized foods.</li>
      </ul>
    </div>
  );
}

function Mother() {
  const [started, setStarted] = useState(false);
  const currentWeek = 20;

  return (
    <div className="app">
      {!started ? (
        <>
          <h1 className="main-title">Welcome to the Pregnancy & Motherhood Guide 🤱</h1>
          <p className="paragraph">
            This app includes a pregnancy calendar, weekly recommendations, and nutrition tips to support you during this beautiful journey.
          </p>
          <button className="start-button" onClick={() => setStarted(true)}>
            Start Now
          </button>
        </>
      ) : (
        <>
          <h1 className="main-title">Pregnancy & Motherhood Guide 🤰</h1>
          <PregnancyCalendar />
          <WeeklyRecommendations week={currentWeek} />
          <NutritionTips />
          <img src={headersimg}/> 
        </>
      )}
 

    </div>
  );
}


export default Mother;
