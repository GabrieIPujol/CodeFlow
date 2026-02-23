declare module 'react-syntax-highlighter' {
  import { ComponentType, ReactNode } from 'react';
  interface SyntaxHighlighterProps {
    language?: string;
    style?: unknown;
    children?: ReactNode;
    [key: string]: unknown;
  }
  const SyntaxHighlighter: ComponentType<SyntaxHighlighterProps>;
  export default SyntaxHighlighter;
}

declare module 'react-syntax-highlighter/dist/esm/styles/hljs/*' {
  const style: unknown;
  export default style;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism/*' {
  const style: unknown;
  export default style;
}
