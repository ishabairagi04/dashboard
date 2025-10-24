import React, { useState, useMemo } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const ViewReportButton = () => (
  <button className="text-sm text-indigo-500 font-medium hover:text-indigo-700">
    View Report
  </button>
);

const RevenuePanel = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex justify-between items-start">
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-1">Revenue</h2>
        <div className="text-3xl font-bold text-gray-900">IDR 7.852.000</div>
        <div className="text-sm mt-1">
          <span className="text-green-500 font-medium mr-1">↑ 2.1%</span>
          <span className="text-gray-500">vs last week</span>
        </div>
        <p className="text-xs text-gray-500 mt-2">Sales from 1-12 Dec, 2020</p>
      </div>
      <ViewReportButton />
    </div>

    <div className="h-40 mt-6 flex items-end justify-between space-x-2 px-1">
      {[50, 65, 40, 80, 45, 95, 30, 70, 55, 90, 85, 60].map((height, i) => (
        <div key={i} className="flex flex-col items-center w-1/12">
          <div
            style={{ height: `${height * 0.8}px` }}
            className={`w-2.5 rounded-t-sm ${i % 2 === 0 ? 'bg-gray-300' : 'bg-indigo-500'}`}
          />
          <span className="text-xs text-gray-500 mt-1">{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
        </div>
      ))}
    </div>
    <div className="mt-4 flex space-x-8 text-xs text-gray-500 justify-start ml-2">
      <span className="flex items-center">
        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-1.5" /> Last 6 days
      </span>
      <span className="flex items-center">
        <div className="w-2 h-2 rounded-full bg-gray-400 mr-1.5" /> Last Week
      </span>
    </div>
  </div>
);

const OrderTimePanel = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm h-full">
    <div className="flex justify-between items-start mb-4">
      <h2 className="text-lg font-semibold text-gray-800">Order Time</h2>
      <ViewReportButton />
    </div>
    <p className="text-sm text-gray-500">From 1-6 Dec, 2020</p>

    <div className="relative flex items-center justify-center h-52 mt-4">
      <div className="w-40 h-40 rounded-full relative">
        <div className="absolute inset-0 rounded-full" 
             style={{ 
               background: "conic-gradient(#5A67D8 0% 40%, #A0B4FF 40% 72%, #D7E0FF 72% 100%)" 
             }} 
        />
        <div className="absolute inset-8 bg-white rounded-full">
        </div>
        
        <div className="absolute top-[18%] right-0 transform translate-x-1/2 p-3 bg-indigo-900 text-white text-xs rounded-lg shadow-lg">
            <p className="font-semibold mb-0.5">Afternoon</p>
            <p className="text-[10px]">1pm - 4pm</p>
            <p className="font-bold text-sm">1.890 orders</p>
            <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-indigo-900"></div>
        </div>
      </div>
    </div>

    <div className="flex justify-center space-x-6 mt-2 text-xs">
      <div className="flex items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 mr-1" />
        <span className="text-gray-600">Afternoon</span>
        <span className="font-medium ml-1">40%</span>
      </div>
      <div className="flex items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 mr-1" />
        <span className="text-gray-600">Evening</span>
        <span className="font-medium ml-1">32%</span>
      </div>
      <div className="flex items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-indigo-200 mr-1" />
        <span className="text-gray-600">Morning</span>
        <span className="font-medium ml-1">28%</span>
      </div>
    </div>
  </div>
);

const RatingPanel = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm h-full">
    <h2 className="text-lg font-semibold text-gray-800 mb-1">Your Rating</h2>
    <p className="text-sm text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur</p>

    <div className="relative h-48 flex items-center justify-center">
      
      <div className="absolute w-36 h-36 rounded-full bg-orange-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-90"
          style={{ 
            background: "conic-gradient(#F97316 0% 85%, #FDE68A 85% 100%)",
            boxShadow: "0 0 0 16px rgba(253, 230, 138, 0.4)"
          }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <span className="text-2xl font-bold">85%</span>
          <p className="text-xs">Food Taste</p>
        </div>
      </div>

      <div className="absolute w-28 h-28 rounded-full top-[10%] left-[10%] opacity-90"
           style={{ 
             background: "conic-gradient(#8B5CF6 0% 85%, #E5E0FF 85% 100%)",
             boxShadow: "0 0 0 12px rgba(234, 226, 255, 0.6)"
           }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <span className="text-xl font-bold">85%</span>
          <p className="text-xs">Hygiene</p>
        </div>
      </div>
      
      <div className="absolute w-32 h-32 rounded-full bottom-[10%] left-[0%] opacity-90"
           style={{ 
             background: "conic-gradient(#22D3EE 0% 92%, #CCFBF1 92% 100%)",
             boxShadow: "0 0 0 14px rgba(204, 251, 241, 0.5)"
           }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <span className="text-2xl font-bold">92%</span>
          <p className="text-xs">Packaging</p>
        </div>
      </div>
      
    </div>
  </div>
);

const MostOrderedPanel = () => {
  const foodItems = [
    { name: "Fresh Salad Bowl", price: "IDR 45.000", color: "bg-green-200" },
    { name: "Chicken Noodles", price: "IDR 75.000", color: "bg-red-200" },
    { name: "Smoothie Fruits", price: "IDR 45.000", color: "bg-pink-200" },
    { name: "Hot Chicken Wings", price: "IDR 45.000", color: "bg-orange-200" },
  ];
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-1">Most Ordered Food</h2>
      <p className="text-sm text-gray-500 mb-6">Adipiscing elit, sed do eiusmod tempor</p>

      <ul className="space-y-4">
        {foodItems.map((item, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-9 h-9 rounded-full ${item.color}`} />
              <span className="text-sm font-medium text-gray-700">{item.name}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const OrderPanel = () => (
  <div className="bg-white p-6 rounded-lg shadow-sm h-full">
    <div className="flex justify-between items-start">
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-1">Order</h2>
        <div className="text-3xl font-bold text-gray-900">2.568</div>
        <div className="text-sm mt-1">
          <span className="text-red-500 font-medium mr-1">↓ 2.1%</span>
          <span className="text-gray-500">vs last week</span>
        </div>
        <p className="text-xs text-gray-500 mt-2">Sales from 1-6 Dec, 2020</p>
      </div>
      <ViewReportButton />
    </div>

    <div className="h-40 mt-4 relative">
      <svg
        viewBox="0 0 100 80"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <polyline
          fill="none"
          stroke="#4C51BF"
          strokeWidth="2"
          points="0,65 20,40 40,50 60,30 80,60 100,20"
        />
        <polyline
          fill="none"
          stroke="#A0AEC0"
          strokeWidth="2"
          points="0,35 20,55 40,25 60,70 80,45 100,50"
        />
      </svg>
    </div>

    
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      {["01", "02", "03", "04", "05", "06"].map((day, i) => (
        <span key={i} className="w-1/6 text-center">{day}</span>
      ))}
    </div>

    <div className="mt-4 flex space-x-8 text-xs text-gray-500 justify-start ml-2">
      <span className="flex items-center">
        <div className="w-2 h-2 rounded-full bg-indigo-700 mr-1.5" /> Last 6 days
      </span>
      <span className="flex items-center">
        <div className="w-2 h-2 rounded-full bg-gray-500 mr-1.5" /> Last Week
      </span>
    </div>
  </div>
);


const dashboardPanels = [
  { 
    id: "revenue", 
    title: "Revenue", 
    component: RevenuePanel, 
    col: "col-span-12 lg:col-span-7",
    keywords: "sales profit income money"
  },
  { 
    id: "ordertime", 
    title: "Order Time", 
    component: OrderTimePanel, 
    col: "col-span-12 lg:col-span-5",
    keywords: "timing schedule afternoon evening morning"
  },
  { 
    id: "rating", 
    title: "Your Rating", 
    component: RatingPanel, 
    col: "col-span-12 md:col-span-4",
    keywords: "review score taste hygiene packaging"
  },
  { 
    id: "mostordered", 
    title: "Most Ordered Food", 
    component: MostOrderedPanel, 
    col: "col-span-12 md:col-span-4",
    keywords: "menu popular food burger noodles wings salad smoothie"
  },
  { 
    id: "order", 
    title: "Order Count", 
    component: OrderPanel, 
    col: "col-span-12 md:col-span-4",
    keywords: "transactions number of orders count"
  }
];


export default function Dashboard() {
  
  const [query, setQuery] = useState("");

  
  const filteredPanels = useMemo(() => {
  
    if (!query.trim()) return dashboardPanels;
    
    const q = query.toLowerCase();
    
    return dashboardPanels.filter(
      (panel) =>
        
        panel.title.toLowerCase().includes(q) ||
        panel.keywords.toLowerCase().includes(q)
    );
  }, [query]);


  return (
    <div className="min-h-screen bg-gray-50"> 
      
      <Header query={query} setQuery={setQuery} /> 
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Dashboard
            
            {query.trim() && (
                <span className="text-gray-500 text-base font-normal ml-4">
                    ({filteredPanels.length} results)
                </span>
            )}
          </h1>
          
          <div className="grid grid-cols-12 gap-6">
            
            
            {filteredPanels.map((panel) => (
              <div key={panel.id} className={panel.col}>
              
                <panel.component /> 
              </div>
            ))}
            
            
            {filteredPanels.length === 0 && query.trim() && (
                <div className="col-span-12 p-8 text-center text-gray-500 bg-white rounded-lg shadow-sm">
                    No dashboard panels match your search for "{query}".
                </div>
            )}
            
          </div>
        </main>
      </div>
    </div>
  );
}