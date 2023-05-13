import './Preview.scss'
import ImageB from './../resources/animated.jpg'
import Mouse from './../resources/ico-mouse-grad.svg'

export default function Preview() {
    return <div id="preview">
        <img src={ImageB} alt="" />
        <h1>Become <span>an</span> Indie Animator</h1>
        <article id="intro">
            <p>
                In a way, your brain is a lot like a muscle, and just how
                one builds muscle, skill is built up with reps, time, and
                changing things up every now and then.<br />

                The Solo Animator Curriculum tries to provide a collection
                of useful exercises, routines, and course materials
                tailored to sharpening your skills as an animator.
            </p>
        </article>
        <div><img src={Mouse} alt="" /></div>
        <article>
            <iframe
                width={800}
                height={400}
                src="https://www.youtube.com/embed/xNQUGUFtmpU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
        </article>
    </div>
}
