import { animated, useSpring } from "react-spring";
import { useDrag } from "react-use-gesture";
import styles from "./simple-drag.module.css";

export const SimpleDrag = function () {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

  const bind = useDrag(({ movement, down }) => {
    set({ xy: down ? movement : [0, 0] });
  });

  return (
    <div className={styles.container}>
      <animated.div
        className={styles.box}
        {...bind()}
        style={{
          transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`),
        }}
      />
    </div>
  );
};
