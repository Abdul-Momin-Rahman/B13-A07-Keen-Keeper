import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">

       
        <h1 className="text-7xl font-extrabold text-gray-800 mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Page Not Found
        </h2>

        <p className="text-gray-500 mb-6 max-w-md">
            Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
            to="/"
            className="px-6 py-3 bg-[#244D3F] text-white rounded-xl shadow hover:bg-[#1cad7d] hover:-translate-y-0.5 transition-all duration-200"
        >
            Go Back Home
        </Link>

    </div>
}


export default NotFound;