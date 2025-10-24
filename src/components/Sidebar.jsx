import React from "react";

import { 
    BarChart3, ShoppingCart, NotebookText, MessageCircle, 
    Settings, Wallet, User, Info 
} from 'lucide-react';

const mainNav = [
  { id: "dash", label: "Dashboard", icon: BarChart3, active: true },
  { id: "foodOrder", label: "Food Order", icon: ShoppingCart },
  { id: "manageMenu", label: "Manage Menu", icon: NotebookText },
  { id: "customerReview", label: "Customer Review", icon: MessageCircle },
];

const otherNav = [
  { id: "settings", label: "Settings", icon: Settings },
  { id: "payment", label: "Payment", icon: Wallet },
  { id: "accounts", label: "Accounts", icon: User },
  { id: "help", label: "Help", icon: Info },
];

const NavItem = ({ label, active = false, icon: Icon }) => (
  <li
    className={`px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors ${
      active
        ? "bg-indigo-100/50 text-indigo-700 font-medium rounded-xl"
        : "text-gray-600 hover:bg-gray-100 rounded-xl"
    }`}
  >
    <Icon className={`w-5 h-5 ${active ? 'text-indigo-700' : 'text-gray-500'}`} />
    <span>{label}</span>
  </li>
);

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 min-h-screen flex flex-col pt-8">
      
     
      <nav className="flex-1 px-4 space-y-6">
        
        
        <div>
          <div className="mb-4 ml-4 text-xs font-semibold uppercase text-gray-500">
            MENU
          </div>
          <ul className="space-y-2">
            {mainNav.map((n) => (
              <NavItem key={n.id} {...n} />
            ))}
          </ul>
        </div>

        
        <div>
          <div className="mb-4 ml-4 text-xs font-semibold uppercase text-gray-500">
            OTHERS
          </div>
          <ul className="space-y-2">
            {otherNav.map((n) => (
              <NavItem key={n.id} {...n} />
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}