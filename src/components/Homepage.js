import React from "react"




function Homepage(){
    return (
        
		<>
		<section className="intro">
			<h1 className="section__title section__title--services"> Services We Offer</h1>
				<div className="services">
					
					<div className="service_item">
						<img src="https://dummyimage.com/300x300/000/fff" alt="service__image" className="service__image" />
						<h3 className="service__subtitle">Weight Lifting Session</h3>
						<p>In publishing and graphic design, Lorem ipsum is a placeholder 
						text commonly used to demonstrate the visual form of a document</p>
					</div>

					<div className="service_item">
						<img src="https://dummyimage.com/300x300/000/fff" alt="service__image" className="service__image" />
						<h3 className="service__subtitle">Weight Lifting Session</h3>
						<p>In publishing and graphic design, Lorem ipsum is a placeholder 
						text commonly used to demonstrate the visual form of a document</p>
					</div>

					<div className="service_item">
						<img src="https://dummyimage.com/300x300/000/fff" alt="service__image" className="service__image" />
						<h3 className="service__subtitle">Weight Lifting Session</h3>
						<p>In publishing and graphic design, Lorem ipsum is a placeholder 
						text commonly used to demonstrate the visual form of a document</p>
					</div>

				</div>
		</section>

		<section className="mission__section">

		<h1 className="section__title section__title--services"> Our Mission</h1>

			<div className="mission__container">
				<div className="image__content">
					flex column 1
				</div>

				<div className="text__content">
					flex column 2
				</div>
			</div>

		</section>

		</>
    )
}

export default Homepage;