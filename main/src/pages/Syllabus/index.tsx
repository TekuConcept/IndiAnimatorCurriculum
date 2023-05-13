import React from 'react'
import { CData } from '../../data/CurriculumData'
import Footer from '../../components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import './Syllabus.scss'

export interface SyllabusProps { data?: CData }

export default class Syllabus extends React.Component<SyllabusProps> {
    render() {
        return <>
            <Header />
            <Main data={this.props.data} />
            <Footer />
        </>
    }
}
