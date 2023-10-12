import { ReactNode } from "react";
import Image from "next/image";

export default function CatText(props: {
  image?: { src: string; alt: string };
  description: string | ReactNode;
}) {
  return (
    <section className="flex items-start">
      {props.image && (
        <section className="w-10 md:w-20 ">
          <Image
            width="0"
            height="0"
            layout="responsive"
            src={props.image.src}
            alt={props.image.alt}
          />
        </section>
      )}
      <p className={`text-xs md:text-xs ${props.image ? "max-w-[80%]" : ""}`}>{props.description}</p>
    </section>
  );
}
