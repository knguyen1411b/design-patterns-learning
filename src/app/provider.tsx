'use client'

import type { ReactNode } from 'react'

import dynamic from 'next/dynamic'

import { ToastProvider } from '@heroui/react'
import { RootProvider } from 'fumadocs-ui/provider/next'

const SearchDialog = dynamic(() => import('@/components/search-dialog'), {
    ssr: false
})

export function Provider({ children }: { children: ReactNode }) {
    return (
        <RootProvider
            search={{
                SearchDialog
            }}
        >
            {children}
            <ToastProvider placement="top end" />
        </RootProvider>
    )
}
