import Image from "next/image";

export const WorkImage = ({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) => {
  return (
    <div className="space-y-5">
      {/* {images.map((image, index) => ( */}
      <Image
        // key={index}
        src={images[0]}
        alt={alt}
        width={1000}
        height={550}
        className="object-cover"
        quality={100}
      />
      {/* ))} */}
    </div>
  );
};
