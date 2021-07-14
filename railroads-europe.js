import { LitElement, html } from 'lit-element';
import mapboxgl from 'mapbox-gl';

const MAB_BOX_TIMEOUT = 60000000;
const MAPBOX_TOKEN =
  'sk.eyJ1IjoidGltb3I2NiIsImEiOiJja3IzMzRycXcyaTdyMnBvNjg2aTBrd2ZsIn0._mm5WH0gz1i-HphG1H3d0Q';

//1.
class MapBoxComponent extends LitElement {
  constructor() {
    super();
  }

  //2.
  firstUpdated() {
    this.initMap();
    this._requestUpdate();
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
    this.buildMap(position.coords);
  }

  buildMap(coords) {
    //6.
    mapboxgl.accessToken = MAPBOX_TOKEN;
  
    this.map = new mapboxgl.Map({
      container: 'railroads-map',
      style: 'mapbox://styles/timor66/ckr32cq3pemln18qspaqpkqiq',
      center: [15.5, 20],
      zoom: 4
    });
   
    render() {
      return html`
        <div id="railroads-map"></div>
      `;
    }
  
    
    //Component registration
    customElements.define('mapbox-component', MapBoxComponent);
  }  
}