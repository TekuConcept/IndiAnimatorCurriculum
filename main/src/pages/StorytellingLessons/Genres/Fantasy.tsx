
import { useState } from 'react'
import ReactQuill from 'react-quill'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'

import 'react-quill/dist/quill.snow.css'

import BannerImage from './../resources/genre-fantasy.webp'

export default function Page() {
    const [ edit1Value, setEdit1Value ] = useState('')

    return <main className='lesson-main'>
        <div className='content'>
            <h1>Genre Patterns: Fantasy</h1>
            <img src={BannerImage} alt="" style={{
                display: 'block',
                width: '100%',
                marginBottom: '30px'
            }} />
            <LeafDivider />
            <section>
                <p>
                    Fantasy stories often exhibit several common patterns and elements that
                    contribute to the genre's distinctive characteristics. Here are some
                    notable patterns found in fantasy stories:
                </p>
                <ol>
                    <li>
                        <b>Imaginary Worlds:</b> Fantasy stories are typically set in
                        fictional worlds that differ from our reality. These worlds may
                        include magical elements, mythical creatures, and supernatural
                        phenomena.<br /><br />
                    </li>
                    <li>
                        <b>Hero's Journey:</b> Many fantasy stories follow the classic
                        hero's journey, where a protagonist embarks on an adventure, faces
                        trials and challenges, and ultimately undergoes personal growth or
                        transformation.<br /><br />
                    </li>
                    <li>
                        <b>Magic and Mythology:</b> Magic is a prominent feature in fantasy
                        stories, with characters possessing magical abilities or
                        encountering magical artifacts. Mythology and folklore often
                        influence the worldbuilding, introducing gods, prophecies, and
                        ancient legends.<br /><br />
                    </li>
                    <li>
                        <b>Quests and Epic Battles:</b> Fantasy stories frequently involve
                        quests or missions that the characters must undertake. These quests
                        may involve retrieving a precious artifact, defeating a great evil,
                        or restoring balance to the world. Epic battles between forces of
                        good and evil are also common.<br /><br />
                    </li>
                    <li>
                        <b>Worldbuilding:</b> Fantasy stories often place significant
                        emphasis on worldbuilding, constructing detailed and immersive
                        settings. This includes establishing the geography, cultures,
                        history, and intricate systems of magic or supernatural powers
                        within the fictional world.<br /><br />
                    </li>
                    <li>
                        <b>Non-Human Characters:</b> Fantasy stories frequently feature
                        non-human characters such as elves, dwarves, dragons, or other
                        mythical creatures. These characters may possess unique abilities,
                        characteristics, or cultural aspects that distinguish them from
                        humans.<br /><br />
                    </li>
                    <li>
                        <b>Themes of Good vs. Evil:</b> The struggle between forces of good
                        and evil is a prevalent theme in fantasy. Characters often face
                        moral dilemmas and must make choices that impact the balance of
                        power in the world.<br /><br />
                    </li>
                    <li>
                        <b>Symbolism and Allegory:</b> Fantasy stories can incorporate
                        symbolism and allegory to explore real-world themes, issues, or
                        social commentary in a metaphorical way.
                    </li>
                </ol>
                <p>
                    It's important to note that while these patterns are often found in
                    fantasy stories, not all fantasy stories adhere to the same conventions.
                    The genre is vast and diverse, allowing for a wide range of storytelling
                    approaches and unique variations on these patterns.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit1Value} onChange={setEdit1Value} />
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
