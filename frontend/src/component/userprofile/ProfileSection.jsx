




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
