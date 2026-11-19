import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import React from 'react'

import RichText from '@/components/RichText'
import styles from '@/components/shared/Prose.module.css'

/** Post content in the shared reading column (same prose styles as support articles). */
export function PostBody({ content }: { content: DefaultTypedEditorState }) {
  return (
    <RichText
      data={content}
      enableGutter={false}
      enableProse={false}
      className={`w-full max-w-[720px] py-[60px] lg:py-[80px] ${styles.body}`}
    />
  )
}
