import Image from "next/image";

export default function NextPage(props: {
  hasLeft?: boolean;
  hasRight?: boolean;
  hiddenMobileLeft?: boolean;
}) {
  return (
    <section className="flex absolute bottom-12 w-full">
      <section
        className={`absolute h-10 w-10 md:h-12 md:w-12 -left-4 ${
          props.hasLeft
            ? props.hiddenMobileLeft
              ? "hidden"
              : "md:visible"
            : "md:hidden"
        }`}
      >
        <Image
          src="/cat-next-page.svg"
          width={60}
          height={60}
          alt="A confused cat"
          className="animate-pulse -rotate-90"
        />
      </section>

      <section
        className={`absolute h-10 w-10 md:h-12 md:w-12 right-8 ${
          props.hasRight ? "md:visible" : "md:hidden"
        }`}
      >
        <Image
          src="/cat-next-page.svg"
          width={60}
          height={60}
          alt="A confused cat"
          className="animate-pulse"
        />
      </section>
    </section>
  );
}
