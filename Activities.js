import React, { useState } from 'react';
import './Activities.css';

function Activities() {
  const [goal, setGoal] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [timeAvailable, setTimeAvailable] = useState('');
  const [exercises, setExercises] = useState([]);

  // تحميل الصور هنا (يجب أن تكون موجودة في مجلد images داخل public)
  const exerciseImages = {
    Running: '/images/جري.png',
    HIIT: '/images/HIIT.png',
    Cycling: '/images/ركوب.png',
    Zumba: '/images/زومبا.png',
    Swimming: '/images/سباحة.png',
    Rowing: '/images/تجديف.png',
    "Weight Lifting": '/images/weight.png',
    "Bodyweight Exercises": '/images/weight.png',
    "Martial Arts": '/images/جري.png',
    Boxing: '/images/boxing.png',
    "Resistance Training": '/images/weight.png',
    Yoga: '/images/yoga.png',
    Meditation: '/images/meditation.png',
    Pilates: '/images/pilates.png',
    "Tai Chi": 'images/pilates.png',
    Walking: '/images/walking.jpg',
  };

  const getRecommendations = () => {
    let recommendedExercises = [];

    // Define recommendations based on the goal
    if (goal === "weightLoss") {
      recommendedExercises = ["Running", "HIIT", "Cycling", "Zumba", "Swimming", "Rowing"];
    } else if (goal === "muscleGain") {
      recommendedExercises = ["Weight Lifting", "Bodyweight Exercises", "Martial Arts", "Boxing", "Resistance Training"];
    } else if (goal === "mentalHealth") {
      recommendedExercises = ["Yoga", "Meditation", "Pilates", "Tai Chi", "Walking"];
    } else if (goal === "generalFitness") {
      recommendedExercises = ["Running", "Rowing", "Cycling", "Aerobics", "Swimming"];
    } else if (goal === "increaseEnergy") {
      recommendedExercises = ["Brisk Walking", "Jump Rope", "Dancing", "Cycling", "Running"];
    }

    // Tailor recommendations based on fitness level
    if (fitnessLevel === "beginner") {
      recommendedExercises = recommendedExercises.map(exercise => exercise + " (Beginner Friendly)");
    } else if (fitnessLevel === "intermediate") {
      recommendedExercises = recommendedExercises.map(exercise => exercise + " (Intermediate Level)");
    } else if (fitnessLevel === "advanced") {
      recommendedExercises = recommendedExercises.map(exercise => exercise + " (Advanced Level)");
    }

    // Adjust recommendations based on time available
    recommendedExercises = recommendedExercises.filter(exercise => {
      if (timeAvailable === "15" && exercise !== "Long-Distance Running" && exercise !== "Swimming") {
        return true;
      } else if (timeAvailable === "30" && exercise !== "Long-Distance Running") {
        return true;
      } else if (timeAvailable === "60") {
        return true;
      }
      return false;
    });

    setExercises(recommendedExercises);
  };

  return (
    <div className="containers">
      <h1>Personalized Fitness Recommendations</h1>

      <label htmlFor="goal">Select Your Fitness Goal:</label>
      <select id="goal" value={goal} onChange={(e) => setGoal(e.target.value)}>
        <option value="weightLoss">Lose Weight</option>
        <option value="muscleGain">Build Muscle</option>
        <option value="mentalHealth">Improve Mental Health</option>
        <option value="generalFitness">General Fitness</option>
        <option value="increaseEnergy">Increase Energy</option>
      </select>

      <label htmlFor="fitnessLevel">Select Your Fitness Level:</label>
      <select id="fitnessLevel" value={fitnessLevel} onChange={(e) => setFitnessLevel(e.target.value)}>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>

      <label htmlFor="timeAvailable">How much time do you have for your workout?</label>
      <select id="timeAvailable" value={timeAvailable} onChange={(e) => setTimeAvailable(e.target.value)}>
        <option value="15">15 minutes</option>
        <option value="30">30 minutes</option>
        <option value="60">60 minutes</option>
      </select>

      <button onClick={getRecommendations}>Get Recommendations</button>

      {exercises.length > 0 && (
        <div id="recommendations" className="result">
          <h3>Recommended Exercises:</h3>
          <ul id="exerciseList">
            {exercises.map((exercise, index) => (
              <li key={index}>
                <img 
                  src={exerciseImages[exercise.split(' ')[0]]} 
                  alt={exercise} 
                  className="exercise-image" 
                />
                {exercise}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Activities;
