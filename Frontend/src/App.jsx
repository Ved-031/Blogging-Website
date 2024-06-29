import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Spinner } from 'flowbite-react';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

const Home = lazy(() => import('./pages/Home'));
const SignUp = lazy(() => import('./pages/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Projects = lazy(() => import('./pages/Projects'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Spinner/>}>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route element={<PrivateRoute/>}>
              <Route path="/dashboard" element={<Dashboard/>} />
            </Route>
            <Route path="/projects" element={<Projects/>} />
          </Routes>
          <Footer/>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App