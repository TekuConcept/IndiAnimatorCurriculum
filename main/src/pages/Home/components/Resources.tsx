import React from 'react'
import './Resources.scss'
import PlayIcon from './../resources/ico-play.svg'
import EduIcon from './../resources/ico-edu.svg'
import BookIcon from './../resources/ico-book.svg'
import WebIcon from './../resources/ico-web.svg'
import WavesSVG5 from './WavesSVG5'
import WavesSVG6 from './WavesSVG6'


interface ResourceGroupProps {
    title?: string
    icon?: string
    children?: React.ReactNode
}

function ResourceGroup(props: ResourceGroupProps) {
    return <article className="resource-group">
        <h3><img src={props.icon} alt={props.title} /> {props.title}</h3>
        <div className="items-outer">
            <div className="items-inner">
                {props.children}
            </div>
        </div>
    </article>
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

interface LinkProps {
    sub?: string
    href?: string
    children?: React.ReactNode
}

function Link(props: LinkProps) {
    return <a href={props.href}>
        {props.children}
        {props.sub ? <><br /><span>{props.sub}</span></> : <></>}
    </a>
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

interface LinkInfo {
    title: string
    sub: string
    url: string
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

function mapLinks(list: Array<LinkInfo>) {
    return list.map((value, index) => <Link
        sub={value.sub}
        href={value.url}
        key={index}
    >{value.title}</Link>)
}

export default function Resources() {
    return <div id="resources">
        <WavesSVG5 />
        <h2>Resources</h2>
        <ResourceGroup title="YouTube" icon={PlayIcon}>
            {mapLinks(YouTubeLinks)}
        </ResourceGroup>
        <ResourceGroup title="Books" icon={BookIcon}>
            {mapLinks(BookLinks)}
        </ResourceGroup>
        <ResourceGroup title="Online Courses" icon={EduIcon}>
            {mapLinks(OnlineLinks)}
        </ResourceGroup>
        <ResourceGroup title="Blogs & Other Creative Links" icon={WebIcon}>
            {mapLinks(BlogLinks)}
        </ResourceGroup>
        <WavesSVG6 />
    </div>
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
///////////////////////////////////////////////////////////////////////////////


const YouTubeLinks: Array<LinkInfo> = [
    { title: 'Ahmed Aldoori', sub: '', url: 'https://www.youtube.com/user/revolutions34' },
    { title: 'Austin Batchelor', sub: '(If you use Procreate for iPad, check him out)', url: 'https://www.youtube.com/channel/UCzrhtkj7E-MIAZ2ltngK1vw' },
    { title: 'The Art of Aaron Blaise', sub: '(Legendary animator of Disney Studios)', url: 'https://www.youtube.com/user/AaronBlaiseArt' },
    { title: 'BAM Animation', sub: '', url: 'https://www.youtube.com/channel/UC4Qvpti1dS1KKC7PLyLl__g' },
    { title: 'Blender Guru', sub: '(Specifically his series on Light and Color)', url: 'https://www.youtube.com/user/AndrewPPrice' },
    { title: 'Bobby Chiu', sub: '(Creator of Schoolism)', url: 'https://www.youtube.com/user/digitalbobert' },
    { title: 'Brad Colbow', sub: '(Drawing tablet reviews)', url: 'https://www.youtube.com/user/thebradcolbow' },
    { title: 'Brooke Eggleston\'s Character School', sub: '', url: 'https://www.youtube.com/channel/UCJklo0Zl5tLV9kkk_Jd81EA' },
    { title: 'Chris Oatley', sub: '', url: 'https://www.youtube.com/user/coatley' },
    { title: 'Croquis Cafe', sub: '(Gesture-drawing sessions - mainly on Vimeo)', url: 'https://vimeo.com/channels/croquiscafe' },
    { title: 'Ctrl+Paint', sub: '(Learn to paint digitally)', url: 'https://www.youtube.com/user/ctrlpainter' },
    { title: 'Dan Beardshaw Drawing Tutorials', sub: '(Draws like a printer - very Kim Jung Gi-like)', url: 'https://www.youtube.com/channel/UCH_yU13t2c1WB32-7AYLLQQ' },
    { title: 'Draw This', sub: '(Life-drawing resource)', url: 'https://www.youtube.com/channel/UCOVNvkn-f6BW18AvplWI8YA' },

    { title: 'Draw with Jazza', sub: '', url: 'https://www.youtube.com/user/DrawWithJazza' },
    { title: 'FZDSchool', sub: '(Feng Zhu\'s concept art channel)', url: 'https://www.youtube.com/user/FZDSCHOOL' },
    { title: 'Jake Parker', sub: '(Creator of SVSLearn and Inktober)', url: 'https://www.youtube.com/user/jakeparker44' },
    { title: 'James Gurney', sub: '(Master painter, creator of Dinotopia - learn physical painting here)', url: 'https://www.youtube.com/user/gurneyjourney' },
    { title: 'James Julier', sub: '(Bob Ross-like landscape painting for Procreate on iPad)', url: 'https://www.youtube.com/user/axis432' },
    { title: 'Coloring with Kurt', sub: '(Comic book colorist, great tutorials on light and color)', url: 'https://www.youtube.com/user/kmrussell24' },
    { title: 'Love Life Drawing', sub: '', url: 'https://www.youtube.com/user/lovelifedrawing' },
    { title: 'Lucas Peinador', sub: '', url: 'https://www.youtube.com/user/AKAluckART' },
    { title: 'LuluSketches', sub: '', url: 'https://www.youtube.com/channel/UCS3ZMbzTOXdDuJlhAZuXgaw' },
    { title: 'Marc Brunet', sub: '(Creator of Cubebrush ARTSchool)', url: 'https://www.youtube.com/user/bluefley00' },
    { title: 'Marco Bucci', sub: '(Learn Digital Painting w/traditional methods)', url: 'https://www.youtube.com/user/marcobucci' },
    { title: 'MikeyMegaMega', sub: '(Anime tutorials)', url: 'https://www.youtube.com/user/mikeymegamega' },
    { title: 'ModerndayJames', sub: '(The source for perspective, imagination, and concept drawing)', url: 'https://www.youtube.com/channel/UCI8GDFj5BQCQrSHITFebzkA' },

    { title: 'Naoki Saito', sub: '(20-year professional manga artist)', url: 'https://www.youtube.com/@saitonaoki2' },
    { title: 'New Master\'s Academy', sub: '(Vilppu, Steve Huston, and Reilly all teach here)', url: 'https://www.youtube.com/user/NewMastersAcademy' },
    { title: 'Noah Bradley', sub: '(Art Camp 1, 2, and 3)', url: 'https://www.youtube.com/user/noahbradley' },
    { title: 'Paintable', sub: '', url: 'https://www.youtube.com/channel/UCarOk8mEmHR7UNf0GEOZkUA' },
    { title: 'Proko', sub: '', url: 'https://www.youtube.com/user/ProkoTV' },
    { title: 'Robert Marzullo', sub: '(Comic book style)', url: 'https://www.youtube.com/user/MrRamstudios1' },
    { title: 'Trent Kanuiga', sub: '', url: 'https://www.youtube.com/user/novacolonyshow' },
    { title: 'Sinix Design', sub: '(Learn the painterly style)', url: 'https://www.youtube.com/user/sinixdesign' },
    { title: 'Sycra', sub: '', url: 'https://www.youtube.com/user/Sycra' },
    { title: 'Uncomfortable', sub: '(Drawabox.com)', url: 'https://www.youtube.com/channel/UCHUgvWN-JC6iFFQ0EqIoPgQ' },
    { title: 'Volen CK', sub: '', url: 'https://www.youtube.com/user/InPursuitOfArt1' },
    { title: 'Will Terry', sub: '(Co-creator of SVS Learn)', url: 'https://www.youtube.com/user/willterryart' },
    { title: 'Xia Taptara', sub: '', url: 'https://www.youtube.com/user/idrawgirls' }
]

const BookLinks: Array<LinkInfo> = [
    { title: 'Color and Light', sub: 'by James Gurney', url: 'https://www.amazon.com/dp/0740797719' },
    { title: 'Imaginative Realism', sub: 'by James Gurney', url: 'https://www.amazon.com/dp/0740785508' },
    { title: 'Constructive Anatomy', sub: 'by George B. Bridgman', url: 'https://www.amazon.com/dp/0486211045' },
    { title: 'How to Draw', sub: 'by Scott Robertson', url: 'https://www.amazon.com/dp/1933492732' },
    { title: 'How to Render', sub: 'by Scott Robertson', url: 'https://www.amazon.com/dp/1933492961' },
    { title: 'Figure Drawing: Design and Invention', sub: 'by Michael Hampton', url: 'https://www.amazon.com/dp/0615272819' },

    { title: 'FORCE: Animal Drawing', sub: 'by Mike Mattesi', url: 'https://www.amazon.com/dp/0367637073' },
    { title: 'FORCE: Character Design', sub: 'by Mike Mattesi', url: 'https://www.amazon.com/dp/0240809939' },
    { title: 'FORCE: Dynamic Life Drawing', sub: 'by Mike Mattesi', url: 'https://www.amazon.com/dp/1138919578' },
    { title: 'Framed Ink', sub: 'by Marcos Mateu-Mestra', url: 'https://www.amazon.com/dp/1933492953' },
    { title: 'Framed Ink 2', sub: 'by Marcos Mateu-Mestra', url: 'https://www.amazon.com/dp/1624650538' },
    { title: 'Framed Perspective 1', sub: 'by Marcos Mateu-Mestra', url: 'https://www.amazon.com/dp/1624650309' },
    { title: 'Framed Perspective 2', sub: 'by Marcos Mateu-Mestra', url: 'https://www.amazon.com/dp/1624650325' },

    { title: 'Fun with a Pencil', sub: 'by Andrew Loomis', url: 'https://www.amazon.com/dp/1805472690' },
    { title: 'Perspective Made Easy', sub: 'by Ernest R.N.', url: 'https://www.amazon.com/dp/9563100174' },
    { title: 'The Skillful Hunstman', sub: 'by Khang Le', url: 'https://www.amazon.com/dp/0972667644' },
    { title: 'The Techniques of Feng Zhu', sub: 'by Feng Zhu (movie)', url: 'https://www.amazon.com/dp/B000GETUWE' },
    { title: 'Vilppu Drawing Manual', sub: 'by Glenn Vilppu', url: 'https://www.amazon.com/dp/1892053039' },

    { title: 'Manga Character Color Scheme', sub: 'by 桜井輝子', url: 'https://www.amazon.co.jp/dp/B0976X236R/' },
    { title: 'Effects Drawing Encyclopedia', sub: 'by スタジオ・ハードデラックス', url: 'https://www.amazon.co.jp/dp/B07C8CR99J' },
    { title: 'How to Draw Hands', sub: 'by 加々美 高浩', url: 'https://www.amazon.co.jp/dp/B07YD9WMDD' },
    { title: 'Encyclopedia of Animation Basics', sub: 'by 神村 幸子', url: 'https://www.ebay.com/itm/264236890812' },
    { title: 'Kazuo Oga Art Book (Ghibli THE ART Series)', sub: 'by 男鹿 和雄', url: 'https://www.amazon.co.jp/dp/4198605262' },
    { title: 'Kazuo Oga Art Book II (Ghibli THE ART Series)', sub: 'by 男鹿 和雄', url: 'https://www.amazon.co.jp/dp/4198620741' },
    { title: 'Drawing Moe Characters: Basic Techniques', sub: 'by 宮月もそこ and 角丸つぶら', url: 'https://www.amazon.co.jp/dp/B01KO3EW1A' },
    { title: 'Drawing Moe Characters: Personality & Emotional Expressions', sub: 'by 宮月もそこ and 角丸つぶら', url: 'https://www.amazon.co.jp/dp/B014KS0WHI' },
    { title: 'How to draw men\'s moe characters: gestures and poses', sub: 'by ユニバーサル・パブリシング', url: 'https://www.amazon.co.jp/dp/B01N7XUKOQ' },
    { title: 'How to Draw Clothes', sub: 'by らびまる and 雲雪(マサモードアカデミーオブアート)', url: 'https://www.amazon.co.jp/dp/4798621633' },
    { title: 'How to Draw Hair', sub: 'by Paryi', url: 'https://www.amazon.co.jp/dp/B095Y8M7F8' },
    { title: 'How to Draw a Beastman', sub: 'by 福井真一 and 玄光社', url: 'https://www.amazon.co.jp/dp/B0822CFRLB' },
    { title: 'Beastman Pose Collection', sub: 'by 山羊ヤマ and more', url: 'https://www.amazon.co.jp/dp/B08QYWQWSR' },
    { title: 'Draw Manga Faces for Expressive Characters', sub: 'by by Hosoi Aya', url: 'https://www.amazon.com/dp/1440337284' },
    { title: 'How to Create Manga: Drawing Facial Expressions', sub: 'by NextCreator Henshubu', url: 'https://www.amazon.com/dp/4805315628' },
    { title: 'Manga Chibi Girls', sub: 'by Mosoko Miyatsuki', url: 'https://www.amazon.com/dp/4805316136' },

    { title: 'The Art of Animal Drawing', sub: 'by Ken Hulgren', url: 'https://www.amazon.com/dp/1621389820' },
    { title: 'The Animator\'s Survival Kit', sub: 'by Richard Williams', url: 'https://www.amazon.com/dp/086547897X' },
    { title: 'The Illusion of Life', sub: 'by Ollie Johnston and Frank Thomas', url: 'https://www.amazon.com/dp/0786860707' },
    { title: 'Drawing: Cartooning 1', sub: 'by Jack Keely and Carson Van Osten', url: 'https://www.amazon.com/dp/1633227812' },
    { title: 'Cartooning: Animation 1', sub: 'by Preston Blair', url: 'https://www.amazon.com/dp/1633227731' },
    { title: 'Vision: Color and Composition for Film', sub: 'by Hans P. Backer and Sanatan Suryavanshi', url: 'https://www.amazon.com/dp/1786272202' }
]

const OnlineLinks: Array<LinkInfo> =[
    { title: 'Aaron Blaise', sub: '- CreatureArtTeacher.com', url: 'https://creatureartteacher.com/' },
    { title: 'Artstation Learning', sub: '', url: 'https://www.artstation.com/learning' },
    { title: 'CGMA', sub: '', url: 'https://www.cgmasteracademy.com/' },
    { title: 'Ctrl+Paint', sub: '', url: 'https://www.ctrlpaint.com/' },
    { title: 'Cubebrush ARTSchool', sub: '', url: 'https://cubebrush.co/mb/products/mmfwyq/art-school' },
    { title: 'Foundation Drawing', sub: '(Gumroad)', url: 'https://gumroad.com/foundation_patreon' },

    { title: 'Gnomon', sub: '', url: 'https://www.gnomon.edu/' },
    { title: 'Krenz Kushart', sub: '(Gumroad)', url: 'https://gumroad.com/krenzcushart' },
    { title: 'Moderndayjames', sub: '(Gumroad)', url: 'https://gumroad.com/moderndayjames' },
    { title: 'New Master\'s Academy', sub: '', url: 'https://www.nma.art/' },
    { title: 'Paintable', sub: '', url: 'https://paintable.cc/' },
    { title: 'Proko Premium', sub: '', url: 'https://www.proko.com/store-drawing-and-painting-resources/#.XrVGOBNKh24' },

    { title: 'Schoolism', sub: '', url: 'https://www.schoolism.com/' },
    { title: 'Society of Visual Storytelling', sub: '', url: 'https://www.svslearn.com/' },
    { title: 'Watts Atelier Online', sub: '', url: 'https://www.wattsatelier.com/online/' },
]

const BlogLinks: Array<LinkInfo> = [
    { title: 'Alex Woo', sub: '', url: 'http://woohoopictures.blogspot.com/' },
    { title: 'Alina Chau', sub: '', url: 'http://alinanimation.blogspot.com/' },
    { title: 'Andreas Deja', sub: '', url: 'http://andreasdeja.blogspot.com/' },
    { title: 'Animation Podcast', sub: '', url: 'http://www.animationpodcast.com/' },
    { title: 'Anthony Holden', sub: '', url: 'http://sketchadventure.blogspot.com/' },
    { title: 'Arna and John', sub: '', url: 'http://doodlin.blogspot.com/' },
    { title: 'Aurelie Blard-Quintard', sub: '', url: 'http://aurelieblardquintard.blogspot.com/' },
    { title: 'Ben Balistreri', sub: '', url: 'http://benbalistreri.blogspot.com/' },
    { title: 'Bill Presing', sub: '', url: 'http://billpresing.blogspot.com/' },
    { title: 'Blackwing Sketchbook', sub: '', url: 'http://blackwingsketch.blogspot.com/' },
    { title: 'Cartoon Brew', sub: '', url: 'http://cartoonbrew.com/' },
    { title: 'Celia Bullwinkel', sub: '', url: 'http://celiabee.blogspot.com/' },
    { title: 'Chris Sanders', sub: '', url: 'http://chrissandersart.com/' },
    { title: 'Claire Keane', sub: '', url: 'http://claireonacloud.com/' },
    { title: 'Clio Chiang', sub: '', url: 'http://blog.cliochiang.com/' },
    { title: 'Conduct Happiness', sub: '', url: 'http://conducthappiness.com/' },
    { title: 'Cowan Collection (Robert Cowan)', sub: '', url: 'http://cowancollectionanimation.blogspot.com/' },
    { title: 'Dan Caylor', sub: '', url: 'http://onanimation.blogspot.com/' },
    { title: 'Darren Webb', sub: '', url: 'http://darrenwebbstuff.blogspot.com/' },
    { title: 'Dave Derrick', sub: '', url: 'http://www.dgderrick.com/journal' },
    { title: 'Dave Nethery', sub: '', url: 'http://inklingstudio.typepad.com/chronicles/' },
    { title: 'Dave Pimentel', sub: '', url: 'http://drawingsfromamexican.blogspot.com/' },
    { title: 'David Colman', sub: '', url: 'http://davidcolman.blogspot.com/' },
    { title: 'Devin Crane', sub: '', url: 'http://devincrane.com/index.html' },
    { title: 'Didier Ghez', sub: '', url: 'http://disneybooks.blogspot.com/' },
    { title: 'Don Shank', sub: '', url: 'http://donshank.blogspot.com/' },
    { title: 'Donnachada Daly', sub: '', url: 'http://almostdalyblog.blogspot.com/' },
    { title: 'Emma Coats', sub: '', url: 'http://www.emmacoats.com/' },
    { title: 'Ennio Torresan', sub: '', url: 'http://www.enniotorresan.com/' },
    { title: 'Gabriele Pennacchioli', sub: '', url: 'http://gabrielepennacchioli.blogspot.com/' },
    { title: 'Hans Perk', sub: '', url: 'http://afilmla.blogspot.com/' },
    { title: 'Hyrum Osmond', sub: '', url: 'http://hyrumosmondanimation.blogspot.com/' },
    { title: 'James Gurney', sub: '', url: 'http://gurneyjourney.blogspot.com/' },
    { title: 'James Robertson', sub: '', url: 'http://theironscythe.blogspot.com/' },
    { title: 'Jeff Snow', sub: '', url: 'http://jeffsnow.blogspot.com/' },
    { title: 'John Canemaker', sub: '', url: 'http://animatedeye.johncanemaker.com/' },
    { title: 'Justin Hunt', sub: '', url: 'http://buttermilkskies.blogspot.com/' },
    { title: 'Katie Rice', sub: '', url: 'http://funnycute.blogspot.com/' },
    { title: 'Kevin Dart', sub: '', url: 'http://www.kevindart.com/' },
    { title: 'Kevin Kidney', sub: '', url: 'http://miehana.blogspot.com/' },
    { title: 'Kristy Gordon', sub: '', url: 'http://kristygordon.blogspot.com/' },
    { title: 'Leo Matsuda', sub: '', url: 'http://leomatsuda-blog.blogspot.com/' },
    { title: 'Lissa Treiman', sub: '', url: 'http://lissabt.blogspot.com/' },
    { title: 'Lorelay Bove', sub: '', url: 'http://lorelaybove.blogspot.com/' },
    { title: 'Lou Romano', sub: '', url: 'http://www.louromano.blogspot.com/' },
    { title: 'Louie del Carmen', sub: '', url: 'http://randomanomalies.blogspot.com/' },
    { title: 'Mark Mayerson', sub: '', url: 'http://mayersononanimation.blogspot.com/' },
    { title: 'Matt Jones', sub: '', url: 'http://mattjonezanimation.blogspot.com/' },
    { title: 'Matte Stephens', sub: '', url: 'http://matteart.blogspot.com/' },
    { title: 'Megan Dong', sub: '', url: 'http://sketchshark.blogspot.com/' },
    { title: 'Michael Barrier', sub: '', url: 'http://www.michaelbarrier.com/' },
    { title: 'Michael Sporn', sub: '', url: 'http://www.michaelspornanimation.com/splog/' },
    { title: 'Nate Wragg', sub: '', url: 'http://n8wragg.blogspot.com/' },
    { title: 'Nathan Fowkes', sub: '', url: 'http://nathanfowkes.blogspot.com/' },
    { title: 'Nick Sung', sub: '', url: 'http://www.thefirehousestomp.blogspot.com/' },
    { title: 'Opi', sub: '', url: 'http://opiglob.blogspot.com/' },
    { title: 'Oscar Grillo', sub: '', url: 'http://grillomation.blogspot.com/' },
    { title: 'Oswald Iten', sub: '', url: 'http://colorfulanimationexpressions.blogspot.com/' },
    { title: 'Patrick Mate', sub: '', url: 'http://patrickmate.blogspot.com/' },
    { title: 'Paul Briggs', sub: '', url: 'http://www.pbcbstudios.blogspot.com/' },
    { title: 'Pen Addict', sub: '', url: 'http://penaddict.com/' },
    { title: 'Radford Sechrist', sub: '', url: 'http://radhowto.blogspot.com/' },
    { title: 'Scott Morse', sub: '', url: 'http://www.scottmorse.blogspot.com/' },
    { title: 'Scott Santoro', sub: '', url: 'http://scottsantoro.blogspot.com/' },
    { title: 'Shane Prigmore', sub: '', url: 'http://shaneprigmore.blogspot.com/' },
    { title: 'Shannon Tindle', sub: '', url: 'http://shannontindle.blogspot.com/' },
    { title: 'Shiyoon Kim', sub: '', url: 'http://shiyoon.blogspot.com/' },
    { title: 'Stephane Kardos', sub: '', url: 'http://stefsketches.blogspot.com/' },
    { title: 'Thad Komorowski', sub: '', url: 'http://thadkomorowski.com/' },
    { title: 'The Daily Mirror/Larry Harnisch reflects on LA History', sub: '', url: 'http://https//ladailymirror.com' },
    { title: 'Toby Shelton', sub: '', url: 'http://tobyshelton.blogspot.com/' },
    { title: 'Today\'s Inspiration/Vintage Illustration Heaven', sub: '', url: 'http://http//todaysinspiration.blogspot.com/' },
    { title: 'Tom Sito', sub: '', url: 'http://www.thomassito.com/blog.php' },
    { title: 'Uli Meyer', sub: '', url: 'http://ulimeyeranimation.blogspot.com/' },
    { title: 'Ward Jenkins', sub: '', url: 'http://wardomatic.blogspot.com/' }
]
