import { animated, useSpring } from "react-spring";
import "./App.css";

function calc(x, y) {
  console.log({
    x,
    y,
    width: window.innerWidth,
    height: window.innerHeight,
    calcX: -(y - window.innerHeight / 2) / 15,
    calcY: (x - window.innerWidth / 2) / 15,
  });
  return [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.2,
  ];
}

function App() {
  const [{ xys }, set] = useSpring(() => ({
    xys: [0, 0, 1],
  }));

  return (
    <div className="container">
      <animated.div
        className="card"
        onMouseMove={(e) => set({ xys: calc(e.clientX, e.clientY) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: xys.interpolate(
            (x, y, s) =>
              `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
          ),
        }}
      />
    </div>
  );
}

export default App;
