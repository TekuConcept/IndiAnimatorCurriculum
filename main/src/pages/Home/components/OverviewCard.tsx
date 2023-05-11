import React from 'react'
import './OverviewCard.scss'

export interface OverviewCardProps {
    index?: number
    color?: string
    items?: Array<React.ReactElement>
}

export default class OverviewCard extends React.Component<OverviewCardProps> {
    constructor(props: OverviewCardProps) {
        super(props)
    }

    render() {
        return <article className="overview-card">
            <h2>Term <span style={{
                color: this.props.color
            }}>{this.props.index || 0}</span></h2>
            <ul>
                {this.props.items?.map((item, index) =>
                    <li key={index}>{item}</li>)}
            </ul>
        </article>
    }
}
