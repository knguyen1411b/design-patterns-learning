import { docs, meta } from 'collections/server'
import { InferMetaType, InferPageType, loader } from 'fumadocs-core/source'
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server'

export const source = loader({
    baseUrl: '/docs',
    source: toFumadocsSource(docs, meta)
})

export type Page = InferPageType<typeof source>
export type Meta = InferMetaType<typeof source>
