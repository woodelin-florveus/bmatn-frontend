import { useState } from "react";


function DummyForm({trainers}){

const [info, setInfo] = useState({trainers})

console.log(info)

    return(
        <>
          <h1>Hello</h1>
        </>
    )


}

export default DummyForm;