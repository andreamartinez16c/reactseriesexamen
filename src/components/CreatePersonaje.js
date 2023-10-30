import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";
import { Navigate } from "react-router-dom";

export default class CreatePersonaje extends Component {
  cajaNombre = React.createRef();
  cajaImagen = React.createRef();
  selectSerie = React.createRef();

  state = {
    status: false,
    series:[]
  };

  loadSeries= () => {
    var request= "api/Series"
    var url= Global.urlSeries + request;
    axios.get(url).then(response =>{
       this.setState({
        series: response.data,
        status: true
       })
    })
  }

  componentDidMount=()=> {
    this.loadSeries()
  }

  insertPersonaje = (e) => {
    e.preventDefault();
    var request = "api/Personajes";
    var url = Global.urlSeries + request;
    var nombre = this.cajaNombre.current.value;
    var imagen = this.cajaImagen.current.value;
    var idSerie = this.selectSerie.current.value;

    var personaje = {
      nombre: nombre,
      imagen: imagen,
      serie: idSerie,
    };

    axios.post(url, personaje).then((response) => {
      this.setState({
        status: true
      });
    });
  };
  render() {
    return (
      <div>
        <h1>Crear Personaje</h1>
        <form>
          <label>Nombre</label>
          <input type="text" id="cajaNombre" className="form-control" ref={this.cajaNombre}/>
          <br />
          <label>Imagen</label>
          <input type="text" id="cajaImagen" className="form-control" ref={this.cajaImagen}/>
          <br />
          <label>Serie</label>
          <select ref= {this.selectSerie}>
                {
                    this.state.status == true && (
                        this.state.series.map((serie, index) => {
                            return (<option key={index} value={serie.idSerie}>{serie.nombre}</option>)
                        })
                    )
                }
            </select>
          <button className="btn btn-danger" onClick={this.insertPersonaje}>Crear</button>
        </form>
      </div>
    );
  }
}
