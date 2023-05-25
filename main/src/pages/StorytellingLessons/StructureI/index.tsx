
import { Editor } from 'react-draft-wysiwyg'
import { EditorState } from 'draft-js'
import { useState } from 'react'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'

export default function StructureI() {
    const [ classicState, classicStateChanged ] =
        useState(() => EditorState.createEmpty())

    return <main className='lesson-main'>
        <div className='content'>
            <h1>Simple Story Structures</h1>
            {/* <img src={ConflictImage} alt="" /> */}
            <LeafDivider />
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
            <h3>Adventerous (or Circular)</h3>
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
            <section>
                <h2 id="classic">Dean Koontz's Classic Story Structure</h2>
                <p>
                    Dean Koontz's Classic Story Structure is a narrative framework consisting of
                    four key elements:
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
                <Editor
                    editorState={classicState}
                    // toolbarClassName="toolbarClassName"
                    // wrapperClassName="wrapperClassName"
                    // editorClassName="editorClassName"
                    onEditorStateChange={classicStateChanged}
                    />
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
