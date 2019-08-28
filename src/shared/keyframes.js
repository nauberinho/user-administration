import { keyframes } from "styled-components";

const fadeInAndExpand = keyframes`
  0% {
    opacity: 0;
    max-height: 0;
  }
  100% {
    opacity: 1;
    max-height: 900px
  }
`;

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export { fadeInAndExpand, fadeIn };
