import './Unit.scss'
import {
    CTheme,
    CUnit,
    CUnitBrief,
    CUnitChallenge,
    CUnitLinkNode,
    CUnitRef,
    GetThemeColorsFor,
    SourceLink
} from '../data/CurriculumData'


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

interface UnitTitleProps {
    theme?: CTheme
    title?: string
    subtitle?: string
}

function UnitTitle(props: UnitTitleProps) {
    const color = GetThemeColorsFor('title', props.theme)
    return <h2 className="title" style={{ color: color.text }}>
        {props.title}
        {props.subtitle ? <span> - {props.subtitle}</span> : <></>}
    </h2>
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

interface XSourceLinkProps { link?: SourceLink | string }

function XSourceLink(props: XSourceLinkProps) {
    if (!props.link) return <></>
    else if (typeof props.link === 'string')
        return <span>{props.link}</span>
    else {
        if (props.link.url) return <a
            href={props.link.url}
            target='_blank'
            rel='noreferrer'
        >
            {props.link.text}
        </a>
        else return <span>{props.link.text}</span>
    }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

interface XLinkNodeProps { data?: CUnitLinkNode }

function XLinkNode(props: XLinkNodeProps) {
    return <>
        <XSourceLink link={props.data?.name} />
        {
            props.data?.sub ? <ul>
            {
                props.data.sub.map((link, i) => <li key={i}>
                    <XSourceLink link={link} />
                </li>)
            }
            </ul> : <></>
        }
    </>
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

interface UnitBriefProps {
    theme?: CTheme
    data?: CUnitBrief
}

function UnitBrief(props: UnitBriefProps) {
    const color = GetThemeColorsFor('brief', props.theme)
    return <section className="brief" style={{
        color: color.text
    }}>
        <p><XLinkNode data={props.data} /></p>
    </section>
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

interface RefCategoryProps {
    theme?: CTheme
    data?: CUnitRef
}

function RefCategory(props: RefCategoryProps) {
    if (!props.data) return <></>
    const catColor = GetThemeColorsFor('category', props.theme)
    const refColor = GetThemeColorsFor('reference', props.theme)
    return <>
        {
            props.data.category ?
                <h3 style={{ color: catColor.text }}>{props.data.category}</h3> :
                <></>
        }
        <ul style={{ color: refColor.text }}>
        {
            props.data.sources.map((source, i) => <li key={i}>
                <XSourceLink link={source} />
            </li>)
        }
        </ul>
    </>
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

interface UnitReferencesProps {
    theme?: CTheme
    data?: Array<CUnitRef>
}

function UnitReferences(props: UnitReferencesProps) {
    return <section className="reference">
        {props.data?.map((ref, i) => <RefCategory
            key={i}
            theme={props.theme}
            data={ref}
        />)}
    </section>
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

interface UnitChallengeProps {
    theme?: CTheme
    data?: Array<CUnitChallenge>
}

function UnitChallenge(props: UnitChallengeProps) {
    const heading = GetThemeColorsFor('challengeHeading', props.theme)
    const colors = GetThemeColorsFor('challenge', props.theme)
    return <section
        className="challenge"
        style={{
            color: colors.text,
            backgroundColor: colors.back
        }}
    >
        <h3 style={{
            color: heading.text,
            backgroundColor: heading.back
        }}>Challenge</h3>
        {props.data?.map((challenge, i) =>
            <p><XLinkNode key={i} data={challenge} /></p>)}
    </section>
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

interface UnitNotesProps {
    theme?: CTheme
    data?: string
}

function UnitNotes(props: UnitNotesProps) {
    const colors = GetThemeColorsFor('note', props.theme)
    return <section
        className="notes"
        style={{
            color: colors.text,
            backgroundColor: colors.back
        }}
    >
        <h3>Note:</h3>
        <p>{props.data}</p>
    </section>
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

interface UnitArrowsProps {
    theme?: CTheme
    index?: number
}

function UnitArrows(props: UnitArrowsProps) {
    const colors = GetThemeColorsFor('arrow', props.theme)
    let className = 'arrows'
    switch ((props.index || 0) % 2) {
    case 0: className += ' right';  break
    case 1: className += ' bottom'; break
    }

    return <div className={className}>
        <div style={{ borderColor: colors.text }}></div>
        <div style={{ borderColor: colors.back }}></div>
    </div>
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export interface UnitProps {
    theme?: CTheme
    data?: CUnit
    index?: number
}

export default function Unit(props: UnitProps) {
    const unitColor = GetThemeColorsFor('general', props.theme)
    return <article className="unit">
        <UnitArrows theme={props.theme} index={props.index} />
        <div
            className="card"
            style={{
                color: unitColor.text,
                backgroundColor: unitColor.back
            }}
        >
            <UnitTitle      theme={props.theme} title={props.data?.title} subtitle={props.data?.subtitle} />
            <div className="content">
                <UnitBrief      theme={props.theme} data={props.data?.brief} />
                <UnitReferences theme={props.theme} data={props.data?.references} />
                <UnitChallenge  theme={props.theme} data={props.data?.challenges} />
            </div>
            <UnitNotes      theme={props.theme} data={props.data?.notes} />
        </div>
    </article>
}
