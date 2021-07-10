import Vue from 'vue'
// import { LTileLayer } from 'vue2-leaflet'
import LControlFullScreen from 'vue2-leaflet-fullscreen'
import LDrawToolbar from 'vue2-leaflet-draw-toolbar'
// import L from 'leaflet'
// import LGestureHandling from '~/mixins/LGestureHandling'
// // import { EditableMap } from 'vue2-leaflet-editable'
// import 'leaflet/dist/leaflet.css'

// Vue.component('l-gesture-handling', LGestureHandling)
Vue.component('LControlFullscreen', LControlFullScreen)
// Vue.component('l-tile-layer', LTileLayer)
// // Vue.component('editable-polygon', EditablePolygon)
// // Vue.component('editable-map', EditableMap)
Vue.component('LDrawToolbar', LDrawToolbar)
