import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: '霞鹜文楷';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/LXGWWenKaiScreen.ttf') format('truetype');
      }`}
  />
);

export default Fonts;
