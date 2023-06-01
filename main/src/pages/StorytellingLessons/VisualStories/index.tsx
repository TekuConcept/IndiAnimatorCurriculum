
import { useState } from 'react'
import ReactQuill from 'react-quill'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'

import 'react-quill/dist/quill.snow.css'

import BannerImage from './../resources/visual-stories.jpg'
import GamerCat from './../resources/gamer-cat-1.jpeg'
import Storyboard from './../resources/storyboard-1.jpeg'
import Comics from './../resources/comics-1.png'

export default function VisualStories() {
    const [ edit1Value, setEdit1Value ] = useState('')
    // const [ edit2Value, setEdit2Value ] = useState('')
    const [ edit3Value, setEdit3Value ] = useState('')

    return <main className='lesson-main'>
        <div className='content'>
            <h1>Pictures are Worth a Thousand Words</h1>
            <img src={BannerImage} alt="" style={{
                display: 'block',
                width: '100%',
                marginBottom: '30px'
            }} data-citation="https://www.behance.net/gallery/16504545/Thesis-Comic-Book-Fights-Through-Storyboarding" />
            <LeafDivider />
            <section>
                <p>
                    Visual stories, also known as visual narratives, are storytelling forms that
                    primarily rely on visual elements to convey a narrative or evoke emotions.
                    They can be found in various mediums such as films, comics, graphic novels,
                    picture books, animations, and even interactive media.
                </p>
                <p>
                    In visual stories, the narrative is communicated through images,
                    illustrations, or a sequence of visual elements. These visuals are often
                    accompanied by minimal or no text, allowing the images themselves to drive
                    the storytelling. The use of visual cues such as composition, colors,
                    shapes, and movement can evoke emotions, establish settings, depict
                    characters, and advance the plot.
                </p>
                <p>
                    Visual stories offers a unique way of storytelling by engaging the viewer's
                    or reader's visual perception and interpretation. They can be powerful in
                    conveying complex narratives, capturing the imagination, and eliciting
                    emotional responses through the visual medium. Visual stories have the
                    advantage of transcending language barriers, making them accessible to a
                    wide range of audiences across cultures and age groups.
                </p>
                <img src={GamerCat} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px'
                }} data-citation="https://thegamercat.com/comic/sloth-science/" />
                <p>
                    Types of visual stories that exist across different mediums and formats
                    include:
                </p>
                <ol>
                    <li>
                        <b>Comics and Graphic Novels:</b> These visual narratives use sequential
                        art, combining images and text in panels, to tell stories. They can
                        encompass a wide range of genres, including superheroes, fantasy,
                        science fiction, crime, and more.<br /><br />
                    </li>
                    <li>
                        <b>Webcomics:</b> With the rise of the internet, webcomics have become
                        popular. These are comics published online and often have a diverse
                        range of genres and styles.<br /><br />
                    </li>
                    <li>
                        <b>Manga:</b> Manga is a Japanese form of comics that follows a
                        distinctive visual style and storytelling approach. It covers a broad
                        range of genres, including action, romance, fantasy, science fiction,
                        and more.<br /><br />
                    </li>
                    <li>
                        <b>Storyboards:</b> Storyboards are visual representations of a story,
                        often used in filmmaking and animation. They outline the sequence of
                        shots and help visualize the overall narrative structure.<br /><br />
                    </li>
                    <li>
                        <b>Picture Books:</b> Picture books are primarily designed for young
                        readers and rely heavily on illustrations to convey the story. The
                        illustrations are often accompanied by limited text, making them
                        suitable for early readers or as read-aloud books.<br /><br />
                    </li>
                    <li>
                        <b>Visual Novels:</b> Visual novels are interactive storytelling
                        experiences that combine visual elements, text, and often branching
                        story paths. Players make choices that affect the narrative progression
                        and outcome.
                    </li>
                </ol>
                <p>
                    These are just a few examples, and visual storytelling can take many other
                    forms depending on the medium and creative vision of the storyteller.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit1Value} onChange={setEdit1Value} />
            </section>
            <LeafDivider />
            <section>
                <h2>A Simple Guide to Storyboards</h2>
                <p>
                    Creating a storyboard involves visualizing and planning the sequence of
                    shots and key moments in a visual narrative, such as a film, animation, or
                    comic.
                </p>
                <img src={Storyboard} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px',
                    border: '2px solid #e0e2d6',
                    borderRadius: '10px'
                }} />
                <p>
                    Here are some steps to create a storyboard:
                </p>
                <ol>
                    <li>
                        <b>Understand the Story:</b> Familiarize yourself with the story or
                        script you're working with. Identify the key scenes, important actions,
                        and dialogue that need to be visually represented.<br /><br />
                    </li>
                    <li>
                        <b>Divide the Story into Panels:</b> Divide your storyboard into panels
                        or frames that represent individual shots or scenes. Determine how many
                        panels you'll need to effectively convey the narrative.<br /><br />
                    </li>
                    <li>
                        <b>Sketch Rough Thumbnails:</b> Start by creating rough thumbnail
                        sketches for each panel. Focus on capturing the key elements and
                        composition of each shot, keeping the drawings simple and quick.<br /><br />
                    </li>
                    <li>
                        <b>Add Details:</b> Refine your thumbnail sketches by adding more
                        details, such as characters, objects, backgrounds, and basic facial
                        expressions. Use arrows or lines to indicate the movement or direction
                        within each panel.<br /><br />
                    </li>
                    <li>
                        <b>Include Descriptions and Notes:</b> Add relevant descriptions,
                        dialogue, camera angles, and any other important notes to each panel.
                        These details help convey the intended visual and storytelling elements.<br /><br />
                    </li>
                    <li>
                        <b>Arrange Panels Sequentially:</b> Organize the panels in the order
                        they will appear in the narrative, ensuring a logical flow of events and
                        transitions between scenes.<br /><br />
                    </li>
                    <li>
                        <b>Review and Revise:</b> Take a step back and review your storyboard as
                        a whole. Make any necessary revisions to improve the composition,
                        clarity, and storytelling coherence.<br /><br />
                    </li>
                    <li>
                        <b>Share and Present:</b> Once your storyboard is complete, you can
                        share it with others involved in the production or use it as a visual
                        reference during the actual creation of the project, such as filming or
                        animating.
                    </li>
                </ol>
                <p>
                    Storyboard creation can be done traditionally with pencil and paper or using
                    digital tools and software specifically designed for storyboarding. The
                    level of detail and complexity in the storyboard may vary depending on the
                    specific requirements of the project and the needs of the storyteller.
                </p>
            </section>
            <LeafDivider />
            <section>
                <h2>A Simple Guide to Comics and Manga</h2>
                <p>
                    Creating manga or comics involves a combination of storytelling, visual art,
                    and sequential panel layout.
                </p>
                <img src={Comics} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px'
                }} data-citation="http://stupidfox.net/222-anxious" />
                <p>
                    Here are some steps to help you get started:
                </p>
                <ol>
                    <li>
                        <b>Develop the Story:</b> Begin by crafting a compelling story with
                        interesting characters, engaging plotlines, and a clear beginning,
                        middle, and end. Outline the key events and story arcs you want to
                        explore in your manga or comic.<br /><br />
                    </li>
                    <li>
                        <b>Plan the Panels and Page Layout:</b> Decide how many panels you want
                        to include on each page and plan their arrangement. Consider the pacing,
                        flow, and visual impact of each panel and how they will guide the
                        reader's eye across the page.<br /><br />
                    </li>
                    <li>
                        <b>Sketch Thumbnails:</b> Create rough thumbnail sketches to map out the
                        composition and arrangement of each panel on the page. Focus on
                        capturing the key actions, character poses, and important visual
                        elements.<br /><br />
                    </li>
                    <li>
                        <b>Refine the Artwork:</b> Once you're satisfied with the panel layouts,
                        start refining the artwork in each panel. Pay attention to character
                        designs, backgrounds, perspective, and details that bring the story to
                        life. Use pencils, pens, or digital tools depending on your preference.<br /><br />
                    </li>
                    <li>
                        <b>Ink or Lineart Digitally:</b> Once the pencil work is complete, you
                        can either ink the drawings traditionally using pens or brushes, or you
                        can use digital tools to create clean lineart. Inking adds definition
                        and clarity to the artwork.<br /><br />
                    </li>
                    <li>
                        <b>Add Lettering and Dialogue:</b> Decide where the dialogue and text
                        will go within the panels and add them using legible fonts or
                        handwritten lettering. Ensure the text is placed in a way that guides
                        the reader smoothly through the story.<br /><br />
                    </li>
                    <li>
                        <b>Apply Tones or Colors:</b> Depending on your style and preference,
                        you can choose to add tones (black and white patterns) or colors to your
                        artwork. This step can enhance the mood and atmosphere of your work.<br /><br />
                    </li>
                    <li>
                        <b>Finalize and Publish:</b> Review your work, make any necessary
                        adjustments or edits, and prepare the final pages for publishing. You
                        can either self-publish your work digitally, through web platforms or
                        apps, or explore traditional publishing options.
                    </li>
                </ol>
                <p>
                    Remember, creating comics and manga is a creative process, and there is no
                    one-size-fits-all approach. Experiment with different techniques, study the
                    works of established manga artists and comic creators, and develop your
                    unique style and storytelling voice over time. Practice and persistence
                    paired with studying other artists and authors are key to honing your skills
                    and telling compelling visual stories.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={edit3Value} onChange={setEdit3Value} />
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
