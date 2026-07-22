import { Header } from "../../components/layout/header";
import { Projects } from "../../components/layout/Projects";
import { Navigation } from "../../components/layout/Navigation";
import { Competence } from "../../components/layout/competence";
export const HomePages = () => {
  return (
    <div className="h-screen w-screen ">
      <Navigation />
      <section id="#" className="pt-16">
        <Header />
      </section>

      <section id="#" className="scroll-mt-24">
        <Projects />
      </section>
      <section id="#" className="scroll-mt-24">
        <Competence />
      </section>
    </div>
  );
};
