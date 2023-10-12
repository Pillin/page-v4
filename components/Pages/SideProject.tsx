import Page from "@/components/Core/Page";
import NextPage from "@/components/Core/NextPage";
import Title from "@/components/Core/Title";
import CatText from "@/components/Core/CatText";

export default function TalkPage() {
  return (
    <Page>
      <Title
        title="Side Projects"
        image={{ src: "/cat-carrier.svg", alt: "carrier with a cat" }}
      />
      <br />
      <CatText description="Side projects are like whispered secrets from the universe, guiding us to grow and unveiling the magic of new technologies. Embracing them is like holding a lantern to the path of discovery, illuminating our journey with wonder and warmth." />

      <br />
      <CatText description="I've explored various platforms, with Frontend Mentor standing out as one that truly captivated me. From it, I've undertaken several side projects which I showcase on the CodeSandbox page. I warmly invite you to take a peek and immerse yourself in my creations." />
      <NextPage hasLeft />
    </Page>
  );
}
