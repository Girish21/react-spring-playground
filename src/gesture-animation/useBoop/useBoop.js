import { useCallback, useEffect, useState } from "react";
import { useSpring } from "react-spring";

export const useBoop = function ({
  x = 0,
  y = 0,
  rotate = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}) {
  const [isBooped, set] = useState(false);
  const styles = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: isBooped
      ? `translate(${x}px, ${y}px) rotate(${rotate}deg) scale(${scale})`
      : `translate(0px, 0px) rotate(0deg) scale(1)`,
    config: springConfig,
  });

  useEffect(() => {
    if (!isBooped) return;
    const timeOut = setTimeout(() => {
      set(false);
    }, timing);

    return () => {
      clearTimeout(timeOut);
    };
  }, [isBooped, timing]);

  const trigger = useCallback(() => {
    set(true);
  }, []);

  return [styles, trigger];
};
