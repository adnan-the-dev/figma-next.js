import { BannerMessageIcon } from "@/shared";
import React from "react";
export default function Banner() {
  return (
    <>
      <div className=" pl-2 pr-2">
        <div className="flex justify-center items-center h-[500px] rounded-md w-[100%] bg-gradient-to-r from-indigo-500 via-blue-500 to-red-500">
          <BannerMessageIcon/>
        </div>
      </div>
    </>
  );
}
