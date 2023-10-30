import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class DetallesSerie extends Component {
    state= {
        serie: [],
        status: false
    }

    findSerie = () => {
        var request = "api/Series/" + this.props.idserie
        var url = Global.urlSeries+ request;
        axios.get(url).then(response =>{
            this.setState({
                serie: response.data,
                status: true
            })
        })
    }

    componentDidMount = () =>{
        this.findSerie();
    }

    componentDidUpdate = (oldProps)=> {
        if(this.props.idserie != oldProps.idserie){
            this.findSerie()
        }
    }
  render() {
    return (
      <div>
        <h1>Detalles Serie</h1>
        {
            this.state.status == true && 
            (
                <div>
                    <h2>{this.state.serie.nombre}</h2>
                    <img style={{width: '150px'}} src={this.state.serie.imagen}></img>
                    <h6>Puntuacion:{this.state.serie.puntuacion}</h6>
                    <NavLink className="btn btn-dark" to={"/personajes/" + this.state.serie.idSerie}>Personajes</NavLink>
                </div>
            )
        }
      </div>
    )
  }
}
