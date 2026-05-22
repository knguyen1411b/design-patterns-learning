'use client'

import type { ComponentProps } from 'react'

import { Kbd } from '@heroui/react'
import { useDocsSearch } from 'fumadocs-core/search/client'
import type { SearchItemType, SharedProps } from 'fumadocs-ui/components/dialog/search'
import {
    SearchDialog,
    SearchDialogContent,
    SearchDialogHeader,
    SearchDialogIcon,
    SearchDialogList,
    SearchDialogOverlay,
    useSearch
} from 'fumadocs-ui/components/dialog/search'

const defaultItems: SearchItemType[] = [
    {
        id: '/docs',
        type: 'page',
        content: 'Tổng quan mẫu thiết kế',
        breadcrumbs: ['Docs'],
        contentWithHighlights: [
            {
                type: 'text',
                content: 'Tổng quan mẫu thiết kế'
            }
        ],
        url: '/docs'
    }
]

export default function CustomSearchDialog(props: SharedProps) {
    const { query, search, setSearch } = useDocsSearch({
        type: 'fetch',
        api: '/api/search'
    })

    return (
        <SearchDialog {...props} search={search} onSearchChange={setSearch} isLoading={query.isLoading}>
            <SearchDialogOverlay />

            <SearchDialogContent className="bg-white/80 p-3">
                <SearchDialogHeader>
                    <SearchDialogIcon />

                    <SearchDialogInput placeholder="Search patterns..." />

                    <SearchDialogClose />
                </SearchDialogHeader>

                <SearchDialogList items={query.data === 'empty' ? defaultItems : query.data} />
            </SearchDialogContent>
        </SearchDialog>
    )
}

function SearchDialogInput(props: ComponentProps<'input'>) {
    const { search, onSearchChange } = useSearch()

    return (
        <input
            {...props}
            className="w-0 flex-1 bg-transparent outline-none"
            value={search}
            onChange={e => onSearchChange(e.target.value)}
        />
    )
}

function SearchDialogClose() {
    const { onOpenChange } = useSearch()

    return (
        <Kbd onClick={() => onOpenChange(false)}>
            <Kbd.Content>ESC</Kbd.Content>
        </Kbd>
    )
}
