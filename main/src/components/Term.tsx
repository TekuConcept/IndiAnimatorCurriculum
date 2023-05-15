import './Term.scss'
import {
    CTheme,
    CUnit,
    GetThemeColorsFor
} from '../data/CurriculumData'
import Unit from './Unit'

export interface TermProps {
    theme?: CTheme
    focus?: string
    units?: Array<CUnit>
    index?: number
}

export default function Term(props: TermProps) {
    const accent = GetThemeColorsFor('accent', props.theme)
    const termColor = GetThemeColorsFor('term', props.theme)
    const arrowColor = GetThemeColorsFor('arrow', props.theme)
    const focus = props.focus ? <div className="focus">
        <h2 style={{ color: arrowColor.back }}>
            &#9671; Focus: <span style={{ color: arrowColor.text }}>{props.focus}</span>
        </h2>
    </div> : <></>
    const termClass = `term-number ${props.focus ? 'inline' : 'side'}`

    return <div className="term" style={{ backgroundColor: accent.back }}>
        <div className="term-wrapper">
            <div className={termClass} style={{ color: termColor.text }}>
                <span>{props.index}</span>
                <div style={{ backgroundColor: accent.back }}></div>
                {focus}
            </div>
            {
                props.units?.map((unit, i) => {
                    return <Unit key={i} theme={props.theme} data={unit} index={i} />
                })
            }
        </div>
    </div>
}
