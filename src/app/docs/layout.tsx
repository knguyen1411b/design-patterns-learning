import type { ReactNode } from 'react'

import { Separator } from '@heroui/react'
import type { Root } from 'fumadocs-core/page-tree'

import { DesignPatternsLogo } from '@/components/design-patterns-logo'
import { Footer } from '@/components/footer'
import { DocsLayout } from '@/components/fumadocs/layouts'
import { GithubButton } from '@/components/github-button'
import { source } from '@/lib/source'

export default function RootDocsLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <DocsLayout
                tabMode="navbar"
                tree={source.pageTree as Root}
                themeSwitch={{
                    mode: 'light-dark-system'
                }}
                sidebar={{
                    banner: () => (
                        <div className="flex flex-col gap-4 px-4 pt-4 sm:hidden">
                            <DesignPatternsLogo />
                            <Separator />
                        </div>
                    )
                }}
                nav={{
                    mode: 'top',
                    transparentMode: 'always',
                    title: <DesignPatternsLogo />,
                    children: <GithubButton />
                }}
            >
                {children}
            </DocsLayout>
            <Footer />
        </>
    )
}
