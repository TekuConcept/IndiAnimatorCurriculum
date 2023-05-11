import './Ribbon.scss'

export enum RibbonDirection {
    TOP_LEFT,
    TOP_RIGHT,
    BOTTOM_LEFT,
    BOTTOM_RIGHT
}

export interface RibbonProps {
    id?: string
    text?: string
    link?: string
    orientation?: RibbonDirection
}

function orientationToClass(direction: RibbonDirection) {
    switch (direction) {
    case RibbonDirection.TOP_LEFT: return "ribbon-top-left"
    case RibbonDirection.TOP_RIGHT: return "ribbon-top-right"
    case RibbonDirection.BOTTOM_LEFT: return "ribbon-bottom-left"
    case RibbonDirection.BOTTOM_RIGHT: return "ribbon-bottom-right"
    }
}

export default function Ribbon(props: RibbonProps) {
    const span = <span>{props.text}<hr /></span>
    return <div className={
        `ribbon ${orientationToClass(props.orientation || RibbonDirection.TOP_RIGHT)}`
    }>
        {props.link ? <a href={props.link}>{span}</a>:<>{span}</>}
    </div>
}
