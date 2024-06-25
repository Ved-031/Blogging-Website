import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loader from './components/Loader';
import Header from './components/Header';

const Home = lazy(() => import('./pages/Home'));
const SignUp = lazy(() => import('./pages/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Projects = lazy(() => import('./pages/Projects'));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loader/>}>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App