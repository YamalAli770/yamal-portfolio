import React from 'react'
import {FaTools} from 'react-icons/fa'


const Maintenance = () => {
  return (
    <div className="maintenance">
        {/* <img src="images/toolbox.png" alt="Maitenance Image" /> */}
        <FaTools size={'20rem'} color={'red'} />
        <h2 className="maintenance-header">Website under maintenance....</h2>
        <p className="maintenance-text-1">Our website is currently undergoing scheduled maintenance.</p>
        <p className="maintenance-text-2">We should be back shortly. Thankyou for your patience.</p>
    </div>
  )
}

export default Maintenance