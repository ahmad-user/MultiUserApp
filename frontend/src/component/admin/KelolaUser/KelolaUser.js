import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const KelolaUser = () => {
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const response = await axios.get("http://localhost:5000/token");
        const newToken = response.data.accessToken;
        localStorage.setItem(newToken);
        const decoded = jwtDecode(newToken);
        setEmail(decoded.email);
      } catch (error) {
        if (error.response) {
          navigate("/");
        } else {
          console.error("Error refreshing token:", error);
        }
      }
    };

    const fetchData = async () => {
      try {
        await refreshToken();
        await getUsers();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [navigate]);

  const getUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:5000/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = (user) => {
    navigate(`/EditUser/${user.id}`, { state: { user } });
  };

  const handleAdd = () => {
    navigate("/TambahUser");
  };

  return (
    <div className="container mt-5">
      <h1>
        <strong>Welcome Back Admin : </strong> {email}
      </h1>
      <button onClick={() => handleAdd()} className="button is-info">
        Tambah
      </button>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>NO</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => handleEdit(user)}
                    className="button is-info"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="button is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No users found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default KelolaUser;
