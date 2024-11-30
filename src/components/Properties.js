import React from 'react'
// import pressure from './resilience.png'
import air from './air.png'
import uv from './uv-index.png'
import wind from './wind.png'
import pressure from './pressure-Photoroom.png'

export default function Properties(props) {


    const cardStyle={
        width:"20%",
        minHeight:"110%",
        backdropFilter:"blur(20px)",
        backgroundColor: "rgba(255, 255, 255, 0)",
        boxShadow: "0px 0px 10px white",
        color:"white",
        borderRadius:"20px"
      }

  return (
    <div>
      <div className="row">
          <div className="d-flex justify-content-around" style={{width:"100%"}}>
            <div className="card" style={cardStyle}>
              <div className="card-body d-flex justify-content-around align-items-center flex-column" style={{width:"100%",minHeight:"100%"}}>
                <h5 className="card-title">Wind</h5>
                <img src={wind} alt='weather' style={{height:"50%",width:"50%", alignItems:"center"}}/>
                <h6 className="card-subtitle mb-2">{props.air}</h6>
              </div>
            </div>
            <div className="card" style={cardStyle}>
              <div className="card-body d-flex justify-content-around align-items-center flex-column" style={{width:"100%",height:"100%"}}>
                <h5 className="card-title">Humidity</h5>
                <img src={air} alt='weather' style={{height:"50%",width:"50%", alignItems:"center"}}/>
                <h6 className="card-subtitle mb-2">{props.humid}</h6>
              </div>
            </div>
            <div className="card" style={cardStyle}>
              <div className="card-body d-flex justify-content-around align-items-center flex-column" style={{width:"100%",height:"100%"}}>
                <h5 className="card-title">Pressure</h5>
                <img src={pressure} alt='weather' style={{height:"50%",width:"50%", alignItems:"center"}}/>
                <h6 className="card-subtitle mb-2">{props.pressure}</h6>
              </div>
            </div>
            <div className="card" style={cardStyle}>
              <div className="card-body d-flex justify-content-around align-items-center flex-column" style={{width:"100%",height:"100%"}}>
                <h5 className="card-title">UV-index</h5>
                <img src={uv} alt='weather' style={{height:"50%",width:"50%", alignItems:"center",color:"white"}}/>
                <h6 className="card-subtitle mb-2">{props.uv}</h6>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
