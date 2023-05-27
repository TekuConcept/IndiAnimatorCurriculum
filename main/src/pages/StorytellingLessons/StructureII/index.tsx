
import { useState } from 'react'
import ReactQuill from 'react-quill'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'

import 'react-quill/dist/quill.snow.css'

import ThreeActsImage from './../resources/three-acts.jpeg'
import HerosJourneyImage from './../resources/heros-journey.png'
import StoryCircleImage from './../resources/story-circle.jpeg'

export default function StructureII() {
    const [ threeActValue, setThreeActValue ] = useState('')
    const [ herosJourneyValue, setHerosJourneyValue ] = useState('')
    const [ storyCircleValue, setStoryCircleValue ] = useState('')

return <main className='lesson-main'>
        <div className='content'>
            <h1>Adventurous Story Structures</h1>
            <LeafDivider />
            <section>
                <p>
                    Story structures are the underlying frameworks or blueprints that provide a
                    foundation for organizing and presenting the elements of a story. Adventure
                    stories take on a more intricate and even circular structure, depending on
                    the narrative and specific elements emphasized. The most common is The
                    Hero's Journey with a well known example being Frodo Baggins' journey to
                    destroy the one ring in "The Lord of the Rings."
                </p>
                <p>
                    Here are the 9 writing structures we're covering in our study:
                </p>
                <h3>Simple</h3>
                <ol className='shrink' >
                    <li><a href="/StorytellingLessons/StructureI#classic" >Dean Koontz's Classic Story Structure</a></li>
                    <li><a href="/StorytellingLessons/StructureI#freytag" >The Freytag Pyramid</a></li>
                    <li><a href="/StorytellingLessons/StructureI#snowflake" >The Snowflake Method</a></li>
                </ol>
                <h3>Adventurous (or Circular)</h3>
                <ol>
                    <li><a href="#three-acts" >The Three-Act Structure</a></li>
                    <li><a href="#heros-journey" >The Hero's Journey</a></li>
                    <li><a href="#story-circle" >Dan Harmon's Story Circle</a></li>
                </ol>
                <h3>Advanced</h3>
                <ol>
                    <li><a href="/StorytellingLessons/StructureIII#seven-point" >The Seven-Point Structure</a></li>
                    <li><a href="/StorytellingLessons/StructureIII#fichtean" >The Fichtean Curve</a></li>
                    <li><a href="/StorytellingLessons/StructureIII#save-cats" >Save the Cat Beat Sheet</a></li>
                </ol>
                <p>
                    In this lesson, we'll focus on only the Adventurous structures. The
                    remaining structures will be covered in future lessons. Prior structures are
                    provided for quick access.
                </p>
            </section>
            <LeafDivider />
            <section>
                <h2 id="three-acts">The Three-Act Structure</h2>
                <p>
                    The Three-Act Structure is a classic narrative framework widely used in
                    storytelling, particularly in screenwriting and playwriting. It divides a
                    story into three distinct acts, each serving a specific purpose:
                </p>
                <img src={ThreeActsImage} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px'
                }} />
                <ol style={{
                    listStyleType: 'none'
                }}>
                    <li>
                        Act 1: Setup
                        <ul>
                            <li>
                                <b>Introduction:</b> The story's world, characters, and their
                                relationships are established.
                            </li>
                            <li>
                                <b>Inciting Incident:</b> A significant event or problem occurs,
                                disrupting the protagonist's ordinary life and setting the main
                                conflict in motion.
                            </li>
                            <li>
                                <b>Plot Point 1:</b> A major turning point at the end of Act 1
                                that propels the story forward and raises the stakes.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Act 2: Confrontation
                        <ul>
                            <li>
                                <b>Rising Action:</b> The protagonist faces obstacles,
                                conflicts, and challenges as they actively pursue their goals
                                and confront the main conflict.
                            </li>
                            <li>
                                <b>Midpoint:</b> A crucial moment in the middle of Act 2 where
                                new information is revealed or a significant event occurs,
                                altering the course of the story.
                            </li>
                            <li>
                                <b>Complications and Obstacles:</b> The tension and conflict
                                escalate, presenting increasing challenges and setbacks for the
                                protagonist.
                            </li>
                            <li>
                                <b>Plot Point 2:</b> Another major turning point near the end of
                                Act 2 that dramatically raises the stakes and leads into the
                                climax.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Act 3: Resolution
                        <ul>
                            <li>
                                <b>Climax:</b> The highest point of tension and the most
                                critical moment in the story. The protagonist confronts the main
                                conflict, making a final, decisive effort to achieve their goal.
                            </li>
                            <li>
                                <b>Falling Action:</b> The story begins to wind down after the
                                climax. Loose ends are tied up, and the consequences of the
                                climax are explored.
                            </li>
                            <li>
                                <b>Resolution:</b> The story reaches its conclusion, providing
                                closure and answering any remaining questions. The protagonist
                                undergoes personal growth or transformation, and the main
                                conflict is resolved.
                            </li>
                        </ul>
                    </li>
                </ol>
                <p>
                    The Three-Act Structure offers a clear and effective way to structure a
                    story, with Act 1 setting up the conflict, Act 2 developing and intensifying
                    it, and Act 3 resolving it. It provides a balanced framework for pacing,
                    character development, and dramatic tension, making it a popular choice for
                    many storytellers.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={threeActValue} onChange={setThreeActValue} />
            </section>
            <LeafDivider />
            <section>
                <h2 id="heros-journey">The Hero's Journey</h2>
                <p>
                    The Hero's Journey, also known as the Monomyth, is a narrative pattern that
                    outlines the hero's transformative journey in many mythological and
                    storytelling traditions. It consists of twelve stages that the hero often
                    goes through:
                </p>
                <img src={HerosJourneyImage} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px'
                }} />
                <ol>
                    <li>
                        <b>Ordinary World:</b> The hero starts in their ordinary and familiar
                        environment, unaware of the adventure that awaits.<br /><br />
                    </li>
                    <li>
                        <b>Call to Adventure:</b> The hero receives a call or invitation to
                        embark on a journey or undertake a quest. It may come from an external
                        source or from within themselves.<br /><br />
                    </li>
                    <li>
                        <b>Refusal of the Call:</b> Initially, the hero may resist the call,
                        either due to fear, doubt, or a sense of obligation to their ordinary
                        life.<br /><br />
                    </li>
                    <li>
                        <b>Meeting the Mentor:</b> The hero encounters a mentor or guide who
                        provides them with advice, knowledge, or tools to aid them on their
                        journey.<br /><br />
                    </li>
                    <li>
                        <b>Crossing the Threshold:</b> The hero decides to leave their ordinary
                        world and enters the unknown, venturing into the realm of adventure and
                        uncertainty.<br /><br />
                    </li>
                    <li>
                        <b>Tests, Allies, and Enemies:</b> Along the journey, the hero faces
                        various challenges, encounters allies who assist them, and confronts
                        adversaries who oppose them.<br /><br />
                    </li>
                    <li>
                        <b>Approach to the Inmost Cave:</b> The hero approaches a significant
                        obstacle or a symbolic representation of their deepest fears, the
                        ultimate challenge they must confront.<br /><br />
                    </li>
                    <li>
                        <b>Ordeal:</b> The hero faces a life-threatening or transformative
                        ordeal, where they must confront their fears, undergo a profound change,
                        or make a significant sacrifice.<br /><br />
                    </li>
                    <li>
                        <b>Reward:</b> After overcoming the ordeal, the hero receives a reward
                        or gains new insights, abilities, or wisdom that will aid them in the
                        final stages of their journey.<br /><br />
                    </li>
                    <li>
                        <b>The Road Back:</b> The hero begins their journey back to the ordinary
                        world, often facing additional challenges or setbacks along the way.<br /><br />
                    </li>
                    <li>
                        <b>Resurrection:</b> The hero faces a final, climactic challenge that
                        tests their newfound abilities and transformation.<br /><br />
                    </li>
                    <li>
                        <b>Return with the Elixir:</b> The hero returns to their ordinary world,
                        bringing back the "elixir" or boon, which could be a physical object,
                        knowledge, or a positive change that benefits their community or
                        themselves.
                    </li>
                </ol>
                <p>
                    The Hero's Journey represents the hero's evolution, from their initial state
                    of ignorance or limitation to becoming a transformed individual with
                    newfound wisdom and abilities. This archetypal narrative framework is found
                    in many epic tales and has been widely adopted by storytellers to create
                    compelling and resonant narratives.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={herosJourneyValue} onChange={setHerosJourneyValue} />
            </section>
            <LeafDivider />
            <section>
                <h2 id="story-circle">Dan Harmon's Story Circle</h2>
                <p>
                    The Story Circle is a narrative structure developed by the American writer
                    and producer Dan Harmon, known for his work on television shows like
                    "Community" and "Rick and Morty." It is a simplified version of Joseph
                    Campbell's Hero's Journey and follows a circular pattern of storytelling.
                </p>
                <img src={StoryCircleImage} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px'
                }} data-citation="https://junglecrow.studio/blog/jnoB/preproduction-2-story-structure" />
                <p>
                    The Story Circle consists of the following stages:
                </p>
                <ol>
                    <li>
                        A character is in a zone of comfort. This stage introduces the
                        protagonist in their familiar and ordinary world.<br /><br />
                    </li>
                    <li>
                        But they want something. The protagonist desires something that is
                        missing from their current situation, setting a goal or an aspiration.<br /><br />
                    </li>
                    <li>
                        They enter an unfamiliar situation. The protagonist is compelled to
                        leave their comfort zone and venture into a new and unfamiliar
                        environment.<br /><br />
                    </li>
                    <li>
                        They adapt to it. The protagonist adjusts to the challenges and demands
                        of the new situation, learning and growing along the way.<br /><br />
                    </li>
                    <li>
                        They get what they wanted. The protagonist achieves their initial goal
                        or fulfills their desire, which may not bring them the satisfaction they
                        expected.<br /><br />
                    </li>
                    <li>
                        But pay a heavy price. Despite accomplishing their goal, the protagonist
                        faces consequences or sacrifices that come with their success.<br /><br />
                    </li>
                    <li>
                        They return to their familiar situation. The protagonist returns to
                        their initial zone of comfort, but they are transformed or changed by
                        their experiences.<br /><br />
                    </li>
                    <li>
                        Having changed, they now see it differently. The protagonist gains a new
                        perspective and understanding of their familiar world, seeing it through
                        the lens of their growth and transformation.
                    </li>
                </ol>
                <p>
                    The Story Circle emphasizes the cyclical nature of storytelling and the
                    protagonist's journey of growth and change. It recognizes that characters
                    often undergo transformation and come back to their starting point with a
                    different outlook. This structure can be applied to various forms of
                    storytelling, including television episodes, movies, and written narratives.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={storyCircleValue} onChange={setStoryCircleValue} />
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
