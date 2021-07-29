import TrainerCard from './TrainerCard'


import TrainerInfoCard from './TrainerInfoCard'


function TrainerInfo({trainers}){

    const trainerDetail = trainers.map((trainer) => {
        return (
            <TrainerInfoCard 
            key = {trainer.id}
            trainerInfo={trainer}
            />
        )
    })

    return (
        <>
        {trainerDetail}
        </>
    )

}

export default TrainerInfo;