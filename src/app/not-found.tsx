import Link from 'next/link'

import { HomeLayout } from 'fumadocs-ui/layouts/home'

import { DesignPatternsLogo } from '@/components/design-patterns-logo'

export default function NotFound() {
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
                        <h1 className="font-display text-5xl leading-tight font-black tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
                            404 - Not Found
                        </h1>
                        <p className="font-body max-w-2xl text-lg text-zinc-700 sm:text-xl dark:text-zinc-300">
                            Rất tiếc, trang bạn đang tìm kiếm không tồn tại. Hãy quay lại trang chủ để khám phá tài liệu
                            thiết kế mẫu.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Link
                                className="rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
                                href="/"
                            >
                                Quay về trang chủ
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </HomeLayout>
    )
}
