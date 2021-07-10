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
        <l-image-overlay
          :url="url"
          :bounds="bounds"
        ></l-image-overlay>
      </l-map>
    </client-only>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'LeafletMaps',

  data () {
    return {
      bounds: [[12, 12], [128, 128]],
      isScrolling: false,
      // crs: L.CRS.Simple,
      mapsLoading: false,
      mapOptions: {
        zoomSnap: 0.5,
        gestureHandling: true
      },
      interactive: true,
      filterHidden: true,
      url: '/img/mapTile.png',
      zoom: 0.2,
      center: [40, 128],
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
