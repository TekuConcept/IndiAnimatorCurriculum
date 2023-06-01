
import { useState } from 'react'
import { Properties } from 'csstype'
import ReactQuill from 'react-quill'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'

import 'react-quill/dist/quill.snow.css'

import BannerImage from './../resources/short-story-2.jpg'
import BookWinniThePooh from './../resources/book-winni-the-pooh.jpg'
import BookPeterRabbit from './../resources/book-peter-rabbit.jpeg'
import BookPolarExpress from './../resources/book-polar-express.jpeg'
import BookAesopsFables from './../resources/book-aesops-fables.jpg'
import BookBestStoryEver from './../resources/book-best-storybook-ever.jpg'
import BookIronGiant from './../resources/book-iron-giant.jpeg'

export default function ShortStories() {
    const [ edit1Value, setEdit1Value ] = useState('')
    const [ edit2Value, setEdit2Value ] = useState('')
    const BookStyle: Properties<string | number, string & {}> = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    const BookImageStyle: Properties<string | number, string & {}> = {
        // width: '200px',
        maxWidth: '300px',
        maxHeight: '300px',
        margin: '3em 0 1em 0'
    }

    return <main className='lesson-main'>
        <div className='content'>
            <h1>Writing Simple Short Stories</h1>
            <img src={BannerImage} alt="" style={{
                display: 'block',
                width: '100%',
                marginBottom: '30px'
            }} data-citation="https://www.care.com/c/22-campfire-stories-to-spook-and-delight/" />
            <LeafDivider />
            <section>
                <p>
                    A short story is a work of fiction that typically focuses on a single
                    character, event, or theme. It is a complete narrative in itself, shorter in
                    length than a novel, and aims to tell a concise and self-contained story.
                    Short stories often have a limited number of characters, a single plotline,
                    and a compact narrative structure. They can explore a range of genres,
                    themes, and writing styles, but their defining characteristic is their
                    brevity and ability to convey a complete story within a shorter format.
                </p>
                <p>
                    Short stories can be categorized based on their word count. Here are some
                    commonly recognized categories:
                </p>
                <ol>
                    <li>
                        <b>Micro Fiction:</b> These are extremely short stories with a word
                        count of up to 100 words. They require conciseness and often focus on a
                        single impactful moment or idea.<br /><br />
                    </li>
                    <li>
                        <b>Flash Fiction:</b> Flash fiction stories typically range from around
                        100 to 1,000 words. They are brief narratives that convey a complete
                        story, often with limited characters and settings.<br /><br />
                    </li>
                    <li>
                        <b>Short Short Stories:</b> Also known as sudden fiction or postcard
                        fiction, these stories range from around 1,000 to 2,000 words. They
                        allow for slightly more development of characters and plot while
                        maintaining brevity.<br /><br />
                    </li>
                    <li>
                        <b>Classic Short Stories:</b> Traditional short stories typically have a
                        word count of 2,000 to 7,500 words. They offer more room for character
                        development, plot complexity, and thematic exploration.<br /><br />
                    </li>
                    <li>
                        <b>Long Short Stories:</b> These stories fall in the higher word count
                        range of short fiction, typically ranging from 7,500 to 20,000 words.
                        They provide more extensive storytelling opportunities and may feature
                        subplots and additional layers of narrative.
                    </li>
                </ol>
                <p>
                    It's important to note that these word count categories are not fixed and
                    can vary depending on different sources and individual preferences. The main
                    idea is to categorize short stories based on their length to provide a
                    general understanding of their brevity and narrative scope.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit1Value} onChange={setEdit1Value} />
            </section>
            <LeafDivider />
            <section>
                <h2>Classic Examples</h2>
                <p>
                    The following are a few good examples of short stories, some of which
                    were eventually made into animated feature films:
                </p>
                <ol style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    listStyleType: 'none',
                    marginBottom: '3em'
                }} >
                    <li style={BookStyle}>
                        <img src={BookWinniThePooh} alt="" style={BookImageStyle} />
                        <b>Winni the Pooh</b>
                    </li>
                    <li style={BookStyle}>
                        <img src={BookPeterRabbit} alt="" style={BookImageStyle} />
                        <b>The Tale of Peter Rabbit</b>
                    </li>
                    <li style={BookStyle}>
                        <img src={BookPolarExpress} alt="" style={BookImageStyle} />
                        <b>The Polar Express</b>
                    </li>
                    <li style={BookStyle}>
                        <img src={BookAesopsFables} alt="" style={BookImageStyle} />
                        <b>Aesop's Fables</b>
                    </li>
                    <li style={BookStyle}>
                        <img src={BookBestStoryEver} alt="" style={BookImageStyle} />
                        <b>Best Storybook Ever</b>
                    </li>
                    <li style={BookStyle}>
                        <img src={BookIronGiant} alt="" style={BookImageStyle} />
                        <b>The Iron Man</b>
                    </li>
                </ol>
                <p>
                    These are just a few examples of some classical favorites among the numerous
                    short stories that have been written and shared over the centuries.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit2Value} onChange={setEdit2Value} />
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
