import React, { useState,useEffect } from 'react';
import '../App.css';
import Fade from 'react-reveal/Fade'
import {FaCheck} from 'react-icons/fa';
import {BsFillTrashFill} from 'react-icons/bs';
import {FaPencilAlt} from 'react-icons/fa';

const Note = (props) => {

    const [status,setstatus] = useState('original');


    const checkmarks = () => {
        setstatus('done')
    }
    const reverse = () => {
        setstatus('original')
    }

    return(
        
        <div class={`notechild alert alert-${status==='original'?'secondary':'success'}`} role="alert">
            <div className="txt">
            <p>{`${parseInt(props.compoid)+1}) ${props.title}`}</p>
            </div>
            <div className="buttons">
                <button className="btn btn-success" onClick={checkmarks}><FaCheck /></button>
                <button className="btn btn-danger" onClick={props.delclick}><BsFillTrashFill onClick={reverse}/></button>
                <button className="btn btn-warning" onClick={props.upclick}><FaPencilAlt /></button>
            </div>
        </div>
        
        
        )
}

export default Note;