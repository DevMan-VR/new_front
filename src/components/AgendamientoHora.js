import React, {useEffect, useState, Fragment} from 'react'
import Nav from './Nav'
import Steps from './Steps'
import Identification from './Identification'

import './AgendamientoHora.css'

const AgendamientoHora = () => {

    const [step, setStep] = useState(1)

    //crear un objeto para luego la cita

    useEffect(() => {
        if(step <= 1){
            setStep(1)
        } else if(step > 4) {
            //confirmar la hora
            setStep(4)
        }
    }, [step])

   

    const stepView = () => {
        switch (step) {
            case 1:
                return <Identification />
            case 2:
                return <p>vista 2</p>
            case 3:
                return <p>vista 3</p>
            case 4:
               return  <p>vista 4</p>
        }
    }

    return(
        <div className="container">
            <Nav />
            <Steps step={step} />

            {stepView()}

        <div className="botones">
            {
                step === 1 ? 
                (
                    <Fragment>
                        <button onClick={() => setStep(step -1)} disabled >Atras</button>
                        <button onClick={() => setStep(step +1)} >Siguiente</button>
                    </Fragment>
                    
                )
                :
                (
                    <Fragment>
                        <button onClick={() => setStep(step -1)} >Atras</button>
                        <button onClick={() => setStep(step +1)} >Siguiente</button>
                    </Fragment>
                    
                )
            }
            
            
        </div>
            


        </div>
        
        /*
        

        segun logic mostrar
            1. Identification
            2. Selection
            3. Search
            4. Confirm (solicitar cita)
        
        */
        
    )

}



export default AgendamientoHora;