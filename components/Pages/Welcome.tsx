import Image from "next/image";
import Page from "@/components/Core/Page";
import NextPage from "@/components/Core/NextPage";

export default function WelcomePage() {
  return (
    <Page>
      <section className="flex flex-col justify-between h-full gap-8">
        <h2 className="text-3xl md:text-5xl text-center">Welcome Book</h2>
        <section className="flex flex-col items-center w-full">
          <section className="h-40 w-40 md:h-2/4 md:w-2/4">
            <Image
              src="/happy-cat.svg"
              width={20}
              height={20}
              layout="responsive"
              alt="A cat happy"
            />
          </section>
        </section>

        <p className="text-right origin-bottom -rotate-6 text-1xl">
          by Pillippa Pérez Pons
        </p>

        <NextPage hasLeft hiddenMobileLeft />
      </section>
    </Page>
  );
}
