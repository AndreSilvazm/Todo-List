interface PropsHome {

    ArrListas: string[]
}

function ShowTasks({ ArrListas }: PropsHome) {


    return (
        <div>
            <ol>

                {ArrListas.length == 0? '' : ArrListas.map((e) => {
                    return (

                        <li>
                            {e}
                        </li>
   
                    )
                })}


            </ol>
        </div>
    )
}

export default ShowTasks