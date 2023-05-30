
import React, { useState } from 'react'
import ReactQuill from 'react-quill'

import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'
import { Red } from './../components/BoldText'

import 'react-quill/dist/quill.snow.css'

import PlotAdventure from './../resources/plotting-adventure.jpeg'
import FoxAndHound1 from './../resources/fox-and-hound-1.webp'
import FoxAndHound2 from './../resources/fox-and-hound-2.webp'
import Groove1 from './../resources/new-groove-1.jpeg'
import Groove4 from './../resources/new-groove-4.jpeg'
import Groove5 from './../resources/new-groove-5.webp'
import Nimh1 from './../resources/nimh-1.jpeg'
import Nimh2 from './../resources/nimh-2.jpeg'
import Nimh3 from './../resources/nimh-3.jpeg'
import Howl1 from './../resources/howl-1.webp'
import Howl2 from './../resources/howl-2.jpeg'
import Howl3 from './../resources/howl-3.jpeg'

export default function Plots() {
    const [ plot1Value, setPlot1Value ] = useState('')
    const [ plot2Value, setPlot2Value ] = useState('')
    const [ plot3Value, setPlot3Value ] = useState('')

    return <main className='lesson-main'>
        <div className='content'>
            <h1>Plotting Your Next Adventure</h1>
            <img src={PlotAdventure} alt="" style={{
                display: 'block',
                width: '100%',
                marginBottom: '30px'
            }} />
            <LeafDivider />
            <section>
                <p>
                    Imagine that a story is like a journey or an adventure. A plot is like the
                    map that tells you where to go and what exciting things will happen along
                    the way.
                </p>
                <ul className='shrink' >
                    <li><a href="#similarities" >This Looks Strangely Familiar...</a></li>
                    <li><a href="#types" >Plots in Many Different Flavors</a></li>
                    <li><a href="#examples" >Examples</a></li>
                </ul>
                <p>
                    In a story plot, there are different parts or events that make the story
                    interesting. It's a bit like a roller coaster ride with ups and downs. Here
                    are some important parts of a plot:
                </p>
                <ol>
                    <li>
                        <b>Beginning:</b> This is where the story starts. You meet the main
                        characters and learn about the place and time they live in. It's like
                        the first step of an exciting adventure.<br /><br />
                    </li>
                    <li>
                        <b>Problem:</b> Something happens that makes the characters face a
                        challenge or a problem. It could be a dragon they have to defeat, a
                        mystery they have to solve, or a goal they want to achieve. This is
                        where the story gets really exciting!<br /><br />
                    </li>
                    <li>
                        <b>Action:</b> The characters take action to solve the problem. They go
                        on a journey, meet new people, and face obstacles along the way. It's
                        like going on an adventure with them.<br /><br />
                    </li>
                    <li>
                        <b>Climax:</b> This is the most exciting part of the story. It's like
                        being at the top of the highest hill on a roller coaster. The characters
                        face their biggest challenge or have a big showdown with the bad guy. It
                        keeps you on the edge of your seat!<br /><br />
                    </li>
                    <li>
                        <b>Resolution:</b> After the climax, the story starts to wrap up. The
                        characters find a way to solve the problem or achieve their goal. It's
                        like coming to a safe stop after a thrilling ride.
                    </li>
                </ol>
                <p>
                    So, a plot is like the exciting journey that the characters go on in a
                    story. It has a beginning, a problem, lots of action, a thrilling climax,
                    and a satisfying ending. It's what makes a story fun and keeps you wanting
                    to read more!
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={plot1Value} onChange={setPlot1Value} />
            </section>
            <LeafDivider />
            <section>
                <h2 id="similarities">This Looks Strangely Familiar...</h2>
                <p>
                    If you haven't noticed already, outlining a plot is very similar to
                    outlining some of the simpler story structures. The fundamental difference
                    between the two lies in their scope and purpose.
                </p>
                <p>
                    A <Red>plot</Red> is the sequence of events and actions that occur in a story. It
                    encompasses the specific actions, conflicts, and resolutions that move the
                    narrative forward. The plot focuses on the "<b>what</b>" of the story — the
                    specific events and developments.
                </p>
                <p>
                    Story <Red>structure</Red>, on the other hand, refers to the overall framework or
                    organization of a narrative. It provides a broader perspective and guides
                    the arrangement and presentation of the plot elements. Story structure
                    focuses more on the "<b>how</b>" of the story — the way in which the events are
                    arranged and interconnected to create a cohesive and engaging narrative.
                </p>
                <p>
                    That is to say, the plot is the actual series of events that happen, while
                    the story's structure is the framework or blueprint that determines how
                    those events are arranged and presented to create a meaningful and effective
                    narrative.
                </p>
            </section>
            <LeafDivider />
            <section>
                <h2 id="types" >Plots in Many Different Flavors</h2>
                <p>
                    There are several types of plots that commonly appear in storytelling. The
                    first seven of the following list represent the 'standard' plot types, while
                    the remaining are examples of other plot types:
                </p>
                <ol>
                    <li>
                        <b>Overcoming the Monster:</b> The protagonist faces a powerful and
                        threatening antagonist or force that they must defeat or overcome. This
                        plot often involves a heroic journey or quest.<br /><br />
                    </li>
                    <li>
                        <b>Rags to Riches:</b> The protagonist starts in a lowly or
                        disadvantaged position and rises to success, wealth, or power. It
                        showcases their journey of transformation and achievement.<br /><br />
                    </li>
                    <li>
                        <b>The Quest:</b> The protagonist embarks on a journey or mission to
                        find or retrieve something of great importance. It involves challenges,
                        trials, and self-discovery along the way.<br /><br />
                    </li>
                    <li>
                        <b>Voyage and Return:</b> The protagonist embarks on a journey to a
                        strange or unfamiliar world, facing challenges and obstacles along the
                        way. The protagonist eventually returns home, having gained new insights
                        or knowledge from their experiences, resulting in personal growth and
                        transformation.<br /><br />
                    </li>
                    <li>
                        <b>Rebirth:</b> The protagonist undergoes a significant transformation
                        or redemption throughout the story. It often involves themes of personal
                        growth, second chances, and the possibility of change.<br /><br />
                    </li>
                    <li>
                        <b>Comedy:</b> Humorous situations, misunderstandings, and comedic
                        elements that lead to comedic outcomes and resolutions. This plot
                        typically focuses on humorous conflicts, comedic timing, and the
                        resolution of humorous predicaments.<br /><br />
                    </li>
                    <li>
                        <b>Tragedy:</b> The depiction of a protagonist's downfall or suffering
                        due to tragic circumstances, character flaws, or external forces beyond
                        their control. Oten exploring themes of fate, hubris, moral dilemmas,
                        and the consequences of actions, ultimately leading to a sense of
                        sorrow, loss, or catharsis.<br /><br />
                    </li>
                    <li>
                        <b>Revenge:</b> The protagonist seeks vengeance against those who have
                        wronged them. This plot centers around the pursuit of justice or
                        personal retribution.<br /><br />
                    </li>
                    <li>
                        <b>Love and Romance:</b> The plot revolves around the development and
                        complications of a romantic relationship. It explores themes of
                        attraction, desire, and the obstacles that can arise.<br /><br />
                    </li>
                    <li>
                        <b>Mystery:</b> The protagonist investigates and unravels a mysterious
                        event or crime. The plot focuses on solving puzzles, uncovering secrets,
                        and revealing the truth.<br /><br />
                    </li>
                    <li>
                        <b>Coming of Age:</b> The protagonist undergoes personal growth,
                        self-discovery, and maturation. It often depicts the challenges and
                        lessons learned during the transition from adolescence to adulthood.<br /><br />
                    </li>
                    <li>
                        <b>Rebellion:</b> The protagonist challenges authority, social norms, or
                        oppressive systems. This plot explores themes of freedom, individuality,
                        and the fight against injustice.<br /><br />
                    </li>
                    <li>
                        <b>Survival:</b> The protagonist must endure and overcome extreme
                        circumstances, such as being stranded, trapped, or facing natural
                        disasters. It highlights the struggle for survival and resilience.<br /><br />
                    </li>
                    <li>
                        <b>Discovery:</b> The protagonist uncovers new knowledge, a hidden
                        world, or a transformative idea. This plot focuses on exploration,
                        curiosity, and the pursuit of understanding.<br /><br />
                    </li>
                    <li>
                        <b>Fish out of Water:</b> The protagonist finds themselves in a
                        completely unfamiliar or foreign environment, often leading to humorous
                        or challenging situations as they try to adapt.<br /><br />
                    </li>
                    <li>
                        <b>Sacrifice:</b> The protagonist is faced with making a difficult
                        choice or sacrifice for the greater good. This plot explores themes of
                        selflessness, heroism, and moral dilemmas.<br /><br />
                    </li>
                    <li>
                        <b>Mistaken Identity:</b> The protagonist is mistaken for someone else,
                        leading to a series of misunderstandings, complications, and humorous or
                        dramatic situations.<br /><br />
                    </li>
                    <li>
                        <b>Redemption:</b> The protagonist, who has made mistakes or has a
                        troubled past, seeks to redeem themselves or find forgiveness. This plot
                        focuses on personal growth, second chances, and finding inner peace.<br /><br />
                    </li>
                    <li>
                        <b>Transformation:</b> The protagonist undergoes a significant physical
                        or emotional transformation throughout the story. It can be a literal
                        change, such as becoming a superhero, or an internal change, such as
                        overcoming fears or prejudices.<br /><br />
                    </li>
                    <li>
                        <b>Escape:</b> The protagonist is trapped or imprisoned and must find a
                        way to escape. This plot revolves around strategies, resourcefulness,
                        and the pursuit of freedom.<br /><br />
                    </li>
                    <li>
                        <b>Underdog:</b> The protagonist, often underestimated or facing
                        significant obstacles, rises against all odds to achieve success or
                        victory. This plot emphasizes perseverance, determination, and
                        overcoming challenges.<br /><br />
                    </li>
                    <li>
                        <b>Exploration:</b> The protagonist sets out on a journey of discovery
                        and exploration, whether it's a physical journey to uncharted
                        territories or an intellectual journey to uncover hidden truths or
                        knowledge.<br /><br />
                    </li>
                    <li>
                        <b>Parallel Worlds:</b> The protagonist discovers or travels to a
                        different world or reality, opening up possibilities for adventure,
                        conflict, and exploration of different rules or perspectives.<br /><br />
                    </li>
                    <li>
                        <b>Time Travel:</b> The protagonist travels through time, either
                        intentionally or accidentally, leading to encounters with historical
                        events, challenges, and the potential to alter the future.
                    </li>
                </ol>
                <p>
                    These are a few good examples, and there are many other types of plots that
                    can be combined or adapted to create unique and compelling stories. The
                    specific plot type chosen will depend on the genre, themes, and desired
                    narrative focus of the story.
                </p>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={plot2Value} onChange={setPlot2Value} />
            </section>
            <LeafDivider />
            <section>
                <h2 id="examples" >Examples</h2>
                <p>Here are few story plot examples from classic animated feature films:</p>
                <ol className="shrink" >
                    <li><a href="#fox-and-the-hound">The Fox and The Hound</a></li>
                    <li><a href="#emperors-new-groove">Emperor's New Groove</a></li>
                    <li><a href="#secret-of-nimh">The Secret of NIMH</a></li>
                    <li><a href="#howls-moving-castle">Howl's Moving Castle</a></li>
                </ol>
                <section>
                    <h3 id="fox-and-the-hound">The Fox and The Hound</h3>
                    <p>
                        The plot of "The Fox and The Hound" revolves around the unlikely friendship
                        between a young red fox named Tod and a hunting dog named Copper. The story
                        takes place in a rural setting.
                    </p>
                    <img src={FoxAndHound1} alt="" style={{
                        display: 'block',
                        width: '100%',
                        marginBottom: '30px'
                    }} />
                    <p>
                        <Red>Beginning:</Red> The plot unfolds as Tod, an orphaned fox, is taken in
                        by a kind woman named Widow Tweed. Copper, a young hound dog, lives with his
                        owner, Amos Slade, who is a hunter. Despite their different backgrounds and
                        societal expectations that they should be enemies, Tod and Copper form a
                        deep bond and become inseparable friends during their youth.
                    </p>
                    <p>
                        <Red>Problem:</Red> However, as they grow older, the pressures of their
                        respective roles come into play. Copper's instincts as a hunting dog become
                        more dominant, and Amos insists that Copper should fulfill his purpose by
                        hunting down Tod. This puts their friendship to the test as they find
                        themselves on opposite sides of the hunting conflict.
                    </p>
                    <p>
                        <Red>Action:</Red> The plot intensifies as Copper, torn between his loyalty
                        to Amos and his friendship with Tod, must make difficult choices. Tod, on
                        the other hand, faces the harsh realities of survival in the wild and learns
                        about the complexities of the human-animal relationship.
                    </p>
                    <p>
                        Ultimately, the plot reaches its <Red>climax</Red> when Tod and Copper confront each
                        other in a dramatic showdown. The <Red>resolution</Red> of the story brings about a
                        bittersweet realization that their friendship is forever changed due to
                        their conflicting roles in the world.
                    </p>
                    <img src={FoxAndHound2} alt="" style={{
                        display: 'block',
                        width: '100%',
                        marginBottom: '30px'
                    }} />
                    <p>
                        "The Fox and The Hound" explores themes of friendship, loyalty, societal
                        expectations, and the challenges of navigating conflicting identities. It
                        showcases the emotional journey of the characters as they navigate the
                        complexities of their relationship and the broader forces at play in their
                        lives.
                    </p>
                </section>
                <hr />
                <section>
                    <h3 id="emperors-new-groove">Emperor's New Groove</h3>
                    <p>
                        The plot of "The Emperor's New Groove" follows the hilarious misadventures
                        of Emperor Kuzco, a selfish and arrogant ruler of an ancient Incan kingdom.
                    </p>
                    <img src={Groove5} alt="" style={{
                        float: 'left',
                        width: '350px',
                        marginRight: '20px',
                        borderRadius: '10px'
                    }} />
                    <p>
                        At the <Red>beginning</Red> of the story, Kuzco is transformed into a llama
                        by his power-hungry advisor, Yzma, who seeks to take the throne for
                        herself. <Red>Problem:</Red> Now stuck in the form of a llama, Kuzco must
                        find a way to regain his human form and reclaim his rightful place as
                        emperor.
                    </p>
                    <p>
                        <Red>Action:</Red> Enter Pacha, a kind-hearted peasant and the only person
                        who can help Kuzco. Despite their initial differences, Kuzco reluctantly
                        forms an alliance with Pacha to find a cure and foil Yzma's plans.
                    </p>
                    <p>
                        Throughout their journey, Kuzco learns valuable lessons about empathy,
                        humility, and the importance of genuine connections. Along the way, he
                        encounters various obstacles and comical situations, including encounters
                        with eccentric characters like the shape-shifting Kronk.
                    </p>
                    <img src={Groove1} alt="" style={{
                        float: 'right',
                        width: '250px',
                        marginLeft: '20px',
                        borderRadius: '10px'
                    }} />
                    <p>
                        As the story progresses, Kuzco starts to shed his selfishness and grows
                        closer to Pacha and his family. Together, they outsmart Yzma, who is
                        determined to eliminate them and seize the throne.
                    </p>
                    <p>
                        In the <Red>climactic</Red> final act, Kuzco manages to regain his human
                        form just in time and confronts Yzma. <Red>Resolution:</Red> With the help
                        of his newfound humility and the support of his friends, Kuzco ultimately
                        chooses a different path for his kingdom, one that prioritizes compassion
                        and fairness.
                    </p>
                    <img src={Groove4} alt="" style={{
                        display: 'block',
                        width: '100%',
                        marginBottom: '30px'
                    }} />
                    <p>
                        "The Emperor's New Groove" is a light-hearted and humorous adventure that
                        emphasizes the importance of personal growth, friendship, and embracing
                        one's true self. It showcases the transformation of a self-centered emperor
                        into a more compassionate and understanding individual, highlighting the
                        power of redemption and the potential for positive change.
                    </p>
                </section>
                <hr />
                <section>
                    <h3 id="secret-of-nimh">The Secret of NIMH</h3>
                    <p>
                        "The Secret of NIMH" is an animated fantasy film based on the children's
                        book "Mrs. Frisby and the Rats of NIMH" by Robert C. O'Brien. The plot
                        revolves around Mrs. Brisby, a widowed field mouse who embarks on a
                        perilous journey to save her family.
                    </p>
                    <img src={Nimh1} alt="" style={{
                        display: 'block',
                        width: '100%',
                        marginBottom: '30px'
                    }} />
                    <p>
                        <Red>Beginning:</Red> Mrs. Brisby, a widowed field mouse, is introduced
                        with her family living near a farm. <Red>Problem:</Red> But her home is
                        threatened by the upcoming plowing season, which would destroy her home
                        and endanger her sick son, Timothy. Seeking help, she visits the wise
                        and mysterious Mr. Ages, who advises her to seek the aid of the rats of
                        NIMH.
                    </p>
                    <p>
                        Mrs. Brisby discovers that the NIMH (National Institute of Mental
                        Health) conducted experiments on animals, resulting in enhanced
                        intelligence and abilities. The rats, led by the noble Justin, escaped
                        from NIMH and created their own community. They possess advanced
                        technology and live hidden beneath a rose bush near the farm.
                    </p>
                    <p>
                        <Red>Action:</Red> As Mrs. Brisby becomes acquainted with the rats, she
                        learns about their history, their struggles with NIMH, and their plans
                        to relocate their colony. However, moving their home is no easy task, as
                        they must overcome human threats and their own internal conflicts.
                    </p>
                    <img src={Nimh2} alt="" style={{
                        display: 'block',
                        width: '100%',
                        marginBottom: '30px'
                    }} />
                    <p>
                        Meanwhile, Mrs. Brisby's involvement with the rats draws the attention
                        of Jenner, a power-hungry rat who opposes the plan to move. He schemes
                        to take control of the colony and challenges the unity and leadership of
                        the rats.
                    </p>
                    <p>
                        Throughout the story, Mrs. Brisby faces numerous challenges and risks as
                        she strives to protect her family and help the rats. She forms unlikely
                        alliances, overcomes her fears, and displays immense bravery as she
                        navigates the dangers of the human world and the rat colony.
                    </p>
                    <p>
                        In the <Red>climax</Red>, Mrs. Brisby and the rats confront Jenner in a
                        climactic battle. <Red>Resolution:</Red> With the amulet, unwavering
                        faith, and courage, she saves her loved ones and ensure the success of
                        the rat colony's relocation.
                    </p>
                    <img src={Nimh3} alt="" style={{
                        display: 'block',
                        width: '100%',
                        marginBottom: '30px'
                    }} />
                    <p>
                        "The Secret of NIMH" explores themes of bravery, sacrifice, and the
                        power of determination. It is a tale of friendship, family, and the
                        strength that can be found in the unlikeliest of places.
                    </p>
                </section>
                <hr />
                <section>
                    <h3 id="howls-moving-castle">Howl's Moving Castle</h3>
                    <p>
                        "Howl's Moving Castle" is a fantasy novel written by Diana Wynne Jones
                        and adapted into an animated film by Studio Ghibli, directed by Hayao
                        Miyazaki. The story follows a young girl named Sophie Hatter and her
                        magical adventures.
                    </p>
                    <img src={Howl1} alt="" style={{
                        display: 'block',
                        width: '100%',
                        marginBottom: '30px'
                    }} />
                    <p>
                        <Red>Beginning:</Red> Sophie lives in a land where magic is common, and
                        people are often born with different magical abilities. However, Sophie
                        herself believes she is ordinary and lacks any special powers. She works
                        in her family's hat shop, leading a rather uneventful life.
                    </p>
                    <p>
                        <Red>Problem:</Red> One day, Sophie encounters the powerful and
                        enigmatic wizard Howl, who is known for his moving castle.
                        Unfortunately, she attracts the attention of the Witch of the Waste, who
                        becomes jealous of Sophie's interaction with Howl. In a fit of rage, the
                        witch curses Sophie, transforming her into an elderly woman.
                    </p>
                    <img src={Howl2} alt="" style={{
                        display: 'block',
                        width: '100%',
                        marginBottom: '30px'
                    }} />
                    <p>
                        <Red>Action:</Red> Now trapped in her aged form, Sophie leaves her
                        hometown and embarks on a journey to find a way to break the curse. She
                        seeks refuge in Howl's Moving Castle, hoping that Howl, with his magical
                        abilities, can help her. Inside the moving castle, Sophie encounters a
                        lively and eccentric group of characters, including Calcifer, a fire
                        demon who powers the castle.
                    </p>
                    <p>
                        As Sophie navigates the mysterious castle and its inhabitants, she
                        gradually learns more about Howl, his troubled past, and his own magical
                        abilities. The plot unfolds with a series of magical encounters,
                        unexpected alliances, and the revelation of Howl's true nature.
                    </p>
                    <p>
                        The <Red>climax</Red> occurs when Sophie confronts the Witch of the
                        Waste in the final battle. During this intense confrontation, Sophie
                        taps into her own inner strength and uses her newfound confidence and
                        love for Howl to defeat the witch and break the curse.
                    </p>
                    <p>
                        The <Red>resolution</Red> of the story comes as Sophie and Howl confess
                        their love for each other, and the curse that transformed Sophie into an
                        old woman is ultimately broken. The characters find happiness, and
                        Howl's castle is restored.
                    </p>
                    <img src={Howl3} alt="" style={{
                        display: 'block',
                        width: '100%',
                        marginBottom: '30px'
                    }} />
                    <p>
                        The story dives into themes of identity, self-discovery, and the power
                        of love and friendship. Sophie's journey is not just about breaking the
                        curse but also discovering her own inner strength and embracing her true
                        self.
                    </p>
                </section>
                <h3>Start Writing Now!</h3>
                <ReactQuill theme="snow" value={plot3Value} onChange={setPlot3Value} />
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
