import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../main';
import AdminLayout from '../../components/Layout/AdminLayout';
import toast from 'react-hot-toast';

const AdminUsers = () => {
    const { user, role } = useAuth();
    const navigate = useNavigate();

    if (user && role !== "admin") return navigate("/");

    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState("");

    const fetchUsers = async () => {
        try {
            const { data } = await axios.get(`${server}/api/users`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setUsers(data.admins);
        } catch (error) {
            toast.success(error.response?.data?.message);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleUpdateRole = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.put(
                `${server}/api/user/upgrade`,
                { email },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            toast.success(data.message);
            fetchUsers();
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to update role");
        }
        setEmail("");
    };


    const downgradeRole = async (id) => {
        if (confirm("Are you sure you want to update this user role?")) {
            try {
                const { data } = await axios.put(`${server}/api/user/dgrade/${id}`, {}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                toast.success(data.message);
                await fetchUsers();
            } catch (error) {
                toast.error(error.response?.data?.message);
            }
        }
    };

    return (
        <AdminLayout>

            <div className="w-full max-w-4xl mx-auto p-6 text-gray-900 dark:text-gray-200 rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-center mb-6">All Admins</h1>

                {/* Table */}
                <div className="overflow-x-auto rounded-lg">
                    <table className="w-full border border-gray-300 dark:border-gray-600">
                        <thead className="bg-gray-300 dark:bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3 border dark:border-gray-600">#</th>
                                <th className="p-3 border dark:border-gray-600">Username</th>
                                <th className="p-3 border dark:border-gray-600">Email</th>
                                <th className="p-3 border dark:border-gray-600">Role</th>
                                <th className="p-3 border dark:border-gray-600">Update Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((e, i) => (
                                <tr key={e._id} className="hover:bg-gray-200 dark:hover:bg-gray-700">
                                    <td className="p-3 border dark:border-gray-600">{i + 1}</td>
                                    <td className="p-3 border dark:border-gray-600">{e.username}</td>
                                    <td className="p-3 border dark:border-gray-600">{e.email}</td>
                                    <td className="p-3 border dark:border-gray-600">{e.role}</td>
                                    <td className="p-3 border dark:border-gray-600">
                                        <button
                                            onClick={() => downgradeRole(e._id)}
                                            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white py-1 px-3 rounded transition">
                                            Remove Admin
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Form Section */}
                <div className="mt-6 flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-96 mx-auto">
                    <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-gray-200">
                        Update Role to Admin
                    </h2>

                    <form onSubmit={handleUpdateRole} className="w-full">
                        <input
                            type="email"
                            placeholder="Enter user email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 mb-3 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-500 dark:bg-blue-700 text-white p-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 transition duration-300"
                        >
                            Update Role
                        </button>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminUsers;
