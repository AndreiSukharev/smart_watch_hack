<template>
  <div id="map"></div>
</template>

<script>
/* global google */
import $Scriptjs from 'scriptjs';
const GMAP_API_KEY = 'AIzaSyA99w9efBjkNyO1XuFnUDLUtI9Ktb7H4jo';

export default {
  name: 'Map',
  data() {
    return {
      map: null
    };
  },
  mounted() {
    $Scriptjs(
      `https://maps.googleapis.com/maps/api/js?key=${GMAP_API_KEY}&libraries=places`,
      () => {
        this.initMap();
      }
    );
  },
  methods: {
    initMap() {
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.78, lng: -73.974 },
        zoom: 10
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#map {
  width: 50vw;
  height: 30vw;
}
</style>
