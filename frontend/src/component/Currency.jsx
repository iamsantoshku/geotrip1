import React from 'react';
import { Modal } from 'react-bootstrap';

const Currency = ({ show, onClose }) => {
  const suggestedCurrencies = [
    { name: 'United State Dollar', code: 'USD' },
    { name: 'Pound Sterling', code: 'GBP' },
    { name: 'Indian Rupees', code: 'INR' },
    { name: 'Euro', code: 'EUR' },
    { name: 'Australian Dollar', code: 'AUD' },
    { name: 'Thai Baht', code: 'THB' },
  ];

  const allCurrencies = [
    { name: 'United State Dollar', code: 'USD' },
    { name: 'Property Currency', code: 'GBP' },
    { name: 'Argentine Peso', code: 'EUR' },
    { name: 'Azerbaijani Manat', code: 'INR' },
    { name: 'Australian Dollar', code: 'AUD' },
    { name: 'Bahraini Dinar', code: 'THB' },
    { name: 'Brazilian Real', code: 'USD' },
    { name: 'Bulgarian Lev', code: 'GBP' },
    { name: 'Canadian Dollar', code: 'EUR' },
    { name: 'Chilean Peso', code: 'INR' },
    { name: 'Colombian Peso', code: 'AUD' },
    { name: 'Danish Krone', code: 'THB' },
    { name: 'Egyptian Pound', code: 'USD' },
    { name: 'Hungarian Forint', code: 'GBP' },
    { name: 'Japanese Yen', code: 'EUR' },
    { name: 'Jordanian Dinar', code: 'INR' },
    { name: 'Kuwaiti Dinar', code: 'AUD' },
    { name: 'Malaysian Ringgit', code: 'THB' },
    { name: 'Singapore Dollar', code: 'THB' },
  ];

  const handleCurrencySelect = (currency) => {
    console.log(`Selected currency: ${currency.name} (${currency.code})`);
    onClose(); // Close the modal
  };

  return (
    <Modal show={show} onHide={onClose} size="lg" centered>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title fs-6">Select Your Currency</h4>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
        <div className="modal-body">
          <div className="allCurrencylist">
            {/* Suggested Currencies */}
            <div className="suggestedCurrencylist-wrap mb-4">
              <div className="ps-3 mb-2">
                <h5 className="fs-6 fw-bold">Suggested Currency For You</h5>
              </div>
              <ul className="row gy-2 gx-3">
                {suggestedCurrencies.map((currency) => (
                  <li className="col-6 col-md-4" key={currency.code}>
                    <a
                      href="#"
                      className="selectCurrency d-block"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCurrencySelect(currency);
                      }}
                    >
                      <div className="text-dark fw-medium">{currency.name}</div>
                      <div className="text-muted text-uppercase">{currency.code}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* All Currencies */}
            <div className="suggestedCurrencylist-wrap">
              <div className="ps-3 mb-2">
                <h5 className="fs-6 fw-bold">All Currencies</h5>
              </div>
              <ul className="row gy-2 gx-3">
                {allCurrencies.map((currency) => (
                  <li className="col-6 col-md-4" key={currency.code}>
                    <a
                      href="#"
                      className="selectCurrency d-block"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCurrencySelect(currency);
                      }}
                    >
                      <div className="text-dark fw-medium">{currency.name}</div>
                      <div className="text-muted text-uppercase">{currency.code}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Currency;





// import React, { useState } from 'react';
// import { Modal } from 'react-bootstrap';

// const Currency = ({ show, onClose }) => {
//   const [selectedCurrency, setSelectedCurrency] = useState(null); // State to track the selected currency

//   const suggestedCurrencies = [
//     { name: 'United States Dollar', code: 'USD' },
//     { name: 'Pound Sterling', code: 'GBP' },
//     { name: 'Indian Rupee', code: 'INR' },
//     { name: 'Euro', code: 'EUR' },
//     { name: 'Australian Dollar', code: 'AUD' },
//     { name: 'Thai Baht', code: 'THB' },
//   ];

//   const allCurrencies = [
//     { name: 'United States Dollar', code: 'USD' },
//     { name: 'Pound Sterling', code: 'GBP' },
//     { name: 'Indian Rupee', code: 'INR' },
//     { name: 'Euro', code: 'EUR' },
//     { name: 'Australian Dollar', code: 'AUD' },
//     { name: 'Thai Baht', code: 'THB' },
//     { name: 'Argentine Peso', code: 'ARS' },
//     { name: 'Azerbaijani Manat', code: 'AZN' },
//     { name: 'Brazilian Real', code: 'BRL' },
//     { name: 'Bulgarian Lev', code: 'BGN' },
//     { name: 'Canadian Dollar', code: 'CAD' },
//     { name: 'Chilean Peso', code: 'CLP' },
//     { name: 'Colombian Peso', code: 'COP' },
//     { name: 'Danish Krone', code: 'DKK' },
//     { name: 'Egyptian Pound', code: 'EGP' },
//     { name: 'Hungarian Forint', code: 'HUF' },
//     { name: 'Japanese Yen', code: 'JPY' },
//     { name: 'Jordanian Dinar', code: 'JOD' },
//     { name: 'Kuwaiti Dinar', code: 'KWD' },
//     { name: 'Malaysian Ringgit', code: 'MYR' },
//     { name: 'Singapore Dollar', code: 'SGD' },
//   ];

//   const handleCurrencySelect = (currency) => {
//     setSelectedCurrency(currency); // Update the state with the selected currency
//     console.log(`Selected currency: ${currency.name} (${currency.code})`);
//     onClose(); // Optionally close the modal
//   };

//   return (
//     <>
//       {/* Modal to Select Currency */}
//       <Modal show={show} onHide={onClose} size="lg" centered>
//         <div className="modal-content">
//           <div className="modal-header">
//             <h4 className="modal-title fs-6">Select Your Currency</h4>
//             <button
//               type="button"
//               className="btn-close"
//               aria-label="Close"
//               onClick={onClose}
//             ></button>
//           </div>
//           <div className="modal-body">
//             <div className="allCurrencylist">
//               {/* Suggested Currencies */}
//               <div className="suggestedCurrencylist-wrap mb-4">
//                 <div className="ps-3 mb-2">
//                   <h5 className="fs-6 fw-bold">Suggested Currency For You</h5>
//                 </div>
//                 <ul className="row gy-2 gx-3">
//                   {suggestedCurrencies.map((currency) => (
//                     <li className="col-6 col-md-4" key={currency.code}>
//                       <a
//                         href="#"
//                         className="selectCurrency d-block"
//                         onClick={(e) => {
//                           e.preventDefault();
//                           handleCurrencySelect(currency);
//                         }}
//                       >
//                         <div className="text-dark fw-medium">{currency.name}</div>
//                         <div className="text-muted text-uppercase">{currency.code}</div>
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* All Currencies */}
//               <div className="suggestedCurrencylist-wrap">
//                 <div className="ps-3 mb-2">
//                   <h5 className="fs-6 fw-bold">All Currencies</h5>
//                 </div>
//                 <ul className="row gy-2 gx-3">
//                   {allCurrencies.map((currency) => (
//                     <li className="col-6 col-md-4" key={`${currency.name}-${currency.code}`}>
//                       <a
//                         href="#"
//                         className="selectCurrency d-block"
//                         onClick={(e) => {
//                           e.preventDefault();
//                           handleCurrencySelect(currency);
//                         }}
//                       >
//                         <div className="text-dark fw-medium">{currency.name}</div>
//                         <div className="text-muted text-uppercase">{currency.code}</div>
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Modal>

//       {/* Display Selected Currency */}
//       <div className="selected-currency-container">
//         {selectedCurrency ? (
//           <div className="mt-3">
//             <h5>Selected Currency:</h5>
//             <p className="fw-bold">
//               {selectedCurrency.name} ({selectedCurrency.code})
//             </p>
//           </div>
//         ) : (
//           <p>No currency selected</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default Currency;

