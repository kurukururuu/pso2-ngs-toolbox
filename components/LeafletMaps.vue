<template>
  <div id="map-wrap" class="h-full relative">
    <div
      v-if="mapsLoading"
      class="absolute bg-black opacity-75 w-full h-full flex items-center justify-center"
      style="z-index: 500"
    >
      <div class="text-4xl text-white">
        Loading...
      </div>
    </div>
    <client-only>
      <l-map
        ref="map"
        :zoom="zoom > 3 ? zoom : 3"
        :center="center"
        :options="mapOptions"
        @ready="mapReady"
        @draw:created="itemCreated"
        @draw:edited="itemEdited"
        @draw:deleted="itemDeleted"
      >
        <l-control-fullscreen
          position="topleft"
          :options="{ title: { false: 'Go big!', true: 'Be regular' } }"
        />
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </l-map>
    </client-only>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'LeafletMaps',
  props: {

  },
  data () {
    return {
      isScrolling: false,
      mapsLoading: false,
      mapOptions: {
        zoomSnap: 0.5,
        gestureHandling: true
      },
      filterHidden: true,
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 5,
      center: [-2.4381773, 115.4824783],
      drawControl: {}
    }
  },
  mounted () {
    this.mapsLoading = true
    setTimeout(() => {
      this.mapsLoading = false
    }, 1000)
  },
  methods: {
    mapReady (e) {
      this.map = this.$refs.map.mapObject // work as expected
    },
    itemCreated (e) {
      console.log('item created', e)
    },
    itemEdited (e) {
      console.log('item edited', e)
    },
    itemDeleted (e) {
      console.log('item deleted', e)
    }
  }
}
</script>
