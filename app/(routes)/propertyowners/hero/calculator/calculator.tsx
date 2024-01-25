import { type ReactElement } from "react";
import css from "./calculator.module.css";

export function Calculator(): ReactElement {
  return(
    <div className={css.container}>
      <h2>Funding Requirement Calculator</h2>

      <div className={css.calculatorInputs}>

        <div className={css.inputFrame}>
          <label htmlFor="">Property Type</label>
          <select name="" id="">
            <option value="">Select a property type</option>
            <option value="">commercial</option>
          </select>
        </div>

        <div className={css.inputFrame}>
          <label htmlFor="">Property Term</label>
          <select name="" id="">
            <option value="">10</option>
            <option value="">commercial</option>
          </select>
        </div>

        <div className={css.inputFrame}>
          <label htmlFor="">Investment</label>
          <select name="" id="">
            <option value="">USD</option>
            <option value="">commercial</option>
          </select>

          <input type="number" />
        </div>

      </div>


      <div className={css.calculatorResults}>

      </div>


    </div>
  )
};
