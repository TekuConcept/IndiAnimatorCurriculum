import React from 'react'

export interface CardUnitProps {
    subtitle?: string
    children?: string | React.ReactNode
}

export default function CardUnit({subtitle, children}: CardUnitProps) {
    return <><span className='unit'>{children}</span>{
        (() => subtitle ? <><br /><span className='unit-sub'>{subtitle}</span></> : <></>)()
    }</>
}
