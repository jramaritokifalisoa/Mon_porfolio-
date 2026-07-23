import { Header } from "../../components/layout/header";
import { Projects } from "../../components/layout/Projects";
import { Navigation } from "../../components/layout/Navigation";
import { Parcours } from "../../components/layout/parcours";
import { Competence } from "../../components/layout/competence";
import { Footer } from "@/components/layout/footer";

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
      <section id="#" className="scroll-mt-24">
        <Parcours />
      </section>
      <section id="#" className="scroll-mt-24">
        <Footer />
      </section>
    </div>
  );
};
