import { type ReactElement } from "react";
import css from "./feed.module.css";
import Cards from "./cards/cards";
import Calculator from "./calculator/calculator";


export function Feed(): ReactElement {

  return(
    <div className={css.container}>      
    <Calculator />
    <Cards />
    </div>
  )
}