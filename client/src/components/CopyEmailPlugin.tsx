import { Button } from './ui/button';
import { Copy } from 'lucide-react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $generateHtmlFromNodes } from '@lexical/html';
import { $getRoot } from 'lexical';

export function CopyEmailPlugin() {
  const [editor] = useLexicalComposerContext();

  const copyHtml = () => {
    let html = '';
    let text = '';

    editor.update(() => {
      html = $generateHtmlFromNodes(editor, null);
      text = $getRoot().getTextContent();
    });

    const item = new ClipboardItem({
      'text/html': new Blob([html], { type: 'text/html' }),
      'text/plain': new Blob([text], { type: 'text/plain' }),
    });

    void navigator.clipboard.write([item]);
  };

  return (
    <Button onClick={copyHtml} className="mt-4 w-content">
      <Copy /> Copy Contents
    </Button>
  );
}