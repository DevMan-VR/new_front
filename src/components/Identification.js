import React from 'react'
import './Identification.css'


const Identification = () => {

    return(
        <div>
            <div className="identify">
              

                <form>
                    <div>
                        <label>Nombre</label>
                        <input type="text"/>

                    </div>
                   
                    <div>
                        <label>Rut</label>
                        <input type="text"/>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default Identification;