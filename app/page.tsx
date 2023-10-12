import Book from "@/components/Book";
import Welcome from "@/components/Pages/Welcome";
import WhoAmI from "@/components/Pages/WhoAmI";
import VolunteerPage from "@/components/Pages/VolunteerPage";
import TalkPage from "@/components/Pages/TalkPage";
import SideProject from "@/components/Pages/SideProject";
import ThankYouPage from "@/components/Pages/ThankYou";
import Link from "@/components/Core/Link";

export default function Home() {
  return (
    <>
      <section className="background">
        <section className="grid" />
      </section>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="flex flex-wrap gap-2 absolute top-0 p-2 items-center">
          <Link
            label="Linkedin"
            link="https://www.linkedin.com/in/ignaciapons/"
          />
          <Link label="CodeSandbox" link="https://codesandbox.io/u/Pillin" />
          <Link
            label="Chat with Me"
            link="https://calendar.app.google/zxyUS7w818BXsrKU6"
          />
        </section>
        <Book>
          <Welcome />
          <WhoAmI />
          <VolunteerPage />
          <TalkPage />
          <SideProject />
          <ThankYouPage />
        </Book>
      </main>
    </>
  );
}
