// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { BACKENDURL } from '../../Config/Config';
// import RentalCard from '../rental/RentalCard';

// const RentalResults = () => {
//     const { city } = useParams(); // Capture city name from the URL
//     const [rentals, setRentals] = useState([]);
//     const [loading, setLoading] = useState(true);

    
//     useEffect(() => {
//         axios.get(BACKENDURL + `/api/v1/rental/search?city=${city}`)
//             .then(response => {
//                 console.log('Rental data:', response.data); // Log the data for debugging
//                 setRentals(response.data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 console.error('Error fetching rental data:', error);
//                 setLoading(false);
//             });
//     }, [city]);

//     return (
//         <div className='bg-slate-100'>
//             {/* <h2>Rentals in {city}</h2> */}
//             <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 mt-2">
//     Rentals in <span className="text-blue-500">{city}</span>
// </h2>
//             {loading ? <p>Loading...</p> : (
//                 <div>
//                     {rentals.length > 0 ? (
//                         <ul>
//                             {rentals.map(rental => (                               
//                                 <div className='lg:px-20 '>
//                                      <RentalCard rental={rental}/>
//                                 </div>                               
//                             ))}
//                         </ul>
//                     ) : (
//                         <p>No rentals found in {city}</p>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default RentalResults;




import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BACKENDURL } from '../../Config/Config';
import RentalCard from '../rental/RentalCard';

const RentalResults = () => {
    const { city } = useParams(); // Capture city name from the URL
    const [rentals, setRentals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(BACKENDURL + `/api/v1/rental/search?city=${city}`)
            .then(response => {
                console.log('Rental data:', response.data); // Log the data for debugging
                setRentals(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching rental data:', error);
                setLoading(false);
            });
    }, [city]);

    return (
        <div className='bg-slate-100'>
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6 mt-0">
                Rentals in <span className="text-blue-500 mt-2">{city}</span>
            </h2>
            {loading ? <p>Loading...</p> : (
                <div>
                    {rentals.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-3 lg:px-20">
                            {rentals.map((rental, index) => (
                                <div key={index} className="mb-6">
                                    <RentalCard rental={rental} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No rentals found in {city}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default RentalResults;
