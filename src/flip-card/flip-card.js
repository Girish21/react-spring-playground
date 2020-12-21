import { useState } from "react";
import { animated as a, useSpring } from "react-spring";
import styles from "./flip-card.module.css";

export const FlipCard = function () {
  const [flipped, set] = useState(false);
  const { opacity, transform } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? "180" : "0"}deg)`,
    config: { friction: 60, tension: 500, mass: 5 },
  });
  return (
    <div className={styles.container}>
      <div
        className={styles.card_container}
        onClick={() => set((state) => !state)}
      >
        <a.div
          className={[styles.card, styles.front].join(" ")}
          style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
        />
        <a.div
          className={[styles.card, styles.back].join(" ")}
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          }}
        />
      </div>
    </div>
  );
};
