import { motion, useScroll, useTransform } from "framer-motion";

const shapes = [
  { top: "8%", left: "5%", size: 180, speed: 0.15, blur: 40, color: "primary" },
  { top: "22%", right: "8%", size: 120, speed: -0.1, blur: 50, color: "secondary" },
  { top: "40%", left: "12%", size: 200, speed: 0.2, blur: 60, color: "primary" },
  { top: "55%", right: "5%", size: 140, speed: -0.15, blur: 45, color: "secondary" },
  { top: "70%", left: "8%", size: 100, speed: 0.12, blur: 35, color: "primary" },
  { top: "85%", right: "15%", size: 160, speed: -0.18, blur: 55, color: "secondary" },
];

export const ParallaxShapes = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {shapes.map((shape, i) => (
        <ParallaxOrb key={i} shape={shape} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
};

const ParallaxOrb = ({
  shape,
  scrollYProgress,
}: {
  shape: (typeof shapes)[number];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) => {
  const y = useTransform(scrollYProgress, [0, 1], [0, shape.speed * 1000]);

  const isPrimary = shape.color === "primary";

  return (
    <motion.div
      style={{
        y,
        top: shape.top,
        left: shape.left,
        right: shape.right,
        width: shape.size,
        height: shape.size,
        filter: `blur(${shape.blur}px)`,
      }}
      className={`absolute rounded-full opacity-[0.04] ${
        isPrimary ? "bg-primary" : "bg-secondary"
      }`}
    />
  );
};
