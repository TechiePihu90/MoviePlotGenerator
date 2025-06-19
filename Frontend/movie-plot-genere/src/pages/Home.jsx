import { useState } from "react";
import MovieForm from "../components/MovieForm";
import GeneratedPlot from "../components/GeneratedPlot";

const Home = () => {
  const [plot, setPlot] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <MovieForm setPlot={setPlot} />
      {plot && <GeneratedPlot plot={plot} />}
    </div>
  );
};

export default Home;
