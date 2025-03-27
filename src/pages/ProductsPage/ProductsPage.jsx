import React, { useState } from 'react';
import './ProductsPage.css';

const ProductsPage = () => {
  // Categorize dishes based on the image names
  const [dishes, setDishes] = useState([
    {
      id: 1,
      name: "Baingan Bharta + Roti",
      image: "/products/Baingan Bharta + Roti.png",
      category: "Vegetarian",
      ingredients: ["Eggplant", "Tomatoes", "Onions", "Spices", "Whole Wheat Flour"],
      nutrition: { calories: 320, protein: 8, carbs: 45 },
      price: 150,
      popularity: 85
    },
    {
      id: 2,
      name: "Beetroot Tikki",
      image: "/products/Beetroot Tikki.png",
      category: "Vegetarian",
      ingredients: ["Beetroot", "Potatoes", "Bread Crumbs", "Spices"],
      nutrition: { calories: 180, protein: 4, carbs: 30 },
      price: 120,
      popularity: 75
    },
    {
      id: 3,
      name: "Chicken Curry + Rice Roti",
      image: "/products/Chicken Curry + Rice_Roti.png",
      category: "Non-Vegetarian",
      ingredients: ["Chicken", "Onions", "Tomatoes", "Spices", "Rice", "Roti"],
      nutrition: { calories: 450, protein: 28, carbs: 50 },
      price: 220,
      popularity: 95
    },
    {
      id: 4,
      name: "Chicken Stew + Appam Chapati",
      image: "/products/Chicken Stew + Appam_Chapati.png",
      category: "Non-Vegetarian",
      ingredients: ["Chicken", "Coconut Milk", "Vegetables", "Appam", "Chapati"],
      nutrition: { calories: 480, protein: 30, carbs: 55 },
      price: 240,
      popularity: 90
    },
    {
      id: 5,
      name: "Chole Chawal",
      image: "/products/Chole Chawal.png",
      category: "Vegetarian",
      ingredients: ["Chickpeas", "Rice", "Onions", "Tomatoes", "Spices"],
      nutrition: { calories: 400, protein: 15, carbs: 70 },
      price: 160,
      popularity: 88
    },
    {
      id: 6,
      name: "Dal Khichdi",
      image: "/products/Dal Khichdi.png",
      category: "Vegetarian",
      ingredients: ["Rice", "Lentils", "Ghee", "Spices"],
      nutrition: { calories: 350, protein: 12, carbs: 60 },
      price: 140,
      popularity: 82
    },
    {
      id: 7,
      name: "Egg Bhurji + Roti",
      image: "/products/Egg Bhurji + Roti.png",
      category: "Eggetarian",
      ingredients: ["Eggs", "Onions", "Tomatoes", "Spices", "Roti"],
      nutrition: { calories: 380, protein: 18, carbs: 40 },
      price: 170,
      popularity: 87
    },
    {
      id: 8,
      name: "Fish Curry + Rice",
      image: "/products/Fish Curry + Rice.png",
      category: "Non-Vegetarian",
      ingredients: ["Fish", "Coconut Milk", "Spices", "Rice"],
      nutrition: { calories: 420, protein: 25, carbs: 50 },
      price: 230,
      popularity: 89
    },
    {
      id: 9,
      name: "Idli + Sambar + Chutney",
      image: "/products/Idli + Sambar + Chutney.png",
      category: "South Indian",
      ingredients: ["Rice", "Urad Dal", "Lentils", "Vegetables", "Coconut"],
      nutrition: { calories: 300, protein: 10, carbs: 55 },
      price: 130,
      popularity: 92
    },
    {
      id: 10,
      name: "Keema Paratha + Curd",
      image: "/products/Keema Paratha + Curd.png",
      category: "Non-Vegetarian",
      ingredients: ["Minced Meat", "Whole Wheat Flour", "Spices", "Yogurt"],
      nutrition: { calories: 480, protein: 24, carbs: 48 },
      price: 210,
      popularity: 86
    },
    {
      id: 11,
      name: "Makhana Bhel",
      image: "/products/Makhana Bhel.png",
      category: "Healthy",
      ingredients: ["Fox Nuts", "Puffed Rice", "Vegetables", "Chutneys"],
      nutrition: { calories: 200, protein: 6, carbs: 30 },
      price: 110,
      popularity: 78
    },
    {
      id: 12,
      name: "Mix Veg Sabzi + Roti",
      image: "/products/Mix Veg Sabzi + Roti.png",
      category: "Vegetarian",
      ingredients: ["Mixed Vegetables", "Spices", "Whole Wheat Flour"],
      nutrition: { calories: 320, protein: 8, carbs: 45 },
      price: 150,
      popularity: 83
    },
    {
      id: 13,
      name: "Moong Dal Chilla with Curd",
      image: "/products/Moong Dal Chilla with Curd.png",
      category: "Healthy",
      ingredients: ["Moong Dal", "Vegetables", "Spices", "Yogurt"],
      nutrition: { calories: 280, protein: 14, carbs: 35 },
      price: 140,
      popularity: 84
    },
    {
      id: 14,
      name: "Oats Chilla with Mint Chutney",
      image: "/products/Oats Chilla with Mint Chutney.png",
      category: "Healthy",
      ingredients: ["Oats", "Vegetables", "Spices", "Mint", "Yogurt"],
      nutrition: { calories: 250, protein: 10, carbs: 30 },
      price: 130,
      popularity: 80
    },
    {
      id: 15,
      name: "Palak Paneer + Rice Roti",
      image: "/products/Palak Paneer + Rice_Roti.png",
      category: "Vegetarian",
      ingredients: ["Spinach", "Cottage Cheese", "Spices", "Rice", "Roti"],
      nutrition: { calories: 400, protein: 18, carbs: 45 },
      price: 190,
      popularity: 90
    },
    {
      id: 16,
      name: "Paneer Bhurji with Roti",
      image: "/products/Paneer Bhurji with Roti.png",
      category: "Vegetarian",
      ingredients: ["Cottage Cheese", "Onions", "Tomatoes", "Spices", "Roti"],
      nutrition: { calories: 420, protein: 20, carbs: 40 },
      price: 200,
      popularity: 91
    },
    {
      id: 17,
      name: "Poha with Peanuts",
      image: "/products/Poha with Peanuts.png",
      category: "Breakfast",
      ingredients: ["Flattened Rice", "Peanuts", "Onions", "Spices"],
      nutrition: { calories: 300, protein: 8, carbs: 50 },
      price: 100,
      popularity: 87
    },
    {
      id: 18,
      name: "Ragi Dosa with Coconut Chutney",
      image: "/products/Ragi Dosa with Coconut Chutney.png",
      category: "South Indian",
      ingredients: ["Finger Millet", "Rice", "Coconut", "Spices"],
      nutrition: { calories: 320, protein: 10, carbs: 55 },
      price: 140,
      popularity: 83
    },
    {
      id: 19,
      name: "Rajma Chawal",
      image: "/products/Rajma Chawal.png",
      category: "Vegetarian",
      ingredients: ["Kidney Beans", "Rice", "Onions", "Tomatoes", "Spices"],
      nutrition: { calories: 410, protein: 15, carbs: 70 },
      price: 160,
      popularity: 94
    },
    {
      id: 20,
      name: "Roasted Chana & Jaggery Combo",
      image: "/products/Roasted Chana & Jaggery Combo.png",
      category: "Healthy",
      ingredients: ["Roasted Chickpeas", "Jaggery"],
      nutrition: { calories: 250, protein: 10, carbs: 40 },
      price: 90,
      popularity: 75
    },
    {
      id: 21,
      name: "Sambar + Rice",
      image: "/products/Sambar + Rice.png",
      category: "South Indian",
      ingredients: ["Lentils", "Vegetables", "Tamarind", "Spices", "Rice"],
      nutrition: { calories: 350, protein: 12, carbs: 65 },
      price: 150,
      popularity: 85
    },
    {
      id: 22,
      name: "Sprout Chaat",
      image: "/products/Sprout Chaat.png",
      category: "Healthy",
      ingredients: ["Mixed Sprouts", "Onions", "Tomatoes", "Chutneys", "Spices"],
      nutrition: { calories: 220, protein: 12, carbs: 30 },
      price: 120,
      popularity: 82
    },
    {
      id: 23,
      name: "Stuffed Paratha (Aloo Gobi Methi) + Curd",
      image: "/products/Stuffed Paratha (Aloo_Gobi_Methi) + Curd.png",
      category: "Vegetarian",
      ingredients: ["Whole Wheat Flour", "Potatoes", "Cauliflower", "Fenugreek", "Yogurt"],
      nutrition: { calories: 400, protein: 10, carbs: 60 },
      price: 170,
      popularity: 88
    },
    {
      id: 24,
      name: "Upma with Vegetables",
      image: "/products/Upma with Vegetables.png",
      category: "Breakfast",
      ingredients: ["Semolina", "Vegetables", "Spices"],
      nutrition: { calories: 280, protein: 8, carbs: 45 },
      price: 110,
      popularity: 84
    },
    {
      id: 25,
      name: "Vegetable Pulao + Raita",
      image: "/products/Vegetable Pulao + Raita.png",
      category: "Vegetarian",
      ingredients: ["Rice", "Mixed Vegetables", "Spices", "Yogurt"],
      nutrition: { calories: 380, protein: 10, carbs: 65 },
      price: 180,
      popularity: 86
    },
  ]);

  // Define all available categories based on the dishes
  const categories = [
    "All",
    "Vegetarian",
    "Non-Vegetarian",
    "Eggetarian",
    "South Indian",
    "Healthy",
    "Breakfast"
  ];

  const [filteredDishes, setFilteredDishes] = useState(dishes);
  const [sortBy, setSortBy] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleFilterChange = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredDishes(dishes);
    } else {
      setFilteredDishes(dishes.filter(dish => dish.category === category));
    }
  };

  const handleSortChange = (sortOption) => {
    let sortedDishes = [...filteredDishes];
    switch (sortOption) {
      case 'price':
        sortedDishes.sort((a, b) => a.price - b.price);
        break;
      case 'popularity':
        sortedDishes.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'calories':
        sortedDishes.sort((a, b) => a.nutrition.calories - b.nutrition.calories);
        break;
      default:
        break;
    }
    setFilteredDishes(sortedDishes);
    setSortBy(sortOption);
  };

  return (
    <div className="products-page-container">
      <aside className="sidebar">
        <h2>Filters</h2>
        <div className="filter-group">
          <h3>Category</h3>
          <div className="category-buttons">
            {categories.map((category) => (
              <button 
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <h2>Sort By</h2>
        <select onChange={(e) => handleSortChange(e.target.value)} value={sortBy || ""}>
          <option value="">Select</option>
          <option value="price">Price (Low to High)</option>
          <option value="popularity">Popularity</option>
          <option value="calories">Calories (Low to High)</option>
        </select>
      </aside>
      <main className="product-grid">
        {filteredDishes.map((dish) => (
          <div key={dish.id} className="product-card">
            <div className="product-image">
              <img src={dish.image} alt={dish.name} />
              <span className="category-tag">{dish.category}</span>
            </div>
            <h3>{dish.name}</h3>
            <div className="price">₹{dish.price}</div>
            <div className="nutrition">
              <span className="nutrition-item">
                <i className="fas fa-fire"></i> {dish.nutrition.calories} Cal
              </span>
              <span className="nutrition-item">
                <i className="fas fa-dumbbell"></i> {dish.nutrition.protein}g Pro
              </span>
              <span className="nutrition-item">
                <i className="fas fa-bread-slice"></i> {dish.nutrition.carbs}g Carb
              </span>
            </div>
            <div className="ingredients">
              <h4>Ingredients:</h4>
              <ul>
                {dish.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ProductsPage;