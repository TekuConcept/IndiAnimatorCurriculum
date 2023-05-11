import CircleBadge from './CircleBadge'
import './Instruction.scss'
import IconTerms from './../resources/time-terms.svg'
import IconUnits from './../resources/time-units.svg'
import IconWeeks from './../resources/time-weeks.svg'
import WavesSVG4 from './WavesSVG4'

interface TimeBreakdownProps {
    title?: string
    subtitle?: string
    imgurl?: string
    children?: React.ReactNode
}

function TimeBreakdown(props: TimeBreakdownProps) {
    return <div className="time-breakdown">
        <h2>
            <strong>{props.title}</strong>
            <span>{props.subtitle}</span>
        </h2>
        <img src={props.imgurl} alt={props.title} />
        <span>{props.children}</span>
    </div>
}


export default function Instruction() {
    return <div id="instruction">
        <div id="remember">
            <CircleBadge color="rgb(110 177 22)" title="Play" subtitle="with child-like wonder">
                Do what pleases you from time to time,
                and draw what you like. Practice composition,
                new techniques, and new mediums. Explore
                what you learn with personal projects.
            </CircleBadge>
            <CircleBadge color="rgb(0 111 165)" title="Observe" subtitle="like a painter">
                Sculpt your images. Practice shape design
                (painting, expressive pencil drawing). Watch
                and listen to Marco Bucci and Sinix to learn
                more.
            </CircleBadge>
            <CircleBadge color="rgb(165 61 213)" title="Think" subtitle="like a draftsman">
                Balance the rest by studying hard principles
                to elevate your creative exploration. Watch
                and listen to Scott Robertson, Feng Zhu, and
                Kim Jung Gi to learn more
            </CircleBadge>
        </div>
        <div id="instruction-title">
            <p>Navigating<br />The</p>
            <p>Curriculum</p>
        </div>
        <article id="citation-info">
            <p>
                This curriculum is based on the structure of Marc Brunet's
                "ARTSchool." So if you like it, you may want to check out
                his own course.<br />
                Overall, however, the Solor Animator curriculum has a much
                higher emphasis on
            </p>
            <p><span>Perspective</span> and <span>Draftsmanship</span></p>
        </article>
        <ul id="notes-a">
            <li>
                <p>
                    You may find the subject material from unit to unit
                    seemingly random. This is by design. Variance is a
                    critical ingredient to helping you remembering what
                    you've learned!
                </p>
            </li>
            <li>
                <p>
                    If you want to swap a unit or term around, feel free to do
                    so. This is merely a guide for a structural approach to
                    self-teaching.
                </p>
            </li>
            <li>
                <p>
                    The intended purpose is to balance a foundation of
                    technical perspective and creative learning, so that you
                    may learn to draw anything from imagination.
                </p>
            </li>
        </ul>
        <article id="time-investment">
            <p><span>2 years</span> and <span>3 months</span></p>
            <p>
                Is how long you should expect to stick with the Solo Animator curriculum.
                <br />
                This time can be reduced to <b>1 year</b> studying two units concurrently.
            </p>
            <div>
                <TimeBreakdown imgurl={IconTerms} title="9 Terms"><p>1 unit = 1 month</p></TimeBreakdown>
                <TimeBreakdown imgurl={IconUnits} title="3 Units" subtitle="per term">So... <p>9 terms x 3 months</p></TimeBreakdown>
                <TimeBreakdown imgurl={IconWeeks} title="4 Weeks" subtitle="per unit"><p>=27 months</p></TimeBreakdown>
            </div>
        </article>
        <article id="notes-b">
            <p>
                Feel free to divide this curriculum to take however long
                you'd wish. I've planned it this way to provide a tangible
                structure for how long to stay on each unit before moving
                on.
            </p>
        </article>
        <WavesSVG4 />
        {/* TODO: Legend */}
    </div>
}
