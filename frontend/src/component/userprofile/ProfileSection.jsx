// import React from "react";
// import AvatarUpload from "./AvatarUpload";
// import UpdateAccount from "./UpdateAccount";
// import Dasborad from "./Dasborad";
// import Usercard from "./Usercard";
// // import "./ProfileSection.css"; // Include your CSS file for styling
// const ProfileSection = () => {
//     return (
//         <section className="pt-5 gray-simple position-relative">
//             <div className="container">
//                 {/* Offcanvas Toggle */}
//                 <Dasborad/>
//                 <div className="row align-items-start justify-content-between gx-xl-4">
//                     {/* User Card */}
//                     <Usercard/>
//                     {/* Form Section */}
//                     <div className="col-xl-8 col-lg-8 col-md-12">
//                         {/* Personal Information */}
//                         <div className="card mb-4">
//                             <div className="card-header">
//                                 <h4>
//                                     <i className="fa-solid fa-file-invoice me-2"></i>Personal Information
//                                 </h4>
//                             </div>
//                             <div className="card-body">
//                                 <div className="row align-items-center justify-content-start">

//                                     <AvatarUpload />
//                                     <div className="col-xl-6 col-lg-6 col-md-6">
//                                         <div className="form-group">
//                                             <label className="form-label">First Name</label>
//                                             <input type="text" className="form-control" defaultValue="Adam K" />
//                                         </div>
//                                     </div>
//                                     {/* Add more fields */}

//                                     <div className="row">
//                                         {/* Last Name */}
//                                         <div className="col-xl-6 col-lg-6 col-md-6">
//                                             <div className="form-group">
//                                                 <label className="form-label">Last Name</label>
//                                                 <input type="text" className="form-control" defaultValue="Divliars" />
//                                             </div>
//                                         </div>

//                                         {/* Email ID */}
//                                         <div className="col-xl-6 col-lg-6 col-md-6">
//                                             <div className="form-group">
//                                                 <label className="form-label">Email ID</label>
//                                                 <input type="text" className="form-control" defaultValue="adamkruck@gmail.com" />
//                                             </div>
//                                         </div>

//                                         {/* Mobile */}
//                                         <div className="col-xl-6 col-lg-6 col-md-6">
//                                             <div className="form-group">
//                                                 <label className="form-label">Mobile</label>
//                                                 <input type="text" className="form-control" defaultValue="9856542563" />
//                                             </div>
//                                         </div>

//                                         {/* Date of Birth */}
//                                         <div className="col-xl-6 col-lg-6 col-md-6">
//                                             <div className="form-group">
//                                                 <label className="form-label">Date of Birth</label>
//                                                 <input type="date" className="form-control" defaultValue="2000-02-04" />
//                                             </div>
//                                         </div>

//                                         {/* Gender */}
//                                         <div className="col-xl-6 col-lg-6 col-md-6">
//                                             <div className="form-group">
//                                                 <label className="form-label">Gender</label>
//                                                 <input type="text" className="form-control" defaultValue="Male" />
//                                             </div>
//                                         </div>

//                                         {/* About Info */}
//                                         <div className="col-xl-12 col-lg-12 col-md-12">
//                                             <div className="form-group">
//                                                 <label className="form-label">About Info</label>
//                                                 <textarea
//                                                     className="form-control ht-120"
//                                                     defaultValue="Lorem ipsum dolor sit amet, nec virtute nusquam ex. Ex sed diceret constituam inciderint, accusamus imperdiet has te. Id qui liber nemore semper, modus appareat philosophia ut eam. Assum tibique singulis at mel."
//                                                 ></textarea>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
                                
//                             </div>

//                         </div>
//                         <UpdateAccount/>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ProfileSection;




// import React, { useEffect, useState } from "react";
// import AvatarUpload from "./AvatarUpload";
// import UpdateAccount from "./UpdateAccount";
// import Dasborad from "./Dasborad";
// import Usercard from "./Usercard";
// import axios from "axios";
// import { BACKENDURL } from "../../Config/Config";


// const ProfileSection = () => {
//     const [userData, setUserData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Fetch user data from API
//         const fetchUserData = async () => {
//             try {
//                 const token = localStorage.getItem("token");
//                 const response = await axios.get(BACKENDURL + "/api/v1/auth/getUser",
//                     {
//                         headers: { Authorization: `Bearer ${token}` },
//                     },
//                 ); // Replace with your actual API endpoint
//                 const user = response.data; // Adjust based on your API's response structure
//                 setUserData(user);
//             } catch (err) {
//                 setError("Failed to fetch user data. Please try again later.");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUserData();
//     }, []);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <section className="pt-5 gray-simple position-relative">
//             <div className="container">
//                 <Dasborad />
//                 <div className="row align-items-start justify-content-between gx-xl-4">
//                     <Usercard user={userData} />
//                     <div className="col-xl-8 col-lg-8 col-md-12">
//                         <div className="card mb-4">
//                             <div className="card-header">
//                                 <h4>
//                                     <i className="fa-solid fa-file-invoice me-2"></i>Personal Information
//                                 </h4>
//                             </div>
//                             <div className="card-body">
//                                 <div className="row align-items-center justify-content-start">
//                                     <AvatarUpload avatar={userData.avatar} />
//                                     <div className="col-xl-6 col-lg-6 col-md-6">
//                                         <div className="form-group">
//                                             <label className="form-label">First Name</label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 defaultValue={userData.firstName || ""}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="row">
//                                         <div className="col-xl-6 col-lg-6 col-md-6">
//                                             <div className="form-group">
//                                                 <label className="form-label">Last Name</label>
//                                                 <input
//                                                     type="text"
//                                                     className="form-control"
//                                                     defaultValue={userData.lastName || ""}
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="col-xl-6 col-lg-6 col-md-6">
//                                             <div className="form-group">
//                                                 <label className="form-label">Email ID</label>
//                                                 <input
//                                                     type="text"
//                                                     className="form-control"
//                                                     defaultValue={userData.email || ""}
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="col-xl-6 col-lg-6 col-md-6">
//                                             <div className="form-group">
//                                                 <label className="form-label">Mobile</label>
//                                                 <input
//                                                     type="text"
//                                                     className="form-control"
//                                                     defaultValue={userData.mobile || ""}
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="col-xl-6 col-lg-6 col-md-6">
//                                             <div className="form-group">
//                                                 <label className="form-label">Date of Birth</label>
//                                                 <input
//                                                     type="date"
//                                                     className="form-control"
//                                                     defaultValue={userData.dateOfBirth || ""}
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="col-xl-6 col-lg-6 col-md-6">
//                                             <div className="form-group">
//                                                 <label className="form-label">Gender</label>
//                                                 <input
//                                                     type="text"
//                                                     className="form-control"
//                                                     defaultValue={userData.gender || ""}
//                                                 />
//                                             </div>
//                                         </div>
//                                         <div className="col-xl-12 col-lg-12 col-md-12">
//                                             <div className="form-group">
//                                                 <label className="form-label">About Info</label>
//                                                 <textarea
//                                                     className="form-control ht-120"
//                                                     defaultValue={userData.aboutInfo || ""}
//                                                 ></textarea>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <UpdateAccount user={userData} />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ProfileSection;




import React, { useEffect, useState, useContext } from "react";
import AvatarUpload from "./AvatarUpload";
import UpdateAccount from "./UpdateAccount";
import Dasborad from "./Dasborad";
import Usercard from "./Usercard";
import axios from "axios";
import { BACKENDURL } from "../../Config/Config";
import { authContext } from "../../context/authContext";

const ProfileSection = () => {
  const { token, user, isUserLoggedIn } = useContext(authContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isUserLoggedIn || !token) {
      setError("User is not logged in.");
      setLoading(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/auth/getUser`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserData(response.data); // Adjust based on your API's response structure
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError(
          err.response?.data?.message || "Failed to fetch user data. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [token, isUserLoggedIn]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="pt-5 gray-simple position-relative">
      <div className="container">
        <Dasborad />
        <div className="row align-items-start justify-content-between gx-xl-4">
          <Usercard user={userData} />
          <div className="col-xl-8 col-lg-8 col-md-12">
            <div className="card mb-4">
              <div className="card-header">
                <h4>
                  <i className="fa-solid fa-file-invoice me-2"></i>Personal Information
                </h4>
              </div>
              <div className="card-body">
                <div className="row align-items-center justify-content-start">
                  <AvatarUpload avatar={userData.profilePic} />
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={user.name || ""}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={userData.lastName || ""}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Email ID</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={user.email || ""}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Mobile</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={userData.mobile || ""}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Date of Birth</label>
                        <input
                          type="date"
                          className="form-control"
                          defaultValue={userData.dateOfBirth || ""}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Gender</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={userData.gender || ""}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label className="form-label">About Info</label>
                        <textarea
                          className="form-control ht-120"
                          defaultValue={userData.aboutInfo || ""}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <UpdateAccount user={userData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;





// import React, { useEffect, useState } from "react";
// import AvatarUpload from "./AvatarUpload";
// import UpdateAccount from "./UpdateAccount";
// import Dasborad from "./Dasborad";
// import Usercard from "./Usercard";
// import axios from "axios";
// import { BACKENDURL } from "../../Config/Config";

// const ProfileSection = () => {
//     const [userData, setUserData] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
//                 const response = await axios.get(BACKENDURL + "/api/v1/auth/getUser", {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 setUserData(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError(err.message);
//                 setLoading(false);
//             }
//         };

//         fetchUserData();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <section className="pt-5 gray-simple position-relative">
//             <div className="container">
//                 {/* Offcanvas Toggle */}
//                 <Dasborad />
//                 <div className="row align-items-start justify-content-between gx-xl-4">
//                     {/* User Card */}
//                     <Usercard userData={userData} />
//                     {/* Form Section */}
//                     <div className="col-xl-8 col-lg-8 col-md-12">
//                         {/* Personal Information */}
//                         <div className="card mb-4">
//                             <div className="card-header">
//                                 <h4>
//                                     <i className="fa-solid fa-file-invoice me-2"></i>Personal Information
//                                 </h4>
//                             </div>
//                             <div className="card-body">
//                                 <div className="row align-items-center justify-content-start">
//                                     <AvatarUpload avatar={userData.avatar} />
//                                     <div className="col-xl-6 col-lg-6 col-md-6">
//                                         <div className="form-group">
//                                             <label className="form-label">First Name</label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 defaultValue={userData.firstName || ""}
//                                                 readOnly
//                                             />
//                                         </div>
//                                     </div>
//                                     {/* Last Name */}
//                                     <div className="col-xl-6 col-lg-6 col-md-6">
//                                         <div className="form-group">
//                                             <label className="form-label">Last Name</label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 defaultValue={userData.lastName || ""}
//                                                 readOnly
//                                             />
//                                         </div>
//                                     </div>
//                                     {/* Email ID */}
//                                     <div className="col-xl-6 col-lg-6 col-md-6">
//                                         <div className="form-group">
//                                             <label className="form-label">Email ID</label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 defaultValue={userData.email || ""}
//                                                 readOnly
//                                             />
//                                         </div>
//                                     </div>
//                                     {/* Mobile */}
//                                     <div className="col-xl-6 col-lg-6 col-md-6">
//                                         <div className="form-group">
//                                             <label className="form-label">Mobile</label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 defaultValue={userData.mobile || ""}
//                                                 readOnly
//                                             />
//                                         </div>
//                                     </div>
//                                     {/* Date of Birth */}
//                                     <div className="col-xl-6 col-lg-6 col-md-6">
//                                         <div className="form-group">
//                                             <label className="form-label">Date of Birth</label>
//                                             <input
//                                                 type="date"
//                                                 className="form-control"
//                                                 defaultValue={userData.dob || ""}
//                                                 readOnly
//                                             />
//                                         </div>
//                                     </div>
//                                     {/* Gender */}
//                                     <div className="col-xl-6 col-lg-6 col-md-6">
//                                         <div className="form-group">
//                                             <label className="form-label">Gender</label>
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 defaultValue={userData.gender || ""}
//                                                 readOnly
//                                             />
//                                         </div>
//                                     </div>
//                                     {/* About Info */}
//                                     <div className="col-xl-12 col-lg-12 col-md-12">
//                                         <div className="form-group">
//                                             <label className="form-label">About Info</label>
//                                             <textarea
//                                                 className="form-control ht-120"
//                                                 defaultValue={userData.about || ""}
//                                                 readOnly
//                                             ></textarea>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <UpdateAccount userData={userData} />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ProfileSection;
