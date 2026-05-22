import { rehypeCodeDefaultOptions, remarkMdxMermaid } from 'fumadocs-core/mdx-plugins'
import { defineConfig, defineDocs, frontmatterSchema } from 'fumadocs-mdx/config'
import { z } from 'zod'

export const { docs, meta } = defineDocs({
    dir: 'content',
    docs: {
        schema: frontmatterSchema.extend({
            title: z.string().min(5, 'Title quá ngắn').max(100, 'Title quá dài'),
            summary: z.string().min(10, 'Summary quá ngắn').max(200, 'Summary quá dài'),
            category: z.enum(['creational', 'structural', 'behavioral']),
            level: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
            tags: z.array(z.string()).default([]),
            related: z.array(z.string()).default([]),
            date: z.coerce.date().optional(),
            author: z.string().default('Khánh Nguyên')
        })
    }
})

export default defineConfig({
    mdxOptions: {
        providerImportSource: '@/mdx-components',
        remarkPlugins: [remarkMdxMermaid],
        rehypeCodeOptions: {
            ...rehypeCodeDefaultOptions
        }
    }
})
