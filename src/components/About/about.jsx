import React from 'react'
import './about.scss'

const About = () => {
    return (
        <div className="section">
		<div className="container">
			<div className="content-section">
				<div className="title">
					<h1>About Me</h1>
				</div>
				<div className="content">
					<h3>I'm <b>Davit Aslanishvili</b>, Computer Science Student in BTU.</h3>
					<p>I've been studing Information technologies in BTU for 3 years. My main field of 
                        interest is Networking (CCNA). I like designing and building some networks writing protocols
                        for them to interact, for which I use packet tracer and you can see my project on a Project page.
                        I also find web development interesting. I recently started studing React, which imediately drew my interest.
						I also have some general knowledge and skills in: Python, Computer architecture, SQL(oracle), Linux, OOP and etc.
                        You can find more about me on Contact and projects page.
                    </p>
					<div className="button">
						<a href="https://www.facebook.com/data.aslanishvili">Read More</a>
					</div>
				</div>
			</div>
			<div className="image-section">
				<img src="https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.6435-9/41358681_1458764647601191_2329489153525284864_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHoa1CScqyR94ZB5dguYKlY_NxS-82V0db83FL7zZXR1halEYkpVSKTT-E5RpunOXHYRiFXp2q7eHSF8_pNTzoX&_nc_ohc=F0WkDNRHiLUAX-pwU29&_nc_ht=scontent.ftbs5-2.fna&oh=00_AT92xXYB5vQuPpo_P9ZNx71pkfqIVioarhCfLKnudl4YZw&oe=61F37276"/>
			</div>
		</div>
	</div>
    )
}

export default About
