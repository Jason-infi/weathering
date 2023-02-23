const icon_map = new Map([
  ["Clouds", "/icons/cloudy.svg"],
  ["Thunderstorm", "/icons/thunder.svg"],
  ["Rain", "/icons/rainy-6.svg"],
  ["Drizzle", "/icons/rainy-6.svg"],
  ["Snow", "/icons/snowy-6.svg"],
  ["snow", "/icons/snowy-6.svg"],
  ["Clear", "/icons/day.svg"],
  ["Mist", "/icons/mist.png"],
  ["Smoke", "/icons/smoke.png"],
  ["Haze", "/icons/haze.png"],
  ["Fog", "/icons/fog.png"],
  ["Squall", "/icons/squall.png"],
  ["Tornado", "/icons/tornado.png"],
]);

const getIcon = (key) => {
  if (icon_map.has(key)) {
    return icon_map.get(key);
  }
  return "/wwyou.jpg";
};

export default getIcon;
