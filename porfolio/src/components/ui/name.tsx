import { motion } from "framer-motion";

export const Name = () => {
  const fullName = "RAMARITOKIFALISOA Jocyl Nardo";

  const letters = Array.from(fullName);

  return (
    <>
      <h1 className="text-2xl font-bold flex flex-wrap">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              delay: index * 0.05,
              ease: "easeIn",
            }}
            className={letter === " " ? "whitespace-pre" : ""}
          >
            {letter}
          </motion.span>
        ))}
      </h1>
    </>
  );
};
