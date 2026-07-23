import { motion } from "framer-motion";
import { Header } from "../../components/layout/header";
import { Projects } from "../../components/layout/Projects";
import { Navigation } from "../../components/layout/Navigation";
import { Parcours } from "../../components/layout/parcours";
import { Competence } from "../../components/layout/competence";
import { Footer } from "@/components/layout/footer";

export const HomePages = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navigation />

      {/* Le Header s'anime dès le chargement de la page */}
      <motion.section
        id="Header"
        className="pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Header />
      </motion.section>

      {/* Les sections suivantes s'animent simplement au défilement (scroll) */}
      <motion.section
        id="Projects"
        className="scroll-mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4 }}
      >
        <Projects />
      </motion.section>

      <motion.section
        id="Competence"
        className="scroll-mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4 }}
      >
        <Competence />
      </motion.section>

      <motion.section
        id="Parcours"
        className="scroll-mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4 }}
      >
        <Parcours />
      </motion.section>

      <motion.section
        id="Footer"
        className="scroll-mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4 }}
      >
        <Footer />
      </motion.section>
    </div>
  );
};
