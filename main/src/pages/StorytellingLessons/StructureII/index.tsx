
import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'


export default function StructureII() {
    return <main className='lesson-main'>
        <div className='content'>
            <h1>Conflict in Stories</h1>
            {/* <img src={ConflictImage} alt="" /> */}
            <LeafDivider />
            <p>
                In literature, conflict refers to the struggle or clash between opposing forces,
                ideas, or characters. It is a fundamental element of storytelling that creates
                tension, drives the plot, and propels the narrative forward. Conflict may take
                various forms and occur on different levels, providing the central source of
                drama and interest to a story.
            </p>
            <p>
                The seven types of conflict commonly found in storytelling are:
            </p>
            <ol className='shrink' >
                <li><a href="#charVself" >Character vs. Themself</a></li>
                <li><a href="#charVchar" >Character vs. Character</a></li>
                <li><a href="#charVenvr" >Character vs. Environment or Society</a></li>
                <li><a href="#charVelem" >Character vs. Nature or the Elements</a></li>
                <li><a href="/StorytellingLessons/StructureII#charVtech" >Character vs. Technology</a></li>
                <li><a href="/StorytellingLessons/StructureII#charVmech" >Character vs. Machine</a></li>
                <li><a href="/StorytellingLessons/StructureII#charVunkn" >Character vs. God, the Supernatural, or the Unknown</a></li>
                <li><a href="/StorytellingLessons/StructureII#charVfate" >Character vs. Fate or Destiny</a></li>
            </ol>
            <p>
                In this lesson, we'll focus on only the first four conflicts for now. The
                remaining conflicts will be covered in a future lesson.
            </p>
            <section>
                <h2 id="charVself">Character vs Themself</h2>
                <p>
                    This type of conflict is an internal struggle that occurs within a
                    character's mind or emotions. It involves a clash between different desires,
                    beliefs, motivations, or emotions within a single character. This internal
                    conflict can create tension, uncertainty, and personal turmoil for the
                    character, as they grapple with their own thoughts, decisions, or inner
                    demons.
                </p>
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
