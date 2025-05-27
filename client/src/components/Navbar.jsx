import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-blue-600">Christian Meza</h1>
      <ul className="flex gap-6 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="hover:text-blue-600 transition">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
