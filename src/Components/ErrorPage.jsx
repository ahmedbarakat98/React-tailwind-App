import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return <>
      <div className="flex flex-col items-center justify-center h-screen text-center bg-[#2C3E50] text-white">
        <h1 className="text-8xl font-bold text-[#00D492]">404</h1>
        <h2 className="text-3xl mt-4">Page Not Found</h2>
        <p className="mt-2 text-lg opacity-80">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-[#00D492] text-[#2C3E50] font-semibold rounded-xl shadow-md hover:opacity-90 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </>
}
