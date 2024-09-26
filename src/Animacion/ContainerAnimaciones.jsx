import { Animacion } from "./Animacion"
import "./Animacion.css"

function ContainerAnimaciones () {

    const Animaciones = []
    for (let i = 0; i < 200; i++) {
        Animaciones.push(<Animacion key={`a-${i}`}/>)            
    }
    return ( 
        <div className="container">
            {Animaciones}
        </div>

    )
}

export { ContainerAnimaciones};