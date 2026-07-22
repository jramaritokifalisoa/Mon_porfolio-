import { Header } from "../../components/layout/header";
import { Projects } from "../../components/layout/Projects";
import { Navigation } from "../../components/layout/Navigation";
export const HomePages = () => {
  return (
    <div className="h-screen w-screen ">
      <Navigation />
      <section id="Accueil" className="pt-16">
        <Header />
      </section>

      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>
    </div>
  );
};
