import React from "react"
import { Card, Icon, Image } from 'semantic-ui-react'

function PackageCards(){


    return(
        <div>

{/* <Card.Group itemsPerRow={4}>
    <Card raised image="https://dummyimage.com/200x200/d9d9d9/0011ff.jpg" alt="dummyImage" />
    <Card raised image="https://dummyimage.com/200x200/d9d9d9/0011ff.jpg" alt="dummyImage" />
    <Card raised image="https://dummyimage.com/200x200/d9d9d9/0011ff.jpg" alt="dummyImage" />
    <Card raised image="https://dummyimage.com/200x200/d9d9d9/0011ff.jpg" alt="dummyImage" />
    <Card raised image="https://dummyimage.com/200x200/d9d9d9/0011ff.jpg" alt="dummyImage" />
    <Card raised image="https://dummyimage.com/200x200/d9d9d9/0011ff.jpg" alt="dummyImage" />
    <Card raised image="https://dummyimage.com/200x200/d9d9d9/0011ff.jpg" alt="dummyImage" />
    <Card raised image="https://dummyimage.com/200x200/d9d9d9/0011ff.jpg" alt="dummyImage" />
  </Card.Group> */}


<h2 className="home-title" style={{textAlign:"center", padding:"1em"}}> Booking Packages </h2>

<Card.Group itemsPerRow={4}>
<Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="###">
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>

  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="###">
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>

  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="###">
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>

  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href="###">
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
</Card.Group>


<h2 className="home-title" style={{textAlign:"center", padding:"1em"}}> More From us !!! </h2>

<Image src='https://react.semantic-ui.com/images/wireframe/image.png' fluid />

        </div>
    )


}

export default PackageCards;