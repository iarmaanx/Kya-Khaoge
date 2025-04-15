import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1950&q=80')`,
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex flex-col items-center justify-center flex-grow text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 mt-6 font-sans tracking-wide ">
          Welcome to the Virtual Treat World! 🍽️
          </h1>
          <Link
            to="/game"
            className="px-6 py-3 bg-yellow-400 text-black font-bold text-lg rounded-full hover:bg-yellow-300 transition-all duration-300"
          >
            Start Playing 🚀
          </Link>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
