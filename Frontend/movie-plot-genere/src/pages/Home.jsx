import { useState } from "react";
import MovieForm from "../components/MovieForm";
import GeneratedPlot from "../components/GeneratedPlot";

const Home = () => {
  const [plot, setPlot] = useState("");

  return (
    <div className="min-h-screen px-4 py-10 flex flex-col items-center gap-10">
      
      {/* Independent MovieForm block */}
      <div className="w-full max-w-lg">
        <MovieForm setPlot={setPlot} />
      </div>

      {/* Independent GeneratedPlot block */}
      {plot && (
        <div className="w-full max-w-lg">
          <GeneratedPlot plot={plot} />
        </div>
      )}
    </div>
  );
};

export default Home;
