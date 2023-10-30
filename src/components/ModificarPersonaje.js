import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { Navigate } from "react-router-dom";
import DetallesSerie from "./DetallesSerie";
import PersonajeMod from "./PersonajeMod";

export default class ModificarPersonaje extends Component {
  selectSerie = React.createRef();
  selectPersonaje = React.createRef();

  state = {
    series: [],
    serieId: 0,
    personajes: [],
    personajeId: 0,
    statusSeries: false,
    statusPersonaje: false,
    statusPut: false,
    satatusUpdate: false
  };

  loadSeries= () => {
    var request= "api/Series"
    var url= Global.urlSeries + request;
    axios.get(url).then(response =>{
       this.setState({
        series: response.data,
        statusSeries: true
       })
    })
  }

  loadPersonaje= () => {
    var request= "api/Personajes"
    var url= Global.urlSeries + request;
    axios.get(url).then(response =>{
       this.setState({
        personajes: response.data,
        statusPersonaje: true
       })
    })
  }

  componentDidMount=()=> {
    this.loadSeries()
    this.loadPersonaje()
  }

  changeSerie=()=> {
    this.setState({
        serieId: this.selectSerie.current.value
    })
  }

  changePersonaje=()=> {
    this.setState({
        personajeId: this.selectPersonaje.current.value
    })
  }

  updatePersonaje = (e) => {
    e.preventDefault();
    var request = "api/Personajes/" + this.selectPersonaje.current.value + "/" + this.selectSerie.current.value;
    var url = Global.urlSeries + request

    axios.put(url).then((response)=> {
        this.setState({
            statusUpdate: true
        })
    })

  };

  render() {
    return (
      <div>
        <h1>Modificar Personaje</h1>
        <form>
          <label>Serie</label>
          <select ref={this.selectSerie} onChange={(this.changeSerie)}>
            {
                    this.state.statusSeries == true && (
                        this.state.series.map((serie, index) => {
                            return (<option key={index} value={serie.idSerie}>{serie.nombre}</option>)
                        })
                    )
                }
          </select>
          <br />
          <label>Personaje</label>
          <select ref={this.selectPersonaje} onChange={this.changePersonaje}>
          {
                    this.state.statusPersonaje == true && (
                        this.state.personajes.map((personaje, index) => {
                            return (<option key={index} value={personaje.idPersonaje}>{personaje.nombre}</option>)
                        })
                    )
                }
          </select>
          <button id="botonModificar">Modificar</button>
        </form>
        <div>
            {
                (this.state.serieId !== 0 && (
                    <DetallesSerie idserie= {this.state.serieId}/> 
                ))
            }
        </div>
        <div>
            {
                (this.state.personajeId !== 0 && (
                    <PersonajeMod idpersonaje= {this.state.personajeId}/> 
                ))
            }
        </div>
      </div>
    );
  }
}
