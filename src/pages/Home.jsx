import React from 'react'
import Hero from '../components/layout/landing-page/Hero.jsx';
import WhyLarva from '../components/layout/landing-page/WhyLarva.jsx';
import GradFeed from '../components/layout/landing-page/GradFeed.jsx';
import AboutUs from '../components/layout/landing-page/AboutUs.jsx';
import UpClasses from '../components/layout/landing-page/UpClasses.jsx';
import Cta from '../components/layout/landing-page/Cta.jsx';
import Courses from '../components/layout/landing-page/Courses.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <WhyLarva />
      <Courses />
      <GradFeed />
      <AboutUs />
      <UpClasses />
      <Cta />
    </>
  )
}

export default Home