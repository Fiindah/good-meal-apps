import { useEffect, useState } from 'react';
import { fetchFoodData } from './api/hello';

const Home = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getFoodData = async () => {
      const data = await fetchFoodData();
      setFoods(data);
    };
    getFoodData();
  }, []);

  return (
    <div className="container">
      <h1>Daftar Resep Makanan</h1>
      <div className="food-list">
        {foods.map(food => (
          <div key={food.idMeal} className="food-item">
            <h2>{food.strMeal}</h2>
            <img src={food.strMealThumb} alt={food.strMeal} />
            <p>{food.strInstructions.substring(0, 150)}...</p>
            <button>Selengkapnya</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
