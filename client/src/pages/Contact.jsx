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

  return <div>Contact</div>;
}
