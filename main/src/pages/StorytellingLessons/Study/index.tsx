
import { useState } from 'react'
import ReactQuill from 'react-quill'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'

import 'react-quill/dist/quill.snow.css'

import BannerImage from './../resources/observation.jpeg'
import LiloAndStitch from './../resources/study-lilo-and-stitch.jpeg'
import Manga from './../resources/study-manga.jpeg'

export default function VisualStories() {
    const [ edit1Value, setEdit1Value ] = useState('')

    return <main className='lesson-main'>
        <div className='content'>
            <h1>Building Knowledge Through Observation</h1>
            <img src={BannerImage} alt="" style={{
                display: 'block',
                width: '100%',
                marginBottom: '30px'
            }} />
            <LeafDivider />
            <section>
                <p>
                    For an artist to refine their understanding and craft, they must not only
                    practice, practice, practice but also most especially study what they
                    practice. One should ideally consume more than they produce. Surround
                    yourself with the very media you want to create!
                </p>
                <p>
                    That is, if you wish to write the next great mystery, then start but reading
                    many great mysteries. Study how the author crafts puzzles and leaves the
                    reader in suspence. Observe the tones of narration, word choice, imagery,
                    etc.
                </p>
                <p>
                    If you wish to create the next great animated motion picture, watch and
                    study a variety of directed motion pictures. Reflect on what specifically
                    makes the picture great or terrible. Dissect the work and identify what
                    pieces are essential and what simply embellishes the narrative experience.
                </p>
            </section>
            <LeafDivider />
            <section>
                <h2>A Simple Guide to Story Analysis</h2>
                <p>
                    Dissecting a story into its basic parts involves analyzing its structure,
                    content, and elements.
                </p>
                <img src={LiloAndStitch} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px'
                }} />
                <p>
                    Here are some steps to help you in this process:
                </p>
                <ol>
                    <li>
                        <b>Identify the Genre:</b> Determine the genre of the story, such as
                        fiction, non-fiction, mystery, fantasy, romance, or science fiction.
                        This will give you an initial understanding of its overarching
                        conventions and themes.<br /><br />
                    </li>
                    <li>
                        <b>Examine the Plot:</b> Identify the main storyline or plot of the
                        story. Look for the key events, conflicts, and resolutions that drive the
                        narrative forward. Identify the major plot points, including the
                        exposition, inciting incident, rising action, climax, falling action,
                        and resolution.<br /><br />
                    </li>
                    <li>
                        <b>Analyze the Characters:</b> Pay attention to the characters in the
                        story. Identify the main protagonist(s), antagonist(s), and supporting
                        characters. Evaluate their development, motivations, relationships, and
                        character arcs throughout the story. Also try building a character
                        profile - identify their strengths, quirks, interests, dislikes, etc.<br /><br />
                    </li>
                    <li>
                        <b>Explore the Setting:</b> Consider the setting of the story, including
                        the time period, geographical location, and the environment in which the
                        story takes place. Analyze how the setting contributes to the overall
                        atmosphere, mood, and themes of the story.<br /><br />
                    </li>
                    <li>
                        <b>Evaluate the Themes:</b> Identify the central themes or messages
                        conveyed in the story. Look for recurring ideas, symbolism, social
                        commentary, or philosophical concepts that the author explores. Reflect
                        on the deeper meanings and interpretations behind the story.<br /><br />
                    </li>
                    <li>
                        <b>Assess the Writing Style:</b> Evaluate the author's writing style,
                        including their use of language, imagery, dialogue, and narrative
                        techniques. Consider the tone, pacing, and overall effectiveness of the
                        writing in conveying the story and engaging the reader.<br /><br />
                    </li>
                    <li>
                        <b>Consider the Structure:</b> Examine the story's structure, including
                        chapters, sections, or any other organizational elements. Look for any
                        non-linear or unconventional narrative structures that may be present.<br /><br />
                    </li>
                    <li>
                        <b>Analyze the Symbolism and Motifs:</b> Pay attention to recurring
                        symbols, motifs, or literary devices used in the story. Consider how they
                        enhance the story, contribute to its themes, or add layers of meaning.<br /><br />
                    </li>
                    <li>
                        <b>Reflect on the Impact:</b> Finally, reflect on the overall impact of
                        the story on you as a reader. Consider its strengths, weaknesses, and the
                        emotions or thoughts it evokes. Analyze the story's relevance, cultural
                        significance, or any lasting impressions it leaves.
                    </li>
                </ol>
                <p>
                    By dissecting a story into its basic parts, you can gain a deeper
                    understanding of its structure, themes, characters, and writing style. This
                    analysis helps you appreciate the various elements that contribute to the
                    story's overall impact and significance. It also offers great insight for
                    your own narratives. 
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit1Value} onChange={setEdit1Value} />
            </section>
            <LeafDivider />
            <section>
                <h2>A Simple Guide to Visual Story Analysis</h2>
                <p>
                    Examining the unique elements and components for visual stories like graphic
                    novels, webcomics, etc., is very much the same as any other story.
                </p>
                <img src={Manga} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px'
                }} />
                <p>
                    That said, the following are a few notable areas to consider:
                </p>
                <ol>
                    <li>
                        <b>Visual Analysis:</b> Start by analyzing the visual aspects of the
                        comic. Pay attention to the art style, panel layout, and page
                        composition. Look for details in the artwork, including character
                        designs, backgrounds, and use of colors or shading. Consider how the
                        visuals contribute to the storytelling and convey the mood or tone.<br /><br />
                    </li>
                    <li>
                        <b>Panel-to-Panel Transitions:</b> Examine the transitions between
                        panels. Identify the different types of transitions used, such as
                        moment-to-moment, action-to-action, subject-to-subject, scene-to-scene,
                        or aspect-to-aspect. Evaluate how these transitions enhance the pacing,
                        flow, and narrative progression of the comic.<br /><br />
                    </li>
                    <li>
                        <b>Dialogue and Narration:</b> Consider the use of speech balloons,
                        captions, or thought bubbles to convey information and emotions.<br /><br />
                    </li>
                    <li>
                        <b>Visual Storytelling:</b> Examine how the comic utilizes visual
                        storytelling techniques. Look for techniques such as panel composition,
                        use of motion lines, sound effects, visual metaphors, or visual cues
                        that guide the reader's attention and enhance the storytelling
                        experience.<br /><br />
                    </li>
                    <li>
                        <b>Layout and Design:</b> Assess the overall layout and design of the
                        comic. Consider the cover design, typography, and page layout. Evaluate
                        how the design choices contribute to the reader's engagement and overall
                        reading experience.
                    </li>
                </ol>
                <p>
                    By dissecting a visual story in this way, you can gain a deeper appreciation
                    for its visual storytelling, narrative structure, character development, and
                    thematic elements. It helps you understand how the different components work
                    together to create a compelling and immersive reading experience.
                </p>
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
