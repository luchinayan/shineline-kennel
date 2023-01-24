import React from 'react'
import AboutComp from "../components/AboutUs"

const About = ({dataAboutUs}) => {
    return <AboutComp dataAboutUs={dataAboutUs}/>
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/image?type=AboutUsPage`)
    const dataAboutUs = await res.json()
    return {props: {dataAboutUs}}
}

export default About
