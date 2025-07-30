import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Bell, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogout = () => {
    alert("Logged out!");
    navigate("/");
  };

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "AI Insights", to: "/insights" },
    { name: "Sales Forecasting", to: "/sales" },
    { name: "User Management", to: "/users" },
    { name: "Settings", to: "/settings" },
  ];

  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center w-full sticky top-0 z-50 dark:bg-gray-800 dark:text-white">
      {/* Brand */}
      <div className="text-xl font-bold text-blue-600 tracking-tight">AI Dashboard</div>
       
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center dark:bg-gray-800 dark:text-white">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className="text-sm text-gray-700 hover:text-blue-600 transition dark:bg-gray-800 dark:text-white"
          >
            {link.name}
          </Link>
        ))}
        <Bell className="w-5 h-5 text-gray-600 hover:text-blue-500 cursor-pointer dark:bg-gray-800 dark:text-white " />

        {/* Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer dark:bg-gray-800 dark:text-white">
              <AvatarImage src="https://api.dicebear.com/7.x/lorelei/svg" />
              <AvatarFallback>PK</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/profile")}>
              <User className="mr-2 h-4 w-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/notifications")}>
              <Bell className="mr-2 h-4 w-4" /> Notifications
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout} className="text-red-500">
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        {menuOpen ? (
          <X onClick={toggleMenu} className="w-6 h-6" />
        ) : (
          <Menu onClick={toggleMenu} className="w-6 h-6" />
        )}
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md flex flex-col gap-3 px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link.name}
            </Link>
          ))}
          <div className="border-t pt-2 mt-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => navigate("/profile")}
            >
              Profile
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={handleLogout}
            >
              Logout
            </Button>
            
          </div>
        </div>
        
      )}
      <ThemeToggleButton />
    </nav>
  );
};

export default Navbar;
