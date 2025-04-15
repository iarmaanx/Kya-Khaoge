import { Link } from "react-router-dom";
import githubLogo from '../assets/github-logo.png'; // 👈 Correct way to import image

function Header() {
  return (
    <div className="header flex items-center justify-between px-5 py-3">
      {/* Logo / Title */}
      <div>
        <Link to="/" className="text-white text-2xl">
          <h2 className="satisfy-regular">Kya Khaoge 🍽️</h2>
        </Link>
      </div>

      {/* Links Section */}
      <div className="flex items-center gap-6">
        {/* History Page Link */}
        <Link to="/history" className="text-yellow-400 hover:underline text-lg">
          History
        </Link>

        {/* GitHub Icon */}
        <a
          href="https://github.com/iarmaansingh/Kya-Khaoge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="GitHub" className="h-6.5 w-14" />
        </a>
      </div>
    </div>
  );
}

export default Header;
