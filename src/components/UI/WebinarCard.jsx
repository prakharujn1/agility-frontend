import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { server } from "../../main";
import { WebinarsData } from "../../context/WebinarsContext";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const WebinarCard = ({ webinar }) => {
    const [copied, setCopied] = useState(false);
    const { fetchWebinars } = WebinarsData();
    const { user, role } = useAuth();

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`${window.location.origin}/webinar/${webinar.room_id}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const deleteHandler = async (id) => {
        if (confirm("Are you sure you want to delete this webinar?")) {
            try {
                const response = await axios.delete(`${server}/api/webinar/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });

                alert(response?.data?.message || "Webinar deleted successfully.");
                fetchWebinars();
            } catch (error) {
                console.error("Delete error:", error);
                alert(error.response?.data?.message || "Failed to delete webinar.");
            }
        }
    };

    return (
        <div className="bg-gray-800 text-white shadow-xl rounded-2xl p-5 w-full max-w-md mx-auto transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between h-[500px] overflow-hidden">
            {/* Webinar Image */}
            <div className="relative h-48 w-full">
                <img
                    src={`${server}/${webinar.image}`}
                    alt={webinar.title}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
            </div>

            {/* Webinar Content */}
            <div className="flex-grow mt-4">
                <h2 className="text-2xl font-bold text-[#1E88E5] tracking-wide text-center">
                    {webinar.title}
                </h2>
                <p className="text-gray-200 text-base mt-2 leading-relaxed line-clamp-3">
                    {webinar.description}
                </p>
                <p className="text-gray-100 text-lg font-semibold mt-3">
                    📅 Time: {webinar.time}
                </p>
                <p className="text-gray-300 text-md font-medium">
                    🎤 Hosted by: <span className="text-blue-400">{webinar.createdBy}</span>
                </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between mt-5 gap-3 flex-nowrap">
                {user && role === "admin" ? (
                    <>
                        <button
                            className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
                            onClick={() => deleteHandler(webinar._id)}
                        >
                            Delete
                        </button>
                        <a
                            href={`/admin/webinar/${webinar.room_id}`}
                            className="bg-gradient-to-r from-[#64B5F6] to-[#1a89ea] hover:from-[#87c5f7] hover:to-[#489ae2] text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 flex-grow text-center"
                        >
                            Start Webinar
                        </a>
                        <button
                            className="bg-gray-800 hover:bg-gray-700 text-white w-12 h-12 flex justify-center items-center rounded-full shadow-md transition-all duration-300 transform hover:scale-110"
                            onClick={handleCopyLink}
                        >
                            {copied ? <Check className="text-green-400 w-6 h-6" /> : <Copy className="w-6 h-6" />}
                        </button>
                    </>
                ) : (
                    <>
                        <a
                            href={`/webinar/${webinar.room_id}`}
                            className="bg-gradient-to-r from-[#64B5F6] to-[#1a89ea] hover:from-[#87c5f7] hover:to-[#489ae2] text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 flex-grow text-center"
                        >
                            Join Webinar
                        </a>
                        <button
                            className="bg-gray-800 hover:bg-gray-700 text-white w-12 h-12 flex justify-center items-center rounded-full shadow-md transition-all duration-300 transform hover:scale-110"
                            onClick={handleCopyLink}
                        >
                            {copied ? <Check className="text-green-400 w-6 h-6" /> : <Copy className="w-6 h-6" />}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default WebinarCard;
