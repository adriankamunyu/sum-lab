import { useState } from "react";

export default function AddProject({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return;
    onAdd({ id: Date.now(), title: title.trim(), description: description.trim() });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="bg-gray-100 border border-gray-300 rounded-xl p-5 mb-5">
      <h2 className="text-xl font-bold mb-4">Add Project</h2>

      <label className="block text-sm mb-1">Title</label>
      <input
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project title"
      />

      <label className="block text-sm mb-1">Description</label>
      <textarea
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md text-sm resize-y focus:outline-none focus:ring-2 focus:ring-gray-400"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Project description"
        rows={4}
      />

      <button
        className="px-5 py-2 bg-white border border-gray-300 rounded-md text-sm hover:bg-gray-50 active:bg-gray-100 cursor-pointer"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
}