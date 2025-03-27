import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import './NutritionStatus.css';

const NutritionStatus = () => {
  const monthlyData = [
    { name: 'Week 1', calories: 18000 },
    { name: 'Week 2', calories: 19500 },
    { name: 'Week 3', calories: 21000 },
    { name: 'Week 4', calories: 17500 },
  ];

  const weeklyData = [
    { name: 'Mon', calories: 2500 },
    { name: 'Tue', calories: 2600 },
    { name: 'Wed', calories: 2400 },
    { name: 'Thu', calories: 2700 },
    { name: 'Fri', calories: 2800 },
    { name: 'Sat', calories: 3000 },
    { name: 'Sun', calories: 2200 },
  ];

  const macroData = [
    { name: 'Carbs', value: 45, color: '#FFD700' }, // Yellow
    { name: 'Protein', value: 35, color: '#32CD32' }, // Green
    { name: 'Fats', value: 20, color: '#800080' }, // Purple
  ];

  return (
    <div className="nutrition-status-container">
      <header className="summary">
        <h1>Nutrition Dashboard</h1>
        <div className="summary-card">
          <h2>Monthly Summary</h2>
          <p>Total Calories: 76,000</p>
          <p>Average Daily Calories: 2,533</p>
        </div>
      </header>

      <div className="charts">
        {/* Weekly Calorie Intake */}
        <div className="chart-section">
          <h3>Weekly Calorie Intake</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={weeklyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="calories" fill="#32CD32" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Calorie Trend */}
        <div className="chart-section">
          <h3>Monthly Calorie Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={monthlyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="calories" fill="#FFD700" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Macro Breakdown */}
        <div className="chart-section">
          <h3>Macro Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={macroData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                dataKey="value"
              >
                {macroData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <footer className="cta">
        <button className="upgrade-button">Upgrade to Premium</button>
      </footer>
    </div>
  );
};

export default NutritionStatus;