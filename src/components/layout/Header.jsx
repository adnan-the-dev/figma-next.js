import React from "react";
import {
  SearchIcon,
  Logo,
  MessageIcon,
  AddIconIcon,
  NotificationIcon,
  HeartIcon,
  CartIcon,
  PaymentIcon,
  MenuIcon,
} from "../../shared.js";
export default function Header() {
  return (
    <>
      <div className="border-2 flex items-center justify-between px-5 py-1">
        <div className="flex-shrink-0">{<Logo />}</div>
        {/* Adjusted logo container */}
        <div className="flex gap-3">
          {/* Adjusted icons */}
          <div className="rounded-full bg-gradient-to-br from-red-500 to-blue-700 border-2 h-11 w-11 flex items-center justify-center">
            {<SearchIcon />}
          </div>
          <div className="rounded-full bg-gradient-to-br from-red-500 to-blue-700 border-2 h-11 w-11 flex items-center justify-center">
            {<AddIconIcon />}
          </div>
          <div className="relative">
            {/* Adjusted notification icon container */}
            <div className="rounded-full bg-gradient-to-br from-red-500 to-blue-700 border-2 h-11 w-11 flex items-center justify-center">
              {<NotificationIcon />}
            </div>
            <div className="rounded-full absolute top-0 right-[-7px] sm:right-[-10px] h-6 w-6 border border-green-600 flex items-center justify-center text-sm">
              50
            </div>
          </div>
          <div className="rounded-full bg-gradient-to-br from-red-500 to-blue-700 border-2 h-11 w-11 flex items-center justify-center">
            {<MessageIcon />}
          </div>
          <div className="relative">
            {/* Adjusted heart icon container */}
            <div className="rounded-full bg-gradient-to-br from-red-500 to-blue-700 border-2 h-11 w-11 flex items-center justify-center">
              {<HeartIcon />}
            </div>
            <div className="rounded-full absolute top-0 right-[-7px] sm:right-[-10px] h-6 w-6 border border-green-600 flex items-center justify-center text-sm">
              50
            </div>
          </div>
          <div className="relative">
            {/* Adjusted cart icon container */}
            <div className="rounded-full bg-gradient-to-br from-red-500 to-blue-700 border-2 h-11 w-11 flex items-center justify-center">
              {<CartIcon />}
            </div>
            <div className="rounded-full absolute top-0 right-[-7px] sm:right-[-10px] h-6 w-6 border border-green-600 flex items-center justify-center text-sm">
              50
            </div>
          </div>
          <div className="relative">
            {/* Adjusted payment icon container */}
            <div className="rounded-full bg-gradient-to-br from-red-500 to-blue-700 border-2 h-11 w-11 flex items-center justify-center">
              {<PaymentIcon />}
            </div>
            <div className="rounded-full absolute top-0 right-[-10px] sm:right-[-12px] h-6 w-10 border border-green-600 flex items-center justify-center text-xs">
              $ 50.k
            </div>
          </div>
          <div className="rounded-full border-2 h-11 w-11 flex items-center justify-center">
            {<MenuIcon />}
          </div>
        </div>
      </div>
    </>
  );
}
