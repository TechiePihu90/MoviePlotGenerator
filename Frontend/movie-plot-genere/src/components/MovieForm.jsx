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
      // console.log("Backend Response:", response.data); 
      setPlot(response.data.response);
    } catch (error) {
      console.error("Error generating plot:", error);
      setPlot("Failed to generate plot. Try again!");
    }
    setLoading(false);
  };

  return (
    <div>
 <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6">

<textarea
   className="w-full max-w-lg h-32 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none bg-white text-gray-700 placeholder-gray-400"
  placeholder="Enter 2-3 lines of a movie idea..."
  value={input}
  onChange={(e) => setInput(e.target.value)}
/>
<button
  className="w-full max-w-lg mt-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300 ease-in-out disabled:opacity-50"
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
