import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import { NextProvider } from 'fumadocs-core/framework/next'
import { TreeContextProvider } from 'fumadocs-ui/contexts/tree'

import { source } from '@/lib/source'

import './globals.css'
import { Provider } from './provider'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})
export const metadata: Metadata = {
    title: 'Design Patterns Atlas',
    description: 'Không gian học mẫu thiết kế theo hướng học thuật, trực quan và thực hành.'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html suppressHydrationWarning className={inter.variable} lang="vi">
            <body className="flex min-h-screen flex-col font-sans">
                <NextProvider>
                    <TreeContextProvider tree={source.pageTree}>
                        <Provider>{children}</Provider>
                    </TreeContextProvider>
                </NextProvider>
            </body>
        </html>
    )
}
