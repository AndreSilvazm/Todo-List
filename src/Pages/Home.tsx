import {ChangeEvent, useState} from 'react'
import ShowTasks from '../Components/ShowTasks'


function Home(){

    const[Tarefa, setTarefa] = useState<string>('')
    const[lista, setlista] = useState<string[]>([])

    function CadastrarTarefa(){

        setlista([...lista, Tarefa])    
        console.log(lista)
        
    }

    function HandleTarefa(event: ChangeEvent<HTMLInputElement>){
        setTarefa(event.target.value)
    }

    return(
        <>
        
            <h1>Digite a próxima tarefa</h1>
            
                <label>
                    <input type="text" onChange={HandleTarefa} />
                </label>

                <button onClick={CadastrarTarefa}>Enviar</button>

                <ShowTasks ArrListas={lista}/>
        </>

    )

}

export default Home;