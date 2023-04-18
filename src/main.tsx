import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

interface Video {
    title : string
    description : string
    viewCount : number
    likesCount : number
}

const App = ({video}:{video: Video}) => <h1>{video.title}</h1>
const root = createRoot(document.getElementById('root')!)

root.render(
    <StrictMode>
        <App video={{title: 'hello', description: "cool", viewCount: 22, likesCount: 33}}/>
    </StrictMode>
)