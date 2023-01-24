import React from 'react'
import PuppiesComp from '../components/Puppies'

const Puppies = ({dataPuppies, textru, texten, api}) => {
    return <PuppiesComp dataPuppies={dataPuppies} textru={textru} api={api} texten={texten}/>
}

export async function getStaticProps() {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/image?type=PuppiesPage`)
    const dataPuppies = await res.json()
    const dataInfo = dataPuppies.find(el => el.info).info
    const textru = dataInfo.textru
    const texten = dataInfo.texten
    return {props: {dataPuppies, textru, texten, api: process.env.REACT_APP_API_URL}}
}

export default Puppies
