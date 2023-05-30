
import { useState } from 'react'
import ReactQuill from 'react-quill'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'

import 'react-quill/dist/quill.snow.css'

// import BannerImage from './../resources/genre-adventure.jpeg'
import BannerImage from './../resources/genre-adventure-2.webp'

export default function Page() {
    const [ edit1Value, setEdit1Value ] = useState('')

    return <main className='lesson-main'>
        <div className='content'>
            <h1>Genre Patterns: Adventure</h1>
            <img src={BannerImage} alt="" style={{
                display: 'block',
                width: '100%',
                marginBottom: '30px'
            }} />
            <LeafDivider />
            <section>
                <p>
                    While adventure stories can vary in terms of plot, setting, and
                    characters, there are certain storytelling techniques and elements that
                    can contribute to a compelling adventure narrative. While it may not be
                    a strict science, there are some key considerations to keep in mind when
                    crafting an adventure story:
                </p>
                <ol>
                    <li>
                        <b>Engaging Premise:</b> Start with an intriguing premise or goal
                        that captures readers' attention and provides a sense of purpose for
                        the characters. This could be a quest, a treasure hunt, a mission,
                        or an exploration of an unknown world.<br /><br />
                    </li>
                    <li>
                        <b>High Stakes:</b> Establish high stakes and potential risks for
                        the characters. Adventures thrive on tension, danger, and the
                        possibility of failure, which keeps readers engaged and invested in
                        the outcome.<br /><br />
                    </li>
                    <li>
                        <b>Heroic Protagonist:</b> Create a relatable and dynamic
                        protagonist who embarks on the adventure. Develop their motivations,
                        strengths, and weaknesses, and allow them to grow and evolve
                        throughout their journey.<br /><br />
                    </li>
                    <li>
                        <b>Obstacles and Challenges:</b> Introduce a series of obstacles,
                        challenges, and conflicts that the characters must overcome. These
                        can be physical, emotional, or intellectual hurdles that test their
                        skills, courage, and resilience.<br /><br />
                    </li>
                    <li>
                        <b>Sense of Discovery:</b> Adventure stories often involve
                        exploration, uncovering secrets, or encountering new worlds. Build a
                        sense of discovery and wonder as the characters explore unfamiliar
                        territories or encounter unique situations.<br /><br />
                    </li>
                    <li>
                        <b>Pacing and Action:</b> Maintain a dynamic pace with well-paced
                        action sequences and moments of tension and release. Keep the story
                        moving forward, interspersing moments of excitement with quieter
                        moments of reflection or character development.<br /><br />
                    </li>
                    <li>
                        <b>Setting and Atmosphere:</b> Develop a vivid and immersive setting
                        that enhances the sense of adventure. Whether it's a lush jungle, a
                        treacherous mountain range, or a fantastical realm, the setting
                        should evoke a sense of wonder, danger, and possibility.<br /><br />
                    </li>
                    <li>
                        <b>Resolution and Character Growth:</b> Provide a satisfying
                        resolution to the adventure, allowing the characters to achieve
                        their goals or learn valuable lessons. Show how the journey has
                        transformed the characters and impacted their lives.
                    </li>
                </ol>
                <p>
                    While adventure stories can be crafted in various ways, incorporating
                    these elements can contribute to an engaging and thrilling narrative.
                    However, it's important to remember that storytelling is also an art
                    form, and creativity and individuality play a significant role in
                    shaping an adventure story.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit1Value} onChange={setEdit1Value} />
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
