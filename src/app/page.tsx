import { Card, Link } from '@heroui/react'
import { HomeLayout } from 'fumadocs-ui/layouts/home'

import { DesignPatternsLogo } from '@/components/design-patterns-logo'
import { Footer } from '@/components/footer'

const highlights = [
    {
        title: 'Pattern Map',
        description: 'Tra cứu nhanh nhóm Creational, Structural, Behavioral theo ngữ cảnh thực tế.'
    },
    {
        title: 'Use Case Notes',
        description: 'Mỗi pattern đi kèm tín hiệu nhận biết, trade-off và anti-pattern thường gặp.'
    },
    {
        title: 'Applied Samples',
        description: 'Ví dụ triển khai ngắn gọn để bạn chuyển từ lý thuyết sang code nhanh hơn.'
    }
]

export default function Home() {
    return (
        <HomeLayout
            nav={{
                title: <DesignPatternsLogo />,
                transparentMode: 'always'
            }}
            themeSwitch={{
                mode: 'light-dark-system'
            }}
        >
            <main className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-70">
                    <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-200/60 blur-3xl dark:bg-amber-400/20" />
                    <div className="absolute top-36 -left-20 h-72 w-72 rounded-full bg-sky-200/70 blur-3xl dark:bg-sky-500/20" />
                    <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-emerald-200/70 blur-3xl dark:bg-emerald-500/15" />
                </div>

                <div className="relative mx-auto flex min-h-[calc(100vh-100px)] max-w-6xl flex-col justify-center px-4 py-16 sm:px-8 lg:py-20">
                    <div className="max-w-3xl space-y-6">
                        <p className="font-body text-sm font-semibold tracking-[0.22em] text-zinc-500 uppercase dark:text-zinc-400">
                            Design Knowledge Hub
                        </p>
                        <h1 className="font-display text-5xl leading-tight font-black tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
                            Design Patterns Atlas
                        </h1>
                        <p className="font-body max-w-2xl text-lg text-zinc-700 sm:text-xl dark:text-zinc-300">
                            Thư viện tài liệu pattern theo hướng học thuật, trực quan và thực dụng để bạn chọn đúng mẫu
                            thiết kế cho từng tình huống kỹ thuật.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Link
                                className="rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
                                href="/docs"
                            >
                                Vào tài liệu
                            </Link>
                            <Link
                                className="text-sm font-semibold text-zinc-700 underline-offset-4 hover:underline dark:text-zinc-300"
                                href="/docs/behavioral/chain-of-responsibility"
                            >
                                Bắt đầu từ bài đầu tiên
                            </Link>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {highlights.map(item => (
                            <Card
                                key={item.title}
                                className="border border-zinc-200/70 bg-white/80 backdrop-blur-sm dark:border-zinc-700/70 dark:bg-zinc-900/70"
                            >
                                <Card.Header>
                                    <Card.Title className="font-display text-xl text-zinc-900 dark:text-zinc-100 mb-2!">
                                        {item.title}
                                    </Card.Title>
                                    <Card.Description className="font-body text-zinc-600 dark:text-zinc-300">
                                        {item.description}
                                    </Card.Description>
                                </Card.Header>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </HomeLayout>
    )
}
