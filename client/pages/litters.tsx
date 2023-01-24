import React from 'react'
import LittersComp from "../components/Litters"

const Litters = ({allData}) => {
    return <LittersComp allData={allData}/>
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/image?type=LittersGallery`)
    const allData = await res.json()
    return {props: {allData}}
}

export default Litters
