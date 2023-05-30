
import { useState } from 'react'
import ReactQuill from 'react-quill'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'

import 'react-quill/dist/quill.snow.css'

import BannerImage from './../resources/genre-romance.png'

export default function Page() {
    const [ edit1Value, setEdit1Value ] = useState('')

    return <main className='lesson-main'>
        <div className='content'>
            <h1>Genre Patterns: Romance</h1>
            <img src={BannerImage} alt="" style={{
                display: 'block',
                width: '100%',
                marginBottom: '30px'
            }} />
            <LeafDivider />
            <section>
                <p>
                    Romance stories, known for their focus on love and relationships, often
                    exhibit certain patterns and elements that are characteristic of the
                    genre. Here are some common patterns found in romance stories:
                </p>
                <ol>
                    <li>
                        <b>Central Love Story:</b> The central plot of a romance story
                        revolves around a romantic relationship between two main characters.
                        The development of their love, emotional connection, and journey as
                        a couple form the core of the narrative.<br /><br />
                    </li>
                    <li>
                        <b>Initial Meeting or Encounter:</b> The story typically begins with
                        the protagonists' initial meeting or encounter, which may be
                        unexpected, coincidental, or set up deliberately. This sets the
                        stage for their connection and sparks the romantic tension.<br /><br />
                    </li>
                    <li>
                        <b>Building Attraction and Chemistry:</b> The protagonists'
                        relationship evolves over time, with the story focusing on their
                        growing attraction, chemistry, and emotional bond. This often
                        involves various obstacles and conflicts that they must overcome.<br /><br />
                    </li>
                    <li>
                        <b>Conflict and Obstacles:</b> Romance stories often feature
                        conflicts and obstacles that threaten the protagonists'
                        relationship. These can include misunderstandings, external forces,
                        differences in background or goals, or personal insecurities that
                        create tension and challenges.<br /><br />
                    </li>
                    <li>
                        <b>Emotional Journey:</b> The emotional journey of the characters is
                        a key element in romance stories. They may experience a range of
                        emotions such as desire, passion, heartbreak, longing, and personal
                        growth as they navigate their relationship.<br /><br />
                    </li>
                    <li>
                        <b>Romantic Gestures and Moments:</b> Romance stories often include
                        memorable romantic gestures, intimate moments, and declarations of
                        love that deepen the connection between the characters and evoke
                        emotional responses from the reader.<br /><br />
                    </li>
                    <li>
                        <b>Resolution and Happily Ever After:</b> The resolution of a
                        romance story typically involves the resolution of conflicts and the
                        realization of the protagonists' love for each other. The story
                        concludes with a sense of satisfaction, often culminating in a
                        "happily ever after" or a positive outcome for the couple.<br /><br />
                    </li>
                    <li>
                        <b>Themes of Love and Relationships:</b> Romance stories explore
                        themes such as love, trust, commitment, sacrifice, and personal
                        growth within the context of romantic relationships. These themes
                        contribute to the emotional depth and resonance of the narrative.
                    </li>
                </ol>
                <p>
                    It's important to note that romance stories can encompass various
                    subgenres, including contemporary romance, historical romance,
                    paranormal romance, and more. While these patterns are common in romance
                    stories, authors bring their unique storytelling styles, character
                    dynamics, and settings to create diverse and engaging narratives within
                    the genre.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit1Value} onChange={setEdit1Value} />
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
