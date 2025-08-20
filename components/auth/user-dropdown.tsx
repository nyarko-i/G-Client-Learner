"use client";
import { ChevronDown, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/auth-context";

/**
 * User dropdown component for authenticated users
 * Shows user name and provides access to Portal and Logout options
 */
export function UserDropdown() {
  const { user, logout } = useAuth();

  if (!user) return null;

  /**
   * Handle logout action
   */
  const handleLogout = () => {
    logout();
  };

  /**
   * Handle portal navigation (placeholder for now)
   */
  const handlePortalClick = () => {
    // TODO: Navigate to learner portal when implemented
    console.log("Navigate to portal");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        >
          {/* User avatar circle */}
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">
              {user.firstName.charAt(0)}
              {user.lastName.charAt(0)}
            </span>
          </div>

          {/* User name */}
          <span className="font-medium">
            {user.firstName} {user.lastName}
          </span>

          {/* Dropdown arrow */}
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48">
        {/* Portal option */}
        <DropdownMenuItem
          onClick={handlePortalClick}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <User className="w-4 h-4" />
          <span>Portal</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Logout option */}
        <DropdownMenuItem
          onClick={handleLogout}
          className="flex items-center space-x-2 cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
