import React, { useState } from 'react';
import './Diet.css';

function Diet() {
  // إدارة الحالة
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');

  // دالة لحساب الـ BMI
  function calculateBMI(weight, height) {
    height = height / 100; // تحويل الطول من سم إلى متر
    return weight / (height * height); // معادلة BMI
  }

  // دالة لتحديد فئة BMI
  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return 'Underweight, Low calorie intake. You should follow a diet to gain weight and eat healthy meals such as vegetables and meats that contain proteins... ';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal weight, Maintain your calorie intake and exercise to build a strong body.';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight, You should follow a diet to reduce your calorie intake. Also, go to the exercises page to benefit from this.';
    } else {
      return 'Obesity, You should follow a diet to reduce your calorie intake. Also, go to the exercises page to benefit from this.';
    }
  }

  // عند إرسال النموذج
  function handleSubmit(event) {
    event.preventDefault();
    
    // حساب الـ BMI
    const bmiResult = calculateBMI(weight, height);

    // تحديث النتيجة في الصفحة
    setBmi(bmiResult.toFixed(2));
    setBmiCategory(getBMICategory(bmiResult));
  }

  return (
    <div className="bmi-calculator">
      <h3>Calculate Your Body Mass Index (BMI)</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
          min="0"
        />

        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
          min="0"
        />
        <label htmlFor="age">Age:</label>
        <input
        type="number"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
        min="1"
        />

        <label htmlFor="sex">Sex:</label>
        <select id="sex">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button type="submit">Calculate BMI</button>
      </form>

      {bmi && (
        <div id="bmi-result">
          <p>Your BMI: <span>{bmi}</span></p>
          <p id="bmi-category">{bmiCategory}</p>
        </div>
      )}
    </div>
  );
}

export default Diet;
