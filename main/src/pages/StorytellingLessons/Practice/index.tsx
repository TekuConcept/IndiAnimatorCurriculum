
import { useState } from 'react'
import { Properties } from 'csstype'
import ReactQuill from 'react-quill'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'

import 'react-quill/dist/quill.snow.css'

import BannerImage from './../resources/practice.jpeg'
import PlanningImage from './../resources/planning-3.png'
import NimhCharacters from './../resources/nimh-characters.jpeg'
import CharInterviews from './../resources/char-interviews.jpeg'
import MindMap from './../resources/mind-map.jpg'
import StoryDice from './../resources/story-dice.jpeg'
import VisualCollage from './../resources/visual-collage.jpeg'
import WordAssociation from './../resources/word-association.jpeg'
import Freewriting from './../resources/freewriting.jpeg'
import Creativity from './../resources/creativity.jpeg'

export default function VisualStories() {
    const [ edit1Value, setEdit1Value ] = useState('')
    const [ edit2Value, setEdit2Value ] = useState('')
    const BrainImage: Properties<string | number, string & {}> = {
        float: 'right',
        maxWidth: '300px',
        maxHeight: '200px',
        marginLeft: '20px',
        borderRadius: '10px'
    }

    return <main className='lesson-main'>
        <div className='content'>
            <h1>Experience from Knowledge</h1>
            <img src={BannerImage} alt="" style={{
                display: 'block',
                width: '100%',
                marginBottom: '30px'
            }} />
            <LeafDivider />
            <section>
                <p>
                    Creative storytelling is a magical journey that allows you to explore
                    boundless worlds, breathe life into captivating characters, and share the
                    depths of your imagination with others. It's an art form that transcends
                    boundaries and sparks joy in both the creator and the audience. Embrace the
                    power of storytelling, for it holds the ability to inspire, entertain, and
                    connect us on a profound level. So let your ideas soar, weave tales that
                    resonate, and remember that within your stories lies the potential to touch
                    hearts, ignite wonder, and leave a lasting legacy in the minds and hearts of
                    others. Embrace the joy of creative storytelling and let your imagination
                    take flight.
                </p>
                <p>
                    <b>The stages of story writing:</b>
                </p>
                <ol>
                    <li><a href="#planning">Planning</a></li>
                    <li><a href="#brainstorming">Brainstorming</a></li>
                    <li><a href="#writitng">Writing</a></li>
                </ol>
                <p>
                    Every author has their own creative approach to storytelling, which best
                    suits them and inspires their creative writing journey. If you haven't found
                    your groove already, not to worry, such will come naturally in time -
                    especially after much personal experience. Therefore, let this workshop be
                    your opportunity to gain some experience!
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit1Value} onChange={setEdit1Value} />
            </section>
            <LeafDivider />
            <section>
                <h2 id="planning">Planning</h2>
                <p>
                    In the initial planning stage, let your ideas flow freely and allow your
                    imagination to run wild. Embrace the excitement of discovering new worlds,
                    crafting compelling characters, and weaving captivating plots. Remember,
                    every great story begins with a single idea, and it's within your power to
                    shape that idea into something extraordinary. Trust in your creative
                    instincts, embrace the joy of exploration, and let your storytelling dreams
                    take flight. 
                </p>
                <img src={PlanningImage} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px'
                }} />
                <p>
                    The goal of the planning stage is capturing the essence of your story into
                    its own little portfolio. Get a general idea of what you would like to write
                    about. Then start setting up the initial foundations that will define where
                    you will go next.
                </p>
                <p>
                    Consider the following question when planning your story portfolio:
                </p>
                <ul>
                    <li>
                        Will this be soft or hard world-building?
                        <ul>
                            <li>What time period?</li>
                            <li>Level of innovation?</li>
                            <li>Population density?</li>
                            <li>Races and species?</li>
                            <li>
                                Size of the map? Will the story take place across dimensions,
                                worlds, continents, cities, lands, homes, rooms?
                            </li>
                            <li>
                                Consider how many stories you will create from this world
                                <ul>
                                    <li>Soft world-building is more practical for one or two stories</li>
                                    <li>
                                        How relevant are certain details such as language, plant
                                        life, sciences, etc. in your world with respect to your
                                        stories?
                                    </li>
                                    <li>Remember time investment and personal goals</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <b>Who are your characters?</b>
                        <ul>
                            <li>
                                What is their dynamic?
                                <ul>
                                    <li>Protagonists</li>
                                    <li>Antagonists</li>
                                    <li>Round (Changing) Characters</li>
                                    <li>Flat (NPC-like) Characters</li>
                                </ul>
                            </li>
                            <li>
                                Create a character profile
                                <ul>
                                    <li>Strengths</li>
                                    <li>Weaknesses</li>
                                    <li>Interests</li>
                                    <li>Quirks</li>
                                    <li>Etc</li>
                                </ul>
                            </li>
                            <li>
                                Do they have a distinct personality or appearance about them?
                            </li>
                            <li>
                                What might be their possible character arc, if any?
                            </li>
                        </ul>
                        <img src={NimhCharacters} alt="" style={{
                            display: 'block',
                            width: '100%',
                            marginBottom: '30px'
                        }} />
                    </li>
                    <li>
                        What conflicts or tight spots will you put your characters through?
                    </li>
                    <li>What is the desired genre(s) of this story?</li>
                    <li>What themes will be explored?</li>
                    <li>What is the over-arching plot?</li>
                    <li>Are there any sub-plots? If so, what might they be?</li>
                    <li>What are some key locations where this story will take place?</li>
                    <li>Narration choices? How would you like to tell the story?</li>
                    <li>What structure(s) will you use for brainstorming?</li>
                    <li>What medium will you write in?</li>
                    <li>Is there a word count goal?</li>
                    <li>Anything else?</li>
                </ul>
                <p>
                    When you finish building a story portfolio, move on to brainstorming!
                </p>
            </section>
            <LeafDivider />
            <section>
                <h2 id="brainstorming">Brainstorming</h2>
                <p>
                    There are several effective methods for story brainstorming. Here are a few
                    popular ones:
                </p>
                <ol>
                    <li>
                        <img src={Creativity} alt="" style={{
                            ...BrainImage,
                            height: '180px',
                            objectFit: 'cover'
                        }} />
                        <b>Constrained Generation:</b> Ask a question. Then answer that question
                        in at least ten different ways. If the first ten questions came easy
                        then keep answering until you really need to get creative. Creativity
                        often flourishes amidst constraint. The tighter the constraint, the more
                        creative you need to be.<br /><br />
                    </li>
                    <li>
                        <img src={MindMap} alt="" style={BrainImage} />
                        <b>Mind Mapping:</b> Start with a central theme or concept and branch
                        out into related ideas and subtopics. Use visual connections to explore
                        different angles and possibilities for your story.<br /><br />
                    </li>
                    <li>
                        <img src={Freewriting} alt="" style={BrainImage} />
                        <b>Freewriting:</b> Set a timer and write continuously without worrying
                        about grammar, structure, or coherence. Let your thoughts flow freely,
                        allowing unexpected ideas to emerge and guide your story.<br /><br />
                    </li>
                    <li>
                        <img src={CharInterviews} alt="" style={BrainImage} />
                        <b>Character Interviews:</b> Imagine you are interviewing your
                        characters as if they were real people. Ask them questions about their
                        background, motivations, and goals. Their responses can reveal valuable
                        insights and plot directions.<br /><br />
                    </li>
                    <li>
                        <img src={StoryDice} alt="" style={BrainImage} />
                        <b>Story Cubes:</b> Use story dice or cards with different images or
                        words on each side. Roll the dice or draw cards randomly and create a
                        story that incorporates the elements you get. This method encourages
                        creativity and unexpected connections.<br /><br />
                    </li>
                    <li>
                        <img src={VisualCollage} alt="" style={BrainImage} />
                        <b>Visual Collage:</b> Gather images, photographs, or magazine cutouts
                        that resonate with your story's theme or atmosphere. Arrange them on a
                        board or in a notebook to create a visual representation of your story
                        world, characters, or key scenes.<br /><br />
                    </li>
                    <li>
                        <img src={WordAssociation} alt="" style={BrainImage} />
                        <b>Word Association:</b> Write down a word or phrase related to your
                        story, then generate a list of associated words or concepts. Let these
                        words spark new ideas and connections that can fuel your storytelling
                        process.
                    </li>
                </ol>
                <p>
                    Remember, the goal of brainstorming is to generate as many ideas as possible
                    without judgment or self-censorship. Experiment with different methods,
                    combine them, or create your own approach that works best for your unique
                    creative process.
                </p>
                <p>
                    Brainstorming dosn't need to be a one time process. If and when you need it,
                    take a moment during the writing process to come up with more creative
                    ideas. When you've finished your brainstorming session, jump right back in
                    to writing.
                </p>
                <p>
                    With that, when your finished, move on to finally fleshing out your story!
                </p>
            </section>
            <LeafDivider />
            <section>
                <h2 id="writing">Writing</h2>
                <p>
                    The next steps to actually write your story are as follows:
                </p>
                <ol>
                    <li>
                        <b>Outline:</b> Organize your ideas and create a detailed outline or
                        story structure. Break down the plot into chapters or sections, outline
                        character arcs, and note key events and scenes. This will provide a
                        roadmap for your writing process.<br /><br />
                    </li>
                    <li>
                        <b>Drafting:</b> Begin writing your story based on the outline. Don't
                        worry about perfection or editing at this stage. Focus on getting the
                        words on paper and bringing your story to life. Embrace the flow of
                        creativity and let your ideas take shape.<br /><br />
                    </li>
                    <li>
                        <b>Write Regularly:</b> Establish a writing routine and commit to
                        regular writing sessions. Set aside a dedicated time each day to work on
                        your story. (Try for 30 minutes or 500 words a day.) Consistency is key
                        in making progress and maintaining momentum.<br /><br />
                    </li>
                    <li>
                        <b>Revise and Edit:</b> Once you have a complete draft, set it aside for
                        a while to gain some distance. (This is absolutely critical for best
                        results!) Then, return to it with fresh eyes and start the revision
                        process. Read through your story, address plot holes, refine dialogue,
                        strengthen character development, and improve overall coherence and
                        flow.<br /><br />
                    </li>
                    <li>
                        <b>Seek Feedback:</b> Share your story with trusted friends, writing
                        groups, or beta readers. Obtain constructive feedback to gain different
                        perspectives and identify areas for improvement. Consider their
                        suggestions and make revisions accordingly. J.R.R. Tolkien and C.S.
                        Lewis regularly came together sharing the developments of their stories.<br /><br />
                    </li>
                    <li>
                        <b>Polish and Finalize:</b> After incorporating feedback and revising,
                        focus on polishing your story. Pay attention to grammar, sentence
                        structure, and style. Ensure consistency in tone, voice, and pacing.
                        Make final adjustments until you're satisfied with the overall quality
                        of your story.<br /><br />
                    </li>
                    <li>
                        <b>Celebrate and Share:</b> Once you are satisfied with your story,
                        celebrate your accomplishment! Share your work with others through
                        publication, submission to literary magazines or contests, or by
                        self-publishing. Embrace the joy of sharing your creative work with the
                        world.
                    </li>
                </ol>
                <p>
                    Remember, the writing process is unique to each individual. Adapt these
                    steps to suit your preferences and creative style. Stay open to surprises
                    and changes that may occur during the writing process. Enjoy the journey of
                    bringing your story to life!
                </p>
                <h3>Let's Get Started!</h3>
                <ReactQuill theme="snow" value={edit1Value} onChange={setEdit1Value} />
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
