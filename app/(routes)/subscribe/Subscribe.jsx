'use client'
// import { useState } from "react";
// import axios from "axios";
// import css from "./Subscribe.module.css"
// import { group } from "console";

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


// const Subscribe = () => {
  
//   return(
//  <form action="https://login.sendpulse.com/forms/simple/u/eyJ1c2VyX2lkIjo4NTg1OTE3LCJhZGRyZXNzX2Jvb2tfaWQiOjU2NTYyNywibGFuZyI6ImVuIn0=" method="post">

//         <div className={css.inputGroup}>
//           <input 
//           className={css.input}
//           placeholder="Email" 
//           type="email" 
//           required 
//           name="email"
          
//           /> 
//       <input type="hidden" name="sender" value="34d375e0-f3d7-4010-ac6d-2eae41659b9a" />
//           <button 
//           className={css.buttonSubmit}
//           // type="button"        
//           >
//             Subscribe
//           </button>
//         </div>
// </form> 

// )}
// export default Subscribe;

const Subscribe = () => {
  return (
    <>
      {/* Estilos CSS */}
      <style jsx>{`
        /* Estilos CSS del formulario */
        .sp-force-hide { display: none; }
        /* Agrega aquí los estilos restantes */
        .sp-form[sp-id="233366"] { display: block; background: rgba(0, 0, 0, 0); padding: 15px; width: 580px; max-width: 100%; border-radius: 8px; font-family: "Segoe UI", Segoe, "Avenir Next", "Open Sans", sans-serif; background-repeat: no-repeat; background-position: center; background-size: auto; }
        .sp-form[sp-id="233366"] input[type="checkbox"] { display: inline-block; opacity: 1; visibility: visible; }
        .sp-form[sp-id="233366"] .sp-form-fields-wrapper { margin: 0 auto; width: 550px; }
        .sp-form[sp-id="233366"] .sp-form-control { background: rgba(255, 255, 255, 1); border-color: rgba(26, 196, 199, 1); border-style: solid; border-width: 1px; font-size: 15px; padding-left: 8.75px; padding-right: 8.75px; border-radius: 5px; height: 35px; width: 100%; }
        .sp-form[sp-id="233366"] .sp-field label { color: #444444; font-size: 13px; font-style: normal; font-weight: bold; }
        .sp-form[sp-id="233366"] .sp-button-messengers { border-radius: 5px; }
        .sp-form[sp-id="233366"] .sp-button { border-radius: 5px; background-color: #00b3b5; color: #ffffff; width: auto; font-weight: 700; font-style: normal; font-family: "Segoe UI", Segoe, "Avenir Next", "Open Sans", sans-serif; box-shadow: none; }
        .sp-form[sp-id="233366"] .sp-button-container { text-align: left; }
      `}</style>

      {/* HTML del formulario */}
      <div className="sp-form-outer sp-force-hide">
        <div id="sp-form-233366" sp-id="233366" sp-hash="219caa4d09763c9207371aa8be0c560914bc9b59f675bd349961badc7b5aff0a" sp-lang="en" className="sp-form sp-form-regular sp-form-embed sp-form-horizontal">
          <div className="sp-form-fields-wrapper">
            <div className="sp-message"><div></div></div>
            <form noValidate className="sp-element-container sp-field-nolabel ">
              <div className="sp-field " sp-id="sp-853f5857-6042-4f9f-aeab-08b21b26aad3">
                <label className="sp-control-label"><span ></span><strong >*</strong></label>
                <input type="email" sp-type="email" name="sform[email]" className="sp-form-control " placeholder="username@gmail.com" sp-tips="%7B%22required%22%3A%22Required%20field%22%2C%22wrong%22%3A%22Wrong%20email%22%7D" autoComplete="on" required="required" />
              </div>
              <div className="sp-field sp-button-container " sp-id="sp-5de7ff6e-fc98-4219-9d81-d7df4586e2fb">
                <button id="sp-5de7ff6e-fc98-4219-9d81-d7df4586e2fb" className="sp-button">Subscribe </button>
              </div>
            </form>
            <div className="sp-link-wrapper sp-brandname__left">
              <a className="sp-link " target="_blank" href="https://sendpulse.com/forms-powered-by-sendpulse?sn=bGliZXJ0dW0uaW8%3D&amp;from=8585917">
                <span className="sp-link-img">&nbsp;</span>
                <span translate="FORM.PROVIDED_BY">Provided by SendPulse</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <script async src="//web.webformscr.com/apps/fc3/build/default-handler.js?1708945005535"></script>
    </>
  );
};

export default Subscribe;