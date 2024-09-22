import { useEffect, useState } from "react";
import globalApi from './../services/globalAPI';
import clothwmoen from './../assets/clothwmoen.jpg';
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

function Slider() {
  const [womenClothes, setWomenClothes] = useState([]);

  useEffect(() => {
    shoppingurl();
  }, []);

  const shoppingurl = () => {
    globalApi.shoppingurl.then(resp => {
      console.log(resp.data.results);
      setWomenClothes(resp.data.results);  
    });
  };

  return (

    <div>
      <HiChevronLeft />
      <HiChevronRight />
    <div className="flex overflow-x-auto">
    {womenClothes.map((item) => (
        <img src={clothwmoen+item.backdrop_path} className="min-w-full h-[30px] object-cover" />
      ))};
    </div>
    </div>
  );
}

export default Slider; 
