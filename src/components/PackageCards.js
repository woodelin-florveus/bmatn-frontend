import React from "react"
import { Card } from 'semantic-ui-react'

function PackageCards(){


    return(
        <div>

<Card.Group itemsPerRow={4}>
    <Card raised image="https://dummyimage.com/200x200/a8a7b2/ffffff.jpg" alt="dummyImage" />
    <Card raised image="https://dummyimage.com/200x200/a8a7b2/ffffff.jpg" alt="dummyImage" />
    <Card raised image="https://dummyimage.com/200x200/a8a7b2/ffffff.jpg" alt="dummyImage" />
    <Card raised image="https://dummyimage.com/200x200/a8a7b2/ffffff.jpg" alt="dummyImage" />
    <Card raised image="https://dummyimage.com/200x200/a8a7b2/ffffff.jpg" alt="dummyImage" />
    <Card raised image="https://dummyimage.com/200x200/a8a7b2/ffffff.jpg" alt="dummyImage" />
    <Card raised image="https://dummyimage.com/200x200/a8a7b2/ffffff.jpg" alt="dummyImage" />
    <Card raised image="https://dummyimage.com/200x200/a8a7b2/ffffff.jpg" alt="dummyImage" />
  </Card.Group>

        </div>
    )


}

export default PackageCards();