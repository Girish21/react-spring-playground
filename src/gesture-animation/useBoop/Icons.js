import { animated } from "react-spring";
import { useBoop } from "./useBoop";
import { MdStarBorder } from "react-icons/md";
import { useStarAngledBoop } from "./useStarAngleBoop";
import styles from "./Icons.module.css";

export const Icons = function () {
  const [c1s, c1h] = useStarAngledBoop(0);
  const [c2s, c2h] = useStarAngledBoop(1);
  const [c3s, c3h] = useStarAngledBoop(2);
  const [c4s, c4h] = useStarAngledBoop(3);
  const [c5s, c5h] = useStarAngledBoop(4);
  const [starStyles, startTrigger] = useBoop({ rotate: 20, scale: 1.05 });

  return (
    <div style={{ height: "100vh", display: "grid", placeContent: "center" }}>
      <div className={styles.Wrapper}>
        <animated.span
          style={starStyles}
          onMouseEnter={() => {
            startTrigger();
            c1h();
            c2h();
            c3h();
            c4h();
            c5h();
          }}
          className={styles.Button}
        >
          <MdStarBorder size="42px" />
        </animated.span>
        <animated.div className={styles.Circle} style={c1s} />
        <animated.div className={styles.Circle} style={c2s} />
        <animated.div className={styles.Circle} style={c3s} />
        <animated.div className={styles.Circle} style={c4s} />
        <animated.div className={styles.Circle} style={c5s} />
      </div>
    </div>
  );
};
