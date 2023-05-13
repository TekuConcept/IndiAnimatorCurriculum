import './Term.scss'
import {
    CTheme,
    CUnit,
    GetThemeColorsFor
} from '../data/CurriculumData'
import Unit from './Unit'

export interface TermProps {
    theme?: CTheme
    units?: Array<CUnit>
    index?: number
}

export default function Term(props: TermProps) {
    const accent = GetThemeColorsFor('accent', props.theme)
    const term = GetThemeColorsFor('term', props.theme)
    return <div className="term" style={{ backgroundColor: accent.back }}>
        <div className="term-wrapper">
            <div className="term-number" style={{ color: term.text }}>
                {props.index}
                <div style={{ backgroundColor: accent.back }}></div>
            </div>
            {
                props.units?.map((unit, i) => {
                    return <Unit key={i} theme={props.theme} data={unit} index={i} />
                })
            }
        </div>
    </div>
}
