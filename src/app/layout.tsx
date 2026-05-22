import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react'
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
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://design-patterns-atlas.vercel.app'),
    title: {
        default: 'Design Patterns Atlas',
        template: '%s | Design Patterns Atlas'
    },
    description:
        'Không gian tra cứu và học tập mẫu thiết kế (Design Patterns) theo hướng học thuật, trực quan và thực hành cho lập trình viên.',
    keywords: [
        'design patterns',
        'mẫu thiết kế',
        'gof',
        'gang of four',
        'software architecture',
        'clean code',
        'clean architecture',
        'java design patterns',
        'học mẫu thiết kế',
        'lập trình hướng đối tượng',
        'oop'
    ],
    authors: [{ name: 'Khánh Nguyên', url: 'https://github.com/knguyen1411b' }],
    creator: 'Khánh Nguyên',
    publisher: 'Design Patterns Atlas',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    openGraph: {
        type: 'website',
        locale: 'vi_VN',
        url: 'https://design-patterns-atlas.vercel.app',
        title: 'Design Patterns Atlas',
        description:
            'Không gian tra cứu và học tập mẫu thiết kế (Design Patterns) theo hướng học thuật, trực quan và thực hành cho lập trình viên.',
        siteName: 'Design Patterns Atlas'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Design Patterns Atlas',
        description:
            'Không gian tra cứu và học tập mẫu thiết kế (Design Patterns) theo hướng học thuật, trực quan và thực hành cho lập trình viên.'
    }
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
                <Analytics />
            </body>
        </html>
    )
}
