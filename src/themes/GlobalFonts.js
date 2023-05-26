import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Source Code Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/SourceCodePro-Regular.ttf') format('truetype');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      @font-face {
        font-family: 'Source Han Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/SourceHanSansSC-VF.ttf') format('truetype');
        unicode-range: U+4E00-9FFF; /* 中文字符集 */
      }
      `}
  />
);

export default Fonts;
