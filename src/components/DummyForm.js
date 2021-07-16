import { useState } from "react";


function DummyForm({trainers}){

const [info, setInfo] = useState({trainers})

console.log(info)

    return(
        <>
            <ul>{ trainers.map(train => (
                <li>{train.name}</li>
            ))}
            </ul>
        </>
    )


}

export default DummyForm;