import React, { createContext, useEffect, useReducer } from "react";

const initialState = {
  user:
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  token: localStorage.getItem("token") || null,
  isAdmin: localStorage.getItem("isAdmin") || null,
  isUserLoggedIn: true ? localStorage.getItem("token") !== null : false,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        token: null,
        isAdmin: null,
        isUserLoggedIn: false,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        token: action.payload.token,
        isAdmin: action.payload.isAdmin,
        isUserLoggedIn: true,
      };

    case "LOGOUT":
      return {
        user: null,
        token: null,
        isAdmin: null,
        isUserLoggedIn: false,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", state.token);
    localStorage.setItem("isAdmin", state.isAdmin);
    localStorage.setItem("isUserLoggedIn", state.isUserLoggedIn);
  }, [state]);

  return (
    <authContext.Provider
      value={{
        user: state.user,
        token: state.token,
        isAdmin: state.isAdmin,
        isUserLoggedIn: state.isUserLoggedIn,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};




// import React, { createContext, useEffect, useReducer } from "react";

// const initialState = {
//   user:
//     localStorage.getItem("user") !== "undefined"
//       ? JSON.parse(localStorage.getItem("user"))
//       : null,
//   token: localStorage.getItem("token") || null,
//   isAdmin: localStorage.getItem("isAdmin") || null,
//   isUserLoggedIn: localStorage.getItem("token") !== null,
// };

// const authContext = createContext(initialState);

// const authReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN_START":
//       return {
//         user: null,
//         token: null,
//         isAdmin: null,
//         isUserLoggedIn: false,
//       };

//     case "LOGIN_SUCCESS":
//       return {
//         user: action.payload.user,
//         token: action.payload.token,
//         isAdmin: action.payload.isAdmin,
//         isUserLoggedIn: true,
//       };

//     case "LOGOUT":
//       return {
//         user: null,
//         token: null,
//         isAdmin: null,
//         isUserLoggedIn: false,
//       };
//     default:
//       return state;
//   }
// };

// const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(state.user));
//     localStorage.setItem("token", state.token);
//     localStorage.setItem("isAdmin", state.isAdmin);
//     localStorage.setItem("isUserLoggedIn", state.isUserLoggedIn);
//   }, [state]);

//   return (
//     <authContext.Provider
//       value={{
//         user: state.user,
//         token: state.token,
//         isAdmin: state.isAdmin,
//         isUserLoggedIn: state.isUserLoggedIn,
//         dispatch,
//       }}
//     >
//       {children}
//     </authContext.Provider>
//   );
// };

// // Consistent export
// export { authContext, AuthContextProvider };




// import React, { createContext, useEffect, useReducer } from "react";

// // Initial state
// const initialState = {
//   user:
//     localStorage.getItem("user") !== "undefined"
//       ? JSON.parse(localStorage.getItem("user"))
//       : null,
//   token: localStorage.getItem("token") || null,
//   isAdmin: localStorage.getItem("isAdmin") || null,
//   isUserLoggedIn: localStorage.getItem("token") !== null,
// };

// // Create context
// const AuthContext = createContext(initialState);

// // Reducer function
// const authReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN_START":
//       return {
//         user: null,
//         token: null,
//         isAdmin: null,
//         isUserLoggedIn: false,
//       };

//     case "LOGIN_SUCCESS":
//       return {
//         user: action.payload.user,
//         token: action.payload.token,
//         isAdmin: action.payload.isAdmin,
//         isUserLoggedIn: true,
//       };

//     case "LOGOUT":
//       return {
//         user: null,
//         token: null,
//         isAdmin: null,
//         isUserLoggedIn: false,
//       };

//     default:
//       return state;
//   }
// };

// // AuthContextProvider component
// const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(state.user));
//     localStorage.setItem("token", state.token);
//     localStorage.setItem("isAdmin", state.isAdmin);
//     localStorage.setItem("isUserLoggedIn", state.isUserLoggedIn);
//   }, [state]);

//   return (
//     <AuthContext.Provider
//       value={{
//         user: state.user,
//         token: state.token,
//         isAdmin: state.isAdmin,
//         isUserLoggedIn: state.isUserLoggedIn,
//         dispatch,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Named exports (consistent)
// export { AuthContext, AuthContextProvider };
