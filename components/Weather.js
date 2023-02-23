import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faTemperatureEmpty,
  faDroplet,
  faGaugeHigh,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import getImage from "@/utils/getImage";
import getIcon from "@/utils/getIcon";

const info = ({ data }) => {
  const imageUrl = getImage();
  return (
    <div className='flex flex-col items-center space-y-3 w-full transition-all ease-in'>
      <div className='flex justify-between items-center'>
        <Image
          src={getIcon(data?.weather[0]?.main)}
          width={100}
          height={100}
          className='w-50 h-50'
        />
        <Image
          src={imageUrl}
          width={200}
          height={200}
          className='w-50 h-50 rounded-full'
        />
      </div>
      <p className={`${styles.cloudsText} text-6xl text-blue-400 p-1`}>
        {data?.weather[0]?.main}
      </p>
      <p className='text-5xl font-medium text-pink-400 p-1'>
        {Math.round(data?.main?.temp)}
        {"\u00B0"}
      </p>
      <div className='flex items-center'>
        <FontAwesomeIcon
          icon={faWind}
          className={`${styles.icon} text-cyan-400 p-2 pl-3`}
        />
        <p className='p-2'>Speed: {data?.wind?.speed} m/s</p>
      </div>
      <div className='flex flex-col w-full space-y-3 p-1'>
        <div className='grid grid-cols-3 justify-items-center items-center '>
          <FontAwesomeIcon
            icon={faTemperatureEmpty}
            className={`${styles.icon} text-orange-400 scale-125`}
          />
          <div className='text-gray-500'>Temperature: </div>
          <div>
            {data.main.temp}
            {" \u00B0"}C
          </div>
        </div>
        <div className='grid grid-cols-3 justify-items-center items-center '>
          <FontAwesomeIcon
            icon={faDroplet}
            className={`${styles.icon} text-violet-400 scale-125`}
          />
          <div className='text-gray-500'>Humidity: </div>
          <div>{data.main.humidity} %</div>
        </div>
        <div className='grid grid-cols-3 justify-items-center items-center'>
          <FontAwesomeIcon
            icon={faGaugeHigh}
            className={`${styles.icon} text-red-400 scale-125`}
          />
          <div className='text-gray-500'>Pressure: </div>
          <div>{data.main.pressure} hPa</div>
        </div>
      </div>
    </div>
  );
};

export default info;
