import React from 'react'
import './CircleBadge.scss'

export interface CircleBadgeProps {
    title?: string
    subtitle?: string
    color?: string
    children?: React.ReactNode
}

export default function CircleBadge(props: CircleBadgeProps) {
    return <article className="circle-badge">
        <h2 style={{ backgroundColor: props.color }}>
            <strong>{props.title}</strong>
            <span>{props.subtitle}</span>
        </h2>
        <p>{props.children}</p>
    </article>
}
