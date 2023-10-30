import React, { Component } from 'react'
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import HomeSeries from './HomeSeries'
import MenuRutas from './MenuRutas'
import CreatePersonaje from './CreatePersonaje'
import ModificarPersonaje from './ModificarPersonaje'
import DetallesSerie from './DetallesSerie'
import Personajes from './Personajes'


export default class Router extends Component {

  render() {
    function DetallesSerieElement() {
        var {idserie} = useParams();
        return(<DetallesSerie idserie = {idserie} />)
    }
    function PersonajesElement() {
        var {idserie} = useParams();
        return(<Personajes idserie = {idserie} />)
    }
    return (
        <BrowserRouter>
        <MenuRutas />
        <Routes>
            <Route path='/' element={<HomeSeries/>}/>
            <Route path='/createPersonaje' element={<CreatePersonaje/>}/>
            <Route path='/updatePersonaje' element={<ModificarPersonaje/>}/>
            <Route path='/serie/:idserie' element={<DetallesSerieElement/>}/>
            <Route path='/personajes/:idserie' element={<PersonajesElement/>}/>
            {/* <Route path='/apuestas' element={<Apuestas/>}/>
            <Route path='/create' element={<CreateApuesta/>}/>
            <Route path='/equipo/:idequipo' element={<DetallesEquipoElement/>}/>
            <Route path='/jugadores/:idequipo' element={<JugadoresEquipoElement/>}/>
            <Route path='/detalles/:idjugador' element={<DetallesJugadorElement/>}/>
            <Route path='/*' element={<NotFound/>}/> */}
        </Routes>
    </BrowserRouter>
    )
  }
}
