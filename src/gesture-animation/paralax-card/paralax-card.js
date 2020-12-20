import { animated, useSpring } from "react-spring";
import { useGesture } from "react-use-gesture";
import styles from "./paralax-card.module.css";

const calc = (x, y) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
  1.05,
];

export const ParalaxCard = function () {
  const [{ xys }, set] = useSpring(() => ({
    xys: [0, 0, 1],
  }));

  const bind = useGesture({
    onHover: ({ hovering }) => {
      set({ xys: hovering ? [0, 0, 1.05] : [0, 0, 1] });
    },
    onMove: ({ event: { clientX, clientY } }) => {
      set({ xys: calc(clientX, clientY) });
    },
  });

  return (
    <div className={styles.container}>
      <animated.div
        className={styles.card}
        {...bind()}
        style={{ transform: xys.interpolate((_, __, s) => `scale(${s})`) }}
      >
        <animated.div
          className={styles.avatar}
          style={{
            transform: xys.interpolate(
              (x, y, s) => `translate(${x / 20}px, ${y / 20}px) scale(${s})`
            ),
          }}
        />
      </animated.div>
    </div>
  );
};
