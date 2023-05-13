import ProfilePic from '../../../components/ProfilePic'
import WavesSVG2 from './WavesSVG2'
import './Advice.scss'

export default function Advice() {
    return <div id="advice">
        <WavesSVG2 />
        <article>
            <h2>
                <strong>Certified Advice</strong> by <a
                    href="https://www.youtube.com/channel/UCI8GDFj5BQCQrSHITFebzkA">
                    moderndayjames
                </a>
            </h2>
            <ProfilePic imgurl='https://yt3.googleusercontent.com/T3ggTZNFhOKa2HfZHQTV-acYokqzAfj-Vd0B4eJQbG5S8zXCPSFez2SB39RBcakSzpqXVOC6kOE=s176-c-k-c0x00ffffff-no-rj'/>
            <div className="advice-text">
                <div>
                    <p>
                        "Make sure that learning is balanced and takes you
                        where you want to go.
                    </p>
                    <p>
                        Your art journey is similarto learning music: If you
                        only learn the scales and theory, then you understand
                        they rules. But that doesn't mean you can make
                        enjoyable music from what you know. At the same time,
                        if you don't know any rules of music, you may just be
                        making trash.
                    </p>
                    <p>
                        There's a middle ground in there where you know just
                        enough to get you to where you want to go while still
                        breaking boundaries and exploring cool things
                        spontaneously (like accidentally playing a modal
                        scale in a different key).
                    </p>
                    <p>
                        So - if you only learn the rules of your art, you
                        won't know how to explore it creatively. If you only
                        focus on creative exploration, you won't learn how to
                        create effectively within the rules of your artform."
                    </p>
                </div>
                <hr />
            </div>
        </article>
    </div>
}
