import React, { useState } from 'react';
import './DailyDishPlanner.css';

const DailyDishPlanner = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [healthGoal, setHealthGoal] = useState('');
  const [dietaryPreference, setDietaryPreference] = useState('');
  const [dailyPlan, setDailyPlan] = useState(generateEmptyPlan());

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const bmi = (weight / (height * height)) * 703; // Conversion for pounds and inches
      console.log('BMI:', bmi); // Placeholder for further logic
    } else {
      alert('Please enter both weight and height');
    }
  };

  const generateMealPlan = () => {
    const newPlan = [...Array(7)].map((_, i) => ({
      day: `Day ${i + 1}`,
      dishes: generateSampleDishes(),
    }));
    setDailyPlan(newPlan);
  };

  const generateSampleDishes = () => {
    const dishes = [
      'Chicken Salad',
      'Salmon with Quinoa',
      'Lentil Soup',
      'Vegetable Stir-fry',
      'Turkey Breast Sandwich',
      'Greek Salad',
      'Pasta with Marinara Sauce',
    ];
    return dishes.slice(0, Math.floor(Math.random() * 4) + 1); // Random 1-4 dishes
  };

  const generateEmptyPlan = () => {
    return [...Array(7)].map((_, i) => ({
      day: `Day ${i + 1}`,
      dishes: [],
    }));
  };

  return (
    <div className="daily-dish-planner">
      <div className="header">
        <h1>Daily Dish Planner</h1>
      </div>
      <div className="input-section">
        <h2>Input Your Details</h2>
        <div className="input-group">
          <label htmlFor="weight">Weight (lbs):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label htmlFor="height">Height (in):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label htmlFor="healthGoal">Health Goal:</label>
          <select id="healthGoal" value={healthGoal} onChange={(e) => setHealthGoal(e.target.value)}>
            <option value="">Select a goal</option>
            <option value="weightLoss">Weight Loss</option>
            <option value="weightGain">Weight Gain</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="dietaryPreference">Dietary Preference:</label>
          <select
            id="dietaryPreference"
            value={dietaryPreference}
            onChange={(e) => setDietaryPreference(e.target.value)}
          >
            <option value="">Select a preference</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="glutenFree">Gluten-Free</option>
            <option value="none">None</option>
          </select>
        </div>
        <button onClick={calculateBMI}>Calculate BMI</button>
        <button onClick={generateMealPlan}>Generate Plan</button>
      </div>

      <div className="suggested-plan">
        <h2>Your Suggested Meal Plan</h2>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Dishes</th>
            </tr>
          </thead>
          <tbody>
            {dailyPlan.map((dayPlan) => (
              <tr key={dayPlan.day}>
                <td>{dayPlan.day}</td>
                <td>
                  <ul>
                    {dayPlan.dishes.map((dish) => (
                      <li key={dish}>{dish}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="buttons">
        <button>Download PDF</button>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default DailyDishPlanner;
