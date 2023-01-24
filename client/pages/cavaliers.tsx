import React from 'react'
import CavaliersComp from "../components/Cavaliers"

const Cavaliers = ({allData}) => {
    return <CavaliersComp allData={allData}/>
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/image?type=OurCavaliers`)
    const allData = await res.json()
    return {props: {allData}}
}

export default Cavaliers
