
import { useEffect } from 'react'
import { Outlet } from 'react-router'
import { useLocation } from 'react-router-dom'

import './index.scss'

import Footer from '../../components/Footer'
import Header from './components/Header'

export default function StorytellingLessons() {

    //
    // NOTE: This effect assumes 'StorytellingLessons' only updates
    //       when a new article is loaded and not when the article
    //       itself changes. It also assumes hashes are actual IDs
    //       and not metadata from another article or website.
    //
    const { hash } = useLocation()
    useEffect(() => {
        if (!hash) return

        const id = hash.replace('#', '')
        setTimeout(() => {
            document
            .getElementById(id)
            ?.scrollIntoView({ behavior: 'smooth' })
        }, 500)
    })

    return <>
        <Header />
        <Outlet />
        <Footer />
    </>
}