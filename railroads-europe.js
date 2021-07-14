import { LitElement, html } from 'lit-element';
import mapboxgl from 'mapbox-gl';

const MAB_BOX_TIMEOUT = 60000000;
const MAPBOX_TOKEN =
  'pk.eyJ1IjoidGltb3I2NiIsImEiOiJja3F3ODczd3UwNTJ4MndueHBkdjB5c3dsIn0.68mu1Rk-3ZMPqlzBF_HknQ';

//1.
class MapBoxComponent extends LitElement {
  constructor() {
    super();
  }

  //2.
  firstUpdated() {
    this.initMap();
  }

  //3.
  createRenderRoot() {
    return this;
  }

  //4.
  initMap() {
    let options = {
      enableHighAccuracy: true,
      timeout: MAB_BOX_TIMEOUT,
      maximumAge: 0
    };
    this.buildMap();
  }

  buildMap() {
    mapboxgl.accessToken = MAPBOX_TOKEN;
  
    this.map = new mapboxgl.Map({
      container: 'railroads-map',
      style: 'mapbox://styles/timor66/ckr32cq3pemln18qspaqpkqiq',
      center: [23.5, 63.5],
      zoom: 4
    });
  }
   
  render() {
    return html`
      <div id="railroads-map"></div>
    `;
  }
} 

//Component registration
customElements.define('mapbox-component', MapBoxComponent);
    
