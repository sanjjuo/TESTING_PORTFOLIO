import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export const Slider = ({ images, alt }: { images: string[]; alt: string }) => {
  return (
    <Carousel
      orientation="vertical"
      opts={{
        align: "start",
      }}
      className="w-full h-[600px] lg:h-[800px]"
    >
      <CarouselContent className="h-[600px] lg:h-[800px]">
        {images.map((item, index) => (
          <CarouselItem
            key={index}
            className="h-full rounded-2xl overflow-hidden basis-1/2 md:basis-1/2"
          >
            <Image
              src={item}
              alt={alt}
              width={2500}
              height={100}
              className="h-full w-full object-cover rounded-2xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="w-14 h-14 absolute -top-4" />
      <CarouselNext className="w-14 h-14 absolute bottom-0" />
    </Carousel>
  );
};
