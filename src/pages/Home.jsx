import React from 'react'
import './Home.css'
import Card1 from '../components/Card'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import Text1 from '../components/Text'
import Header from '../components/Header'
import Footer from '../components/Footer'



const Home = () => {
    return (
        
        <div className="Home">
            <Header></Header>
            <div className="TextBox" style={{display: 'flex',alignItems: "center",height: "100%",justifyContent: "center",}}>
                <Text1></Text1>
            </div>
            <div className='CardBox' style={{display: 'flex', flexDirection: 'row'}}>
                <Card1></Card1>
                <Card2></Card2>
                <Card3></Card3>
            </div>
            <Footer></Footer>
    </div>
    )
}
export default Home