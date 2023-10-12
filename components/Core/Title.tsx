import Image from "next/image";

export default function Title(props: {
  title: string;
  image: { src: string; alt: string };
}) {
  return (
    <>
      <h2 className="flex text-2xl md:text-4xl">
        {props.title}
        <section className="h-8 w-8 md:h-12 md:w-12">
          <Image
            width={50}
            height={50}
            layout="responsive"
            src={props.image.src}
            alt={props.image.alt}
          />
        </section>
      </h2>
    </>
  );
}
