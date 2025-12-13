import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { InitialContentPlugin } from './InitialContentPlugin';
import { CopyEmailPlugin } from './CopyEmailPlugin';

function onError(error: Error) {
  console.error(error);
}

interface EditorProps {
  html: string;
}

export const Editor = ({ html }: EditorProps) => {
  const initialConfig = {
    namespace: 'EmailEditor',
    onError,
    nodes: [],
  };

  return (
    <div>

      <LexicalComposer initialConfig={initialConfig}>
        <div className='border-2 border-accent'>

          <RichTextPlugin
            contentEditable={<ContentEditable className="min-h-48 p-4" />}
            placeholder={<div className="text-muted-foreground">Start editing…</div>}
            ErrorBoundary={LexicalErrorBoundary}
          />

          <HistoryPlugin />

          <InitialContentPlugin html={html} />
        </div>
        <CopyEmailPlugin />
      </LexicalComposer>
    </div>
  );
};
