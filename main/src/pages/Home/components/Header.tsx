import React from 'react'
import './Header.scss'
import WavesSVG1 from './WavesSVG1'
import Ribbon from '../../../components/Ribbon'

export default class Header extends React.Component {
    render(): React.ReactNode {
        return <header>
            {this.renderHeaderBanner()}
            <div id="header-description">
                <p>A curriculum built for the self-taught artist looking for<br />structure and direction.</p>
                <p>Based on the design and concept of <a href="https://www.reddit.com/r/learnart/comments/dapk62/from_the_guy_who_made_the_most_comprehensive_list/">RadioRunner</a>,<br />
                plans from <a href="https://www.youtube.com/watch?v=0NYqmhESI-Y&ab_channel=MarcBrunet">Marc Brunet</a>,<br />
                and corriculums of <a href="https://www.animationmentor.com/courses/animation/2d-animation/">Animation Mentor</a></p>
            </div>
            <WavesSVG1 />
        </header>
    }

    private renderHeaderBanner() {
        return <div id="header-banner">
            <Ribbon text="Open Source" link="https://github.com/TekuConcept/IndiAnimatorCurriculum" />
            <p>TekuConcept's<br /><span>curriculum</span><br />for the</p>
            <p>solo<br /><span>animator</span></p>
        </div>
    }
}
