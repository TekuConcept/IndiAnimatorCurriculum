
import { useState } from 'react'
import ReactQuill from 'react-quill'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'

import 'react-quill/dist/quill.snow.css'

import BannerImage from './../resources/genre-thriller.png'

export default function Page() {
    const [ edit1Value, setEdit1Value ] = useState('')

    return <main className='lesson-main'>
        <div className='content'>
            <h1>Genre Patterns: Thriller</h1>
            <img src={BannerImage} alt="" style={{
                display: 'block',
                width: '100%',
                marginBottom: '30px'
            }} />
            <LeafDivider />
            <section>
                <p>
                    Thriller stories, known for their suspenseful and high-stakes
                    narratives, often exhibit certain patterns and elements that are
                    characteristic of the genre. Here are some common patterns found in
                    thriller stories:
                </p>
                <ol>
                    <li>
                        <b>Intense Suspense:</b> Thriller stories create a sense of intense
                        suspense and anticipation throughout the narrative. The plot is
                        often driven by a threat, danger, or mystery that keeps the reader
                        on the edge of their seat.<br /><br />
                    </li>
                    <li>
                        <b>Protagonist in Peril:</b> Thrillers typically feature a
                        protagonist who is thrust into a dangerous or life-threatening
                        situation. They may be an ordinary person caught up in extraordinary
                        circumstances, a detective investigating a crime, or a spy on a
                        mission, among others.<br /><br />
                    </li>
                    <li>
                        <b>Fast-Paced Plot:</b> Thrillers often have a fast-paced plot that
                        keeps the reader engaged and turning pages. There may be frequent
                        twists, turns, and unexpected revelations that propel the story
                        forward.<br /><br />
                    </li>
                    <li>
                        <b>Ticking Clock:</b> Many thrillers incorporate a ticking clock
                        element, where there is a sense of urgency or a deadline that the
                        protagonist must meet. This adds to the tension and drives the
                        pacing of the story.<br /><br />
                    </li>
                    <li>
                        <b>Psychological Intrigue:</b> Thrillers often delve into the
                        psychological aspects of the characters and their motivations. The
                        protagonist may face psychological challenges, confront their fears,
                        or encounter manipulative and complex adversaries.<br /><br />
                    </li>
                    <li>
                        <b>Plot Twists and Reversals:</b> Thrillers frequently include plot
                        twists and reversals that challenge the reader's expectations and
                        keep them guessing. These surprises can alter the perception of
                        characters, reveal hidden agendas, or change the direction of the
                        narrative.<br /><br />
                    </li>
                    <li>
                        <b>High-Stakes Conflict:</b> Thriller stories involve high-stakes
                        conflicts that put the protagonist in jeopardy. This could be a
                        life-or-death situation, a race against time to prevent a
                        catastrophe, or a battle of wits with a cunning adversary.<br /><br />
                    </li>
                    <li>
                        <b>Climactic Showdown:</b> The climax of a thriller often features a
                        dramatic showdown between the protagonist and the antagonist or a
                        resolution of the central conflict. This can be a moment of intense
                        action, suspense, and resolution.
                    </li>
                </ol>
                <p>
                    It's important to note that thrillers can span across subgenres such as
                    psychological thrillers, crime thrillers, political thrillers, and more.
                    While these patterns are common in thriller stories, authors employ
                    their unique storytelling techniques, character dynamics, and settings
                    to create gripping and thrilling narratives within the genre.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit1Value} onChange={setEdit1Value} />
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
