import React, { useState, useRef } from 'react';
import { AlertCircle, Check, Utensils, Printer } from 'lucide-react';

// Styles
import './CustomMealPlanner.css';

const CustomMealPlanner = () => {
  // State for form inputs
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [bmiCategory, setBmiCategory] = useState('');
  const [illness, setIllness] = useState('');
  const [goal, setGoal] = useState('maintain weight');
  const [dietaryPreferences, setDietaryPreferences] = useState([]);
  const [mealPlan, setMealPlan] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Ref for printable content
  const printRef = useRef(null);

  // Dietary preference options
  const dietaryOptions = [
    'Vegetarian', 
    'Vegan', 
    'Gluten-Free', 
    'Dairy-Free', 
    'Low-Carb', 
    'Keto'
  ];

  // Calculate BMI
  const calculateBMI = () => {
    if (!height || !weight) {
      setBmi('');
      setBmiCategory('');
      return;
    }

    // Convert height to meters if in cm
    const heightInMeters = height < 3 ? height : height / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters * 1/10);
    const roundedBMI = calculatedBMI.toFixed(1);
    setBmi(roundedBMI);

    // Determine BMI category
    let category = '';
    if (calculatedBMI < 18.5) {
      category = 'Underweight';
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
      category = 'Normal weight';
    } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }
    setBmiCategory(category);
  };

  // Handle dietary preference selection
  const handleDietaryPreferenceChange = (preference) => {
    setDietaryPreferences(prev => 
      prev.includes(preference)
        ? prev.filter(p => p !== preference)
        : [...prev, preference]
    );
  };

  // Submit meal plan request
  const generateMealPlan = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://webartstudios.in/api-service/ai-startup-builder/mealplanner.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bmi: parseFloat(bmi),
          illness,
          dietary_preferences: dietaryPreferences,
          goal
        })
      });

      const data = await response.json();

      if (data.success) {
        setMealPlan(data);
      } else {
        throw new Error(data.message || 'Failed to generate meal plan');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Print meal plan
  const handlePrint = () => {
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Meal Plan</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
            h1, h2, h3 { color: #2ecc71; }
            .bmi-info { background-color: #f0f0f0; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
            .meal-section { margin-bottom: 20px; }
            .meal-item { display: flex; justify-content: space-between; margin-bottom: 10px; }
            .meal-type { font-weight: bold; }
          </style>
        </head>
        <body>
          ${printRef.current.innerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  // Render meal plan details
  const renderMealPlanDetails = () => {
    if (!mealPlan) return null;

    return (
      <div className="meal-plan-details" ref={printRef}>
        <div className="bmi-info">
          <h3>BMI Information</h3>
          <p>BMI: {bmi}</p>
          <p>Category: {bmiCategory}</p>
        </div>

        <div className="health-assessment">
          <h3>Health Assessment</h3>
          <p>{mealPlan.health_assessment}</p>
        </div>

        <div className="dietary-recommendations">
          <h3>Dietary Recommendations</h3>
          <p>{mealPlan.dietary_recommendations}</p>
          <p>Daily Calorie Target: {mealPlan.daily_calorie_target}</p>
        </div>

        <div className="weekly-meal-plan">
          <h3>Weekly Meal Plan</h3>
          {Object.entries(mealPlan.weekly_meal_plan).map(([day, meals]) => (
            <div key={day} className="day-meal">
              <h4>{day}</h4>
              {Object.entries(meals).map(([mealType, description]) => (
                <div key={mealType} className="meal-item">
                  <span className="meal-type">{mealType.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                  <span className="meal-description">{description}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="grocery-list">
          <h3>Grocery List</h3>
          <ul>
            {mealPlan.grocery_list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="additional-tips">
          <h3>Additional Tips</h3>
          <ul>
            {mealPlan.additional_tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
          <p>Hydration: {mealPlan.hydration_recommendation}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="custom-meal-planner-container">
      <div className="meal-planner-header">
        <Utensils size={48} className="header-icon" />
        <h1>AI Meal Planner</h1>
      </div>

      <form onSubmit={generateMealPlan} className="meal-planner-form">
        <div className="form-group">
          <label htmlFor="height">Height (cm)</label>
          <input 
            type="number" 
            id="height" 
            value={height} 
            onChange={(e) => {
              setHeight(e.target.value);
              calculateBMI();
            }}
            step="1"
            required 
            placeholder="Enter your height in cm"
          />
        </div>

        <div className="form-group">
          <label htmlFor="weight">Weight (kg)</label>
          <input 
            type="number" 
            id="weight" 
            value={weight} 
            onChange={(e) => {
              setWeight(e.target.value);
              calculateBMI();
            }}
            step="0.1"
            required 
            placeholder="Enter your weight in kg"
          />
        </div>

        <div className="form-group">
          <label htmlFor="bmi-display">BMI</label>
          <input 
            type="text" 
            id="bmi-display" 
            value={`${bmi} (${bmiCategory})`} 
            readOnly 
            placeholder="BMI will be calculated automatically"
          />
        </div>

        <div className="form-group">
          <label htmlFor="illness">Health Condition (Optional)</label>
          <input 
            type="text" 
            id="illness" 
            value={illness} 
            onChange={(e) => setIllness(e.target.value)}
            placeholder="Any specific health conditions"
          />
        </div>

        <div className="form-group">
          <label>Dietary Preferences</label>
          <div className="dietary-options">
            {dietaryOptions.map(option => (
              <button 
                key={option} 
                type="button"
                className={`dietary-option ${dietaryPreferences.includes(option) ? 'selected' : ''}`}
                onClick={() => handleDietaryPreferenceChange(option)}
              >
                {option}
                {dietaryPreferences.includes(option) && <Check size={16} />}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="goal">Health Goal</label>
          <select 
            id="goal" 
            value={goal} 
            onChange={(e) => setGoal(e.target.value)}
          >
            <option value="maintain weight">Maintain Weight</option>
            <option value="lose weight">Lose Weight</option>
            <option value="gain weight">Gain Weight</option>
            <option value="build muscle">Build Muscle</option>
          </select>
        </div>

        <div className="form-actions">
          <button 
            type="submit" 
            className="generate-btn" 
            disabled={loading || !bmi}
          >
            {loading ? 'Generating...' : 'Generate Meal Plan'}
          </button>
          
          {mealPlan && (
            <button 
              type="button" 
              className="print-btn"
              onClick={handlePrint}
            >
              <Printer size={16} /> Print Meal Plan
            </button>
          )}
        </div>
      </form>

      {error && (
        <div className="error-message">
          <AlertCircle size={24} />
          <p>{error}</p>
        </div>
      )}

      {mealPlan && renderMealPlanDetails()}
    </div>
  );
};

export default CustomMealPlanner;