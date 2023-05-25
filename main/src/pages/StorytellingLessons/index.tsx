import { Outlet } from 'react-router-dom'
import './index.scss'
import Footer from '../../components/Footer'
import Header from './components/Header'

export default function StorytellingLessons() {
    return <>
        <Header />
        <Outlet />
        <Footer />
    </>
}