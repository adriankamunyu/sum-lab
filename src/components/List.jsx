import { useState } from "react";

export default function ProjectList({ projects, onRemove }) {
  const [search, setSearch] = useState("");

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="border border-gray-300 rounded-xl p-4">
      <input
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Projects"
      />

      {filtered.map((project, index) => (
        <div
          key={project.id}
          className={`flex items-center gap-3 py-3 ${
            index < filtered.length - 1 ? "border-b border-gray-100" : ""
          }`}
        >
          <button
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md bg-white hover:bg-gray-50 active:bg-gray-100 cursor-pointer text-gray-500 shrink-0"
            onClick={() => onRemove(project.id)}
          >
            ✕
          </button>
          <div>
            <div className="font-semibold text-sm">{project.title}</div>
            <div className="text-xs text-gray-500">{project.description}</div>
          </div>
        </div>
      ))}

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 text-sm mt-3">No projects found.</p>
      )}
    </div>
  );
}