// import { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { BACKENDURL } from "../Config/Config";

// const AdminUserManagement = () => {
//   const [users, setUsers] = useState([]); // Ensure it's an array
//   const [loading, setLoading] = useState(false);

//   // Fetch all users
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(BACKENDURL + "/api/v1/auth/allusers");

//         console.log("API Response:", response.data); // Debugging line

//         if (Array.isArray(response.data.users)) {
//           setUsers(response.data.users);
//         } else {
//           console.error("Expected an array but got:", response.data);
//           setUsers([]); // Fallback to an empty array
//         }
//       } catch (error) {
//         console.error("Error fetching users:", error);
//         toast.error("Failed to load users");
//         setUsers([]); // Prevents errors on .map()
//       }
//     };
//     fetchUsers();
//   }, []);

//   // Handle role update
//   const handleRoleChange = async (userId, isAdmin) => {
//     setLoading(true);
//     try {
//       const response = await axios.put(
//         BACKENDURL + "/api/v1/auth/update-role",
//         { userId, isAdmin },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       toast.success(response.data.message);
//       setUsers((prevUsers) =>
//         prevUsers.map((user) =>
//           user._id === userId ? { ...user, isAdmin } : user
//         )
//       );
//     } catch (error) {
//       console.error("Error updating role:", error);
//       toast.error("Failed to update user role");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage User Roles</h2>
//       <div className="overflow-x-auto">
//         {users.length === 0 ? (
//           <p className="text-gray-600 text-center">No users found</p>
//         ) : (
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="py-2 px-4 border-b text-left">Name</th>
//                 <th className="py-2 px-4 border-b text-left">Email</th>
//                 <th className="py-2 px-4 border-b text-left">Role</th>
//                 <th className="py-2 px-4 border-b text-center">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Array.isArray(users) &&
//                 users.map((user) => (
//                   <tr key={user._id} className="hover:bg-gray-100">
//                     <td className="py-2 px-4 border-b">{user.name}</td>
//                     <td className="py-2 px-4 border-b">{user.email}</td>
//                     <td className="py-2 px-4 border-b">
//                       <select
//                         className="border rounded px-2 py-1"
//                         value={user.isAdmin ? "admin" : "user"}
//                         onChange={(e) =>
//                           handleRoleChange(user._id, e.target.value === "admin")
//                         }
//                       >
//                         <option value="user">User</option>
//                         <option value="admin">Admin</option>
//                       </select>
//                     </td>
//                     <td className="py-2 px-4 border-b text-center">
//                       <button
//                         onClick={() => handleRoleChange(user._id, !user.isAdmin)}
//                         className={`px-4 py-1 rounded text-white ${
//                           user.isAdmin ? "bg-red-500" : "bg-green-500"
//                         } hover:opacity-80`}
//                         disabled={loading}
//                       >
//                         {loading ? "Updating..." : user.isAdmin ? "Revoke Admin" : "Make Admin"}
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminUserManagement;




// import React, { useContext, useState } from "react";
// import { authContext } from "../context/authContext";

// const AdminRoleManager = () => {
//   const { user, isAdmin, dispatch } = useContext(authContext);
//   const [users, setUsers] = useState([
//     { id: 1, name: "John Doe", role: "user" },
//     { id: 2, name: "Jane Smith", role: "admin" },
//   ]);

//   const handleRoleChange = (id, newRole) => {
//     const updatedUsers = users.map((u) =>
//       u.id === id ? { ...u, role: newRole } : u
//     );
//     setUsers(updatedUsers);
//     localStorage.setItem("users", JSON.stringify(updatedUsers));
//   };

//   if (!isAdmin) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-red-500 text-lg font-semibold">
//           Access Denied: Admins Only
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto mt-10 p-5 bg-white shadow-md rounded-lg">
//       <h2 className="text-xl font-bold mb-5">Manage User Roles</h2>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="p-3 border">Name</th>
//             <th className="p-3 border">Role</th>
//             <th className="p-3 border">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map(({ id, name, role }) => (
//             <tr key={id} className="text-center border-b">
//               <td className="p-3 border">{name}</td>
//               <td className="p-3 border">{role}</td>
//               <td className="p-3 border">
//                 <select
//                   className="p-2 border rounded"
//                   value={role}
//                   onChange={(e) => handleRoleChange(id, e.target.value)}
//                 >
//                   <option value="user">User</option>
//                   <option value="admin">Admin</option>
//                 </select>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminRoleManager;




import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { authContext } from "../context/authContext";
import { BACKENDURL } from "../Config/Config";

const AdminRoleManager = () => {
  const { isAdmin } = useContext(authContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${BACKENDURL}/api/v1/auth/allusers`);
      setUsers(response.data.users || []);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to fetch user data.");
      setLoading(false);
    }
  };

  const handleRoleChange = async (userId, newRole) => {
    try {
      await axios.put(`${BACKENDURL}/api/v1/auth/update-role/${userId}`, { role: newRole });

      // Update UI with new role
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.user.id === userId ? { ...user, user: { ...user.user, role: newRole } } : user
        )
      );
    } catch (err) {
      console.error("Error updating role:", err);
      alert("Failed to update role. Please try again.");
    }
  };

  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg font-semibold">Access Denied: Admins Only</p>
      </div>
    );
  }

  if (loading) return <div className="text-center text-lg font-bold">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Manage User Roles</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Role</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ user }) => (
            <tr key={user.id} className="text-center border-b">
              <td className="p-3 border">{user.name}</td>
              <td className="p-3 border">{user.email}</td>
              <td className="p-3 border">{user.role}</td>
              <td className="p-3 border">
                <select
                  className="p-2 border rounded"
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRoleManager;
