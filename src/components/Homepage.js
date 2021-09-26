import React from "react"
import { Grid, Image } from 'semantic-ui-react'



function Homepage(){
    return (
        
		<>
		<section className="intro">
			<h2 className="section__title section__title--services"> Services We Offer</h2>
				<div className="services">
					
					<div className="service">
						<img src="https://dummyimage.com/300x300/000/fff" alt="service__image" className="service__image" />
						<h3 className="service__subtitle">Weight Lifting Session</h3>
						<p>In publishing and graphic design, Lorem ipsum is a placeholder 
						text commonly used to demonstrate the visual form of a document</p>
					</div>

					<div className="service">
						<img src="https://dummyimage.com/300x300/000/fff" alt="service__image" className="service__image" />
						<h3 className="service__subtitle">Weight Lifting Session</h3>
						<p>In publishing and graphic design, Lorem ipsum is a placeholder 
						text commonly used to demonstrate the visual form of a document</p>
					</div>

					<div className="service">
						<img src="https://dummyimage.com/300x300/000/fff" alt="service__image" className="service__image" />
						<h3 className="service__subtitle">Weight Lifting Session</h3>
						<p>In publishing and graphic design, Lorem ipsum is a placeholder 
						text commonly used to demonstrate the visual form of a document</p>
					</div>

				</div>
		</section>
		</>
    )
}

export default Homepage;