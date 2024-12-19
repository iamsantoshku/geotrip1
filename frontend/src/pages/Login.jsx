// import React, { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [savePassword, setSavePassword] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login functionality here
//     console.log('Email:', email);
//     console.log('Password:', password);
//     console.log('Save Password:', savePassword);
//   };

//   return (
//     <div>
//       <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="loginmodal" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
//           <div className="modal-content" id="loginmodal">
//             <div className="modal-header">
//               <h4 className="modal-title fs-6">Sign In / Register</h4>
//               <button type="button" className="text-muted fs-4" data-bs-dismiss="modal" aria-label="Close">
//                 <i className="fa-solid fa-square-xmark"></i>
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="modal-login-form py-4 px-md-3 px-0">
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-floating mb-4">
//                     <input
//                       type="email"
//                       className="form-control"
//                       placeholder="name@example.com"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <label>User Name</label>
//                   </div>
//                   <div className="form-floating mb-4">
//                     <input
//                       type="password"
//                       className="form-control"
//                       placeholder="Password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <label>Password</label>
//                   </div>

//                   <div className="form-group">
//                     <button type="submit" className="btn btn-primary full-width font--bold btn-lg">
//                       Log In
//                     </button>
//                   </div>

//                   <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
//                     <div className="modal-flex-first">
//                       <div className="form-check form-check-inline">
//                         <input
//                           className="form-check-input"
//                           type="checkbox"
//                           id="savepassword"
//                           value="option1"
//                           checked={savePassword}
//                           onChange={() => setSavePassword(!savePassword)}
//                         />
//                         <label className="form-check-label" htmlFor="savepassword">
//                           Save Password
//                         </label>
//                       </div>
//                     </div>
//                     <div className="modal-flex-last">
//                       <a href="#" className="text-primary fw-medium">
//                         Forget Password?
//                       </a>
//                     </div>
//                   </div>
//                 </form>
//               </div>

//               <div className="prixer px-3">
//                 <div className="devider-wraps position-relative">
//                   <div className="devider-text text-muted-2 text-md">Sign In with More Methods</div>
//                 </div>
//               </div>

//               <div className="social-login py-4 px-2">
//                 <ul className="row align-items-center justify-content-between g-3 p-0 m-0">
//                   <li className="col">
//                     <a href="#" className="square--60 border br-dashed rounded-2 full-width">
//                       <i className="fa-brands fa-facebook color--facebook fs-2"></i>
//                     </a>
//                   </li>
//                   <li className="col">
//                     <a href="#" className="square--60 border br-dashed rounded-2">
//                       <i className="fa-brands fa-whatsapp color--whatsapp fs-2"></i>
//                     </a>
//                   </li>
//                   <li className="col">
//                     <a href="#" className="square--60 border br-dashed rounded-2">
//                       <i className="fa-brands fa-linkedin color--linkedin fs-2"></i>
//                     </a>
//                   </li>
//                   <li className="col">
//                     <a href="#" className="square--60 border br-dashed rounded-2">
//                       <i className="fa-brands fa-dribbble color--dribbble fs-2"></i>
//                     </a>
//                   </li>
//                   <li className="col">
//                     <a href="#" className="square--60 border br-dashed rounded-2">
//                       <i className="fa-brands fa-twitter color--twitter fs-2"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="modal-footer align-items-center justify-content-center">
//               <p>
//                 Don't have an account yet?
//                 <a href="signup.html" className="text-primary fw-medium ms-1">
//                   Sign Up
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;






// import React, { useState } from 'react';
// import { Modal } from 'react-bootstrap'; // Using React-Bootstrap for modal management

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [savePassword, setSavePassword] = useState(false);
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login functionality here
//     console.log('Email:', email);
//     console.log('Password:', password);
//     console.log('Save Password:', savePassword);
//   };

//   return (
//     <div>
//       {/* Button that triggers modal */}


//       <li className="list-buttons light">
//         <a href="#" onClick={() => setShowModal(true)} >
//           <i className="fa-regular fa-circle-user fs-6 me-2"></i>
//           Sign In / Register
//         </a>
//       </li>

//       {/* Modal component */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <div className="modal-content">
//           <div className="modal-header">
//             <h4 className="modal-title fs-6">Sign In / Register</h4>
//             <button type="button" className="text-muted fs-4" onClick={() => setShowModal(false)}>
//               <i className="fa-solid fa-square-xmark"></i>
//             </button>
//           </div>
//           <div className="modal-body">
//             <div className="modal-login-form py-4 px-md-3 px-0">
//               <form onSubmit={handleSubmit}>
//                 <div className="form-floating mb-4">
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="name@example.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <label>User Name</label>
//                 </div>
//                 <div className="form-floating mb-4">
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <label>Password</label>
//                 </div>

//                 <div className="form-group">
//                   <button type="submit" className="btn btn-primary full-width font--bold btn-lg">
//                     Log In
//                   </button>
//                 </div>

//                 <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
//                   <div className="modal-flex-first">
//                     <div className="form-check form-check-inline">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         id="savepassword"
//                         value="option1"
//                         checked={savePassword}
//                         onChange={() => setSavePassword(!savePassword)}
//                       />
//                       <label className="form-check-label" htmlFor="savepassword">
//                         Save Password
//                       </label>
//                     </div>
//                   </div>
//                   <div className="modal-flex-last">
//                     <a href="#" className="text-primary fw-medium">
//                       Forget Password?
//                     </a>
//                   </div>
//                 </div>
//               </form>
//             </div>

//             <div className="prixer px-3">
//               <div className="devider-wraps position-relative">
//                 <div className="devider-text text-muted-2 text-md">Sign In with More Methods</div>
//               </div>
//             </div>

//             <div className="social-login py-4 px-2">
//               <ul className="row align-items-center justify-content-between g-3 p-0 m-0">
//                 <li className="col">
//                   <a href="#" className="square--60 border br-dashed rounded-2 full-width">
//                     <i className="fa-brands fa-facebook color--facebook fs-2"></i>
//                   </a>
//                 </li>
//                 <li className="col">
//                   <a href="#" className="square--60 border br-dashed rounded-2">
//                     <i className="fa-brands fa-whatsapp color--whatsapp fs-2"></i>
//                   </a>
//                 </li>
//                 <li className="col">
//                   <a href="#" className="square--60 border br-dashed rounded-2">
//                     <i className="fa-brands fa-linkedin color--linkedin fs-2"></i>
//                   </a>
//                 </li>
//                 <li className="col">
//                   <a href="#" className="square--60 border br-dashed rounded-2">
//                     <i className="fa-brands fa-dribbble color--dribbble fs-2"></i>
//                   </a>
//                 </li>
//                 <li className="col">
//                   <a href="#" className="square--60 border br-dashed rounded-2">
//                     <i className="fa-brands fa-twitter color--twitter fs-2"></i>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="modal-footer align-items-center justify-content-center">
//             <p>
//               Don't have an account yet?
//               <a href="/signup" className="text-primary fw-medium ms-1">
//                 Sign Up
//               </a>
//             </p>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Login;





// import React, { useState } from 'react';
// import { Modal } from 'react-bootstrap'; // Using React-Bootstrap for modal management
// import Signup from './Signup';

// const Login = ({ showModal, setShowModal }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [savePassword, setSavePassword] = useState(false);

//   const [showSignupModal, setShowSignupModal] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login functionality here
//     console.log('Email:', email);
//     console.log('Password:', password);
//     console.log('Save Password:', savePassword);
//   };

//   return (
//     <div>
//       {/* Modal component */}
//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <div className="modal-content">
//           <div className="modal-header">
//             <h4 className="modal-title fs-6">Sign In / Register</h4>
//             <button
//               type="button"
//               className="text-muted fs-4"
//               onClick={() => setShowModal(false)}
//             >
//               <i className="fa-solid fa-square-xmark"></i>
//             </button>
//           </div>
//           <div className="modal-body">
//             <div className="modal-login-form py-4 px-md-3 px-0">
//               <form onSubmit={handleSubmit}>
//                 <div className="form-floating mb-4">
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="name@example.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                   <label>User Email</label>
//                 </div>
//                 <div className="form-floating mb-4">
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <label>Password</label>
//                 </div>

//                 <div className="form-group">
//                   <button type="submit" className="btn btn-primary full-width font--bold btn-lg">
//                     Log In
//                   </button>
//                 </div>

//                 <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
//                   <div className="modal-flex-first">
//                     <div className="form-check form-check-inline">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         id="savepassword"
//                         value="option1"
//                         checked={savePassword}
//                         onChange={() => setSavePassword(!savePassword)}
//                       />
//                       <label className="form-check-label" htmlFor="savepassword">
//                         Save Password
//                       </label>
//                     </div>
//                   </div>
//                   <div className="modal-flex-last">
//                     <a href="#" className="text-primary fw-medium">
//                       Forget Password?
//                     </a>
//                   </div>
//                 </div>
//               </form>
//             </div>

//             <div className="prixer px-3">
//               <div className="devider-wraps position-relative">
//                 <div className="devider-text text-muted-2 text-md">Sign In with More Methods</div>
//               </div>
//             </div>

//             <div className="social-login py-4 px-2">
//               <ul className="row align-items-center justify-content-between g-3 p-0 m-0">
//                 <li className="col">
//                   <a href="#" className="square--60 border br-dashed rounded-2 full-width">
//                     <i className="fa-brands fa-facebook color--facebook fs-2"></i>
//                   </a>
//                 </li>
//                 <li className="col">
//                   <a href="#" className="square--60 border br-dashed rounded-2">
//                     <i className="fa-brands fa-whatsapp color--whatsapp fs-2"></i>
//                   </a>
//                 </li>
//                 <li className="col">
//                   <a href="#" className="square--60 border br-dashed rounded-2">
//                     <i className="fa-brands fa-linkedin color--linkedin fs-2"></i>
//                   </a>
//                 </li>
//                 <li className="col">
//                   <a href="#" className="square--60 border br-dashed rounded-2">
//                     <i className="fa-brands fa-dribbble color--dribbble fs-2"></i>
//                   </a>
//                 </li>
//                 <li className="col">
//                   <a href="#" className="square--60 border br-dashed rounded-2">
//                     <i className="fa-brands fa-twitter color--twitter fs-2"></i>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="modal-footer align-items-center justify-content-center">
//             <p>
//               Don't have an account yet?
//               <a href="#" onClick={() => setShowSignupModal(true)} className="text-primary fw-medium ms-1">
//                 Sign Up
//               </a>
//               {/* <button onClick={() => setShowSignupModal(true)}>Open Signup</button> */}
//       <Signup showSignupModal={showSignupModal} setShowSignupModal={setShowSignupModal} />
//             </p>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Login;


 // try {
    //   // Make API request to login
    //   const response = await axios.post( BACKENDURL + '/api/v1/auth/login', {
    //     email,
    //     password,
    //   });

    //   const { token, data } = response.data;

    //   // Save token to localStorage (if save password is checked)
    //   if (savePassword) {
    //     localStorage.setItem('token', token);
    //     localStorage.setItem('user', JSON.stringify(data));
    //   }

    //   // Handle successful login
    //   console.log('Login successful:', data);

    //   // Close modal
    //   setShowModal(false);
    // } catch (error) {
    //   console.error('Login error:', error);
    //   setErrorMessage(
    //     error.response?.data?.error || 'Something went wrong. Please try again.'
    //   );
    // } finally {
    //   setLoading(false);
    // }






// import React, { useState } from 'react';
// import axios from 'axios'; // Import axios for API requests
// import { Modal } from 'react-bootstrap';
// import Signup from './Signup';
// import { BACKENDURL } from '../Config/Config';
// import { authContext } from '../context/authContext';
// import { useContext } from 'react';
// import { toast } from "react-toastify";

// const Login = ({ showModal, setShowModal }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [savePassword, setSavePassword] = useState(false);
//   const [showSignupModal, setShowSignupModal] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const [loading, setLoading] = useState(false);
  

//   const { dispatch } = useContext(authContext);
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setErrorMessage('');
//     setLoading(true);

    
//     try {
//       const loginURL = BACKENDURL + "/api/v1/auth/login";

//       const response = await fetch(loginURL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         toast.error(data.error);
//         return;
//       }

//       console.log(data);

//       console.log(response.ok);

//       if (response.ok) {
//         toast.success("User logged in successfully");

//         dispatch({
//           type: "LOGIN_SUCCESS",
//           payload: {
//             user: data.data,
//             isAdmin: data.data.isAdmin,
//             token: data.token,
//           },
//         });
//         navigate("/");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("An error occurred. Please try again later.");
//     }

//   };

//   return (
//     <div>
//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <div className="modal-content">
//           <div className="modal-header">
//             <h4 className="modal-title fs-6">Sign In / Register</h4>
//             <button
//               type="button"
//               className="text-muted fs-4"
//               onClick={() => setShowModal(false)}
//             >
//               <i className="fa-solid fa-square-xmark"></i>
//             </button>
//           </div>
//           <div className="modal-body">
//             <div className="modal-login-form py-4 px-md-3 px-0">
//               {errorMessage && (
//                 <div className="alert alert-danger">{errorMessage}</div>
//               )}
//               <form onSubmit={handleSubmit}>
//                 <div className="form-floating mb-4">
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="name@example.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                   <label>User Email</label>
//                 </div>
//                 <div className="form-floating mb-4">
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                   <label>Password</label>
//                 </div>

//                 <div className="form-group">
//                   <button
//                     type="submit"
//                     className="btn btn-primary full-width font--bold btn-lg"
//                     disabled={loading}
//                   >
//                     {loading ? 'Logging in...' : 'Log In'}
//                   </button>
//                 </div>

//                 <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
//                   <div className="modal-flex-first">
//                     <div className="form-check form-check-inline">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         id="savepassword"
//                         checked={savePassword}
//                         onChange={() => setSavePassword(!savePassword)}
//                       />
//                       <label className="form-check-label" htmlFor="savepassword">
//                         Save Password
//                       </label>
//                     </div>
//                   </div>
//                   <div className="modal-flex-last">
//                     <a href="#" className="text-primary fw-medium">
//                       Forget Password?
//                     </a>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="modal-footer align-items-center justify-content-center">
//             <p>
//               Don't have an account yet?
//               <a
//                 href="#"
//                 onClick={() => setShowSignupModal(true)}
//                 className="text-primary fw-medium ms-1"
//               >
//                 Sign Up
//               </a>
//               <Signup
//                 showSignupModal={showSignupModal}
//                 setShowSignupModal={setShowSignupModal}
//               />
//             </p>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Login;






// import React, { useState, useContext } from "react";
// import { Modal } from "react-bootstrap";
// import Signup from "./Signup";
// import { BACKENDURL } from "../Config/Config";
// import { authContext } from "../context/authContext";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const Login = ({ showModal, setShowModal }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [savePassword, setSavePassword] = useState(false);
//   const [showSignupModal, setShowSignupModal] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const { dispatch } = useContext(authContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const loginURL = `${BACKENDURL}/api/v1/auth/login`;

//       const response = await fetch(loginURL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         toast.error(data.error || "Invalid credentials");
//         setLoading(false);
//         return;
//       }

//       // Handle successful login
//       toast.success("User logged in successfully");

//       dispatch({
//         type: "LOGIN_SUCCESS",
//         payload: {
//           user: data.data,
//           isAdmin: data.data.isAdmin,
//           token: data.token,
//         },
//       });

//       if (savePassword) {
//         localStorage.setItem("token", data.token);
//       }

//       navigate("/");
//     } catch (error) {
//       console.error("Login error:", error);
//       toast.error("An error occurred. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <Modal show={showModal} onHide={() => setShowModal(false)} centered>
//         <div className="modal-content">
//           <div className="modal-header">
//             <h4 className="modal-title fs-6">Sign In / Register</h4>
//             <button
//               type="button"
//               className="text-muted fs-4"
//               onClick={() => setShowModal(false)}
//             >
//               <i className="fa-solid fa-square-xmark"></i>
//             </button>
//           </div>
//           <div className="modal-body">
//             <div className="modal-login-form py-4 px-md-3 px-0">
//               <form onSubmit={handleSubmit}>
//                 <div className="form-floating mb-4">
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="name@example.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                   <label htmlFor="email">User Email</label>
//                 </div>
//                 <div className="form-floating mb-4">
//                   <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                   <label htmlFor="password">Password</label>
//                 </div>

//                 <div className="form-group">
//                   <button
//                     type="submit"
//                     className="btn btn-primary full-width font--bold btn-lg"
//                     disabled={loading}
//                   >
//                     {loading ? "Logging in..." : "Log In"}
//                   </button>
//                 </div>

//                 <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
//                   <div className="modal-flex-first">
//                     <div className="form-check form-check-inline">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         id="savepassword"
//                         checked={savePassword}
//                         onChange={() => setSavePassword(!savePassword)}
//                       />
//                       <label className="form-check-label" htmlFor="savepassword">
//                         Save Password
//                       </label>


//                     </div>

//                     {/* new  */}
                  
//                     {/* ensd */}
//                   </div>


                  
//                   <div className="modal-flex-last">
//                     <a href="#" className="text-primary fw-medium">
//                       Forget Password?
//                     </a>
//                   </div>
//                 </div>

//                 {/* new  */}
//                 <div className="prixer px-3">
//               <div className="devider-wraps position-relative">
//                 <div className="devider-text text-muted-2 text-md">Sign In with More Methods</div>
//               </div>
//             </div>

//             <div className="social-login py-4 px-2">
//               <ul className="row align-items-center justify-content-between g-3 p-0 m-0">
//                 <li className="col">
//                   <a href="#" className="square--60 border br-dashed rounded-2 full-width">
//                     <i className="fa-brands fa-facebook color--facebook fs-2"></i>
//                   </a>
//                 </li>
//                 <li className="col">
//                   <a href="#" className="square--60 border br-dashed rounded-2">
//                     <i className="fa-brands fa-whatsapp color--whatsapp fs-2"></i>
//                   </a>
//                 </li>
//                 <li className="col">
//                   <a href="#" className="square--60 border br-dashed rounded-2">
//                     <i className="fa-brands fa-linkedin color--linkedin fs-2"></i>
//                   </a>
//                 </li>
//                 <li className="col">
//                   <a href="#" className="square--60 border br-dashed rounded-2">
//                     <i className="fa-brands fa-dribbble color--dribbble fs-2"></i>
//                   </a>
//                 </li>
//                 <li className="col">
//                   <a href="#" className="square--60 border br-dashed rounded-2">
//                     <i className="fa-brands fa-twitter color--twitter fs-2"></i>
//                   </a>
//                 </li>
//               </ul>
//             </div>


//                   {/* end  */}
//               </form>
//             </div>
//           </div>
//           <div className="modal-footer align-items-center justify-content-center">
//             <p>
//               Don't have an account yet?
//               <a
//                 href="#"
//                 onClick={() => setShowSignupModal(true)}
//                 className="text-primary fw-medium ms-1"
//               >
//                 Sign Up
//               </a>
//               <Signup
//                 showSignupModal={showSignupModal}
//                 setShowSignupModal={setShowSignupModal}
//               />
//             </p>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Login;




import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import Signup from "./Signup";
import { BACKENDURL } from "../Config/Config";
import { authContext } from "../context/authContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = ({ showModal, setShowModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [savePassword, setSavePassword] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const loginURL = `${BACKENDURL}/api/v1/auth/login`;

      const response = await fetch(loginURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "Invalid credentials");
        setLoading(false);
        return;
      }

      // Handle successful login
      toast.success("User logged in successfully");

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: data.data,
          isAdmin: data.data.isAdmin,
          token: data.token,
        },
      });

      if (savePassword) {
        localStorage.setItem("token", data.token);
      }

      setShowModal(false); // Close login modal
      navigate("/"); // Navigate to home page
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleShowSignup = () => {
    setShowModal(false); // Close login modal
    setShowSignupModal(true); // Show signup modal
  };

  return (
    <div>
      {/* Login Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title fs-6">Sign In / Register</h4>
            <button
              type="button"
              className="text-muted fs-4"
              onClick={() => setShowModal(false)}
            >
              <i className="fa-solid fa-square-xmark"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-login-form py-4 px-md-3 px-0">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="email">User Email</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary full-width font--bold btn-lg"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Log In"}
                  </button>
                </div>

                <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
                  <div className="modal-flex-first">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="savepassword"
                        checked={savePassword}
                        onChange={() => setSavePassword(!savePassword)}
                      />
                      <label className="form-check-label" htmlFor="savepassword">
                        Save Password
                      </label>
                    </div>
                  </div>
                  <div className="modal-flex-last">
                    <a href="#" className="text-primary fw-medium">
                      Forget Password?
                    </a>
                  </div>
                </div>

                <div className="prixer px-3">
                  <div className="devider-wraps position-relative">
                    <div className="devider-text text-muted-2 text-md">Sign In with More Methods</div>
                  </div>
                </div>

                <div className="social-login py-4 px-2">
                  <ul className="row align-items-center justify-content-between g-3 p-0 m-0">
                    <li className="col">
                      <a href="#" className="square--60 border br-dashed rounded-2 full-width">
                        <i className="fa-brands fa-facebook color--facebook fs-2"></i>
                      </a>
                    </li>
                    <li className="col">
                      <a href="#" className="square--60 border br-dashed rounded-2">
                        <i className="fa-brands fa-whatsapp color--whatsapp fs-2"></i>
                      </a>
                    </li>
                    <li className="col">
                      <a href="#" className="square--60 border br-dashed rounded-2">
                        <i className="fa-brands fa-linkedin color--linkedin fs-2"></i>
                      </a>
                    </li>
                    <li className="col">
                      <a href="#" className="square--60 border br-dashed rounded-2">
                        <i className="fa-brands fa-dribbble color--dribbble fs-2"></i>
                      </a>
                    </li>
                    <li className="col">
                      <a href="#" className="square--60 border br-dashed rounded-2">
                        <i className="fa-brands fa-twitter color--twitter fs-2"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer align-items-center justify-content-center">
            <p>
              Don't have an account yet?
              <a
                href="#"
                onClick={handleShowSignup}
                className="text-primary fw-medium ms-1"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </Modal>

      {/* Signup Modal */}
      <Signup
        showSignupModal={showSignupModal}
        setShowSignupModal={setShowSignupModal}
      />
    </div>
  );
};

export default Login;
