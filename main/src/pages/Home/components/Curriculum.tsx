import './Curriculum.scss'

import Term from "./Term"
import { CData } from '../CurriculumData'


export interface CurriculumProps {
    data?: CData
}

export default function Curriculum(props: CurriculumProps) {
    return <div className="curriculum">
        <h2>The <strong>Curriculum</strong></h2>
        {
            props.data?.map((term, i) => {
                return <Term
                    key={i}
                    theme={term.theme}
                    units={term.units}
                    index={i + 1}
                ></Term>
            })
        }
    </div>
}
