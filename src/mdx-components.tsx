import { Pre } from 'fumadocs-ui/components/codeblock'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'

import { FumadocsCustomCodeblock } from './components/mdx/fumadocs-custom-codeblock'
import { MermaidRenderer } from './components/mdx/mermaid-renderer'
import { cn } from './utils/cn'

const MAX_LINES_FOR_LINE_NUMBERS = 20

export const getMDXComponents = (components?: MDXComponents): MDXComponents => ({
    ...defaultMdxComponents,
    Mermaid: ({ chart }: { chart: string }) => <MermaidRenderer chart={chart} />,
    pre: ({ children, ...props }) => {
        let lineCount = 1

        const extractText = (node: React.ReactNode): string => {
            if (typeof node === 'string') return node
            if (typeof node === 'number') return String(node)
            if (node && typeof node === 'object' && 'props' in node) {
                const element = node as React.ReactElement<{ children?: React.ReactNode }>
                if (element.props.children) {
                    if (Array.isArray(element.props.children)) {
                        return element.props.children.map(extractText).join('')
                    }

                    return extractText(element.props.children)
                }
            }

            return ''
        }

        const codeContent = extractText(children)

        lineCount = codeContent.split('\n').length

        const classes = cn(
            'mdx-code-block',
            lineCount > MAX_LINES_FOR_LINE_NUMBERS ? 'docs-code-block-line-numbers' : undefined,
            props.className
        )

        return (
            <FumadocsCustomCodeblock {...props} className={classes}>
                <Pre>{children}</Pre>
            </FumadocsCustomCodeblock>
        )
    },
    ...components
})

export const useMDXComponents = getMDXComponents
