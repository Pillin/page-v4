import { ReactNode, forwardRef } from "react";

const Page = forwardRef(({ children }: { children: ReactNode }, ref: any) => (
  <section className="flex p-8 bg-sky-100 h-full shadow-page" ref={ref}>
    {children}
  </section>
));

Page.displayName = "Page";

export default Page;
