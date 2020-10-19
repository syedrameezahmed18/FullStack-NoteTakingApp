import React,{Fragment,useState,useEffect} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const Addnotes = () => {

    let [result,setresult] = useState(false)

    useEffect(()=>{setresult(false)},[])
    const indicator = (e) => {
        e.preventDefault()
        setresult(true);
    }

    return(
        <Fragment>
        <div>
            <h2 className="hg">Add a note</h2>
        </div>
        <div className="pheonix">
            <form className="form-action" method="POST" action="http://localhost:5000/api/add">
                <div className="holder">
                <label>Enter note</label>
                <input type="text" placeholder="how was your day"
                 required max="99" className="form-control" name="title" />
                </div>
                <button className="btn btn-primary" onClick={(e)=>indicator} type="submit">Add</button>
            </form>
        </div>
        
        </Fragment>)
}

export default Addnotes;