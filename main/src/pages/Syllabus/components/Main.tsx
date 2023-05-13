import Curriculum from './Curriculum'
import { CData } from '../../../data/CurriculumData'
import './Main.scss'

export interface MainProps {
    data?: CData
}

export default function Main({ data }: MainProps) {
    return <main className="syllabus-main">
        <Curriculum data={data} />
    </main>
}
