
import { useState } from 'react'
import ReactQuill from 'react-quill'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'
import { Red } from './../components/BoldText'

import 'react-quill/dist/quill.snow.css'

import BannerImage from './../resources/genre-mystery.jpeg'

export default function Page() {
    const [ edit1Value, setEdit1Value ] = useState('')

    return <main className='lesson-main'>
        <div className='content'>
            <h1>Genre Patterns: Mystery</h1>
            <img src={BannerImage} alt="" style={{
                display: 'block',
                width: '100%',
                marginBottom: '30px'
            }} />
            <LeafDivider />
            <section>
                <p>
                    Mystery stories typically involve the investigation of a perplexing or
                    enigmatic event, and they often exhibit certain patterns and elements
                    that are characteristic of the genre. Here are some common patterns
                    found in mystery stories:
                </p>
                <ol>
                    <li>
                        <b>Crime or Puzzle:</b> Mystery stories revolve around a central
                        crime, puzzle, or mysterious event that needs to be solved. This
                        could include a murder, theft, disappearance, or an unexplained
                        phenomenon.<br /><br />
                    </li>
                    <li>
                        <b>Detective or Investigator:</b> A key figure in a mystery story is
                        the detective or investigator who takes on the task of unraveling
                        the mystery. They often possess unique skills, intuition, or
                        expertise that aid them in their investigation.<br /><br />
                    </li>
                    <li>
                        <b>Clues and Red Herrings:</b> Clues and red herrings are scattered
                        throughout the narrative, providing pieces of information that may
                        lead the detective and the reader towards the truth or misdirect
                        their attention.<br /><br />
                    </li>
                    <li>
                        <b>Suspects and Motives:</b> Mystery stories involve a cast of
                        characters who may be potential suspects. Each suspect typically has
                        their own motives, secrets, and connections to the central mystery,
                        creating a web of intrigue.<br /><br />
                    </li>
                    <li>
                        <b>Uncovering the Truth:</b> The narrative focuses on the
                        detective's systematic process of gathering evidence, interviewing
                        suspects, and analyzing information to uncover the truth behind the
                        mystery. The story may build suspense and tension as the detective
                        gets closer to solving the case.<br /><br />
                    </li>
                    <li>
                        <b>Plot Twists and Surprises:</b> Mystery stories often include
                        unexpected plot twists, surprises, or revelations that challenge the
                        reader's assumptions and keep them engaged in the puzzle-solving
                        process.<br /><br />
                    </li>
                    <li>
                        <b>Resolution and Explanation:</b> At the climax of the story, the
                        detective unveils the solution to the mystery, providing a logical
                        and satisfying explanation that ties together all the loose ends.<br /><br />
                    </li>
                    <li>
                        <b>Atmosphere and Setting:</b> Mystery stories often create a
                        distinct atmosphere, whether it's a gritty urban noir, a cozy
                        small-town setting, or an eerie and atmospheric location that adds
                        to the intrigue and suspense.
                    </li>
                </ol>
                <p>
                    It's important to note that mystery stories can vary in subgenres and
                    narrative styles, from classic whodunits to psychological thrillers or
                    police procedurals. While these patterns are common in mystery stories,
                    authors often bring their unique twists and approaches to keep the genre
                    fresh and engaging for readers.
                </p>
                <LeafDivider />
                <p>
                    <Red>Puzzles</Red>, specifically, are games or challenges that require
                    problem-solving, logical thinking, and strategic reasoning to find a
                    solution. Here are some key elements that make a puzzle a puzzle:
                </p>
                <ol>
                    <li>
                        <b>Goal:</b> Puzzles have a specific objective or goal that needs to
                        be achieved. This could be solving a riddle, completing a pattern,
                        finding a hidden object, or unraveling a mystery.<br /><br />
                    </li>
                    <li>
                        <b>Challenge:</b> Puzzles provide a level of difficulty or challenge
                        for the solver. They require mental effort, concentration, and the
                        application of problem-solving skills to overcome obstacles and
                        reach the solution.<br /><br />
                    </li>
                    <li>
                        <b>Constraints and Rules:</b> Puzzles often come with specific
                        constraints or rules that govern how they should be approached and
                        solved. These rules set boundaries, define the problem space, and
                        guide the solver towards the correct solution.<br /><br />
                    </li>
                    <li>
                        <b>Problem-Solving Elements:</b> Puzzles involve problem-solving
                        elements such as logic, deduction, pattern recognition, spatial
                        reasoning, or mathematical calculations. The solver needs to analyze
                        information, make connections, and use logical reasoning to progress
                        towards the solution.<br /><br />
                    </li>
                    <li>
                        <b>Engagement and Entertainment:</b> Puzzles are designed to engage
                        and entertain the solver. They offer a sense of satisfaction and
                        accomplishment when solved, often triggering a feeling of "aha!" or
                        a sense of discovery.<br /><br />
                    </li>
                    <li>
                        <b>Incremental Progress:</b> Puzzles are usually solved through a
                        series of incremental steps. Each step or piece of information
                        brings the solver closer to the solution, building anticipation and
                        motivation to continue solving.<br /><br />
                    </li>
                    <li>
                        <b>Solvability:</b> Puzzles should be solvable within a reasonable
                        amount of time and effort. While they may be challenging, there
                        should be a clear solution that can be reached through logical
                        thinking and the provided clues or information.<br /><br />
                    </li>
                    <li>
                        <b>Creativity and Variety:</b> Puzzles come in various forms and
                        formats, allowing for creative problem-solving and offering a
                        diverse range of challenges. They can include jigsaw puzzles,
                        crosswords, sudoku, brain teasers, riddles, and more.
                    </li>
                </ol>
                <p>
                    Overall, puzzles stimulate the mind, engage problem-solving skills, and
                    provide a sense of satisfaction when successfully solved. They offer an
                    enjoyable and intellectually stimulating activity that challenges and
                    entertains individuals of all ages.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit1Value} onChange={setEdit1Value} />
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
