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
import Genres from './pages/StorytellingLessons/Genres'
import GenreAdventure from './pages/StorytellingLessons/Genres/Adventure'
import GenreFantasy from './pages/StorytellingLessons/Genres/Fantasy'
import GenreMystery from './pages/StorytellingLessons/Genres/Mystery'
import GenreRomance from './pages/StorytellingLessons/Genres/Romance'
import GenreScienceFiction from './pages/StorytellingLessons/Genres/ScienceFiction'
import GenreThriller from './pages/StorytellingLessons/Genres/Thriller'
import GenreComedy from './pages/StorytellingLessons/Genres/Comedy'
import ShortStories from './pages/StorytellingLessons/ShortStories'
import LongStories from './pages/StorytellingLessons/LongStories'
import VisualStories from './pages/StorytellingLessons/VisualStories'
import Screenplays from './pages/StorytellingLessons/Screenplays'

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
                <Route path="Genres" element={<Genres />} />
                <Route path="Genres/Adventure" element={<GenreAdventure />} />
                <Route path="Genres/Fantasy" element={<GenreFantasy />} />
                <Route path="Genres/Mystery" element={<GenreMystery />} />
                <Route path="Genres/Romance" element={<GenreRomance />} />
                <Route path="Genres/ScienceFiction" element={<GenreScienceFiction />} />
                <Route path="Genres/Thriller" element={<GenreThriller />} />
                <Route path="Genres/Comedy" element={<GenreComedy />} />
                <Route path="ShortStories" element={<ShortStories />} />
                <Route path="LongStories" element={<LongStories />} />
                <Route path="VisualStories" element={<VisualStories />} />
                <Route path="Screenplays" element={<Screenplays />} />
            </Route>
        </Routes>
    </BrowserRouter>
}
