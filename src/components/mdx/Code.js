import React from "react";

import { Highlight, themes, defaultProps } from "prism-react-renderer";

// deprecated   markdown代码高亮 prism
export const Code = ({ code, language }) => {
  return (
    <Highlight
      {...defaultProps}
      theme={themes.vsDark}
      code={code}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
