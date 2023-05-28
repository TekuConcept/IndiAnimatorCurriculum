
import React, { useState } from 'react'
import ReactQuill from 'react-quill'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'

import 'react-quill/dist/quill.snow.css'

import Landscape from './../resources/landscape-1.jpeg'

export default function StructureI() {
    const [ edit1Value, setEdit1Value ] = useState('')
    // const [ edit2Value, setEdit2Value ] = useState('')
    // const [ edit3Value, setEdit3Value ] = useState('')

    return <main className='lesson-main'>
        <div className='content'>
            <h1>Narration: The Perspectives of Storytelling</h1>
            <img src={Landscape} alt="" style={{
                display: 'block',
                width: '100%',
                marginBottom: '30px'
            }} />
            <LeafDivider />
            <section>
                <p>
                    The way a story is told or presented to the audience is the art of
                    narration. It involves the perspective or point of view from which the
                    events, characters, and plot are conveyed. The narrator, whether a character
                    within the story or an external voice, provides information, describes
                    events, and guides the audience through the story as it is told, shaping
                    their understanding and interpretation therein.
                </p>
                <p>
                    Here are several commonly used types of narration in storytelling:
                </p>
                <ol>
                    <li>
                        <b>First-person narration:</b> The story is told from the perspective of
                        a character within the story using "I" or "we" pronouns. This type of
                        narration provides a direct and personal insight into the thoughts,
                        feelings, and experiences of the narrator.<br /><br />
                    </li>
                    <li>
                        <b>Second-person narration:</b> The story addresses the reader directly,
                        using "you" pronouns. This type of narration is less common but can
                        create a sense of direct involvement and engagement with the reader.<br /><br />
                    </li>
                    <li>
                        <b>Third-person omniscient narration:</b> The story is narrated by an
                        external voice that has knowledge of all the characters' thoughts,
                        feelings, and events. The narrator can provide insights into multiple
                        characters' perspectives and is not limited to one character's point of
                        view.<br /><br />
                    </li>
                    <li>
                        <b>Third-person limited narration:</b> The story is told from the
                        perspective of a specific character, limiting the narration to their
                        thoughts, observations, and experiences. The narrator is still external
                        to the story but is confined to the viewpoint of the chosen character.<br /><br />
                    </li>
                    <li>
                        <b>Third-person objective narration:</b> The story is narrated from an
                        external perspective, providing an objective and impartial account of
                        events. The narrator does not have access to characters' thoughts or
                        feelings and presents only observable actions and dialogue.<br /><br />
                    </li>
                    <li>
                        <b>Epistolary narration:</b> This form of narration is presented as a
                        series of letters, diary entries, or documents written by the characters
                        themselves. It offers a unique perspective by providing firsthand
                        accounts and personal insights.<br /><br />
                    </li>
                    <li>
                        <b>Multiple narrators:</b> In some stories, different characters take
                        turns narrating different sections or chapters. This allows the reader
                        to see the events and viewpoints from various characters' perspectives,
                        providing a broader understanding of the story.
                    </li>
                </ol>
                <p>
                    The choice of narration style can significantly impact the reader's
                    experience, influencing their understanding of the characters, events, and
                    the overall tone of the story.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit1Value} onChange={setEdit1Value} />
            </section>
            <LeafDivider />
            <section>
                <h2>Examples:</h2>
                <p>
                    Here are three examples of different ways to narrate:
                </p>
                <p>
                    <b>First-person narration:</b> Imagine you are a character named Lily. You
                    would say, <i>"I woke up early in the morning and saw the sun shining through
                    my window. I jumped out of bed and ran downstairs to join my family for
                    breakfast. We all laughed and talked about our plans for the day."</i>
                </p>
                <p>
                    <b>Third-person omniscient narration:</b> Pretend you are watching the story
                    unfold as an invisible observer. You would say, <i>"Lily woke up early in the
                    morning, greeted by the warm sunlight streaming into her room. Excited for
                    the day ahead, she hurried downstairs to join her family. They gathered
                    around the table, exchanging laughter and discussing their plans."</i>
                </p>
                <p>
                    <b>Second-person narration:</b> Imagine you are talking directly to someone
                    named Lily. You would say, <i>"Lily, you woke up to the bright morning sunlight
                    peeking through your window. You couldn't wait for the day to begin, so you
                    hurried downstairs to have breakfast with your family. Laughter filled the
                    room as you all chatted about your exciting plans."</i>
                </p>
                <p>
                    <b>Epistolary narration:</b> Consider the book, "The Screwtape Letters," by
                    British writer and literary scholar, C. S. Lewis.
                </p>
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
