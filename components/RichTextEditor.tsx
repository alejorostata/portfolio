'use client';

import React, { useMemo } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import { Bold, Italic, List, ListOrdered, Link as LinkIcon, Heading2, Quote, Undo, Redo, Strikethrough, Code, ImageIcon, Minus, RemoveFormatting } from 'lucide-react';

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
  placeholder?: string;
  id?: string;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  content,
  onChange,
  placeholder = 'Write your message...',
  id = 'contact-message',
}) => {
  const extensions = useMemo(
    () => [
      StarterKit.configure({
        link: false,
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
        HTMLAttributes: {
          class: 'rounded-xl max-h-64 object-contain my-2 border border-slate-200 dark:border-slate-800',
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 dark:text-blue-400 underline font-medium',
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    [placeholder]
  );

  const editor = useEditor({
    immediatelyRender: false,
    extensions,
    content,
    editorProps: {
      attributes: {
        id,
        class: 'prose dark:prose-invert max-w-none p-3.5 min-h-[140px] focus:outline-none text-slate-900 dark:text-slate-100 text-sm leading-relaxed',
        role: 'textbox',
        'aria-multiline': 'true',
        'aria-label': placeholder || 'Message content',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('Enter URL:', previousUrl);
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetMark('link').run();
      return;
    }
    editor.chain().focus().extendMarkRange('link').setMark('link', { href: url }).run();
  };

  const addImage = () => {
    const url = window.prompt('Enter Image URL (or paste image directly into editor):');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 overflow-hidden focus-within:border-blue-500 transition-colors">
      {/* Formatting Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer ${
            editor.isActive('bold') ? 'bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold' : ''
          }`}
          title="Bold"
          aria-label="Bold"
        >
          <Bold className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer ${
            editor.isActive('italic') ? 'bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400' : ''
          }`}
          title="Italic"
          aria-label="Italic"
        >
          <Italic className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer ${
            editor.isActive('strike') ? 'bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400' : ''
          }`}
          title="Strikethrough"
          aria-label="Strikethrough"
        >
          <Strikethrough className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer ${
            editor.isActive('code') ? 'bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400' : ''
          }`}
          title="Inline Code"
          aria-label="Inline Code"
        >
          <Code className="w-4 h-4" />
        </button>

        <div className="w-px h-4 bg-slate-200 dark:bg-slate-800 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer ${
            editor.isActive('heading', { level: 2 }) ? 'bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 font-bold' : ''
          }`}
          title="Heading"
          aria-label="Heading"
        >
          <Heading2 className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer ${
            editor.isActive('bulletList') ? 'bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400' : ''
          }`}
          title="Bullet List"
          aria-label="Bullet List"
        >
          <List className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer ${
            editor.isActive('orderedList') ? 'bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400' : ''
          }`}
          title="Numbered List"
          aria-label="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer ${
            editor.isActive('blockquote') ? 'bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400' : ''
          }`}
          title="Quote"
          aria-label="Quote"
        >
          <Quote className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          title="Divider Line"
          aria-label="Divider Line"
        >
          <Minus className="w-4 h-4" />
        </button>

        <div className="w-px h-4 bg-slate-200 dark:bg-slate-800 mx-1" />

        <button
          type="button"
          onClick={setLink}
          className={`p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer ${
            editor.isActive('link') ? 'bg-blue-50 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400' : ''
          }`}
          title="Insert Link"
          aria-label="Insert Link"
        >
          <LinkIcon className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={addImage}
          className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          title="Insert / Paste Image"
          aria-label="Insert / Paste Image"
        >
          <ImageIcon className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
          className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          title="Clear Formatting"
          aria-label="Clear Formatting"
        >
          <RemoveFormatting className="w-4 h-4" />
        </button>

        <div className="w-px h-4 bg-slate-200 dark:bg-slate-800 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 transition-colors cursor-pointer disabled:cursor-not-allowed"
          title="Undo"
          aria-label="Undo"
        >
          <Undo className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 transition-colors cursor-pointer disabled:cursor-not-allowed"
          title="Redo"
          aria-label="Redo"
        >
          <Redo className="w-4 h-4" />
        </button>
      </div>

      {/* Editor Area */}
      <EditorContent editor={editor} />
    </div>
  );
};
