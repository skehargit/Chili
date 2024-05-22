import React from "react";
import {
  menu_list,
  soupImg,
  vegImg,
  nonvegImg,
  noodleImg,
  soup2Img,
} from "../../../assets/data";
// import {soupImg} from "../../../assets/soup.png";
function Hero() {
  return (
    <div className="min-h-screen bg-zinc-950 w-full overflow-x-hidden">
      <div className=" h-[500px] w-full bg-cover relative">
        <div className="bg-[url(https://img.freepik.com/free-photo/flat-lay-table-full-delicious-food-composition_23-2149141359.jpg?t=st=1715756939~exp=1715760539~hmac=b54755d976cd1138a3954c1c24d01bc0d9bf3ac2d92add486e002ad9edbd6072&w=996)] h-full w-full bg-cover absolute "></div>
        <div className="bg-red-900/85 h-[50%] relative"></div>
        <div className="h-[20%] relative w-full">
          <div className="bg-red-900/80 h-[50%]"></div>
          <div className="bg-zinc-950 h-[50%]"></div>
          <div className="top bg-zinc-900 h-[100%] w-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className=" h-[100%] w-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-[1]">
            <div className="cirle rounded-full h-[25vw] min-h-[300px] min-w-[300px] w-[25vw] relative ">
              <img className="absolute h-full w-full" src={soupImg} alt="" />
              {/* {menu_list.map(()=><div className="smallCircles menuNames border rounded-full h-[20%] w-[20%] absolute bottom-0"></div>)} */}
              <div className="smallCircles menuNames border border-zinc-800 rounded-full h-[20%] w-[20%] absolute bottom-0 -left-[10%]">
                <img className="absolute h-full w-full" src={vegImg} alt="" />
              </div>
              <div className="smallCircles menuNames border border-zinc-800 rounded-full h-[20%] w-[20%] absolute bottom-0 -right-[10%]">
                <img
                  className="absolute h-full w-full"
                  src={nonvegImg}
                  alt=""
                />
              </div>
              <div className="smallCircles menuNames border border-zinc-800 rounded-full h-[20%] w-[20%] absolute -bottom-[20%] right-[20%]">
                <img
                  className="absolute h-full w-full"
                  src={noodleImg}
                  alt=""
                />
              </div>
              <div className="smallCircles menuNames border border-zinc-800 rounded-full h-[20%] w-[20%] absolute -bottom-[20%] left-[20%]">
                <img className="absolute h-full w-full" src={soup2Img} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-zinc-950 h-[32%] relative"></div>
      </div>
      <div className="pt-28 flex flex-col gap-5 w-full items-center justify-center ">
        <h2 className="satisfy-regular text-2xl ">what would you like to prefer ?</h2>
        <div className="py-10 flex max-[700px]:flex-col gap-5">
          <div className="vegmenu h-[200px] w-[300px]  overflow-hidden relative flex items-center justify-center">
            <img
              className="h-full w-full absolute hover:scale-[1.5] duration-300 z-[1]"
              src="https://palmbeachuk.com/wp-content/uploads/2023/03/Iconic-Vegetarian-Dishes-in-Indian-Cuisine.jpg"
              alt=""
            />
            <div className="w-full h-full absolute z-[2] pointer-events-none bg-green-900/30 flex flex-col items-center justify-end">
              <h3 className="text-4xl font-semibold text-green-500">VEG</h3>
              <p className="satisfy-regular text-sm flex text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam nam, blanditiis tempore cumque distinctio quidem?</p>
            </div>
          </div>
          <div className="nonvegmenu h-[200px] w-[300px]  overflow-hidden relative flex items-center justify-center">
            <img
              className="h-full w-full absolute hover:scale-[1.5] duration-300 z-[1]"
              src="https://www.financialexpress.com/wp-content/uploads/2024/01/flat-lay-table-full-delicious-food-composition.jpg"
              alt=""
            />
            <div className="w-full h-full absolute z-[2] pointer-events-none bg-red-900/30 flex flex-col items-center justify-end"><h3 className="text-4xl font-semibold text-red-500">NONVEG</h3>
              <p className="satisfy-regular text-sm flex text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam nam, blanditiis tempore cumque distinctio quidem?</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
