import { useState } from "react";
import axios from "axios";

const MovieForm = ({ setPlot }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePlot = async () => {
    if (!input) return;
    setLoading(true);
    try {
      const backendURL = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(`${backendURL}/generate`, { prompt: input });
      setPlot(response.data.response);
    } catch (error) {
      console.error("Error generating plot:", error);
      setPlot("Failed to generate plot. Try again!");
    }
    setLoading(false);
  };

  return (


    <div className="w-full max-w-lg mx-auto">
      <div className="flex flex-col gap-6 p-6 rounded-xl shadow-lg">

        <textarea
          className="w-full h-40 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none bg-gray-100 text-gray-700 placeholder-gray-500"
          placeholder="Enter 2-3 lines of a movie idea..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out disabled:opacity-50"
          onClick={generatePlot}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Story"}
        </button>

      </div>
    </div>
  );
};

export default MovieForm;
