"use client";
import { useState } from "react";

export default function Home(){
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function fetchMessage() {
    const res = await fetch(`/api/hello?name=${name}`);
    const data = await res.json()
    setMessage(data.message);
  }

  return(
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Message Fetcher
        </h1>
        <form className="mb-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-3 px-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
        <button 
          onClick={() => message ? setMessage("") : fetchMessage()}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
        >
          {message ? "Hide Message" : "Fetch Message"}
        </button>
        {message && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-700 font-medium">{message}</p>
          </div>
        )}
      </div>
    </div>
  )
}