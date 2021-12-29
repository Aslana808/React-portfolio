import React from 'react'
import './project.scss'

const Project = () => {
    return (
        <div>            
            <div className='projects-main'>
                <h1>My Projects</h1>
                <div className="projects">
                    <ul>
                        <li> <p>CCNA Project: </p>
                            <a href="https://github.com/Aslana808/CCNA"><i className="fab fa-github"></i></a> 
                        </li>    
                        <li> <p>Front-End Project: </p>
                            <a href="https://github.com/Aslana808/Front-End-Project"><i className="fab fa-github"></i></a> 
                        </li>  
                        <li> <p>Back-End (Laravel) Project: </p>
                            <a href="https://github.com/Aslana808/Back-End-Project"><i className="fab fa-github"></i></a> 
                        </li>  
                        <li> <p>Context Menu React: </p>
                            <a href="https://github.com/Aslana808/contextMenu"><i className="fab fa-github"></i></a> 
                        </li>  
                    </ul>
					
				</div>
            </div>
        </div>
    )
}

export default Project
