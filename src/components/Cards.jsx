
import React from "react";

export default function Card({ title, subtitle, stats = {} }) {
  return (
    <article className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-lg">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-400">Active</div>
          <div className="font-bold">{stats.members ?? "-"}</div>
        </div>
      </div>
      <div className="mt-3 text-sm text-gray-600">{stats.desc ?? "No description"}</div>
      <div className="mt-4 flex space-x-2">
        <button className="px-3 py-1 border rounded text-sm">Open</button>
        <button className="px-3 py-1 border rounded text-sm">Members</button>
      </div>
    </article>
  );
}
