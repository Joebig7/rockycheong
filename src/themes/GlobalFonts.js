import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Source Han Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/SourceHanSansSC-VF.ttf') format('truetype');
      }`}
  />
);

export default Fonts;
