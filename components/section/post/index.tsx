import { Image } from "@heroui/react";

export default function SectionPost({text:text,src:src}:{text:string,src:string}){
    return (<>
    <div className="w-[50%] mdi:w-[100%]">
                <p className="text-lg text-justify">
                {text}
                </p>
              </div>
            <div className="m-auto">
              <Image
                isBlurred
                alt="HeroUI Fruit Image with Zoom"
                src={src}
                className="w-auto h-[350px] m-auto mr-0 lgi:h-[450px]"
              />
            </div>
    </>)
  }