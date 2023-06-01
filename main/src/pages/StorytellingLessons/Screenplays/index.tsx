
import { useState } from 'react'
import ReactQuill from 'react-quill'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'

import 'react-quill/dist/quill.snow.css'

import BannerImage from './../resources/screenplays.jpeg'
import Screenplay from './../resources/screenplay-2.webp'

export default function Screenplays() {
    const [ edit1Value, setEdit1Value ] = useState('')
    const [ edit2Value, setEdit2Value ] = useState('')

    return <main className='lesson-main'>
        <div className='content'>
            <h1>Writing Scripts and Screenplays</h1>
            <img src={BannerImage} alt="" style={{
                display: 'block',
                width: '100%',
                marginBottom: '30px'
            }} data-citation='https://www.backstage.com/magazine/article/ways-master-dreaded-cold-read-12352/' />
            <LeafDivider />
            <section>
                <p>
                    Screenplays are written scripts that serves as blueprints for films,
                    television productions, as well as local plays. It is a detailed document
                    that outlines the story, characters, dialogue, and action of a visual
                    narrative. Screenplays are typically written in a specific format, which
                    includes elements such as scene headings, character names, dialogue, and
                    descriptions. The purpose of a screenplay is to guide the director, actors,
                    and production team in bringing the story to life on screen or stage. It
                    serves as a vital tool for communication and collaboration during the
                    filmmaking and rehersal process.
                </p>
                <p>
                    In terms of format and purpose, there are various types of screenplays. Here
                    are some common types:
                </p>
                <ol>
                    <li>
                        <b>Feature Film Screenplay:</b> This is the most well-known type of
                        screenplay, written for full-length feature films intended for
                        theatrical release. Feature film screenplays typically follow a
                        three-act structure and adhere to industry standards for formatting.<br /><br />
                    </li>
                    <li>
                        <b>Television Pilot:</b> A television pilot is the initial episode of a
                        television series that serves as a proof of concept. It introduces the
                        show's premise, characters, and sets the tone for future episodes.
                        Television pilots often have a different structure compared to feature
                        film screenplays, as they need to capture the attention of network
                        executives and entice them to pick up the series.<br /><br />
                    </li>
                    <li>
                        <b>TV Series Episode:</b> Once a television series has been greenlit,
                        subsequent episodes are written as standalone screenplays that fit
                        within the established world and ongoing story arcs of the show. Each
                        episode typically follows a specific structure and contributes to the
                        larger narrative of the series.<br /><br />
                    </li>
                    <li>
                        <b>Short Film:</b> Short film screenplays are written for films with a
                        runtime typically ranging from a few minutes to around 30 minutes. Short
                        films can be narrative-driven or explore a specific theme or concept
                        within a condensed format.<br /><br />
                    </li>
                    <li>
                        <b>Documentary Script:</b> Documentary scripts outline the structure,
                        content, and narration of a non-fiction film or series. These scripts
                        often include factual information, interviews, voice-over narration, and
                        visual descriptions to guide the documentary production.<br /><br />
                    </li>
                    <li>
                        <b>Adaptation:</b> An adaptation screenplay is based on pre-existing
                        source material such as novels, plays, or true stories. The screenwriter
                        transforms the original material into a script, translating the story,
                        characters, and themes into a visual medium.<br /><br />
                    </li>
                    <li>
                        <b>Interactive Media:</b> With the rise of interactive storytelling,
                        screenplays are now being developed for video games, interactive
                        experiences, and virtual reality (VR) projects. These screenplays
                        incorporate branching narratives, multiple paths, and player/audience
                        engagement.
                    </li>
                </ol>
                <p>
                    Each type of screenplay has its own unique considerations and requirements,
                    but they all share the goal of effectively translating a story into a visual
                    and engaging format for the intended medium.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit1Value} onChange={setEdit1Value} />
            </section>
            <LeafDivider />
            <section>
                <h2>A Simple Guide to Writing Screenplays</h2>
                <p>
                    Writing a screenplay requires a structured approach and attention to
                    specific elements of storytelling.
                </p>
                <img src={Screenplay} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px'
                }} data-citation='https://www.studiobinder.com/blog/how-to-write-a-screenplay/' />
                <p>
                    Here are some steps to help you get started:
                </p>
                <ol>
                    <li>
                        <b>Craft a Compelling Story:</b> Develop a strong and engaging story
                        idea with well-defined characters, an intriguing plot, and clear
                        narrative arcs. Outline the key events and structure of your story
                        before diving into the screenplay.<br /><br />
                    </li>
                    <li>
                        <b>Learn the Screenplay Format:</b> Familiarize yourself with the
                        standard screenplay format, which includes elements such as scene
                        headings, action descriptions, character names, dialogue, and
                        transitions. There are dedicated software programs such as FinalDraft
                        and industry standard templates available to assist you in formatting
                        your screenplay correctly.<br /><br />
                    </li>
                    <li>
                        <b>Create an Outline:</b> Before diving into writing the full
                        screenplay, create an outline that breaks down the story into acts,
                        sequences, and scenes. This will help you maintain a coherent structure
                        and ensure that your story progresses logically.<br /><br />
                    </li>
                    <li>
                        <b>Write the Scenes:</b> Start writing each scene, focusing on clear and
                        concise descriptions of the location, action, and character movements.
                        Use present tense and avoid excessive detail or camera directions unless
                        crucial to the story.<br /><br />
                    </li>
                    <li>
                        <b>Develop Characters:</b> Introduce your characters through their
                        actions, dialogue, and interactions. Make them distinct and give them
                        clear goals, conflicts, and growth throughout the story. Use dialogue to
                        reveal their personalities and advance the plot.<br /><br />
                    </li>
                    <li>
                        <b>Focus on Visual Storytelling:</b> Remember that screenplays are
                        visual mediums. Use visual descriptions and action to drive the story
                        forward and engage the reader's imagination. Show rather than tell
                        whenever possible.<br /><br />
                    </li>
                    <li>
                        <b>Refine Dialogue:</b> Craft dialogue that is authentic, engaging, and
                        true to each character's voice. Use dialogue to reveal information,
                        convey emotions, and propel the story. Keep it concise and impactful.<br /><br />
                    </li>
                    <li>
                        <b>Maintain a Pacing:</b> Pay attention to the pacing of your
                        screenplay, balancing moments of tension, action, and character
                        development. Keep the story moving forward while allowing room for
                        necessary breathing moments.<br /><br />
                    </li>
                    <li>
                        <b>Rewrite and Revise:</b> Once you've completed the first draft, revise
                        and refine your screenplay. Focus on strengthening the structure,
                        improving dialogue, enhancing character arcs, and tightening the overall
                        storytelling.<br /><br />
                    </li>
                    <li>
                        <b>Seek Feedback and Iteration:</b> Share your screenplay with trusted
                        friends, writing groups, or industry professionals for feedback.
                        Consider their insights and make necessary revisions to improve your
                        screenplay.
                    </li>
                </ol>
                <p>
                    Remember, writing a screenplay takes practice and persistence. Study and
                    analyze screenplays of successful films, immerse yourself in the craft of
                    storytelling, and continue honing your skills through writing and rewriting.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit2Value} onChange={setEdit2Value} />
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
