import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/projects")
      .then((res) => {
        console.log("API response:", res.data); // 🧠 log response to check it's an array
        setProjects(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects.");
        setProjects([]);
      });
  }, []);

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="mb-4 text-gray-600">{project.description}</p>
              {project.url && (
                <a
                  href={project.url}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Project
                </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        !error && <p>No projects found.</p>
      )}
    </section>
  );
}
