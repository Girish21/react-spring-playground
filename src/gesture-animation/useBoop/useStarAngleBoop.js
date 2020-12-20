import { useBoop } from "./useBoop";

const normalize = (
  number,
  currentScaleMin,
  currentScaleMax,
  newScaleMin = 0,
  newScaleMax = 1
) => {
  const standardNormalization =
    (number - currentScaleMin) / (currentScaleMax - currentScaleMin);
  return (newScaleMax - newScaleMin) * standardNormalization + newScaleMin;
};

export const useStarAngledBoop = function (index) {
  const angle = (360 / 5) * index - 90;
  const angleInRads = (angle * Math.PI) / 180;
  const distance = 42;

  const x = distance * Math.cos(angleInRads);
  const y = distance * Math.sin(angleInRads);

  let timing = normalize(index, 0, 4, 450, 600);
  timing *= 1 + index * 0.22;

  const friction = normalize(index, 0, 4, 15, 40);

  return useBoop({
    x,
    y,
    timing,
    scale: 1.4,
    springConfig: {
      friction,
      tension: 150,
    },
  });
};
