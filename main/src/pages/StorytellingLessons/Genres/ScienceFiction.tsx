
import { useState } from 'react'
import ReactQuill from 'react-quill'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'

import 'react-quill/dist/quill.snow.css'

import BannerImage from './../resources/genre-scifi.jpg'

export default function Page() {
    const [ edit1Value, setEdit1Value ] = useState('')

    return <main className='lesson-main'>
        <div className='content'>
            <h1>Genre Patterns: SciFi</h1>
            <img src={BannerImage} alt="" style={{
                display: 'block',
                width: '100%',
                marginBottom: '30px'
            }} />
            <LeafDivider />
            <section>
                <p>
                    Science fiction stories, known for their imaginative exploration of
                    scientific and technological concepts, often exhibit certain patterns
                    and elements that are characteristic of the genre. Here are some common
                    patterns found in science fiction stories:
                </p>
                <ol>
                    <li>
                        <b>Speculative Science and Technology:</b> Science fiction stories
                        introduce scientific or technological concepts that are not yet
                        possible in our current reality. This could include futuristic
                        technologies, advanced civilizations, time travel, artificial
                        intelligence, genetic engineering, and more.<br /><br />
                    </li>
                    <li>
                        <b>Futuristic Settings:</b> Science fiction stories are often set in
                        the future or in alternative versions of our world. These settings
                        may feature advanced societies, space exploration, dystopian or
                        utopian societies, or alien worlds.<br /><br />
                    </li>
                    <li>
                        <b>Exploration of Big Ideas:</b> Science fiction explores big ideas
                        and themes, often raising philosophical, ethical, or social
                        questions. It delves into the potential consequences and impact of
                        scientific advancements on humanity and the universe.<br /><br />
                    </li>
                    <li>
                        <b>Worldbuilding:</b> Science fiction stories often involve
                        extensive worldbuilding, creating intricate and detailed settings
                        with their own rules, societies, and technologies. This includes
                        constructing unique planets, civilizations, and ecosystems.<br /><br />
                    </li>
                    <li>
                        <b>Scientific Concepts and Plausibility:</b> Science fiction strives
                        to maintain a sense of scientific plausibility, even within its
                        imaginative premises. It often incorporates scientific principles,
                        theories, or extrapolations to ground its concepts in a sense of
                        believability.<br /><br />
                    </li>
                    <li>
                        <b>Futuristic Characters:</b> Science fiction stories often feature
                        characters who possess unique abilities, technologies, or genetic
                        modifications that set them apart. These characters may be
                        scientists, explorers, aliens, or individuals with exceptional
                        capabilities.<br /><br />
                    </li>
                    <li>
                        <b>Exploration of Social and Political Issues:</b> Science fiction
                        frequently serves as a vehicle for exploring social, political, and
                        cultural issues in a speculative context. It can provide commentary
                        on contemporary concerns or offer alternative perspectives on
                        societal structures and norms.<br /><br />
                    </li>
                    <li>
                        <b>Sense of Wonder and Imagination:</b> Science fiction aims to
                        evoke a sense of wonder and awe, transporting readers to imaginative
                        worlds and possibilities beyond our current understanding. It
                        celebrates the power of human imagination and curiosity.
                    </li>
                </ol>
                <p>
                    It's important to note that science fiction is a diverse genre with
                    various subgenres and narrative styles, including hard science fiction,
                    space opera, cyberpunk, dystopian fiction, and more. While these
                    patterns are common in science fiction stories, authors often combine
                    and innovate within the genre to create unique and thought-provoking
                    narratives.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit1Value} onChange={setEdit1Value} />
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
