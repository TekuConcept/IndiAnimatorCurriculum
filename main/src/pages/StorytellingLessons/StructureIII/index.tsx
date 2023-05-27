
import { useState } from 'react'
import ReactQuill from 'react-quill'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'

import 'react-quill/dist/quill.snow.css'

import SevenPointImage from './../resources/seven-point.png'
import FichteanImage from './../resources/fichtean-curve.png'
import SaveCatsImage from './../resources/save-the-cat.png'

export default function StructureIII() {
    const [ sevenPointValue, setSevenPointValue ] = useState('')
    const [ fichteanValue, setFichteanValue ] = useState('')
    const [ saveCatsValue, setSaveCatsValue ] = useState('')

    return <main className='lesson-main'>
        <div className='content'>
            <h1>Advanced Story Structures</h1>
            <LeafDivider />
            <section>
                <p>
                    Sometimes a new structure is needed from time to time to properly organize
                    one's story. A new structure may be created by mixing elements from two or
                    more structures, adding or modifying existing structures, or creating a
                    completely new way to organize one's thoughts.
                </p>
                <p>
                    The Fichtean Curve is a good fit for stories with incremental installments
                    or episodes. Save the Cat was originally designed for writting screenplays.
                    And the Seven-Point structure is ideal for when the author has a great
                    character or setting but doesn't quite now how to turn them into a fantastic
                    story.
                </p>
                <p>
                    Again, here are the 9 writing structures we're covering in our study:
                </p>
                <h3>Simple</h3>
                <ol className='shrink' >
                    <li><a href="/StorytellingLessons/StructureI#classic" >Dean Koontz's Classic Story Structure</a></li>
                    <li><a href="/StorytellingLessons/StructureI#freytag" >The Freytag Pyramid</a></li>
                    <li><a href="/StorytellingLessons/StructureI#snowflake" >The Snowflake Method</a></li>
                </ol>
                <h3>Adventurous (or Circular)</h3>
                <ol>
                    <li><a href="/StorytellingLessons/StructureII#three-acts" >The Three-Act Structure</a></li>
                    <li><a href="/StorytellingLessons/StructureII#heros-journey" >The Hero's Journey</a></li>
                    <li><a href="/StorytellingLessons/StructureII#story-circle" >Dan Harmon's Story Circle</a></li>
                </ol>
                <h3>Advanced</h3>
                <ol>
                    <li><a href="#seven-point" >The Seven-Point Structure</a></li>
                    <li><a href="#fichtean" >The Fichtean Curve</a></li>
                    <li><a href="#save-cats" >Save the Cat Beat Sheet</a></li>
                </ol>
                <p>
                    In this lesson, we'll focus on only the Advanced structures. Prior
                    structures are provided for quick access.
                </p>
            </section>
            <section>
                <h2 id="seven-point">The Seven-Point Structure</h2>
                <p>
                    The Seven-Point Structure is a narrative framework that provides a simple
                    and effective way to structure a story. It consists of seven key points or
                    stages that help guide the development of a compelling narrative. It is also
                    a great solution to use when the author has a great character or a beautiful
                    setting but not much of a story to pair them together.
                </p>
                <img src={SevenPointImage} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px'
                }} data-citation="https://thewritepractice.com/points-of-a-story/" />
                <p>
                    Here is a brief overview of the Seven-Point Structure:
                </p>
                <ol>
                    <li>
                        <b>Hook:</b> This is the opening point of the story that grabs the
                        reader's or audience's attention. It introduces an intriguing or
                        captivating element that piques their interest.<br /><br />
                    </li>
                    <li>
                        <b>Plot Turn 1:</b> This is a major turning point in the story that
                        disrupts the initial status quo. It presents a significant change or
                        challenge that sets the main conflict in motion.<br /><br />
                    </li>
                    <li>
                        <b>Pinch 1:</b> In this stage, the protagonist faces a moment of intense
                        pressure or setback. It could be a reminder of the antagonist's strength
                        or a critical obstacle they must overcome.<br /><br />
                    </li>
                    <li>
                        <b>Midpoint:</b> The midpoint is a pivotal moment in the story where new
                        information is revealed or a significant event occurs. It often shifts
                        the direction of the narrative and deepens the conflict.<br /><br />
                    </li>
                    <li>
                        <b>Pinch 2:</b> Similar to Pinch 1, this stage presents another moment
                        of increased pressure or adversity for the protagonist. It reinforces
                        the stakes and intensifies the conflict.<br /><br />
                    </li>
                    <li>
                        <b>Plot Turn 2:</b> This is a crucial turning point that leads the story
                        towards its climax. It involves a significant event or revelation that
                        propels the protagonist and the narrative toward the final
                        confrontation.<br /><br />
                    </li>
                    <li>
                        <b>Resolution:</b> The final stage of the story where the conflict is
                        resolved, loose ends are tied up, and the story reaches its conclusion.
                        It provides closure and offers a resolution to the central conflict.
                    </li>
                </ol>
                <p>
                    The Seven-Point Structure helps writers create a well-paced and engaging
                    story by ensuring key moments of tension, plot development, and resolution
                    are present. It serves as a useful tool for organizing the narrative and
                    maintaining a reader or audience's interest throughout the story.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={sevenPointValue} onChange={setSevenPointValue} />
            </section>
            <LeafDivider />
            <section>
                <h2 id="fichtean">The Fichtean Curve</h2>
                <p>
                    The Fichtean Curve, also known as the dramatic arc or narrative arc, is a
                    storytelling structure that describes the rise and fall of tension and
                    conflict in a narrative. It is named after Johann Gottlieb Fichte, a German
                    philosopher. This type of storytelling structure is an ideal way for writing
                    episodic installments, which gradually build up to a grand, climactic
                    crisis.
                </p>
                <img src={FichteanImage} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px'
                }} />
                <p>
                    The Fichtean Curve consists of the following stages:
                </p>
                <ol>
                    <li>
                        <b>Exposition:</b> The story's beginning, where the characters, setting,
                        and initial situation are introduced. The exposition provides essential
                        background information to establish the context of the story.<br /><br />
                    </li>
                    <li>
                        <b>Rising Action:</b> The tension and conflict gradually increase as the
                        story progresses. Complications, challenges, and obstacles arise,
                        driving the plot forward and heightening the stakes for the characters.<br /><br />
                    </li>
                    <li>
                        <b>Climax:</b> The peak of the story's tension and conflict. It is the
                        most intense and crucial moment where the main conflict reaches its
                        highest point. The climax often involves a decisive event or
                        confrontation that determines the outcome of the story.<br /><br />
                    </li>
                    <li>
                        <b>Falling Action:</b> After the climax, the tension starts to subside.
                        Loose ends are tied up, and the story begins to wind down. The falling
                        action provides a sense of resolution and closure to the narrative.<br /><br />
                    </li>
                    <li>
                        <b>Resolution:</b> The final stage of the story, where any remaining
                        conflicts are resolved, and the story reaches its conclusion. It offers
                        a sense of closure and often includes the aftermath of the main
                        conflict, providing a glimpse into the characters' future.
                    </li>
                </ol>
                <p>
                    The Fichtean Curve is a widely used storytelling structure as it helps
                    create a sense of momentum, tension, and resolution in a narrative. It
                    follows a pattern of building tension and conflict, reaching a peak, and
                    then gradually resolving the story's conflicts. This structure helps engage
                    the audience or readers and provides a satisfying narrative experience.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={fichteanValue} onChange={setFichteanValue} />
            </section>
            <LeafDivider />
            <section>
                <h2 id="save-cats">Save the Cat Beat Sheet</h2>
                <p>
                    The Save the Cat Beat Sheet is a popular storytelling tool developed by
                    screenwriter Blake Snyder in his book "Save the Cat! The Last Book on
                    Screenwriting You'll Ever Need." It outlines a series of key story beats or
                    moments that help structure a screenplay or narrative.
                </p>
                <img src={SaveCatsImage} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px'
                }} />
                <p>
                    Here is a brief overview of the Save the Cat Beat Sheet:
                </p>
                <ol>
                    <li>
                        <b>Opening Image:</b> The story begins with an image that establishes
                        the tone, setting, or theme of the narrative. It sets the stage for what
                        is to come.<br /><br />
                    </li>
                    <li>
                        <b>Theme Stated:</b> This beat introduces or hints at the central theme
                        or message of the story. It can be a line of dialogue, an action, or an
                        event that conveys the story's underlying meaning.<br /><br />
                    </li>
                    <li>
                        <b>Set-up:</b> The set-up phase provides background information,
                        introduces the protagonist and supporting characters, and establishes
                        the story's world and initial situation.<br /><br />
                    </li>
                    <li>
                        <b>Catalyst:</b> The catalyst is an event or incident that disrupts the
                        protagonist's ordinary life and sets the main conflict into motion. It
                        propels the story forward and sets the protagonist on their journey.<br /><br />
                    </li>
                    <li>
                        <b>Debate:</b> The protagonist faces a dilemma or internal conflict,
                        considering the challenges and risks they will encounter on their
                        journey. This beat explores their doubts, fears, and reluctance to take
                        action.<br /><br />
                    </li>
                    <li>
                        <b>Break into Two:</b> The protagonist makes a decision or takes action
                        to pursue their goal or embark on their journey. They leave their
                        familiar world behind and enter a new and unfamiliar environment.<br /><br />
                    </li>
                    <li>
                        <b>B Story:</b> This beat introduces a secondary storyline or subplot
                        that provides additional depth and richness to the narrative. It often
                        involves relationships, friendships, or a romantic interest for the
                        protagonist.<br /><br />
                    </li>
                    <li>
                        <b>Fun and Games:</b> This phase focuses on the excitement, adventure,
                        and exploration of the new world the protagonist has entered. It
                        showcases the possibilities, challenges, and joys of their journey.<br /><br />
                    </li>
                    <li>
                        <b>Midpoint:</b> The midpoint is a significant turning point in the
                        story. It introduces a twist, revelation, or event that alters the
                        direction or raises the stakes of the narrative. It often marks a shift
                        from reactive to proactive behavior for the protagonist.<br /><br />
                    </li>
                    <li>
                        <b>Bad Guys Close In:</b> The conflict intensifies, and the antagonist
                        or obstacles become more threatening and challenging for the
                        protagonist. They face setbacks, complications, and increasing pressure.<br /><br />
                    </li>
                    <li>
                        <b>All Is Lost:</b> The lowest point for the protagonist. They
                        experience a major setback or defeat, where their goal appears to be
                        unattainable. It tests their resolve and pushes them to their limits.<br /><br />
                    </li>
                    <li>
                        <b>Dark Night of the Soul:</b> The protagonist reflects, questions their
                        choices, and faces their deepest fears and doubts. They must find the
                        strength and motivation to continue their journey despite the
                        challenges.<br /><br />
                    </li>
                    <li>
                        <b>Break into Three:</b> The protagonist regains their determination,
                        finds a new approach or solution, and prepares for the final
                        confrontation or push towards their goal.<br /><br />
                    </li>
                    <li>
                        <b>Finale:</b> The climax and resolution of the story. The protagonist
                        faces the main conflict head-on, overcomes obstacles, and achieves their
                        goal or undergoes a transformation. It brings resolution and closure to
                        the narrative.<br /><br />
                    </li>
                    <li>
                        <b>Final Image:</b> The story concludes with an image that reflects the
                        protagonist's transformation, growth, or the new world they have
                        created. It provides a sense of completion and leaves a lasting
                        impression on the audience.
                    </li>
                </ol>
                <p>
                    The Save the Cat Beat Sheet provides a structured framework to develop and
                    outline a story, particularly in screenwriting. It helps identify key
                    moments and plot beats to ensure a well-paced and engaging narrative.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={saveCatsValue} onChange={setSaveCatsValue} />
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
