import Image from "next/image";
import styles from "./page.module.css";
import Cocktail from "./cockTail";

export default async function Home() {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
  );
  const data = await response.json();
  return (
    <main className="font-poppins mx-10">
      <div className="grid gap-10 grid-cols-fluid">
        {data.drinks.map(function (item: {
          strDrink: String;
          strDrinkThumb: String;
          idDrink: String;
        }) {
          return (
            <Cocktail
              strDrink={item.strDrink}
              strDrinkThumb={item.strDrinkThumb}
              idDrink={item.idDrink}
            />
          );
        })}
      </div>
    </main>
  );
}
