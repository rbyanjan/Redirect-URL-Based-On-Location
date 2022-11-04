<template>
  <br />
  <div>    
    <h1>User Location Page</h1>
    <section style="position:relative;z-index:1;">
      <div class="addressform">
        <form>
          <div class="error" v-show="error">{{ error }}</div>
          <div>
            <div>
              <input id="autocomplete" class="address" type="text" placeholder="Enter you Address" v-model="address" />
              <i @click="locatorButtonPressed"></i>
            </div>
            <!-- <button class="ui button">Go</button> -->
          </div>
        </form>
      </div>
    </section>
    <section id="map"></section>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            address: "",
            error: "",
            lat: "",
            lng: ""
        }
    },
    //mounted is called whenever dom is ready
    async mounted() {
        // let autocomplete = new google.maps.places.Autocomplete(
        //     document.getElementById("autocomplete"),
        //     {
        //         bounds: new google.maps.LatLngBounds(
        //             new google.maps.LatLng(32.779167,-96.808891)
        //         )
        //     }
        // );

        // autocomplete.addListener("place_changed", () => {
        //     let place = autocomplete.getPlace();
        //     console.log(place);
        //     this.showUserLocationOnTheMap(place.geometry.location.lat(), place.geometry.location.lng());
        // })        
    },
    methods: {
        locatorButtonPressed() {
            const geocoder = new google.maps.Geocoder();        
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        // this.getAddressFrom(position.coords.latitude, position.coords.longitude);
                        this.lat = position.coords.latitude;
                        this.lng = position.coords.longitude;
                        // console.log(position.coords.latitude);
                        // console.log(position.coords.longitude);
                        // this.showUserLocationOnTheMap(position.coords.latitude, position.coords.longitude);
                        this.geocodeLatLng(geocoder);
                },
                error => {
                    this.error = "Unable to locate address. Please type your address manually.";
                    // this.error = error.message;
                    console.log(error.message);
                });
            } else {
                this.error = error.message;
                console.log("Your browser does not support geolocation API ");
            }
        },
        getAddressFrom(lat, long) {
            axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="
            + lat 
            + "," 
            + long 
            + "&key=" + this.map_Key)
                 .then(response => {
                     if (response.data.error_message) {
                         this.error = response.data.error_message;
                         console.log(response.data.error_message);
                     } else {
                         this.address = response.data.results[0].formatted_address;
                         console.log('Addres:', response.data.results[0].formatted_address);
                         console.log('State:', response.data.results[0].address_components[4].short_name);
                         console.log('data:', response.data.results[0]);
                     }
                 })
                 .catch(error => {
                     this.error = error;
                     console.log(error.message);
                 })
        },
        showUserLocationOnTheMap(latitude, longitude) {
            // Create A Map Object
            let map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15, 
                center: new google.maps.LatLng(latitude, longitude),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            })

            // Add Marker
            new google.maps.Marker({
                position: new google.maps.LatLng(latitude, longitude),
                map: map
            })
        },
        geocodeLatLng(geocoder) {
            const latlng = {
                lat: this.lat,
                lng: this.lng
            };

            console.log(latlng);
  
            geocoder
              .geocode({ location: latlng })
              .then((response) => {
                if (response.results[0]) {
                    this.address = response.results[0].formatted_address;
                    this.state = response.results[0].address_components[4].short_name;
                    this.city = response.results[0].address_components[2].short_name;
                    //test
                    // this.state = 'MA';
                    // this.city = 'Easton'
                    // console.log('Addres:', response.data.results[0].formatted_address);
                    console.log('State:', response.results[0].address_components[4].short_name);
                    console.log('City:', response.results[0].address_components[2].short_name);
                    console.log('data:', response.results[0]);
                    
                //   const marker = new google.maps.Marker({
                //     position: latlng,
                //     map: map,
                //   });

                //   infowindow.setContent(response.results[0].formatted_address);
                //   infowindow.open(map, marker);
                } else {
                  window.alert("No results found");
                }
              })
              .catch((e) => window.alert("Geocoder failed due to: " + e));
        }
    }    
}
</script>

<style>
.addressform {
  width: 40%;
  padding: 10px;
  margin: 50px 30%;
  border-radius: 5px;
  background-color: #f2f2f2;  
}
.ui.button {
  background-color: #ff5a5f;
  color: white;
}
.error {
  margin: 8px 0;  
  color: red;
}
i {
  display: inline-block;
  background-color: black;
  border-radius: 50%;
  box-shadow: 0 0 px #888;
  border: 1px solid red;
  padding: 0.5em 0.5em;
}
.address {
  width: 90%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
#map {
    position: absolute;
    top:400px;
    right: 10px;
    bottom: 10px;
    left: 10px;
    background: red;
}
</style>