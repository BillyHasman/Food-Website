import React from 'react'
import './aboutus.scss'

import Anto from './img/849264.jpg'
import Chris from './img/1782372.jpg'
import Billy from './img/IMG_6445.jpg'
import Richard from './img/16590.jpg'

const aboutus = () => {
    return (

        <div className="about-us">
            <div className="about-us-grid">
                <div className="about-us-grid-instructions">
                    <h2>This Website is Made By</h2>
                    <p>1. Ardyanto Konstantin - 00000045578</p> 
                    <img src={Anto} className = "img"/>
                    <p>2. Alexander Christian Djauwandi - 00000045603</p>
                    <img src={Chris} className = "img"/>
                    <p>3. Muhammad Billy Hasman - 00000045403</p> 
                    <img src={Billy} className = "img"/>
                    <p>4. Richard Nelson Gunawan - 00000045737</p>
                    <img src={Richard} className = "img"/> 
                    <br></br><br></br><br></br>

                    <h2>Powered By</h2>
                    <div className="credits">
                    <span className="credits">1. https://www.themealdb.com/api/json/v1/1/search.php?s=</span><br></br>
                    <span className="credits">2. https://www.themealdb.com/api/json/v1/1/categories.php</span><br></br>
                    <span className="credits">3. https://www.themealdb.com/api/json/v1/1/random.php</span>
                    <br></br><br></br>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default aboutus;