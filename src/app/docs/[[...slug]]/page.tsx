import { notFound } from 'next/navigation'

import { Card, Chip } from '@heroui/react'

import { DocsBody, DocsDescription, DocsPage, DocsTitle } from '@/components/fumadocs/layouts/page'
import { source } from '@/lib/source'

interface PatternPageData {
    title: string
    summary: string
    category: 'creational' | 'structural' | 'behavioral'
    level: 'beginner' | 'intermediate' | 'advanced'
    body: React.ComponentType<{ components?: import('mdx/types').MDXComponents }>
    toc: { depth: number; title: string; url: string }[]
}

type PageProps = {
    params: Promise<{ slug?: string[] }>
}

export async function generateStaticParams() {
    return source.generateParams()
}

const getLevelTitle = (level: 'beginner' | 'intermediate' | 'advanced') => {
    switch (level) {
        case 'intermediate':
            return 'Dành cho người đã có kinh nghiệm'
        case 'advanced':
            return 'Dành cho người có trình độ cao'
        default:
            return 'Dành cho người mới bắt đầu'
    }
}

const getCategoryTitle = (category: 'creational' | 'structural' | 'behavioral') => {
    switch (category) {
        case 'structural':
            return 'Mẫu thiết kế cấu trúc'
        case 'behavioral':
            return 'Mẫu thiết kế hành vi'
        default:
            return 'Mẫu thiết kế khởi tạo'
    }
}

export default async function Page({ params }: PageProps) {
    const { slug } = await params
    const page = source.getPage(slug)

    if (!page) notFound()

    const data = page.data as unknown as PatternPageData
    const MDX = data.body

    return (
        <DocsPage full={page.data.full} toc={data.toc} breadcrumb={{ enabled: false }}>
            <Card variant="default" className="mb-5">
                <Card.Header>
                    <DocsTitle className="text-2xl font-bold tracking-tight">{page.data.title}</DocsTitle>
                    <DocsDescription className="text-base leading-relaxed text-muted-foreground">
                        {page.data.summary}
                    </DocsDescription>
                </Card.Header>
                <Card.Content className="mt-0!">
                    <div className="flex flex-wrap items-center gap-2">
                        <Chip size="sm" variant="soft" className="font-medium px-2 py-1" color="accent">
                            Loại: {getCategoryTitle(data.category)}
                        </Chip>
                        <Chip size="sm" variant="soft" className="font-medium px-2 py-1" color="warning">
                            Mức độ: {getLevelTitle(data.level)}
                        </Chip>
                    </div>
                </Card.Content>
            </Card>
            <DocsBody>
                <MDX />
            </DocsBody>
        </DocsPage>
    )
}
