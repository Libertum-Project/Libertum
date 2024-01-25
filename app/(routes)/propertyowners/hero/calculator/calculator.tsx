import { type ReactElement } from "react";
import css from "./calculator.module.css";

export function Calculator(): ReactElement {
  return(
    <div className={css.container}>
      <h2>Funding Requirement Calculator</h2>

      <div className={css.calculatorInputs}>

        <div className={css.inputFrame}>
          <label htmlFor="">Property Type</label>
          <select name="" id="" className={css.calculatorInputsSelect}>
            <option value="">Select a property type</option>
            <option value="">commercial</option>
          </select>
        </div>

        <div className={css.inputFrame}>
          <label htmlFor="">Property Term</label>
          <select name="" id="" className={css.calculatorInputsSelect}>
            <option value="">10</option>
            <option value="">commercial</option>
          </select>
        </div>

        <div className={css.inputFrame}>
          <label htmlFor="">Investment</label>

          <div className={css.inputFrameInvestment}>
          <select name="" id="" className={css.selectCurrency}>
            <option value="">USD</option>
          </select>

          <input type="number" />            
          </div>
          
        </div>

      </div>


      <div className={css.calculatorResults}>

        <div className={css.calculatorOptions}>
          <h3 className={css.option}>Monthly</h3>
          <h3 className={css.option}>Annual</h3>
          <h3 className={css.option}>Full Term</h3>
        </div>
        <div>
          <table className={css.table}>
            <thead>
              <tr>
                <th>Rental Yield</th> <th>Rent</th> <th>Capital Repayment</th> <th>Monthly Repayment</th>
              </tr>
            </thead>
            <tr>
              <td>4%</td>
              <td>33,3</td>
              <td>83,33</td>
              <td>116,67</td>
            </tr>

            <tr>
              <td>5%</td>
              <td>33,3</td>
              <td>83,33</td>
              <td>116,67</td>
            </tr>

            <tr>
              <td>6%</td>
              <td>33,3</td>
              <td>83,33</td>
              <td>116,67</td>
            </tr>

            <tr>
              <td>7%</td>
              <td>33,3</td>
              <td>83,33</td>
              <td>116,67</td>
            </tr>
          </table>

        </div>

      </div>


    </div>
  )
};
