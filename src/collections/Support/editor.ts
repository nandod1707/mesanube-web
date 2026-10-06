import {
  BlockquoteFeature,
  BoldFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineCodeFeature,
  InlineToolbarFeature,
  ItalicFeature,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  UnorderedListFeature,
  UploadFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

// The support editor mirrors the Markdown subset allowed by docs/support-article-guidelines.md.
// The sync endpoint converts Markdown with these same features, so admin and sync stay in lockstep.
export const supportEditorFeatures = [
  ParagraphFeature(),
  BoldFeature(),
  ItalicFeature(),
  InlineCodeFeature(),
  HeadingFeature({ enabledHeadingSizes: ['h2', 'h3'] }),
  UnorderedListFeature(),
  OrderedListFeature(),
  LinkFeature({ enabledCollections: [] }),
  BlockquoteFeature(),
  UploadFeature({ enabledCollections: ['support-media'] }),
]

export const supportEditor = lexicalEditor({
  features: () => [...supportEditorFeatures, FixedToolbarFeature(), InlineToolbarFeature()],
})
