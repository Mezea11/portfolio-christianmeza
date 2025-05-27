import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

export default function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/template")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Projects</h2>
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
