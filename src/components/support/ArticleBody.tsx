import Image from 'next/image'
import React from 'react'

import type { SerializedUploadNode } from '@payloadcms/richtext-lexical'
import {
  type JSXConvertersFunction,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react'

import type { SupportArticle, SupportMedia } from '@/payload-types'
import { getMediaUrl } from '@/utilities/getMediaUrl'

import styles from './ArticleBody.module.css'

// Screenshots render through next/image at their intrinsic size, capped by the column width.
const converters: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  upload: ({ node }: { node: SerializedUploadNode }) => {
    const media = node.value as SupportMedia | string
    if (typeof media !== 'object' || !media.url || !media.width || !media.height) return null
    return (
      <Image
        src={getMediaUrl(media.url, media.updatedAt)}
        alt={media.alt ?? ''}
        width={media.width}
        height={media.height}
        sizes="(max-width: 768px) 100vw, 760px"
        className={styles.screenshot}
      />
    )
  },
})

export function ArticleBody({ content }: { content: SupportArticle['content'] }) {
  return <ConvertRichText data={content} converters={converters} className={styles.body} />
}
