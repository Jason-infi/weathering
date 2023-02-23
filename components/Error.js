import React from "react";
import Image from "next/image";

const Error = () => {
  return (
    <div className='grid place-items-center space-y-6 transition-all ease-in'>
      <Image
        src={"/anya2.jpg"}
        width={300}
        height={300}
        className='w-50 h-50 p-2 rounded-full'
      />
      <p className='text-2xl p-2 text-pink-400 font-semibold animate-pulse'>
        how's the weather?
      </p>
    </div>
  );
};

export default Error;
