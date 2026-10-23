'use client';
import Image from 'next/image';
interface SearchBarProps{
  inputadress:string,
  setinputAddress:(value:string)=>void,
  getApi: () => void;
  
}
export default function SearchBar({ inputadress, setinputAddress,getApi }:SearchBarProps) {
  return (
    <div className="absolute my-20 z-10 flex  items-center mt-b">
      <input
        value={inputadress}
        onChange={(e) => {
          setinputAddress(e.target.value);
        }}
        type="text"
        className="bg-white w-2xs md:w-md h-12 pl-2 rounded-[10px_0_0_10px] focus:border-black border-1"
        placeholder="Search for any Ip address for domain"
      />
      <button onClick={()=>{
        getApi()
      }} className="bg-black h-12 w-12 relative flex items-center cursor-pointer justify-center rounded-[0_10px_10px_0]">
        <Image width={10} height={10} src={'/icon-arrow.svg'} alt="arrow" />
      </button>
    </div>
  );
}
