import React, {useEffect, useState} from 'react'
import './Steps.css'


const Steps = props => {

    //const [step, setStep] = useState(0)

    const {step} = props;

    const deactivatedColor = "#BDBDBD"
    const activatedColor = "#f99f31"

    const [c1, setC1] = useState(deactivatedColor)
    const [c2, setC2] = useState(deactivatedColor)
    const [c3, setC3] = useState(deactivatedColor)
    const [c4, setC4] = useState(deactivatedColor)
    
    useEffect(() => {
        applyStyles()
        console.log("steps: ", step)
    }, [step])



    const applyStyles = () => {
        if (step <= 1){
            setC1(activatedColor)
            setC2(deactivatedColor)
            setC3(deactivatedColor)
            setC4(deactivatedColor)
        }
        if (step == 2){
            setC1(activatedColor)
            setC2(activatedColor)
            setC3(deactivatedColor)
            setC4(deactivatedColor)
        } else if (step === 3){
            setC1(activatedColor)
            setC2(activatedColor)
            setC3(activatedColor)
            setC4(deactivatedColor)

        } else if (step === 4) {
            setC1(activatedColor)
            setC2(activatedColor)
            setC3(activatedColor)
            setC4(activatedColor)
        }
    }


    return(
        <div className="container">

            <div className="container-steps">
                <div className="steps-wrapper">
                    <div className="step-process">
                        <div className="step-circle" style={{'background-color': c1}} >1</div>
                        <div className="step-line"> </div>
                        <div className="step-circle" style={{'background-color': c2}} >2</div>
                        <div className="step-line"> </div>
                        <div className="step-circle" style={{'background-color': c3}} >3</div>
                        <div className="step-line"> </div>
                        <div className="step-circle" style={{'background-color': c4}}>4</div>

                    </div>
                </div>

            <div className="step-text" >
                <div className="stext">Identificacion</div>
                <div className="space"></div>
                <div className="stext">Especialidad</div>
                <div className="space"></div>
                <div className="stext">Busqueda</div>
                <div className="space"></div>
                <div className="stext">Solicitar cita</div>
            </div>

            </div>
        </div>
        
    )
}

export default Steps;