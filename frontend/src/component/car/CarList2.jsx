// CarList.js
// import React from "react";
// import Carcard2 from "./Carcard2";
// import { useState } from "react";

// const CarList2 = ({ cars }) => {
//   const [loading, setLoading] = useState(true);
//   return (
//     <div className="row align-items-center g-4 mt-2">      
//       {cars.map((car, index) => (
//         <div className="col-md-4" key={index}>
//           <Carcard2 car={car} />
//         </div>
//       ))}
//     </div>
    
//   );
// };

// export default CarList2;



import React from "react";
import Carcard2 from "./Carcard2";
import { useState } from "react";

const CarList2 = ({ cars }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col items-center gap-4 mt-2">
      {cars.map((car, index) => (
        <div
          key={index}
          className="w-full max-w-7xl bg-white border border-gray-300 rounded-lg shadow-md"
        >
          <Carcard2 car={car} />
        </div>
      ))}
    </div>
  );
};

export default CarList2;




