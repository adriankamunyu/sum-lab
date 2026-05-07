import { useState } from "react";
import AddProject from "./components/Add";
import ProjectList from "./components/List";

export default function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Project 1", description: "Description of the project" },
    { id: 2, title: "Project 2", description: "Description of the project" },
    { id: 3, title: "Project 3", description: "Description of the project" },
  ]);

  const handleAdd = (project) => {
    setProjects((prev) => [...prev, project]);
  };

  const handleRemove = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="max-w-md mx-auto px-4 py-6 font-sans">
      <h1 className="text-center text-xl font-bold border-b border-gray-300 pb-4 mb-5">
        Personal Project Showcase App
      </h1>
      <AddProject onAdd={handleAdd} />
      <ProjectList projects={projects} onRemove={handleRemove} />
    </div>
  );
}


