import Page from "@/components/Core/Page";
import NextPage from "@/components/Core/NextPage";
import Title from "@/components/Core/Title";
import CatText from "@/components/Core/CatText";

export default function WhoAmI() {
  return (
    <Page>
      <Title
        title="Who Am I?"
        image={{ src: "/confused-cat.svg", alt: "A confused cat" }}
      />
      <br />
      <CatText
        image={{ src: "/cat-glass.svg", alt: "A glass cat" }}
        description="Curious, it is the word that comes closest to me. I love to learn,
        whatever, I feel that everything you learn can be applied in one way
        or another. Also, I grew up in a small town, and in a large family
        where there weren't too many things, I learned from a very young age
        to be persistent and strive for what I wanted. Also, considering the
        opportunities that life gives, and those that one can create."
      />

      <NextPage hasRight />
    </Page>
  );
}
