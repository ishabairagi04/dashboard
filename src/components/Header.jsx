import React from "react";

export default function Header({ query, setQuery }) {
  return (
    <header className="w-full bg-white border-b sticky top-0 z-10">
      
     
     
      <div className="h-16 flex items-center justify-between px-8 relative">
      
      
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
            G
          </div>
          <div className="text-xl font-extrabold text-gray-800">GOODFOOD</div>
        </div>
        
     
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <input
              aria-label="Search"
              className="w-96 border border-gray-200 bg-gray-50 px-4 py-2 pl-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        
        
        <div className="flex items-center space-x-3 text-sm text-gray-700">
          <span className="font-medium hidden sm:block">Delicious Burger</span>
       
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold text-xs cursor-pointer">
            DB
          </div>
        </div>
      </div>
    </header>
  );
}