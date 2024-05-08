'use client';
import { type ReactElement, useState, Key } from 'react';

import css from './calculator.module.css';

export function Calculator(): ReactElement {
  const [propertyType, setPropertyType] = useState('');
  const [propertyTerm, setPropertyTerm] = useState('10');
  const [investment, setInvestment] = useState('1000');

  const rentalYields = [0.04, 0.05, 0.06, 0.07];

  const calculateResults = () => {
    const isValidInput = !isNaN(parseFloat(propertyTerm)) && !isNaN(parseFloat(investment));
    if (!isValidInput) {
      return [];
    }

    const investmentValue = parseFloat(investment);

    const results = rentalYields.map((yieldPercentage) => {
      const periods = parseFloat(propertyTerm) * 12;

      const rent = ((investmentValue * yieldPercentage) / 12) * periods;
      const capitalRepayment = (investmentValue / parseFloat(propertyTerm) / 12) * periods;

      const monthlyRepayment = (rent + capitalRepayment) / periods;
      const annualRepayment = monthlyRepayment * 12;
      const fullTermRepayment = monthlyRepayment * periods;

      return { rent, capitalRepayment, monthlyRepayment, annualRepayment, fullTermRepayment };
    });

    return results;
  };

  const handlePropertyTermChange = (term: string): void => {
    setPropertyTerm(term);
  };

  const handleInvestmentChange = (amount: string): void => {
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount) && parsedAmount <= 90000000) {
      setInvestment(amount);
    } else {
      console.log('Please enter a valid number less than or equal to 90 million.');
    }
  };

  return (
    <div className={css.container}>
      <h2>Investment Calculator</h2>

      <div className={css.calculatorInputs}>
        <div className={css.inputFrame}>
          <label htmlFor="">Property Type</label>
          <select name="" id="" className={css.calculatorInputsSelect}>
            {/* <option value="">Select a property type</option> */}
            <option value="">Commercial</option>
            <option value="">Industrial</option>
            <option value="">Farm House</option>
            <option value="">Hotels</option>
            <option value="">Agriculture</option>
            <option value="">Popular</option>
            <option value="">Residential</option>
            <option value="">Green /Sustainable</option>
            <option value="">Deparment</option>
            <option value="">Boat House</option>
          </select>
        </div>

        <div className={css.inputFrame}>
          <label htmlFor="">Property Term</label>
          <select
            name=""
            id=""
            className={css.calculatorInputsSelect}
            onChange={(e) => handlePropertyTermChange(e.target.value)}
            value={propertyTerm}
          >
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        </div>

        <div className={css.inputFrame}>
          <label htmlFor="">Investment</label>

          <div className={css.inputFrameInvestment}>
            <select name="" id="" className={css.selectCurrency}>
              <option value="">USD</option>
            </select>

            <input type="number" onChange={(e) => handleInvestmentChange(e.target.value)} value={investment} />
          </div>
        </div>
      </div>

      <div className={css.calculatorResults}>
        <div>
          <table className={css.table}>
            <thead>
              <tr>
                <th>Rental Yield</th>
                <th>Rent</th>
                <th>Capital Repayment</th>
                <th>Monthly</th>
                <th>Annual</th>
                <th>Full Term</th>
              </tr>
            </thead>
            <tbody>
              {calculateResults().map((result, index: number) => (
                <tr key={index}>
                  <td>{(rentalYields[index] * 100).toFixed(2)}%</td>
                  <td>{result.rent.toFixed(2)}</td>
                  <td>{result.capitalRepayment.toFixed(2)}</td>
                  <td>{result.monthlyRepayment.toFixed(2)}</td>
                  <td>{result.annualRepayment.toFixed(2)}</td>
                  <td>{result.fullTermRepayment.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
