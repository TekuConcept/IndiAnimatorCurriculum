import React from 'react'
import WavesSVG1 from './WavesSVG1'
import NavBar from '../../../components/NavBar'
import './Header.scss'

export default class Header extends React.Component {
    render(): React.ReactNode {
        return <header className="home-header">
            <NavBar />
            <WavesSVG1 />
        </header>
    }
}
