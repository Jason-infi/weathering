import useDebounce from "@/utils/useDebounce";
import { useState } from "react";
import Weather from "@/components/Weather";
import useFetch from "@/components/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";
import Error from "@/components/Error";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const { data, isError, mutate } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${debouncedSearchQuery}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`
  );
  return (
    <div className={`grid place-items-center h-full w-full ${styles.mainBg}`}>
      <div className=' h-4/5 w-4/5 max-w-sm rounded-lg bg-white flex flex-col items-center border-pink-300 border-2 lg:border-4 overflow-scroll  scrollbar-hide'>
        <div className='w-full flex items-center justify-self-auto'>
          <div className='justify-between text-cyan-400 p-3 items-center space-x-2 '>
            <input
              type={"text"}
              placeholder={"Search"}
              value={searchQuery}
              onChange={({ target: { value } }) => setSearchQuery(value)}
              className='outline-none border-none text-gray-500 rounded-xl p-1'
            ></input>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={`${styles.icon} scale-125`}
            />
            <FontAwesomeIcon
              icon={faLocationDot}
              className={`${styles.icon} scale-125 text-green-400`}
            />
          </div>
        </div>
        {data && data.cod != "200" && <Error />}
        {data && data.cod == "200" && <Weather data={data} />}
      </div>
    </div>
  );
}
