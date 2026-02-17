import Pushp_CV from "../assets/Pushp_CV.pdf";

function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-6 py-16 text-xs text-gray-400 flex items-center justify-between">
      <span>© {new Date().getFullYear()} Pushp Gupta</span>

      <a href={Pushp_CV} download className="hover:text-gray-200 transition">
        Download CV
      </a>
    </footer>
  );
}

export default Footer;
