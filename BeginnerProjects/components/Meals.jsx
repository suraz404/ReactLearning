import { useEffect, useState } from "react";
import axios from "axios";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Meals</h1>
      {items.map((meal) => (
        <div key={meal.idMeal}>
          <img src={meal.strMealThumb} alt={meal.strMeal} width="150" />
          <p>{meal.strMeal}</p>
        </div>
      ))}
    </div>
  );
};

export default Meals;
