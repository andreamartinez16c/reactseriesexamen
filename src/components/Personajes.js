import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios'
import { NavLink } from 'react-router-dom';

export default class Personajes extends Component {
    state= {
        personajes: [],
        status: false
    }

    loadPersonajes= () => {
        var request = "api/Series/PersonajesSerie/" + this.props.idserie
        var url = Global.urlSeries + request;
        axios.get(url).then(response => {
            this.setState({
                personajes: response.data,
                status: true
            })
        })
    }

    componentDidMount=() =>{
        this.loadPersonajes();
    }
  render() {
    return (
      <div>
        <h1>Personajes</h1>
        {
                this.state.status == true && 
                (
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.personajes.map((personaje, index) => {
                                    return (<tr key={index}>
                                        <td>{personaje.nombre}</td>
                                        <td><img style={{width: '150px'}} src={personaje.imagen}></img></td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                )
            }
      </div>
    )
  }
}
