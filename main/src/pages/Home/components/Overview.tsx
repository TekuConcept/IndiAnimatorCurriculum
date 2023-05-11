import './Overview.scss'
import CardUnit from "./CardUnit"
import OverviewCard from "./OverviewCard"
import { GetThemeColorsFor, curriculumData } from '../CurriculumData'

export default function Overview() {
    return <div className="corriculum-overview">
    {
        curriculumData.map((term, i) => {
            const color = GetThemeColorsFor('term', term.theme)
            return <OverviewCard
                key={i}
                index={i + 1}
                color={color.text}
                items={
                    term.units.map((unit, j) => {
                        return <CardUnit key={j} subtitle={unit.subtitle}>
                            {unit.title}
                        </CardUnit>
                    })
                }
            />
        })
    }
    </div>
}
