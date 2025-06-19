import { FaFilm } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-purple-700 to-blue-600 p-6 shadow-xl flex items-center justify-center gap-4">
      <FaFilm className="text-yellow-300 text-8xl drop-shadow-lg" />
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg tracking-wider !text-white">
        Movie Plot Generator
      </h1>
    </header>
  );
};

export default Header;


