import React, { useState, useEffect } from "react";
import Spinner from "../components/UI/Spinner";

const API_KEY = "b3c9f896bfb8ae2c856d255a0d6e49b9"; // Replace with your GNews API key
const API_URL = `https://gnews.io/api/v4/search?q=artificial+intelligence+AI+data+science&lang=en&max=50&token=${API_KEY}`;


const Newsfeed = () => {
    const [newsfeed, setNewsfeed] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                if (data.articles) {
                    // Remove duplicates based on title
                    const uniqueArticles = [];
                    const seenTitles = new Set();

                    data.articles.forEach((article) => {
                        if (!seenTitles.has(article.title)) {
                            seenTitles.add(article.title);
                            uniqueArticles.push(article);
                        }
                    });

                    setNewsfeed(uniqueArticles);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching news", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="max-w-7xl mx-auto pt-2 px-6">
            <header className="text-center mb-8">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
                    Latest{" "}
                    <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
                        AI News
                    </span>
                </h2>
                <p className="text-gray-400 mt-2 text-lg">Stay updated with the latest AI trends</p>
            </header>

            {loading ? (
                <div className="flex flex-col items-center justify-center">
                    <Spinner/>
                </div>
            ) : (
                <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
                    {newsfeed.map((article, index) => (
                        <li key={index} className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                            {article.image && (
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="mb-6 shadow-md rounded-lg bg-gray-900 w-full h-[200px] sm:w-[17rem] sm:h-[200px] sm:mb-0 xl:mb-6 xl:w-full object-cover"
                                    width="300"
                                    height="200"
                                />
                            )}
                            <div className="order-1 sm:ml-6 xl:ml-0">
                                <h3 className="mb-1 text-white font-semibold">{article.title}</h3>
                                <p className="prose prose-sm text-gray-400">{article.description || "No description available"}</p>
                                <a
                                    className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white focus:ring-gray-500 mt-6"
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Read more
                                    <svg className="overflow-visible ml-3 text-gray-500 group-hover:text-gray-300" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M0 0L3 3L0 6"></path>
                                    </svg>
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Newsfeed;
