import { Button, Form } from "semantic-ui-react"
import React, { useState } from "react"

function BookInfoForm(){

    const [infoForm, setInfoForm] = useState({name: "", 
    email: "", 
    location: "", 
    appointmentTime: "", 
    trainer: ""})



    return(
        <>

<Form autoComplete="off">
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field autoComplete="off">
      <label>Email</label>
      <input placeholder='email' />
    </Form.Field>
    <Form.Field>
        <label>Location</label>
        <input placeholder="location" />
    </Form.Field>
    <Form.Field>
        <label>Appointment Time</label>
        <input placeholder="Appointment Time" />
    </Form.Field>
    <Form.Field>
        <label>Trainer</label>
        <input placeholder="Trainer" />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>


        </>
    )






}

export default BookInfoForm;