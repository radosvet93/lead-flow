import { useEffect } from 'react';
import { $getRoot } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $generateNodesFromDOM } from '@lexical/html';

interface InitialContentPluginProps {
  html: string
}
export const InitialContentPlugin = ({ html }: InitialContentPluginProps) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!html) return;

    editor.update(() => {
      const parser = new DOMParser();
      const dom = parser.parseFromString(html, "text/html");

      const root = $getRoot();
      root.clear();

      const nodes = $generateNodesFromDOM(editor, dom);

      root.append(...nodes);
    });
  }, [editor, html]);

  return null;
};