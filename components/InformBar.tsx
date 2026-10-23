'use client';
interface informBarProps{
  ipaddress:string,
  location:string,
  timezone:string,
  isp:string,
}
export default function InformBar({ipaddress,location,timezone,isp}:informBarProps) {
  return (
    <div className="w-xs absolute z-10 my-45 md:w-[98%] lg:w-4xl rounded-xl pl-2 pr-2 bg-white shadow-[0_0_5px_2px_grey] h-[350px] md:h-30 lg:h-30  mr-auto ml-auto  flex flex-col md:flex-row items-center justify-around">
      <div className=" flex flex-col gap-2 items-center md:items-start ">
        <p className="font-bold text-sm text-[#6c757d]">IP ADDRESS</p>
        <h1 className="text-2xl font-semibold">{ipaddress}</h1>
      </div>
      <div className="hidden md:inline md:w-[1px] md:h-20 bg-[#adb5bd]"></div>
      <div className=" flex flex-col gap-2 items-center md:items-start">
        <p className="font-bold text-sm text-[#6c757d]">LOCATION</p>
        <h1 className="text-2xl font-semibold">{location}</h1>
      </div>
      <div className="hidden md:inline md:w-[1px] md:h-20 bg-[#adb5bd]"></div>
      <div className=" flex flex-col gap-2 items-center md:items-start">
        <p className="font-bold text-sm text-[#6c757d]">TIMEZONE</p>
        <h1 className="text-2xl font-semibold">{timezone}</h1>
      </div>
      <div className="hidden md:inline md:w-[1px] md:h-20 bg-[#adb5bd]"></div>
      <div className=" flex flex-col gap-2 items-center md:items-start">
        <p className="font-bold text-sm text-[#6c757d]">ISP</p>
        <h1 className="text-2xl font-semibold">{isp}</h1>
      </div>
    </div>
  );
}
