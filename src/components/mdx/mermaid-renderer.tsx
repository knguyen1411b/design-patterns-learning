'use client'

import { useEffect, useRef, useState } from 'react'

import { useTheme } from 'next-themes'

interface MermaidRendererProps {
    chart: string
}

export function MermaidRenderer({ chart }: MermaidRendererProps) {
    const { resolvedTheme } = useTheme()
    const [svg, setSvg] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const chartIdRef = useRef<string>('')

    useEffect(() => {
        chartIdRef.current = `mermaid-${Math.random().toString(36).substring(2, 9)}`
    }, [])

    useEffect(() => {
        let isCancelled = false

        async function renderChart() {
            try {
                // Dynamically import mermaid on client side to prevent SSR issues
                const mermaid = (await import('mermaid')).default

                // Initialize mermaid with themes adapted to current app mode
                mermaid.initialize({
                    startOnLoad: false,
                    theme: resolvedTheme === 'dark' ? 'dark' : 'neutral',
                    securityLevel: 'loose',
                    fontFamily: 'var(--font-sans)',
                    themeVariables: {
                        background: resolvedTheme === 'dark' ? '#18181b' : '#f9f9f9',
                        primaryColor: resolvedTheme === 'dark' ? '#27272a' : '#f4f4f5',
                        lineColor: resolvedTheme === 'dark' ? '#52525b' : '#d4d4d8',
                        textColor: resolvedTheme === 'dark' ? '#f4f4f5' : '#18181b'
                    }
                })

                if (isCancelled) return

                const { svg: renderedSvg } = await mermaid.render(chartIdRef.current || 'mermaid-svg', chart)

                if (isCancelled) return
                setSvg(renderedSvg)
                setError(null)
            } catch (err) {
                console.error('Mermaid render error:', err)
                if (!isCancelled) {
                    setError(err instanceof Error ? err.message : 'Lỗi khi vẽ sơ đồ Mermaid')
                }
            }
        }

        if (chartIdRef.current) {
            void renderChart()
        }

        return () => {
            isCancelled = true
        }
    }, [chart, resolvedTheme])

    if (error) {
        return (
            <div className="my-4 rounded-lg border border-red-500/20 bg-red-500/5 p-4 text-xs font-mono text-red-500 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-400">
                <p className="font-bold mb-1">Mermaid Render Error:</p>
                <pre className="whitespace-pre-wrap">{error}</pre>
            </div>
        )
    }

    if (!svg) {
        return (
            <div className="my-4 flex h-32 items-center justify-center rounded-lg bg-neutral-50 font-sans text-sm text-neutral-400 dark:bg-neutral-900/50 dark:text-neutral-500">
                Đang tải sơ đồ...
            </div>
        )
    }

    return (
        <div
            ref={containerRef}
            className="mermaid-chart my-6 flex justify-center overflow-x-auto rounded-lg bg-neutral-50 p-4 dark:bg-neutral-900/50"
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    )
}
