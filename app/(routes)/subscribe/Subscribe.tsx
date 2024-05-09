'use client';
import { useState } from 'react';
import axios from 'axios';
import { group } from 'console';

import css from './Subscribe.module.css';

// const Subscribe = () => {

//   const [email, setEmail] = useState("");
//   const [state, setState] = useState("IDLE");
//   const [errorMessage, setErrorMessage] = useState (null);

//   const subscribe = async () => {
//     setState("LOADING");
//     setErrorMessage(null);
//     try {
//       const response = await axios.post("/api/newsletter", { email });
//       setState("SUCCESS");
//     } catch (e: any) {
//       setErrorMessage(e.response?.data?.error || "An error occurred");
//       setState("ERROR");
//     }
//   };

// return(
//   <div>
//       <div className={css.inputGroup}>
//         <input
//         className={css.input}
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         />
//         <button
//         className={css.buttonSubmit}
//         type="button"
//         disabled={state === "LOADING"}
//         onClick={subscribe}

//         >
//           Subscribe
//         </button>
//       </div>
//       {state === "ERROR" && (
//         <p className={css.errorMessage}>{errorMessage}</p>
//       )}

//       {state === "SUCCESS" && (
//         <p className={css.successMessage}>Success!</p>
//       )}
//   </div>
// )};

// Subscribe.displayName = 'Subscribe';

const Subscribe = () => {
  return (
    <form
      action="https://login.sendpulse.com/forms/simple/u/eyJ1c2VyX2lkIjo4NTg1OTE3LCJhZGRyZXNzX2Jvb2tfaWQiOjU2NTYyNywibGFuZyI6ImVuIn0="
      method="post"
    >
      <div className={css.inputGroup}>
        <input className={css.input} placeholder="Email" type="email" required name="email" />
        <input type="hidden" name="sender" value="34d375e0-f3d7-4010-ac6d-2eae41659b9a" />
        <button
          className={css.buttonSubmit}
          // type="button"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default Subscribe;
