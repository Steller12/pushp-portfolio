import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import profilePicture from "../assets/profile-picture.jpg";
function Header() {
  return (
    <header className="max-w-2xl mx-auto px-6 pt-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={profilePicture}
            alt="Pushp Gupta"
            className="h-12 w-12 rounded-full object-cover border border-gray-800"
          />

          <div>
            <h1 className="text-xl font-semibold text-white">Pushp Gupta</h1>
            <p className="text-sm text-gray-400">
              Software Engineer | Full Stack & Systems-Oriented
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-400">
          <a
            href="https://github.com/Steller12"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FiGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/pushp-gupta/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <CiLinkedin size={18} />
          </a>

          <a
            href="https://leetcode.com/u/steller22/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <SiLeetcode size={18} />
          </a>

          <a
            href="mailto:pugpta2601@gmail.com"
            className="hover:text-white transition"
          >
            <MdOutlineEmail size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
