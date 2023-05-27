
import { useState } from 'react'
import ReactQuill from 'react-quill'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'

import 'react-quill/dist/quill.snow.css'

import ClassicImage from './../resources/classic-story.webp'
import FreytagImage from './../resources/freytag-pyramid.webp'
import SnowflakeImage from './../resources/snowflake-method.png'

export default function StructureI() {
    const [ classicValue, setClassicValue ] = useState('')
    const [ freytagValue, setFreytagValue ] = useState('')
    const [ snowflakeValue, setSnowflakeValue ] = useState('')

    return <main className='lesson-main'>
        <div className='content'>
            <h1>Simple Story Structures</h1>
            <LeafDivider />
            <section>
                <p>
                    Story structures are the underlying frameworks or blueprints that provide a
                    foundation for organizing and presenting the elements of a story. They outline
                    the sequence of events, the development of characters, the progression of
                    conflicts, and the overall flow of the narrative. Story structures help create a
                    sense of coherence, pacing, and engagement for the audience.
                </p>
                <p>
                    We'll cover just 9 of the most familiar and popular writing structures:
                </p>
                <h3>Simple</h3>
                <ol className='shrink' >
                    <li><a href="#classic" >Dean Koontz's Classic Story Structure</a></li>
                    <li><a href="#freytag" >The Freytag Pyramid</a></li>
                    <li><a href="#snowflake" >The Snowflake Method</a></li>
                </ol>
                <h3>Adventurous (or Circular)</h3>
                <ol>
                    <li><a href="/StorytellingLessons/StructureII#three-acts" >The Three-Act Structure</a></li>
                    <li><a href="/StorytellingLessons/StructureII#heros-journey" >The Hero's Journey</a></li>
                    <li><a href="/StorytellingLessons/StructureII#story-circle" >Dan Harmon's Story Circle</a></li>
                </ol>
                <h3>Advanced</h3>
                <ol>
                    <li><a href="/StorytellingLessons/StructureIII#seven-point" >The Seven-Point Structure</a></li>
                    <li><a href="/StorytellingLessons/StructureIII#fichtean" >The Fichtean Curve</a></li>
                    <li><a href="/StorytellingLessons/StructureIII#save-cats" >Save the Cat Beat Sheet</a></li>
                </ol>
                <p>
                    In this lesson, we'll focus on only the simple structures for now. The
                    remaining structures will be covered in future lessons.
                </p>
            </section>
            <LeafDivider />
            <section>
                <h2 id="classic">Dean Koontz's Classic Story Structure</h2>
                <p>
                    Dean Koontz's Classic Story Structure is a character-driven narrative
                    framework that focuses on what a character does (and learns) in response to
                    a crisis.
                </p>
                <img src={ClassicImage} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px'
                }} data-credit="https://markdouglasdoran.com/protagonist-greatest-danger/" />
                <p>
                    This type of structure consisting of four key elements:
                </p>
                <ol>
                    <li>
                        Plunge your main character into terrible trouble as soon as possible.
                        This involves introducing the protagonist to a significant problem or
                        conflict early in the story, setting the stage for their journey.<br /><br />
                    </li>
                    <li>
                        Everything your character does to get out of the trouble makes it only
                        worse. The protagonist's attempts to resolve the initial problem only
                        lead to further complications and intensify the conflict.<br /><br />
                    </li>
                    <li>
                        The lead character's predicament appears hopeless. At a certain point in
                        the story, the situation becomes seemingly insurmountable, leaving the
                        protagonist in a state of desperation or despair.<br /><br />
                    </li>
                    <li>
                        Finally, because of what all that conflict has taught your character, he
                        or she rises to the occasion, meets the challenge, battles out of the
                        trouble, accomplishes the quest, or completes the journey. Through the
                        lessons learned from their struggles, the protagonist finds the
                        strength, courage, or knowledge needed to overcome the challenges,
                        resolve the conflict, and achieve their goals.
                    </li>
                </ol>
                <p>
                    Overall, Dean Koontz's Classic Story Structure emphasizes the escalation of
                    conflict, the development of the protagonist's character, and the ultimate
                    triumph or resolution in the face of seemingly impossible odds.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={classicValue} onChange={setClassicValue} />
            </section>
            <LeafDivider />
            <section>
                <h2 id="freytag">The Freytag Pyramid</h2>
                <p>
                    The Freytag Pyramid Structure, also known as Freytag's Pyramid or the
                    Dramatic Arc, is a traditional story structure commonly used in storytelling
                    and theater. It consists of five key stages:
                </p>
                <img src={FreytagImage} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px'
                }} />
                <ol>
                    <li>
                        <b>Exposition:</b> The story begins with the exposition, where the
                        setting, characters, and initial circumstances are introduced. It
                        establishes the background information and provides necessary context
                        for the narrative.
                    </li>
                    <li>
                        <b>Rising Action:</b> The rising action involves the development of the
                        central conflict and the series of events that build tension and propel
                        the story forward. It typically includes obstacles, challenges, and
                        conflicts that the characters face as they strive to overcome the
                        central problem.
                    </li>
                    <li>
                        <b>Climax:</b> The climax is the turning point and the most intense
                        moment in the story. It is the peak of conflict and represents the
                        decisive moment where the protagonist's fate hangs in the balance. It
                        often involves a significant revelation, confrontation, or major event
                        that determines the outcome of the story.
                    </li>
                    <li>
                        <b>Falling Action:</b> Following the climax, the falling action occurs.
                        It entails the consequences or aftermath of the climax, as the story
                        moves towards resolution. Loose ends are tied up, and the intensity of
                        the conflict diminishes.
                    </li>
                    <li>
                        <b>Resolution:</b> The resolution, also known as the denouement,
                        concludes the story. It provides the final outcome, reveals the
                        consequences of the climax, and wraps up any remaining plot threads. It
                        offers closure and allows the audience or readers to understand the
                        aftermath of the story's events.
                    </li>
                </ol>
                <p>
                    In summary, the Freytag Pyramid follows a pattern of exposition, rising
                    action, climax, falling action, and resolution. It creates a sense of
                    tension, conflict, and resolution, guiding the audience through a narrative
                    journey.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={freytagValue} onChange={setFreytagValue} />
            </section>
            <LeafDivider />
            <section>
                <h2 id="snowflake">The Snowflake Method</h2>
                <p>
                    The Snowflake Method is a popular approach to planning and organizing a
                    novel or story. It was developed by Randy Ingermanson, a renowned author and
                    writing instructor. Here's a brief overview of the method:
                </p>
                <img src={SnowflakeImage} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px'
                }} />
                <ol>
                    <li>
                        <b>Start with a Simple Idea:</b> Begin with a basic concept or idea for
                        your story. It could be a character, a setting, or a theme. Keep it
                        simple and open-ended.
                    </li>
                    <li>
                        <b>Expand the Idea:</b> Develop your idea further by expanding it into a
                        one-sentence summary that encapsulates the essence of your story. This
                        sentence will serve as the foundation for your entire project.
                    </li>
                    <li>
                        <b>Character Development:</b> Identify the main characters of your story
                        and create detailed character profiles. Explore their backgrounds,
                        motivations, and goals. Develop their personalities, strengths,
                        weaknesses, and relationships.
                    </li>
                    <li>
                        <b>Plot Development:</b> Outline the major plot points of your story,
                        starting with the initial conflict and building up to the climax and
                        resolution. Expand these plot points into individual scenes, providing a
                        rough overview of the events that will occur.
                    </li>
                    <li>
                        <b>Expand Each Scene:</b> Take each scene from your plot outline and
                        expand it into a paragraph, including the characters involved, the
                        location, and the key actions or events. This step helps you visualize
                        the progression of the story and ensures coherence and continuity.
                    </li>
                    <li>
                        <b>Develop Characters and Subplots:</b> Dive deeper into your
                        characters' story arcs, subplots, and their individual journeys. Explore
                        how their paths intertwine and contribute to the overall narrative.
                    </li>
                    <li>
                        <b>Detailed Scene-by-Scene Outline:</b> Refine your plot outline by
                        transforming each expanded scene paragraph into a detailed summary.
                        These summaries will serve as a roadmap for writing your story,
                        providing a clear structure and direction.
                    </li>
                    <li>
                        <b>Start Writing:</b> With the comprehensive outline in hand, begin
                        writing your story. Follow the roadmap you've created, scene by scene,
                        while allowing for creative exploration and adaptation along the way.
                    </li>
                </ol>
                <p>
                    The Snowflake Method emphasizes a step-by-step approach, gradually expanding
                    and developing your story from a simple idea into a detailed outline. It
                    helps authors maintain focus, structure, and coherence throughout the
                    writing process, making it an effective tool for planning and organizing a
                    novel or story.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={snowflakeValue} onChange={setSnowflakeValue} />
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
