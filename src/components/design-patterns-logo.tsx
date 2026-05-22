interface DesignPatternsLogoProps {
    className?: string
    size?: number
    height?: number
    width?: number
}

export function DesignPatternsLogo({ className, height, size = 26, width }: DesignPatternsLogoProps) {
    const aspectRatio = 1
    const svgHeight = height || size
    const svgWidth = width || Math.round(svgHeight * aspectRatio)

    return (
        <>
            <svg
                aria-hidden="true"
                className={className}
                width={svgWidth}
                height={svgHeight}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="60"
                    fontWeight="800"
                    fill="currentColor"
                    style={{
                        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                        letterSpacing: '-4px'
                    }}
                >
                    DP
                </text>
            </svg>

            <span className="sr-only">Design Patterns</span>
        </>
    )
}
