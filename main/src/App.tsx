import './App.css'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import HomePage from './pages/Home'
import Syllabus from './pages/Syllabus'
import { storytellingData } from './data/StorytellingData'
import { drawingData } from './data/DrawingData'
import { animationData } from './data/AnimationData'
import { musicData } from './data/MusicData'
import Resources from './pages/Resources'

export default function App() {
    return <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="storytelling" element={<Syllabus data={storytellingData} />} />
            <Route path="drawing" element={<Syllabus data={drawingData} />} />
            <Route path="animation" element={<Syllabus data={animationData} />} />
            <Route path="music" element={<Syllabus data={musicData} />} />
            <Route path="resources" element={<Resources />} />
        </Routes>
    </BrowserRouter>
}
