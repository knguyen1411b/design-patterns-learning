'use client'

import { Button } from '@heroui/react'

import { Iconify } from './iconify'

export function GithubButton() {
    return (
        <Button isIconOnly variant="outline" onClick={() => window.open('https://github.com/knguyen1411b', '_blank')}>
            <Iconify className="text-lg" icon="mdi:github" />
        </Button>
    )
}
