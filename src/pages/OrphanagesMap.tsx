import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

import mapMarker from '../images/map-mark.svg';
import '../styles/pages/orphanages-map.css'

function OrphanagesMap() {
  return (
      <div id="page-map">
          <aside>
          <header>
              <img src={mapMarker} alt="Happy"/>
              <h2>Ecolha um orfanato no mapa</h2>
              <p>Muitas crianças estão esperando a sua visita :)</p>
          </header>

          <footer>
              <strong>Ceará</strong>
              <span>Fortaleza</span>
          </footer>
          </aside>

          <Map center={[-4.9376451,-37.9759293]} zoom={15} style={{width: '100%', height: '100%'}}>
              <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </Map>

          <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#FFF"/>
          </Link>
      </div>
  )
}

export default OrphanagesMap;