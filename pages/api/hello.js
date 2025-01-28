// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

export const fetchFoodData = async () => {
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  return response.data.meals;
};


/*
import axios from 'axios';

export const fetchFoodData = async () => {
  const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  return response.data.meals;
};


export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
  */
