import Image from "next/image";
import Page from "@/components/Core/Page";
import NextPage from "@/components/Core/NextPage";
import CatText from "../Core/CatText";

export default function ThankYouPage() {
  return (
    <Page>
      <section className="flex flex-col justify-between h-full gap-8">
        <h2 className="text-3xl md:text-5xl text-center">Thank You</h2>
        <CatText description="Thank you for letting my words dance through your thoughts. If a spark of curiosity has been ignited, or if you simply wish to chat and delve deeper into a topic, please feel embraced by my invitation to spend a heartfelt hour together. Let's embark on a journey of shared stories and wonders" />
        <section className="flex flex-col items-center w-full">
          <section className="h-40 w-40 md:h-2/4 md:w-2/4">
            <Image
              src="/cat-couple.svg"
              width={20}
              height={20}
              layout="responsive"
              alt="A cat very happy"
            />
          </section>
        </section>
      </section>
    </Page>
  );
}
