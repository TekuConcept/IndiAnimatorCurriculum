import Term from "./../../../components/Term"
import { CData } from './../../../data/CurriculumData'
import './Curriculum.scss'

export interface CurriculumProps {
    data?: CData
    title?: React.ReactNode
}

export default function Curriculum(props: CurriculumProps) {
    const title = props.data?.name ?
        <>The <strong>{props.data.name}</strong> Curriculum</> :
        <>The <strong>Curriculum</strong></>

    return <div className="curriculum">
        <h2>{title}</h2>
        {
            props.data?.terms.map((term, i) => {
                return <Term
                    key={i}
                    theme={term.theme}
                    focus={term.focus}
                    units={term.units}
                    index={i + 1}
                ></Term>
            })
        }
    </div>
}
