declare module 'react-syntax-highlighter' {
  import { ComponentType, ReactNode } from 'react';
  interface SyntaxHighlighterProps {
    language?: string;
    style?: any;
    children?: ReactNode;
    [key: string]: any;
  }
  const SyntaxHighlighter: ComponentType<SyntaxHighlighterProps>;
  export default SyntaxHighlighter;
}

// style themes are shipped as separate files; allow importing them with an `any` to keep things simple.
declare module 'react-syntax-highlighter/dist/esm/styles/hljs/*' {
  const style: any;
  export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/*' {
  const style: any;
  export default style;
}
