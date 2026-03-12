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
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2 text-center">
          Message Fetcher
        </h1>
        <p className="text-gray-500 text-center mb-8 text-sm tracking-wide">
          Enter your name to fetch a personalized message
        </p>
        <form className="mb-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 text-black bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:bg-white transition duration-200"
          />
        </form>
        <button 
          onClick={() => message ? setMessage("") : fetchMessage()}
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95"
        >
          {message ? "Hide Message" : "Fetch Message"}
        </button>
        {message && (
          <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl border-2 border-purple-400 shadow-lg">
            <p className="text-purple-900 font-bold text-center text-lg">{message}</p>
          </div>
        )}
      </div>
    </div>
  )
}