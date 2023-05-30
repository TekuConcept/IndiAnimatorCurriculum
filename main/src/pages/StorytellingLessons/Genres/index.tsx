
import React, { useState } from 'react'
import ReactQuill from 'react-quill'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'
import { Red } from './../components/BoldText'

import 'react-quill/dist/quill.snow.css'

import FantsyImage from './../resources/fantasy.jpg'

export default function Genres() {
    const [ edit1Value, setEdit1Value ] = useState('')
    const [ edit2Value, setEdit2Value ] = useState('')
    const [ edit3Value, setEdit3Value ] = useState('')

    return <main className='lesson-main'>
        <div className='content'>
            <h1>Exploring Genres and Themes</h1>
            <img src={FantsyImage} alt="" style={{
                display: 'block',
                width: '100%',
                marginBottom: '30px'
            }} />
            <LeafDivider />
            <section>
                <p>
                    Themes and genres play crucial roles in storytelling by providing structure,
                    context, and meaning to narratives. A brief explanation of their relevance
                    is as follows:
                </p>
                <ol>
                    <li>
                        <b>Themes:</b>
                        <ul>
                            <li>
                                Give depth and resonance to stories, exploring universal
                                concepts and conveying messages or insights about the human
                                condition.
                            </li>
                            <li>
                                Allow readers to connect with the story on an emotional and
                                intellectual level, encouraging reflection, empathy, and
                                personal engagement.
                            </li>
                            <li>
                                Provide cohesion and unity to the narrative, tying
                                together various elements such as plot, characters, and
                                symbolism.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <b>Genres:</b>
                        <ul>
                            <li>
                                Categorize stories based on their shared characteristics,
                                allowing readers to have certain expectations and preferences.
                            </li>
                            <li>
                                Provide a framework for storytelling, offering
                                established conventions, tropes, and structures that can guide
                                authors in crafting their narratives.
                            </li>
                            <li>
                                Help readers find stories that align with their interests
                                and provide familiarity, as well as enable authors to tap into
                                existing reader expectations and conventions.
                            </li>
                        </ul>
                    </li>
                </ol>
                <p>
                    Overall, themes and genres contribute to the overall effectiveness and
                    impact of storytelling. Themes offer depth and meaning, while genres provide
                    structure and guidance. Together, they enhance the reader's experience,
                    foster connection, and facilitate communication of ideas and emotions.
                </p>
                <p>
                    <Red>Important:</Red> Remember to let your characters drive the story
                    and not your story drive the characters! An author should consider their
                    choice of genres and themes as guides for creative inspiration. If a
                    character takes a sudden unexpected turn in the narrative, don't be afraid
                    to explore where they may lead you in the story.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit1Value} onChange={setEdit1Value} />
            </section>
            <LeafDivider />
            <section>
                <h2>Patterns Behind 7 Popular Genres</h2>
                <p>
                    Genres provide a way to categorize and understand different types of
                    stories, allowing audiences to find the kind of stories they enjoy and
                    enabling creators to work within established frameworks. Each genre has its
                    own conventions, tropes, and audience expectations, whether it's romance,
                    fantasy, mystery, science fiction, or any other genre. With that, genres
                    very widely with many different subgenres and variations to follow.
                </p>
                <p>
                    We'll explore the common patterns for just seven of the popular and more
                    broad genres of storytelling:
                </p>
                <ol style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)'
                }}>
                    <li><a href="/StorytellingLessons/Genres/Adventure">Adventure</a></li>
                    <li><a href="/StorytellingLessons/Genres/Fantasy">Fantasy</a></li>
                    <li><a href="/StorytellingLessons/Genres/Mystery">Mystery</a></li>
                    <li><a href="/StorytellingLessons/Genres/Romance">Romance</a></li>
                    <li><a href="/StorytellingLessons/Genres/ScienceFiction">Science Fiction</a></li>
                    <li><a href="/StorytellingLessons/Genres/Thriller">Thriller</a></li>
                    <li><a href="/StorytellingLessons/Genres/Comedy">Comedy</a></li>
                </ol>
                <p>
                    A non-comprehensive list of genres is provided below for convinience and
                    quick inspiration. Like how painters mix their colors an author may mix two
                    or more genres to create a new category, which best fits their story.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit2Value} onChange={setEdit2Value} />
            </section>
            <LeafDivider />
            <section>
                <h2>List of Genres</h2>
                <ul style={{
                    columnCount: 3,
                    listStyleType: 'none'
                }}>
                    <li>
                        <b>Adventure</b>
                        <ul style={{ listStyleType: 'inherit' }} >
                            <li>Action</li>
                            <li>Expedition</li>
                            <li>Fantasy</li>
                            <li>Historical</li>
                            <li>Science Fiction</li>
                            <li>Survival</li>
                            <li>Swashbuckler</li>
                            <li>Treasure Hunt</li>
                        </ul>
                    </li>
                    <li>
                        <b>Drama</b>
                        <ul style={{ listStyleType: 'inherit' }}>
                            <li>Comedy (Dramedy)</li>
                            <li>Domestic</li>
                            <li>Historical</li>
                            <li>Legal</li>
                            <li>Melodrama</li>
                            <li>Psychological</li>
                            <li>Social</li>
                            <li>Tragedy</li>
                        </ul>
                    </li>
                    <li>
                        <b>Fantasy</b>
                        <ul style={{ listStyleType: 'inherit' }}>
                            <li>Alternate History</li>
                            <li>Children's Story</li>
                            <li>Comedy</li>
                            <li>Contemporary</li>
                            <li>Dark Fantasy</li>
                            <li>Fairy Tale</li>
                            <li>Fantasy of Manners</li>
                            <li>Heroic</li>
                            <li>High Fantasy</li>
                            <li>Historical</li>
                            <li>Low Fantasy</li>
                            <li>Magical Realism</li>
                            <li>Mythical</li>
                            <li>Superhero</li>
                            <li>Sword and Sorcery</li>
                            <li>Urban</li>
                            <li>Young Adult</li>
                        </ul>
                    </li>
                    <li>
                        <b>Horror</b>
                        <ul style={{ listStyleType: 'inherit' }}>
                            <li>Body Horror</li>
                            <li>Comedy</li>
                            <li>Creepy Kids</li>
                            <li>Extreme Horror</li>
                            <li>Gothic</li>
                            <li>Hauntings</li>
                            <li>Historical</li>
                            <li>Lovecraftian</li>
                            <li>Man-Made</li>
                            <li>Monsters</li>
                            <li>Mythic</li>
                            <li>Occult</li>
                            <li>Psychic Abilities</li>
                            <li>Psychological</li>
                            <li>Quiet Horror</li>
                            <li>Young Adult</li>
                        </ul>
                    </li>
                    <li>
                        <b>Mystery</b>
                        <ul style={{ listStyleType: 'inherit' }}>
                            <li>Amateur Sleuth</li>
                            <li>Bumbling Detective</li>
                            <li>Caper</li>
                            <li>Child in Peril</li>
                            <li>Children's Story</li>
                            <li>Cozy</li>
                            <li>Culinary</li>
                            <li>Disabled</li>
                            <li>Doctor Detective</li>
                            <li>Furry Sleuth</li>
                            <li>Hardboiled</li>
                            <li>Historical</li>
                            <li>Howdunit</li>
                            <li>Legal</li>
                            <li>Locked Room</li>
                            <li>Multicultural and Diverse</li>
                            <li>Paranormal</li>
                            <li>Police Procedural</li>
                            <li>Private Detective</li>
                            <li>Whodunit</li>
                            <li>Woman in Peril</li>
                            <li>Young Adult<br /><br /></li>
                        </ul>
                    </li>
                    <li>
                        <b>Romance</b>
                        <ul style={{ listStyleType: 'inherit' }}>
                            <li>Billionaires</li>
                            <li>Comedy</li>
                            <li>Contemporary</li>
                            <li>Fantasy Romance</li>
                            <li>Gothic</li>
                            <li>Historical</li>
                            <li>Holidays</li>
                            <li>Inspirational</li>
                            <li>Military</li>
                            <li>Paranormal</li>
                            <li>Regency</li>
                            <li>Romantic Suspense</li>
                            <li>Science Fiction Romance</li>
                            <li>Sports</li>
                            <li>Time Travel</li>
                            <li>Western Romance</li>
                            <li>Young Adult</li>
                        </ul>
                    </li>
                    <li>
                        <b>Science Fiction</b>
                        <ul style={{ listStyleType: 'inherit' }}>
                            <li>Aliens</li>
                            <li>Alternate History</li>
                            <li>Alternate/Parallel Universe</li>
                            <li>Post/Apocalyptic</li>
                            <li>Biopunk</li>
                            <li>Children's Story</li>
                            <li>Colonization</li>
                            <li>Comedy</li>
                            <li>Cyberpunk</li>
                            <li>Dying Earth</li>
                            <li>Dystopia</li>
                            <li>Galactic Empire</li>
                            <li>Generation Ship</li>
                            <li>Hard Science Fiction</li>
                            <li>Immortality</li>
                            <li>Lost Worlds</li>
                            <li>Military</li>
                            <li>Mind Transfer</li>
                            <li>Mundane Science Fiction</li>
                            <li>Mythic</li>
                            <li>Nanopunk</li>
                            <li>Robots/A.I.</li>
                            <li>Science Fantasy</li>
                            <li>Science Horror</li>
                            <li>Slipstream</li>
                            <li>Soft Science Fiction</li>
                            <li>Space Exploration</li>
                            <li>Space Opera</li>
                            <li>SpyFi</li>
                            <li>Steampunk</li>
                            <li>Time Travel</li>
                            <li>Utopia</li>
                            <li>Young Adult<br /><br /></li>
                        </ul>
                    </li>
                    <li>
                        <b>Thriller and Suspense</b>
                        <ul style={{ listStyleType: 'inherit' }}>
                            <li>Action</li>
                            <li>Comedy</li>
                            <li>Conspiracy</li>
                            <li>Crime</li>
                            <li>Disaster</li>
                            <li>Espionage</li>
                            <li>Forensic</li>
                            <li>Historical</li>
                            <li>Legal</li>
                            <li>Medical</li>
                            <li>Military</li>
                            <li>Mystery Thriller</li>
                            <li>Paranormal</li>
                            <li>Political</li>
                            <li>Psychological</li>
                            <li>Religious</li>
                            <li>Technothriller</li>
                            <li>Young Adult</li>
                        </ul>
                    </li>
                    <li>
                        <b>Western</b>
                        <ul style={{ listStyleType: 'inherit' }}>
                            <li>Bounty Hunters</li>
                            <li>Cattle Drive</li>
                            <li>Children's Story</li>
                            <li>Comedy</li>
                            <li>Gold Rush</li>
                            <li>Gunfighters</li>
                            <li>Land Rush</li>
                            <li>Lawmen</li>
                            <li>Mountain Men</li>
                            <li>Outlaws</li>
                            <li>Prairie Settlement</li>
                            <li>Revenge</li>
                            <li>Wagon Train</li>
                            <li>Young Adult</li>
                        </ul>
                    </li>
                </ul>
            </section>
            <LeafDivider />
            <section>
                <h2>List of Themes</h2>
                <ul style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    listStyleType: 'none'
                }}>
                    <li>Love</li>
                    <li>War</li>
                    <li>Revenge</li>
                    <li>Betrayal</li>
                    <li>Good vs Evil</li>
                    <li>Redemption</li>
                    <li>Friendship</li>
                    <li>Family</li>
                    <li>Death</li>
                    <li>Prejudice</li>
                    <li>Coming of Age</li>
                    <li>Forgiveness</li>
                    <li>Youth</li>
                    <li>Law and Injustice</li>
                    <li>Power</li>
                    <li>Individual vs Society</li>
                    <li>Fate</li>
                    <li>Courage</li>
                    <li>Rebellion</li>
                    <li>Humility</li>
                    <li>Fear</li>
                    <li>Hate</li>
                    <li>Violence</li>
                    <li>Warfare</li>
                    <li>Tragedy</li>
                    <li>Money</li>
                    <li>Greed</li>
                    <li>Personal Development</li>
                    <li>Oppression</li>
                    <li>Hard Work</li>
                    <li>Poverty</li>
                    <li>Sacrifice</li>
                    <li>Survival</li>
                    <li>Hypocrisy</li>
                    <li>Loss</li>
                    <li>Stoicism</li>
                    <li>Religion</li>
                    <li>Life</li>
                    <li>Alienation</li>
                    <li>Innocence</li>
                    <li>Madness</li>
                    <li>Free Will</li>
                    <li>Immortality</li>
                    <li>Crime</li>
                    <li>Imperialism</li>
                    <li>Ambitions</li>
                    <li>Suffering</li>
                    <li>Education</li>
                    <li>Time</li>
                    <li>Isolation</li>
                    <li>Moral Corruption</li>
                    <li>Loneliness</li>
                    <li>Freedom</li>
                    <li>Gothic Elements</li>
                    <li>Storytelling</li>
                    <li>Corruption</li>
                    <li>Growing Up</li>
                    <li>Communication</li>
                    <li>Hope</li>
                    <li>Relationship</li>
                    <li>Nature</li>
                    <li>Science</li>
                    <li>Totalitarianism</li>
                    <li>Repression</li>
                    <li>Loyalty</li>
                    <li>Propaganda</li>
                    <li>Manipulation</li>
                    <li>Jealousy</li>
                    <li>Desire</li>
                    <li>Rural vs City Life</li>
                    <li>Fait in God</li>
                    <li>Truth</li>
                    <li>Surveillance</li>
                    <li>Morality</li>
                    <li>Satire and Realism</li>
                    <li>Solitude</li>
                    <li>Subjectivity</li>
                    <li>Passion</li>
                    <li>Destiny</li>
                    <li>Limit of Knowledge</li>
                    <li>Politics</li>
                    <li>Social Position</li>
                    <li>Honor</li>
                    <li>Guilt and Shame</li>
                    <li>History</li>
                    <li>Childhood</li>
                    <li>Heroism</li>
                    <li>Honesty</li>
                    <li>Perseverance</li>
                </ul>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit3Value} onChange={setEdit3Value} />
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
