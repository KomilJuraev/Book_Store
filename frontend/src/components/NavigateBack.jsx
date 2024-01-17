import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';


const NavigateBack = (props) => {
    const navigate = useNavigate();

    function handleClick() {
      navigate(props.path)  
    }
    
    return (
        <div>
            <a className="navigate-back" href={props.path} onClick={handleClick}><FontAwesomeIcon icon={faLeftLong} /></a>
        </div>
    )
}

export default NavigateBack;