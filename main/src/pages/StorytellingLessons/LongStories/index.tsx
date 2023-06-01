
import { useState } from 'react'
import { Properties } from 'csstype'
import ReactQuill from 'react-quill'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'

import 'react-quill/dist/quill.snow.css'

import BannerImage from './../resources/long-stories.jpeg'
import BookSecretOfNimh from './../resources/book-secret-of-nimh.jpg'
import BookLordOfRings from './../resources/book-lord-of-rings.jpeg'
import BookNarnia from './../resources/book-narnia.jpeg'
import BookHowlsCastle from './../resources/book-howls-moving-castle.jpeg'
import BookLittleBroomstick from './../resources/book-little-broomstick.jpeg'
import BookWhiteFox from './../resources/book-white-fox.jpeg'

export default function LongStories() {
    const [ edit1Value, setEdit1Value ] = useState('')
    const [ edit2Value, setEdit2Value ] = useState('')
    const BookStyle: Properties<string | number, string & {}> = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    const BookImageStyle: Properties<string | number, string & {}> = {
        width: '200px',
        margin: '3em 0 1em 0'
    }

    return <main className='lesson-main'>
        <div className='content'>
            <h1>Writing Much Longer Stories</h1>
            <img src={BannerImage} alt="" style={{
                display: 'block',
                width: '100%',
                marginBottom: '30px'
            }} />
            <LeafDivider />
            <section>
                <p>
                    Novels are extended fictional narratives that provide a more extensive
                    exploration of characters, plotlines, and settings. Unlike short stories,
                    which focus on concise storytelling within a limited word count, novels
                    offer greater room for character development, intricate plot arcs, and the
                    exploration of complex themes. Novels typically exceed a certain length
                    threshold, with varying word counts depending on the genre and individual
                    work. They allow for a more expansive and immersive reading experience,
                    often spanning multiple chapters or volumes.
                </p>
                <p>
                    Novels can vary significantly in terms of word count, and there are no fixed
                    rules or strict boundaries. However, novels are often categorized into
                    different types based on their general word count ranges. Here are some
                    commonly recognized categories:
                </p>
                <ol>
                    <li>
                        <b>Novelette:</b> A novelette is a term used to describe a work of
                        fiction that falls in between a short story and a novella in terms of
                        word count. Novelettes, also known as Long Short-Stories, typically range
                        from around 7,500 to 20,000 words.<br /><br />
                    </li>
                    <li>
                        <b>Novella:</b> A novella is a shorter novel, typically ranging from
                        around 20,000 to 50,000 words. Novellas offer a more condensed narrative
                        with fewer subplots and characters than a full-length novel.<br /><br />
                    </li>
                    <li>
                        <b>Standard Novel:</b> This refers to novels of average length,
                        typically ranging from 50,000 to 100,000 words. Many novels fall within
                        this word count range and provide a comprehensive exploration of
                        characters, plotlines, and themes.<br /><br />
                    </li>
                    <li>
                        <b>Epic Novel:</b> Epic novels are lengthy works that span a significant
                        number of pages and often cover extensive time periods or complex
                        storylines. They can range from 100,000 to over 200,000 words or more.
                        Examples include sagas, historical epics, and intricate fantasy series.<br /><br />
                    </li>
                    <li>
                        <b>Doorstopper:</b> This term is used to describe exceptionally long
                        novels, typically exceeding 200,000 words or even reaching 500,000 words
                        or more. Doorstopper novels offer a vast and immersive reading
                        experience with expansive world-building, intricate plots, and extensive
                        character development.
                    </li>
                </ol>
                <p>
                    It's important to note that these word count categories are approximate and
                    can vary depending on different sources and individual interpretations. The
                    main purpose of categorizing novels by word count is to provide a general
                    understanding of their length and the scope of storytelling they encompass.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit1Value} onChange={setEdit1Value} />
            </section>
            <LeafDivider />
            <section>
                <h2>Classic Examples</h2>
                <p>
                    The following are examples of longer stories, some of which
                    were eventually made into animated feature films:
                </p>
                <ol style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    listStyleType: 'none',
                    marginBottom: '3em'
                }} >
                    <li style={BookStyle}>
                        <img src={BookSecretOfNimh} alt="" style={BookImageStyle} />
                        <b>Mrs. Frisby and the Rats of NIMH</b>
                    </li>
                    <li style={BookStyle}>
                        <img src={BookLordOfRings} alt="" style={BookImageStyle} />
                        <b>The Lord of the Rings</b>
                    </li>
                    <li style={BookStyle}>
                        <img src={BookNarnia} alt="" style={BookImageStyle} />
                        <b>The Chronicles of Narnia</b>
                    </li>
                    <li style={BookStyle}>
                        <img src={BookHowlsCastle} alt="" style={BookImageStyle} />
                        <b>Howl's Moving Castle</b>
                    </li>
                    <li style={BookStyle}>
                        <img src={BookLittleBroomstick} alt="" style={BookImageStyle} />
                        <b>The Little Broomstick</b>
                    </li>
                    <li style={BookStyle}>
                        <img src={BookWhiteFox} alt="" style={BookImageStyle} />
                        <b>White Fox</b>
                    </li>
                </ol>
                <p>
                    These are just a few examples of some classical favorites among the numerous
                    novels that have been written and shared over generations.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit2Value} onChange={setEdit2Value} />
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
