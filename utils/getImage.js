const images = ["/chika1.jpg"];
const getImage = () => {
  return images[Math.floor(Math.random() * images.length)];
};
export default getImage;
