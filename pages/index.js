import { useEffect, useState } from 'react';
import { fetchFoodData } from './api/hello';
import Header from './components/Header';
import Hero from './components/Hero';
import styles from '../styles/Home.module.css'
import Footer from './components/Footer';

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
    <div>
      <Header />
      <Hero />
      <div id='main' className={styles.mainContent}>
      <h2 className={styles.mainTitle}>Food Recipes</h2>
      <div className={styles.foodList}>
        {foods.map(food => (
          <div key={food.idMeal} className={styles.foodItem}>
            <img src={food.strMealThumb} alt={food.strMeal} className={styles.foodImage} />
            <h3 className={styles.foodTitle}>{food.strMeal}</h3>
            <p className={styles.foodSubtitle}>{food.strInstructions.substring(0, 150)}...</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
    
  );
};

export default Home;
