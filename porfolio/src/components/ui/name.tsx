import { motion } from "framer-motion";

export const Name = () => {
  const fullName = "RAMARITOKIFALISOA Jocyl Nardo";

  // On transforme la chaîne de caractères en tableau de lettres individuelles
  const letters = Array.from(fullName);

  return (
    <>
      <h1 className="text-2xl font-bold flex flex-wrap">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // Chaque lettre attend un tout petit peu plus que la précédente pour apparaître (0.04s d'écart)
            transition={{
              duration: 0.2,
              delay: index * 0.04,
              ease: "easeIn",
            }}
            // Cette classe permet de garder les espaces invisibles intacts entre les mots
            className={letter === " " ? "whitespace-pre" : ""}
          >
            {letter}
          </motion.span>
        ))}
      </h1>
    </>
  );
};
