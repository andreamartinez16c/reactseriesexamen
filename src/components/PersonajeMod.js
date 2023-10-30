import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class PersonajeMod extends Component {
    state= {
        personaje:[],
        status: false
    }

    findPersonaje = () => {
        var request = "api/Personajes/" + this.props.idpersonaje
        var url = Global.urlSeries+ request;
        axios.get(url).then(response =>{
            this.setState({
                serie: response.data,
                status: true
            })
        })
    }

    componentDidMount = () =>{
        this.findPersonaje();
    }

    componentDidUpdate = (oldProps)=> {
        if(this.props.idpersonaje != oldProps.idpersonaje){
            this.findPersonaje()
        }
    }
  render() {
    return (
      <div>
        {
            this.state.status == true && 
            (
                <div>
                    <h2>{this.state.personaje.nombre}</h2>
                    <img style={{width: '150px'}} src={this.state.personaje.imagen}></img>
                </div>
            )
        }
      </div>
    )
  }
}
