import './App.css'
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import HomePage from './pages/Home'
import Syllabus from './pages/Syllabus'
import Resources from './pages/Resources'

import { storytellingData } from './data/StorytellingData'
import { drawingData } from './data/DrawingData'
import { animationData } from './data/AnimationData'
import { musicData } from './data/MusicData'

import StorytellingLessons from './pages/StorytellingLessons'
import ConflictsI from './pages/StorytellingLessons/ConflictsI'
import ConflictsII from './pages/StorytellingLessons/ConflictsII'
import StructureI from './pages/StorytellingLessons/StructureI'
import StructureII from './pages/StorytellingLessons/StructureII'
import StructureIII from './pages/StorytellingLessons/StructureIII'
import Plots from './pages/StorytellingLessons/Plots'
import Narration from './pages/StorytellingLessons/Narration'

export default function App() {
    return <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="Storytelling" element={<Syllabus data={storytellingData} />} />
            <Route path="Drawing" element={<Syllabus data={drawingData} />} />
            <Route path="Animation" element={<Syllabus data={animationData} />} />
            <Route path="Music" element={<Syllabus data={musicData} />} />
            <Route path="Resources" element={<Resources />} />
            <Route path="StorytellingLessons" element={<StorytellingLessons />} >
                <Route path="ConflictsI" element={<ConflictsI />} />
                <Route path="ConflictsII" element={<ConflictsII />} />
                <Route path="StructureI" element={<StructureI />} />
                <Route path="StructureII" element={<StructureII />} />
                <Route path="StructureIII" element={<StructureIII />} />
                <Route path="Plots" element={<Plots />} />
                <Route path="Narration" element={<Narration />} />
            </Route>
        </Routes>
    </BrowserRouter>
}
