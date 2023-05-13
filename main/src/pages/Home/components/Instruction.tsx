import Unit from './../../../components/Unit'
import { exampleData } from '../../../data/ExampleData'
import './Instruction.scss'

function Title() {
    return <div id="instruction-title">
        <p>Navigating<br />The</p>
        <p>Curriculum</p>
    </div>
}

function CitationInfo() {
    return <article id="citation-info">
        <p>
            This curriculum is based on the structure of Marc Brunet's
            "ARTSchool."<br />If you like it, you may want to check out
            his course as well.<br />
            Overall, the Solo Animator curriculum has a much
            higher emphasis on
        </p>
        <p><span>Expression</span> and <span>Animation</span></p>
    </article>
}

function Legend() {
    return <article id="legend">
        <Unit
            theme={exampleData.terms[0].theme}
            data={exampleData.terms[0].units[0]}
        />
    </article>
}

function Border() { return <div></div> }

export default function Instruction() {
    return <div id="instruction">
        <Border />
        <Title />
        <CitationInfo />
        <Legend />
    </div>
}
