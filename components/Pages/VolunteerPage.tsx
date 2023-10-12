import Page from "@/components/Core/Page";
import NextPage from "@/components/Core/NextPage";
import Title from "@/components/Core/Title";
import CatText from "@/components/Core/CatText";

export default function VolunterPage() {
  return (
    <Page>
      <Title
        title="Volunteer"
        image={{ src: "/cat-heart.svg", alt: "A heart cat" }}
      />
      <br />
      <CatText
        description="I consider that being part of volunteers gives the possibility that more
        people may have opportunities to learn to code."
      />
      <br />
      <section className="flex flex-col gap-2">
        <CatText
          image={{ src: "/cat-paw.svg", alt: "A paw cat" }}
          description={
            <>
              I am currently part of the organizing team for JavaScript Chile,
              where we empower people to code and create inclusive environments.
            </>
          }
        />

        <CatText
          image={{ src: "/cat-paw.svg", alt: "A paw cat" }}
          description={
            <>
              I was an organizer for JSConf Chile 2023, where I planned, coded,
              and coordinated various activities
            </>
          }
        />

        <CatText
          image={{ src: "/cat-paw.svg", alt: "A paw cat" }}
          description={
            <>
              I volunteered with NiñasPro, an initiative dedicated to empowering
              young girls aged 14-20 to pursue STEAM careers. During my time
              there, I took on the role of a mentor for their annual course and
              also coordinated calls and follow-ups for participants. I am
              currently a member of a corporation.
            </>
          }
        />
      </section>

      <NextPage hasLeft />
    </Page>
  );
}
