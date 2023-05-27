
import LeafDivider from '../components/LeafDivider'
import ChatGptBadge from '../components/ChatGptBadge'

import ConflictImage from './../resources/conflict1.jpg'
import CharVSelf2 from './../resources/char-v-self-2.jpeg'
import CharVChar from './../resources/char-v-char.png'
import CharVChar3 from './../resources/char-v-char-3.jpeg'
import CharVEnvr from './../resources/char-v-envr.jpeg'
import CharVEnvr3 from './../resources/char-v-envr-3.webp'
import CharVElem4 from './../resources/char-v-elem-4.jpeg'
import CharVElem5 from './../resources/char-v-elem-5.jpeg'

export default function ConflictsI() {
    return <main className='lesson-main'>
        <div className='content'>
            <h1>Conflict in Stories</h1>
            <img src={ConflictImage} alt="" />
            <LeafDivider />
            <section>
                <p>
                    In literature, conflict refers to the struggle or clash between opposing forces,
                    ideas, or characters. It is a fundamental element of storytelling that creates
                    tension, drives the plot, and propels the narrative forward. Conflict may take
                    various forms and occur on different levels, providing the central source of
                    drama and interest to a story.
                </p>
                <p>
                    The seven types of conflict commonly found in storytelling are:
                </p>
                <ol className='shrink' >
                    <li><a href="#charVself" >Character vs. Themself</a></li>
                    <li><a href="#charVchar" >Character vs. Character</a></li>
                    <li><a href="#charVenvr" >Character vs. Environment or Society</a></li>
                    <li><a href="#charVelem" >Character vs. Nature or the Elements</a></li>
                    <li><a href="/StorytellingLessons/ConflictsII#charVtech" >Character vs. Technology</a></li>
                    <li><a href="/StorytellingLessons/ConflictsII#charVmech" >Character vs. Machine</a></li>
                    <li><a href="/StorytellingLessons/ConflictsII#charVunkn" >Character vs. God, the Supernatural, or the Unknown</a></li>
                    <li><a href="/StorytellingLessons/ConflictsII#charVfate" >Character vs. Fate or Destiny</a></li>
                </ol>
                <p>
                    In this lesson, we'll focus on only the first four conflicts for now. The
                    remaining conflicts will be covered in a future lesson.
                </p>
            </section>
            <section>
                <h2 id="charVself">Character vs Themself</h2>
                <p>
                    This type of conflict is an internal struggle that occurs within a
                    character's mind or emotions. It involves a clash between different desires,
                    beliefs, motivations, or emotions within a single character. This internal
                    conflict can create tension, uncertainty, and personal turmoil for the
                    character, as they grapple with their own thoughts, decisions, or inner
                    demons.
                </p>
                <img src={CharVSelf2} alt="" style={{
                    marginBottom: '1em'
                }} />
                <p>
                    This type of conflict will manifest in various ways, including:
                </p>
                <ol>
                    <li>
                        <b>Decision-Making:</b> The character is faced with a difficult choice and
                        experiences inner conflict as they weigh the potential outcomes,
                        considering the pros and cons of different options. This conflict can be
                        about personal goals, relationships, or ethical dilemmas.
                    </li>
                    <li>
                        <b>Moral Dilemmas:</b> The character is torn between right and wrong, or
                        they are faced with a situation that challenges their moral compass.
                        They may struggle to make the right choice, battling their own values,
                        or feeling conflicted about the potential consequences.
                    </li>
                    <li>
                        <b>Self-Doubt:</b> The character experiences self-doubt, insecurity, or
                        a lack of confidence in their abilities. They may question their own
                        worth, competence, or identity, leading to internal conflict as they
                        strive to overcome their insecurities and find self-acceptance.
                    </li>
                    <li>
                        <b>Temptation:</b> The character faces an internal battle against their
                        own desires or vices. They may be tempted by power, addiction, or
                        personal weaknesses, and must resist or succumb to these temptations.
                        This conflict explores the struggle between self-control and indulgence.
                    </li>
                </ol>
                <hr />
                <h3>Examples:</h3>
                <p>
                    &#9671; Aladdin is very poor and wishes for more. He becomes Prince Ali because he
                    doesn't think he is good enough for Jasmine. However, even this is still
                    not enough as he continues to doubt himself. Aladdin is forced to face
                    himself and reconcile both his weaknesses and his strengths while fighting
                    Jafar.
                </p>
                <hr />
                <p>
                    The central struggle is often around decision-making or moral dilemmas. The
                    character may be torn between conflicting choices, values, or obligations,
                    and they must navigate the consequences of their actions or wrestle with
                    their own flaws and weaknesses.
                </p>
            </section>
            <section>
                <h2 id="charVchar">Character vs Character</h2>
                <img src={CharVChar} alt="" style={{
                    float: 'right'
                }} />
                <p>
                    This conflict involves the central struggle between two or more characters.
                    It is a direct confrontation or clash between individuals with opposing
                    goals, values, or ideologies. This type of conflict is often driven by
                    personal animosity, competition, or a desire to overcome or defeat the other
                    person.
                </p>
                <p>
                    The tension arises from the opposing actions, intentions, or beliefs of the
                    characters involved. This conflict can take various forms, including
                    physical confrontations, verbal disputes, or strategic maneuvering against
                    each other. The characters may engage in a battle of wits, engage in a
                    rivalry, or be in open opposition to one another.
                </p>
                <hr />
                <h3>Examples:</h3>
                <p>
                    &#9671; In Shakespeare's play "Romeo and Juliet," the conflict between the Capulets
                    and the Montagues leads to tragedy as the two families feud and prevent the
                    young lovers from being together.
                </p>
                <p>
                    &#9671; In J.R.R. Tolkien's "The Lord of the Rings," the protagonist Frodo Baggins
                    faces a direct confrontation with the antagonist Sauron and his minions, who
                    seek to destroy him and claim the One Ring.
                </p>
                <p data-citation="https://www.writersrepublic.com/blog/types-of-conflict-in-literature">
                    &#9671; The Iliad is one of the earliest written works that humanity has
                    ever known, and it centers on the epic Trojan War. At the very center of
                    this conflict were two warriors—Achilles and Hector. Achilles was a warlord
                    who fought for the Greeks while Hector was the prince of Troy. Achilles was
                    a conqueror of men—proud—and a lover of war. Whereas Hector was a defender
                    of his people and only wished to save his beloved nation from the predations
                    of marauding Greeks. Both men were sublime warriors, but that is where the
                    similarities end. Both men are also fated to meet in a climactic battle
                    where only one man lives.
                </p>
                <hr />
                <img src={CharVChar3} alt="" style={{
                    float: 'left',
                    marginTop: '10px',
                    marginBottom: '10px',
                    marginRight: '20px',
                    height: 'auto',
                    width: '300px',
                    borderRadius: '10px'
                }} />
                <p>
                    Character vs. Character conflicts often raise important themes and explores
                    the complexities of human relationships. It delves into issues such as power
                    struggles, moral dilemmas, ethical choices, and the consequences of personal
                    actions. It can also highlight the contrasting personalities, motivations,
                    and values of the characters involved, showcasing human nature and the
                    conflicts that arise from it.
                </p>
            </section>
            <section>
                <h2 id="charVenvr">Character vs Environment or Society</h2>
                <p>
                    Character vs. Society (or Environment) revolves around the central struggle
                    between a character and the larger societal forces, norms, or institutions
                    that they are at odds with. It highlights the tension between an individual
                    and the expectations, rules, or values of the society in which they live.
                    This conflict often explores themes of conformity, rebellion, injustice, and
                    social change.
                </p>
                <img src={CharVEnvr} alt="" style={{
                    marginLeft: '20px',
                    width: '300px',
                    float: 'right',
                    borderRadius: '10px'
                }} />
                <p>
                    The character is typically portrayed as an outsider or someone who deviates
                    from the accepted norms of their community or culture. They may challenge
                    the status quo, question social conventions, or fight against societal
                    injustice. The conflict can arise from the character's attempt to assert
                    their individuality, pursue their dreams, or advocate for a different way of
                    life.
                </p>
                <p>
                    This type of conflict manifests in various ways, including:
                </p>
                <ol>
                    <li>
                        <b>Nonconformity:</b> The character resists societal expectations and
                        refuses to adhere to established norms or conventions. They may reject
                        societal roles, traditions, or values that they find restrictive or
                        oppressive, choosing to forge their own path instead.
                    </li>
                    <li>
                        <b>Social Injustice:</b> The character confronts systemic injustice,
                        inequality, or discrimination within society. They may fight against
                        prejudice, class divisions, or other forms of oppression, seeking to
                        bring about social change or advocate for the marginalized.
                    </li>
                    <li>
                        <b>Cultural Clash:</b> The character comes from a different cultural
                        background or holds contrasting beliefs from the dominant culture. They
                        may face prejudice, alienation, or hostility as they navigate a society
                        that rejects or misunderstands their heritage or perspectives.
                    </li>
                    <li>
                        <b>Challenging Authority:</b> The character questions or rebels against
                        the authority figures or institutions that maintain control over
                        society. This conflict can involve political oppression, totalitarian
                        regimes, or oppressive social systems, where the character fights for
                        freedom, autonomy, or human rights.
                    </li>
                </ol>
                <hr />
                <h3>Examples:</h3>
                <p>
                    &#9671; In George Orwell's novel "1984," the protagonist Winston Smith
                    rebels against the oppressive regime of Big Brother and struggles to
                    maintain his individuality in a totalitarian society.
                </p>
                <p>
                    &#9671; In Harper Lee's "To Kill a Mockingbird," the character of Atticus
                    Finch confronts racial prejudice and inequality as he defends an innocent
                    man in a deeply divided community.
                </p>
                <p>
                    &#9671; In "Mulan," the female protagnoist disguises herself as a man and
                    takes her father's place in the imperial military draft, exclusively
                    reserved for men, and fights to protect all of China from the invading Huns.
                </p>
                <hr />
                <img src={CharVEnvr3} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px'
                }} />
                <p>
                    Character vs. Society often raises important questions about individuality,
                    conformity, and the balance between personal values and societal
                    expectations. It explores the tensions that arise when individuals challenge
                    or resist the established order, advocating for change or seeking to find
                    their place in a world that may reject them.
                </p>
            </section>
            <section>
                <h2 id="charVelem">Character vs Nature or the Elements</h2>
                <p>
                    This conflict involves the central struggle between a character and the
                    forces of nature. It portrays the challenges, dangers, or adversities that
                    characters face when pitted against the natural world. The conflict
                    emphasizes the vulnerability and insignificance of human beings in the face
                    of the uncontrollable and powerful elements of nature.
                </p>
                <img src={CharVElem5} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px'
                }} />
                <p>
                    In Character vs. Nature, the character is often confronted with natural
                    disasters, harsh weather conditions, or the threat of wild animals. They may
                    find themselves in a survival situation, fighting for their lives, or
                    attempting to overcome the obstacles presented by nature. This conflict
                    explores humanity's relationship with the natural world and raises questions
                    about our place within it.
                </p>
                <p>
                    This type of conflict will manifest in the following ways:
                </p>
                <ol>
                    <li>
                        <b>Survival:</b> The character is forced to navigate extreme
                        environments or hostile conditions, such as a deserted island, a
                        freezing wilderness, or a treacherous mountain. They must contend with
                        lack of food, shelter, or resources and use their ingenuity and
                        resilience to stay alive.
                    </li>
                    <li>
                        <b>Natural Disasters:</b> The character is caught in the midst of a
                        natural catastrophe, such as a hurricane, earthquake, tsunami, or
                        volcanic eruption. They must navigate the chaos and devastation, often
                        witnessing the destructive power of nature and struggling to find safety
                        or reunite with loved ones.
                    </li>
                    <li>
                        <b>Animal Encounters:</b> The character encounters dangerous or
                        predatory animals, either in the wilderness or in unexpected settings.
                        They must confront the threat, defend themselves, or find a way to
                        coexist with the natural wildlife.
                    </li>
                    <li>
                        <b>Environmental Impact:</b> The character battles against the impact of
                        human activities on the natural world. This conflict can explore themes
                        of environmental destruction, pollution, or the consequences of
                        exploiting natural resources.
                    </li>
                </ol>
                <hr />
                <h3>Examples:</h3>
                <p>
                    &#9671; In Yann Martel's "Life of Pi," the character Pi finds himself
                    stranded on a lifeboat with a Bengal tiger, battling against the vastness of
                    the ocean and the threat of starvation.
                </p>
                <p>
                    &#9671; In Nicolas Roeg's "Castaway," the obsessively punctual FedEx
                    executive Chuck Noland is en route to an assignment when his plane crashes
                    over the Pacific Ocean during a storm. He is the sole survivor washed ashore
                    on a deserted island. He learns how to survive on the island, where he
                    remains for years, accompanied by only his handmade volleyball friend,
                    Wilson.
                </p>
                <p>
                    &#9671; In Riichiro Inagaki's "Dr STONE" series, all of humanity is turned
                    to stone by an unknown event. The main protagonist Senku Ishigami is revived
                    several thousands of years later and attempts to use his extensive knowledge
                    of science to revive humanity all while working with limited natural
                    resources.
                </p>
                <hr />
                <img src={CharVElem4} alt="" style={{
                    display: 'block',
                    width: '100%',
                    marginBottom: '30px'
                }} />
                <p>
                    Character vs. Nature often highlights the fragility and resilience of human
                    beings in the face of nature's forces. It delves into themes of survival,
                    human adaptability, and our connection to the natural world. This conflict
                    can evoke a sense of awe, fear, or respect for nature's power and remind us
                    of our place within the broader ecosystem.
                </p>
            </section>
            <ChatGptBadge />
        </div>
    </main>
}
