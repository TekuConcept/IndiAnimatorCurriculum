import Overview from './Overview'
import Advice from './Advice'
import Instruction from './Instruction'
import Curriculum from './Curriculum'
import Resources from './Resources'
import { curriculumData } from '../CurriculumData'

export default function Main() {
    return <main>
        <Overview />
        <Advice />
        <Instruction />
        <Curriculum data={curriculumData} />
        <Resources />
    </main>
}
