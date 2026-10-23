'use client';
import InformBar from './InformBar';
import SearchBar from './SearchBar';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
interface AddressData {
  ip: string;
  location: {
    city: string;
    timezone: string;
    lat: number;
    lng: number;
    region: string;
  };
  isp: string;
}
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => <p className="text-center py-10">Loading...</p>,
});

export default function App() {
  const [inputadress, setinputAddress] = useState('');
  const [address, setAddress] = useState<AddressData | null>(null);

  const fetchIpData = async (queryIp: string) => {
    const apiKey = process.env.NEXT_PUBLIC_IPIFY_API_KEY;
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${queryIp}`;

    try {
      const response = await fetch(url);
      const result = await response.json();

      setAddress({
        ip: result.ip,
        location: {
          city: result.location.city,
          region: result.location.region,
          timezone: result.location.timezone,
          lat: result.location.lat,
          lng: result.location.lng,
        },
        isp: result.isp,
      });
    } catch (error) {
      console.error('something was wrong:', error);
    }
  };

  useEffect(() => {
    const getInitialData = async () => {
      const apiKey = process.env.NEXT_PUBLIC_IPIFY_API_KEY;
      const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        const result = await response.json();

        setAddress({
          ip: result.ip,
          location: {
            city: result.location.city,
            region: result.location.region,
            timezone: result.location.timezone,
            lat: result.location.lat,
            lng: result.location.lng,
          },
          isp: result.isp,
        });
      } catch (error) {
        console.error('something was wrong', error);
      }
    };

    getInitialData();
  }, []);

  const getApi = async () => {
    if (inputadress.trim() === '') {
      return;
    } else {
      fetchIpData(inputadress);
    }
    setinputAddress("")
  };

  return (
    <div className="min-h-full flex flex-col items-center">
      <div className="relative h-94 lg:h-60 w-full z-1">
        <Image
          fill
          src={'/pattern-bg-mobile.png'}
          alt="bg"
          className="object-cover block md:hidden"
        />
        <Image
          fill
          src={'/pattern-bg-desktop.png'}
          alt="bg2"
          className="object-cover hidden md:inline"
        />
      </div>

      <h1 className="absolute z-2 font-bold text-3xl my-7 text-white">
        IP Address Tracker
      </h1>

      <SearchBar
        getApi={getApi}
        inputadress={inputadress}
        setinputAddress={setinputAddress}
      />

      {address ? (
        <InformBar
          ipaddress={address.ip}
          location={address.location.city}
          timezone={address.location.timezone}
          isp={address.isp}
        />
      ) : (
        <p className="text-white text-center my-4">جاري تحميل البيانات...</p>
      )}

      <div className="h-[500px] w-full relative z-0">
        {address ? (
          <Map lat={address.location.lat} lng={address.location.lng} />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100">
            <p> Loading </p>
          </div>
        )}
      </div>
    </div>
  );
}
