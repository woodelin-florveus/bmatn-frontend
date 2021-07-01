import { Button, Form } from "semantic-ui-react"
import React, { useState } from "react"

function BookInfoForm(){

    const [infoForm, setInfoForm] = useState({name: "", 
    email: "", 
    location: "", 
    appointmentTime: "", 
    trainer: ""})

    const updateForm = event => {
        setInfoForm({
            ...infoForm, [event.target.name]: event.target.value
        })
    }


    const [count, setCount] = useState(1)

    return(
        <>

<Form autoComplete="off">

        {count === 1 ? (

<Form.Field>
<label>First and Last Name</label>
<input placeholder='name'
  name="name" 
  onChange={updateForm}
  value={infoForm.name}
/>
</Form.Field>

        ) : null}
 
            {count === 2 ? (
                <>
                <Form.Field>
                <label>Email</label>
                <input placeholder='Email'
                  name="email"
                  onChange={updateForm}
                  value={infoForm.email} />
              </Form.Field>
               
                <Form.Field>
                <label>Location</label>
                <input placeholder='Location' 
                name="location"
                onChange={updateForm}
                value={infoForm.location} />
                </Form.Field>
                </>
            ) : null}

            {count === 3 ? (

                <>

                <Form.Field>
                <label>Appointment Time</label>
                <input placeholder='Appointment-Time'
                name="appointment-time"
                onChange={updateForm}
                value={infoForm.appointmentTime}

                />
                </Form.Field>

                <Form.Field>
                <label>Choose Trainer</label>
                <input placeholder='Trainer' 
                name="trainer"
                onChange={updateForm}
                value={infoForm.trainer}
                />
                </Form.Field>

                <Button type='submit'>Submit</Button>
                </>

) : null}
</Form>
         

  <Button type='submit' 
  onClick={() => setCount(count - 1)}
  disabled={ count < 2}
  >Back</Button>
  
  
  <Button type='submit' 
  onClick={() => setCount(count + 1 )}
  disabled={count > 2}
  >
      Next</Button>




        </>
    )






}

export default BookInfoForm;