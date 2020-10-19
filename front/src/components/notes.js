import React,{useState,useEffect, Fragment} from 'react';
import Note from './note';
import Fade from 'react-reveal/Fade';

const Notes = () => {

    const [nit,setnit] = useState([])
    const [isloading,setisloading] = useState(true)
    const [titled,settitled] = useState('');
    useEffect(()=>{
        fetch("http://localhost:5000/api/all")
            .then(resp=>resp.json())
                .then(data=>{
                    console.log(data)
                    setnit(data)
                    setisloading(false)
                })
    },[])

    const delpost = (id,dataid) => {
        console.log(id);
        fetch(`http://localhost:5000/api/del/${dataid}`,{
            method:'delete',
            headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'}
        })
        
        let newnit= Object.assign([],nit);
        newnit.splice(id,1);
        setnit(newnit); 

    }

    const updatepost = (id,dataid) => {
        let ti=prompt();
        settitled(ti);
        fetch(`http://localhost:5000/api/add/${dataid}/${ti}`,{
            method:'put',
            headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }
        })

        const index = nit.findIndex((nyt)=>{
            return nyt.id === id
        });
        console.log(index);
        console.log(titled);
        let upnit = Object.assign({},nit[parseInt(index+id+1)])
        upnit.title = ti;
        console.log(nit[parseInt(index+id+1)])
        let truenit = Object.assign([],nit);
        console.log(truenit);
        truenit[parseInt(index+id+1)] = upnit;

        setnit(truenit);


        
    }

    console.log(`nit's val ${nit}`)
    return(
        <Fragment>
        <h2 class="hg">My Notes</h2>    
        {    isloading ? 
            <div class="over">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            </div>
            :(
        
        <Fade left><div className="notebox">
            {   
                 nit.map((nyte,id)=>{
                    return(
                         <Note 
                            title={nyte.title}
                            id={nyte.id}
                            compoid={id}
                            delclick={(e)=>delpost(id,nyte.id)}
                            upclick={(ton)=>updatepost(id,nyte.id)}
                        /> 
                    )
                })
            }
        </div>
        </Fade>)
        }
        </Fragment>)
}
export default Notes;