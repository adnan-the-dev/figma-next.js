import { FotterHomeSection, TheAssets, TheMembers, TheVsArray } from "@/Array";
import {
  BannerMessageIcon,
  FaceBook,
  FotterCallIcon,
  FotterInbox,
  FotterMapIcon,
  Linkdin,
  Pinterest,
  SnapChat,
  TikTok,
  Twitter,
  Youtube,
} from "@/shared";
import React from "react";
export default function Banner() {
  return (
    <>
      {/* <div className=" pl-2 pr-2">
        <div className="flex justify-center items-center h-[500px] rounded-md w-[100%] bg-gradient-to-r from-indigo-500 via-blue-500 to-red-500">
          <BannerMessageIcon />
        </div>
      </div> */}
      <div
        className="bg-cover bg-center bg-no-repeat pr-4 pl-4 pt-4"
        style={{ backgroundImage: `url('/bg.png')`, height: "700px" }}
      >
        {/* You can place your content here */}
        <div className="grid grid-cols-5 gap-9">
          <div className="">
            <p className="text-white text-sm">
              Proudly, The 1st of It's Kind Worldwide, AIO Digital Platform For
              The Global Community Of The Veterinary Industry
            </p>
            <hr className="border-1 border-gray-300 my-4" />
            <h2 className="font-bold text-white my-3">Let's Talk</h2>

            <div className="grid grid-rows-3 grid-flow-col gap-2">
              <div className="flex items-center gap-1 py-0">
                <FotterInbox />
                <span className="text-white text-sm">info@myvverse.com</span>
              </div>
              <div className="flex items-center gap-1">
                <FotterCallIcon />
                <span className="text-white text-sm">+971 52 7956665</span>
              </div>
              <div className="flex items-center gap-1">
                <FotterMapIcon />
                <span className="text-white text-sm">
                  Virtually Managed From UAE-Dubai
                </span>
              </div>
            </div>
            <hr className="border-1 border-gray-300 my-4" />
            <div className="grid grid-cols-7">
              <div>
                <Linkdin />
              </div>
              <div>
                <FaceBook />
              </div>
              <div>
                <Twitter />
              </div>
              <div>
                <Youtube />
              </div>
              <div>
                <TikTok />
              </div>
              <div>
                <SnapChat />
              </div>
              <div>
                <Pinterest />
              </div>
            </div>
            <hr className="border-1 border-gray-300 my-4" />
            <h2 className="font-bold text-white my-3">Coming Soon</h2>
            <div className="flex items-center gap-3">
              <div>
                <img className="w-20" src="/apple.png" alt="Your Image" />
              </div>
              <div>
                <img className="w-20" src="/apple.png" alt="Your Image" />
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-white">Home</h1>
            <h1 className="font-bold text-white my-3">The Story</h1>

            <div className="flex flex-col gap-2">
              {FotterHomeSection?.map((item, i) => {
                return (
                  <>
                    <div key={i} className="flex items-center gap-1">
                      {item.icon}
                      <span className="text-white text-sm">{item?.name}</span>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="font-bold text-white my-3">The Vs</h1>
            <div className="flex flex-col gap-2">
              {TheVsArray?.map((item, i) => {
                return (
                  <div key={i} className="flex items-center gap-1">
                    {item.icon}
                    <span className="text-white text-sm">{item?.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="font-bold text-white my-3">The Assets</h1>
            <div className="flex flex-col gap-2">
              {TheAssets?.map((item, i) => {
                return (
                  <div key={i} className="flex items-center gap-1">
                    {item.icon}
                    <span className="text-white text-sm">{item?.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="font-bold text-white my-3">The Members</h1>
            <div className="flex flex-col gap-2">
              {TheMembers?.map((item, i) => {
                return (
                  <div key={i} className="flex items-center gap-1">
                    {item.icon}
                    <span className="text-white text-sm">{item?.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
