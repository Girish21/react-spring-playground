import { animated as a, useSpring } from "react-spring";
import styles from "./hero-animation.module.css";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const transAddress = (x, y) =>
  `matrix(0.665,0,0,0.665,${76.470681 + x / 40},${
    52.574351 + (y < 0 ? y / 80 : y / 40)
  })`;
const transContent = (x, y) =>
  `translate(${x / 40}, ${y < 0 ? y / 40 : y / 20})`;

export const HeroAnimation = function () {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

  return (
    <div className={styles.container}>
      <div className={styles.svg_container}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 508 285.75"
          onMouseMove={(e) => set({ xy: calc(e.clientX, e.clientY) })}
          onMouseLeave={() => set({ xy: [0, 0] })}
        >
          <defs id="defs2">
            <linearGradient
              id="paint0_linear"
              x1="518"
              y1="28"
              x2="10"
              y2="349"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(0.50310922,0,0,0.43068287,110.06666,61.912499)"
            >
              <stop stop-color="#4CB4EF" id="stop260" />
              <stop
                offset="1"
                stop-color="#FDB0FF"
                stop-opacity="0.72"
                id="stop262"
              />
            </linearGradient>
            <linearGradient
              id="linearGradient329"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(0.50310922,0,0,0.43068287,121.17917,65.352086)"
              x1="518"
              y1="28"
              x2="10"
              y2="349"
            />
          </defs>
          <g id="background">
            <g
              id="g390"
              transform="matrix(0.57590689,0.3325,-0.665,0.38393793,202.95523,2.5198143)"
              style={{ display: "inline" }}
            >
              <path
                id="path586"
                style={{
                  fill: "#cccccc",
                  stroke: "none",
                  strokeWidth: "1.75933px",
                }}
                d="m 816.42578,120.54492 -582.74414,336.44727 1.05078,0.60742 -1.04687,0.60351 0.97851,0.56446 -0.98242,0.56836 0.91211,0.52734 -0.91016,0.52539 -0.004,0.002 0.84961,0.49024 -0.84375,0.48633 0.77539,0.44726 -0.7793,0.45117 0.71094,0.41016 -0.71094,0.41016 0.64453,0.37109 -0.64258,0.37109 0.57618,0.33204 -0.57422,0.33203 0.50781,0.29297 -0.50781,0.29296 -0.004,0.002 0.43945,0.2539 -0.4375,0.25196 0.37305,0.21484 -0.37109,0.21484 -0.004,0.002 0.30469,0.17578 -0.30274,0.17578 0.23438,0.13477 -0.23242,0.13476 -0.004,0.004 0.16992,0.0976 -0.16601,0.0957 0.10156,0.0586 -0.10156,0.0586 0.0332,0.0195 -0.0352,0.0195 869.49022,502 582.7422,-336.44531 v -0.002 l -0.035,-0.0215 0.031,-0.0176 -0.1016,-0.0586 0.1016,-0.0586 -0.1661,-0.0957 0.168,-0.0977 v -0.002 l -0.2383,-0.13867 0.2344,-0.13477 -0.3047,-0.17578 0.3047,-0.17578 -0.3692,-0.21289 0.3711,-0.21485 v -0.002 l -0.4414,-0.25586 0.4375,-0.25195 -0.5079,-0.29297 0.5079,-0.29297 -0.5723,-0.33008 0.5742,-0.33203 -0.6445,-0.37304 0.6426,-0.3711 -0.709,-0.41015 0.7109,-0.41016 -0.7793,-0.44922 0.7774,-0.44922 -0.8457,-0.48828 0.8476,-0.48828 -0.914,-0.52734 0.914,-0.52735 -0.9805,-0.5664 0.9805,-0.56641 -1.0488,-0.60547 1.0488,-0.60547 z"
                transform="matrix(0.15275726,-0.13229167,0.26458333,0.22913589,-35.430137,146.59871)"
              />
              <rect
                y="66.213448"
                width="265.64166"
                height="154.18446"
                fill="url(#paint0_linear)"
                id="rect250"
                x="121.17917"
                style={{
                  opacity: 1,
                  "mix-blend-mode": "normal",
                  fill: "url(#paint0_linear)",
                  fillOpacity: 1,
                  stroke: "none",
                  strokeWidth: 0.465,
                  "stroke-miterlimit": 4,
                  "stroke-dasharray": "none",
                  "stroke-opacity": 1,
                }}
              />
            </g>
            <g id="g397" transform="matrix(0.665,0,0,0.665,84.96758,47.164269)">
              <rect
                width="265.64166"
                height="8.1829748"
                fill="#303030"
                id="rect252"
                x="121.17917"
                y="65.881248"
                style={{ strokeWidth: 0.46549 }}
                transform="matrix(0.86602541,0.50000001,-1,0.57735028,177.28211,-66.923737)"
              />
              <ellipse
                cx="163.64041"
                cy="-88.408554"
                fill="#f34d4d"
                id="circle359"
                style={{ strokeWidth: 0.537285 }}
                transform="matrix(0.8660254,0.5,-0.8660254,0.5,0,0)"
                rx="2"
                ry="2.309401"
              />
              <ellipse
                cx="171.69014"
                cy="-88.408554"
                fill="#d59e4d"
                id="circle361"
                style={{ strokeWidth: 0.537285 }}
                transform="matrix(0.8660254,0.5,-0.8660254,0.5,0,0)"
                rx="2"
                ry="2.309401"
              />
              <ellipse
                cx="179.7399"
                cy="-88.408554"
                fill="#7aa82e"
                id="circle363"
                style={{ strokeWidth: 0.537285 }}
                transform="matrix(0.8660254,0.5,-0.8660254,0.5,0,0)"
                rx="2"
                ry="2.309401"
              />
            </g>
            <a.g id="addressbar" transform={xy.interpolate(transAddress)}>
              <rect
                style={{
                  fill: "#ffffff",
                  fillOpacity: 0.721569,
                  stroke: "none",
                  strokeWidth: 0.37611,
                }}
                id="rect431"
                width="18.520874"
                height="3.055145"
                x="166.286"
                y="-93.730301"
                transform="matrix(0.8660254,0.5,-0.8660254,0.5,0,0)"
              />
              <rect
                style={{
                  fill: "#ffffff",
                  fillOpacity: 0.721569,
                  stroke: "none",
                  strokeWidth: 0.433047,
                }}
                id="rect433"
                width="202.56"
                height="3.055145"
                x="198.03606"
                y="-93.730301"
                transform="matrix(0.8660254,0.5,-0.8660254,0.5,0,0)"
              />
            </a.g>
            <a.g
              id="content-container"
              transform={xy.interpolate(transContent)}
            >
              <g id="content-card">
                <path
                  id="rect439"
                  style={{
                    fill: "#ffffff",
                    fillOpacity: 0.721569,
                    stroke: "none",
                    strokeWidth: 0.113574,
                  }}
                  d="m 299.35641,143.06933 -36.94907,21.33255 22.85632,13.1961 36.94906,-21.33255 z m -0.74947,2.72768 18.88131,10.90113 -19.15878,11.06132 -18.8813,-10.90113 z"
                />
                <rect
                  style={{
                    fill: "#666666",
                    fillOpacity: 0.721569,
                    stroke: "none",
                    strokeWidth: 0.134657,
                  }}
                  id="rect443"
                  width="8.0324087"
                  height="1.580189"
                  x="318.19775"
                  y="0.25942096"
                  rx="0.86739171"
                  ry="1.1944736"
                  transform="matrix(0.8660254,0.5,-0.8660254,0.5,0,0)"
                />
                <rect
                  style={{
                    fill: "#666666",
                    fillOpacity: 0.721569,
                    stroke: "none",
                    strokeWidth: 0.134657,
                  }}
                  id="rect445"
                  width="21.80225"
                  height="1.580189"
                  x="318.19775"
                  y="3.4198098"
                  rx="0.86739171"
                  ry="1.1944736"
                  transform="matrix(0.8660254,0.5,-0.8660254,0.5,0,0)"
                />
                <rect
                  style={{
                    fill: "#666666",
                    fillOpacity: 0.721569,
                    stroke: "none",
                    strokeWidth: 0.134657,
                  }}
                  id="rect447"
                  width="17.212303"
                  height="1.580189"
                  x="318.19775"
                  y="6.580183"
                  rx="0.86739171"
                  ry="1.1944736"
                  transform="matrix(0.8660254,0.5,-0.8660254,0.5,0,0)"
                />
              </g>
              <g
                id="content"
                transform="matrix(0.40782797,0.23545959,-0.50000055,0.28867545,39.512395,-85.629635)"
                style={{ fill: "#ffffff" }}
              >
                <rect
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.30934,
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  id="rect1407"
                  width="26.345741"
                  height="4.2333364"
                  x="608.54169"
                  y="142.87497"
                />
                <rect
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.30934,
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  id="rect1409"
                  width="155.14716"
                  height="4.2333364"
                  x="608.54169"
                  y="155.57498"
                />
                <rect
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.30934,
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  id="rect1411"
                  width="76.109917"
                  height="4.2333364"
                  x="608.54169"
                  y="168.27499"
                />
                <rect
                  style={{
                    opacity: 1,
                    fill: "#ffffff",
                    fillOpacity: 1,
                    stroke: "none",
                    strokeWidth: 0.30934,
                    strokeMiterlimit: 4,
                    strokeDasharray: "none",
                    strokeOpacity: 1,
                  }}
                  id="rect1413"
                  width="137.58331"
                  height="4.2333364"
                  x="608.54169"
                  y="180.97499"
                />
              </g>
            </a.g>
          </g>
        </svg>
      </div>
    </div>
  );
};
