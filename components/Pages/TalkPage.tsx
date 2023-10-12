import Page from "@/components/Core/Page";
import NextPage from "@/components/Core/NextPage";
import Title from "@/components/Core/Title";
import CatText from "../Core/CatText";

export default function TalkPage() {
  return (
    <Page>
      <Title
        title="Talks"
        image={{ src: "/cat-broom.svg", alt: "broom with a cat" }}
      />
      <br />
      <CatText description="Stepping up to speak at conferences wraps you in a cocoon of benefits, from daring to embrace the unknown to the joy of unraveling new topics. It's a gentle nudge towards growth, wrapped in a blanket of self-discovery." />

      <br />
      <section className="flex flex-col gap-2">
        <CatText
          image={{ src: "cat-churu.svg", alt: "A Cat with churu" }}
          description="My first talk was about SolidJS. I was astounded by its performance, and I didn't hesitate to choose it as an intriguing topic to discuss."
        />
        <CatText
          image={{ src: "cat-churu.svg", alt: "A Cat with churu" }}
          description="My second talk ventured a bit into the unknown. RSC was a trending and unfamiliar topic, and I found it exciting to be at the forefront and delve into the mystery of something new."
        />

        <CatText description="If you'd like to see or know more, I invite you to check out my LinkedIn profile, where you can find it" />
      </section>

      <NextPage hasRight />
    </Page>
  );
}
