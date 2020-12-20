import { useState } from "react";
import { animated as a, useSpring, useTrail } from "react-spring";

const POSITION = [
  {
    cx: 17,
    cy: 9,
  },
  {
    cx: 13,
    cy: 15.93,
  },
  {
    cx: 5,
    cy: 15.92,
  },
  {
    cx: 1,
    cy: 9,
  },
  {
    cx: 5,
    cy: 2.08,
  },
  {
    cx: 13,
    cy: 2.08,
  },
];

export const Switcher = function () {
  const [light, set] = useState(true);
  const { transform, x, y } = useSpring({
    transform: light ? `rotate(90deg)` : `rotate(40deg)`,
    x: light ? 25 : 10,
    y: light ? 0 : 2,
    config: {
      friction: 10,
      tension: 170,
    },
  });
  const trails = useTrail(6, {
    scale: light ? 1 : 0,
    config: {
      tension: 420,
    },
  });

  return (
    <div style={{ height: "100vh", display: "grid", placeContent: "center" }}>
      <a.svg
        width="200"
        height="200"
        viewBox="0 0 18 18"
        style={{
          transform,
          overflow: "visible",
        }}
        onClick={() => set((state) => !state)}
      >
        <mask id="moon-mask">
          <rect x="0" y="0" width="18" height="18" fill="#fff" />
          <a.circle cx={x} cy={y} r="8" fill="black" />
        </mask>
        <circle cx="9" cy="9" r="5" mask="url(#moon-mask)" />
        <g>
          {trails.map(({ scale }, index) => {
            const update_scale = light
              ? scale.interpolate((s) => `scale(${s})`)
              : scale.interpolate(() => `scale(0)`);
            return (
              <a.circle
                key={index}
                r="1.5"
                cx={`${POSITION[index].cx}`}
                cy={`${POSITION[index].cy}`}
                style={{
                  transformOrigin: "center center",
                  transform: update_scale,
                }}
              />
            );
          })}
        </g>
      </a.svg>
    </div>
  );
};
