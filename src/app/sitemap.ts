import type { MetadataRoute } from 'next'

import { source } from '@/lib/source'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://design-patterns-learning.vercel.app'

    // Lấy tất cả các trang tài liệu từ Fumadocs
    const pages = source.getPages()

    const docUrls = pages.map(page => ({
        url: `${baseUrl}${page.url}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8
    }))

    // Thêm trang chủ vào sitemap
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1.0
        },
        ...docUrls
    ]
}
