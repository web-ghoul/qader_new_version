import { ImageBoxTypes } from "@/types/components.types";

const ImageBox = ({
  src,
  alt,
  back,
  className,
}: ImageBoxTypes) => {
  return (
    <div
      className={`${
        back && "w-full h-full bg-cover bg-no-repeat bg-center"
      } overflow-hidden ${className}`}
      style={back ? { backgroundImage: `url(${src})` } : {}}
    >
      {!back && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
        />
      )}
    </div>
  );
};

export default ImageBox;