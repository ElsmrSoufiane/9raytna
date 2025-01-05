import { style } from 'framer-motion/client';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { centres , villes ,cartiers} from './data';
import './App.css';
function ChercheP({ l, setL2, initial }) {
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setL2(
      l.filter((centre) =>
        centre.professeur.some((prof) => prof.toLowerCase().includes(searchTerm))
      )
    );
  };

  return (
    <>
      <h1 className="text-center" style={{ color: "purple" }}>Chercher par Professeur</h1>
      <div className="rech">
        <div className="input-group mb-2" style={{ width: "40%" }}>
          <div className="input-group-prepend">
            <div
              className="input-group-text"
              style={{ borderRadius: "0", paddingBottom: "13px" }}
            >
              <i style={{ marginTop: "5px" }} className="fas fa-search"></i>
            </div>
          </div>
          <input
            className="form-control"
            type="text"
            placeholder="Nom du professeur"
            onChange={handleSearch}
          />
        </div>
        <button
          style={{ cursor: "pointer" }}
          className="btn btn-primary-gradient rounded-pill py-2 px-4 ms-3"
          onClick={initial}
        >
          Initialiser
        </button>
      </div>
    </>
  );
}
function Rech(props){
  return (<>
  <h1 className='text-center' style={{color:"purple"}} >Chercher par nom du centre</h1><div className='rech'>
    <div  className="input-group mb-2" style={{width:"40%"}}>
        <div className="input-group-prepend">
          <div className="input-group-text"  style={{borderRadius:"0",paddingBottom:"13px"}} ><i style={{marginTop:"5px"}}  className='fas fa-search'></i></div>
        </div>
     <input className='form-control' type='text'  onChange={(e)=>props.change(e)} id="inlineFormInputGroup" placeholder="nom du centre"></input>
     </div>
  <button onClick={props.initial} style={{cursor:"pointer"}}  className="btn btn-primary-gradient rounded-pill py-2 px-4 ms-3" >initialiser</button></div>
  </>
  )
}
function Filter(props){
  
  return (<><h1 className='text-center' style={{color:"purple"}} >filtrer par ville ou quartier</h1>
  <div className='rech'>
    <h3 className='text-light'>ville:</h3>
  <select className='select form-control' style={{width:"20%"}} onClick={(e)=>props.handleV(e.target.value)} onChange={(e)=>props.handleV(e.target.value)} >{villes.map((e,i)=>{
    return <option value={e.nom} key={i} >{e.nom}</option>
  })} </select>
   <h3 className='text-light'>quartier:</h3>
  <select className='select form-control' style={{width:"20%"}} onClick={(e)=>props.handleC(e.target.value)} onChange={(e)=>props.handleC(e.target.value)} >{cartiers.filter(e=>{
    return e.ville==props.ville
  }).map((e,i)=>{
     return <option value={e.nom} key={i} >{e.nom}</option>
  })}</select> 
  <button style={{cursor:"pointer"}}  className="btn btn-primary-gradient rounded-pill py-2 px-4 ms-3" onClick={props.initial} >initialiser</button>
  </div></>)
}
function Trouver(props){
  const [n,setN]=useState();
  const [g,setG]=useState();
return(<><h1 className='text-center' style={{color:"purple"}} >choisis un group</h1><div className='rech'>
   <h3 className='text-light'>niveau:</h3>
<select className='select form-control' style={{width:"20%"}} onClick={(ev)=>setN(ev.target.value)} onChange={(ev)=>setN(ev.target.value)}  >{props.centre.niveaux.map((e,i)=>{
  return <option key={i} value={e.id}>{e.nom}</option>
})} </select>
 <h3 className='text-light'>group:</h3>
<select className='select form-control' style={{width:"20%"}} onClick={(ev)=>setG(ev.target.value)} onChange={(ev)=>setG(ev.target.value)}  >{n && props.centre.niveaux.find(e=>{
  return e.id==n
}).groups.map((e,i)=>{
  return (<option key={i} value={e.emploi} >{e.nom}</option>)
  
})} </select>

</div>
<br/ >
{g  && <img style={{width:"90%",margin:"0 auto",borderRadius:"0 0 20px 20px",border:"1px gray solid",display:"block"}}  
    src={g}
    /> }

</>)
}
const Card = (props) => {
  return (
    <motion.div initial={{ x: -200 }} // Start off-screen to the left
    animate={{ x: 0 }}    // Move to the center of the screen
    transition={{
      type: "spring",
      stiffness: 100,  // Controls the rigidity of the spring
      damping: 20,     // Controls the "bounciness"
    }} className="card" style={{ width: '50%' }}>
      <img
        className="card-img-top"
        src= {props.centre.image}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.centre.titre}</h5>
        <p className="card-text">
         {props.centre.description}
        </p>
        <center> <a onClick={()=>props.voire(props.centre.id)} style={{cursor:"pointer"}} className="btn btn-primary-gradient rounded-pill py-2 px-4 ms-3 " href='#section'>voire</a></center>
       
          
        
      </div>
    </motion.div>
  );
};
const Table = (props) => {
  return (
    <table className="table text-center">
     
      <tbody>
      <tr>
        <td>ville</td>
        <td>{props.centre.ville}</td>
        </tr>
        <tr>
        <td>cartier</td>
        <td>{props.centre.cartier}</td>
        </tr>
        <tr>
        <td>localisation</td>
        <td><a href={props.centre.localisation}   className="btn btn-primary-gradient rounded-pill py-2 px-4 ms-3" >visiter</a></td>
        </tr>
        <tr>
        <td>niveaux</td>
        <td>{props.centre.niveaux.map(e=>{
          return e.nom+" /";
        })}</td></tr>
         <tr><td>professeurs</td>
        <td>{props.centre.professeur.map(e=>{
          return e+" /";
        })}</td>
        </tr>
        <tr>
        <td>contact</td>
        <td>{props.centre.contact}</td>
        </tr>
      </tbody>
    </table>
  );
};
function Nav(props){
  return (<>
  <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="#" className="navbar-brand p-0">
            <h1 className="m-0">9raytna</h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              <a  className={props.mode === "principale" ? "nav-item nav-link active" : "nav-item nav-link"}  onClick={()=>props.setMode("principale")} style={{cursor:"pointer"}}>Principale</a>
              <a  className={props.mode === "scolaire" ? "nav-item nav-link active" : "nav-item nav-link"}  onClick={()=>props.setMode("scolaire")} style={{cursor:"pointer"}}>Centres scolaires</a>
              <a   className={props.mode === "langues" ? "nav-item nav-link active" : "nav-item nav-link"}  onClick={()=>props.setMode("langues")} style={{cursor:"pointer"}}>centres des  langues</a>
            
            </div>
            <a style={{cursor:"pointer"}}  href='https://www.instagram.com/soufianeasmar6/profilecard/?igsh=MXZkZGgzY3VqOWJ6NA==' className="btn btn-primary-gradient rounded-pill py-2 px-4 ms-3 d-none d-lg-block">contacter nous</a>
          </div>
        </nav>
  </>)
}
function El(props){
  const [m,setM]=useState("");
 
 
  return (<motion.div
    initial={{ x: -200 }} // Start off-screen to the left
    animate={{ x: 0 }}    // Move to the center of the screen
    transition={{
      type: "spring",
      stiffness: 100,  // Controls the rigidity of the spring
      damping: 20,     // Controls the "bounciness"
    }}
  style={{border:"1px gray solid",margin:"10px", borderRadius:"20px 20px 0 0",paddingBottom:"10px"}}>
 
    <img style={{width:"100%",margin:"0 auto",borderRadius:" 20px 20px 0 0"}}  
    src={props.centre.image}
    />
    <h1 className='text-center' style={{color:"purple"}}>{props.centre.titre}</h1>
  <div style={{display:"flex",justifyContent:"space-evenly"}}>
  <a style={{cursor:"pointer"}} onClick={()=>setM("info")}  className="btn btn-primary-gradient rounded-pill py-2 px-4 ms-3">informations</a>
  <a style={{cursor:"pointer"}} onClick={()=>setM("emploi")}   className="btn btn-primary-gradient rounded-pill py-2 px-4 ms-3">emploi</a>
  </div>
  { m=="info" &&  <Table centre={props.centre}   /> }
  {m=="emploi" && <Trouver centre={props.centre} />}
  </motion.div>)
}
function Section(){
  return (<>
 <div className="container-xxl position-relative p-0" id="section">
        

        <div className="container-xxl bg-primary hero-header">
          <div className="container px-lg-5">
            <div className="row g-5">
              <div className="col-lg-8 text-center text-lg-start">
                <h1 className="text-white mb-4 animated slideInDown">votre guide des centres</h1>
                <p className="text-white pb-3 animated slideInDown">Maintenant, tu peux filtrer les centres par ville et quartier et avoir toutes les informations sur le centre.
<br></br>
                  <b>Développé par Lasmar Soufiane</b>
                </p>
                
                <a style={{cursor:"pointer"}}  href='https://www.instagram.com/soufianeasmar6/profilecard/?igsh=MXZkZGgzY3VqOWJ6NA==' className="btn btn-primary-gradient rounded-pill py-2 px-4 ms-3 ">contacter nous</a>
                <br></br><br></br><br></br><br></br>
              </div>
              <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end wow fadeInUp" data-wow-delay="0.3s">
                <div className="owl-carousel screenshot-carousel">
                  <img className="img-fluid" src="img/screenshot-1.png" alt="" />
                  <img className="img-fluid" src="img/screenshot-2.png" alt="" />
                  <img className="img-fluid" src="img/screenshot-3.png" alt="" />
                  <img className="img-fluid" src="img/screenshot-4.png" alt="" />
                  <img className="img-fluid" src="img/screenshot-5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>)
}
function About(){
  return (<>
    <div className="container-xxl py-5" id="about">
        <div className="container py-5 px-lg-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="text-primary-gradient fw-medium">About App</h5>
              <h1 className="mb-4">#1 App For Your Fitness</h1>
              <p className="mb-4">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex">
                    <i className="fa fa-cogs fa-2x text-primary-gradient flex-shrink-0 mt-1"></i>
                    <div className="ms-3">
                      <h2 className="mb-0">1234</h2>
                      <p className="text-primary-gradient mb-0">Active Install</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                  <div className="d-flex">
                    <i className="fa fa-comments fa-2x text-secondary-gradient flex-shrink-0 mt-1"></i>
                    <div className="ms-3">
                      <h2 className="mb-0">1234</h2>
                      <p className="text-secondary-gradient mb-0">Clients Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" className="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill mt-3">Read More</a>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid wow fadeInUp" data-wow-delay="0.5s" src="img/about.png" alt="About App" />
            </div>
          </div>
        </div>
      </div></>)
}
const App = () => {
  const [mode,setMode]=useState("principale");
  const [l,setL]=useState(centres);
  const [l2,setL2]=useState(l);
  const [id,setId]=useState();
  const [titre,setTitre]=useState();
  const [ville,setVille]=useState();
  const [cartier,setCartier]=useState();
  function initial(){
    if(mode=="principale"){
      setL2(l)
    }else if(mode=="scolaire"){
    setL2(l.filter(e=>{
      return e.type=="scolaire"
    }))
    }else{
      setL2(l.filter(e=>{
        return e.type=="langues"
      }))
    }
    setL2(l)
  }
  function handleC(ep){
  
    setCartier(ep);
    setL2(l.filter(e=>{
      return e.cartier==cartier
    }))
  }
  function handleV(ep){
    
setVille(ep);
setL2(l.filter(e=>{
  return e.ville==ville
}))
  }
  function voire(idd){
    setId(idd)
  }
  useEffect(()=>{
    if(mode=="principale"){
      setL2(l)
    }else if(mode=="scolaire"){
    setL2(l.filter(e=>{
      return e.type=="scolaire"
    }))
    }else{
      setL2(l.filter(e=>{
        return e.type=="langues"
      }))
    }
  },[mode])
  useEffect(()=>{
    setId()
  },[mode])
 function Change(v){
 
  setTitre(v.target.value)
  setL2(l.filter(e=>{
    return e.titre.includes(titre)
  }))
 }
  return (
   
    <div className="container-xxl bg-white p-0">
      {console.log(cartier)}
      {console.log(ville)}
      {console.log(titre)}
      {console.log(l)}
      {console.log(l2)}
      <Nav setMode={setMode} mode={mode} />
       <Section />

      { id ? <El centre={l.find(e=>{ return e.id==id })} mode={mode} />:""}
      <ChercheP l={l} setL2={setL2} initial={initial} /> 
      <Rech change={Change} initial={initial} />
      <Filter initial={initial} handleV={handleV} handleC={handleC}  ville={ville} />
     <div style={{display:'flex',justifyContent:"space-evenly",width:"100%"}}>

      {
         l2.map((e,i)=>{
          return ( 
            <Card  voire={voire}   key={i} centre={e}  />
          )
         })
      }
     </div>
    
 
    </div>
  );
}

export default App;
