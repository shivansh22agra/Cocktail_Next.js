"use client";
import Link from "next/link";

export default function Cocktail({
  strDrink,
  strDrinkThumb,
  idDrink,
}: {
  strDrink: String;
  strDrinkThumb: String;
  idDrink: String;
}) {
  return (
    <div>
      <h1>{strDrink}</h1>
      <img src={strDrinkThumb + ""} alt="" width={100}></img>
      <Link href={`/asd`}></Link>
    </div>
  );
}
