var red = 0;

function datas() {
    $.getJSON('api/getData.php', function(data) {
        red = data.message[10]['active'];
        var simplemaps_countrymap_mapdata={
            main_settings: {
              //General settings
                  width: "responsive", //or 'responsive'
              background_color: "#FFFFFF",
              background_transparent: "yes",
              border_color: "#212121",
              pop_ups: "detect",
              
                  //State defaults
                  state_description: data.message[1]['active']+"0 Active <br> 0 Deaths <br> 0 Recovered",
              state_color: "rgb(217,217,217)",
              state_hover_color: "#616161",
              state_url: "",
              border_size: 1.5,
              all_states_inactive: "no",
              all_states_zoomable: "yes",
              
                  //Location defaults
                  location_description: "Location description",
              location_url: "",
              location_color: "#d50000",
              location_opacity: 0.8,
              location_hover_opacity: 1,
              location_size: 25,
              location_type: "circle",
              location_image_source: "frog.png",
              location_border_color: "#FFFFFF",
              location_border: 2,
              location_hover_border: 2.5,
              all_locations_inactive: "no",
              all_locations_hidden: "no",
              
                  //Label defaults
                  label_color: "#d5ddec",
              label_hover_color: "#d5ddec",
              label_size: 22,
              label_font: "Arial",
              hide_labels: "no",
              hide_eastern_labels: "no",
             
                  //Zoom settings
                  zoom: "yes",
              manual_zoom: "yes",
              back_image: "no",
              initial_back: "no",
              initial_zoom: "-1",
              initial_zoom_solo: "no",
              region_opacity: 1,
              region_hover_opacity: 0.6,
              zoom_out_incrementally: "yes",
              zoom_percentage: 0.99,
              zoom_time: 0.5,
              
                  //Popup settings
                  popup_color: "white",
              popup_opacity: 0.9,
              popup_shadow: 1,
              popup_corners: 5,
              popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
              popup_nocss: "no",
              
                  //Advanced settings
                  div: "map",
              auto_load: "yes",
              url_new_tab: "no",
              images_directory: "default",
              fade_time: 0.1,
              link_text: "View Website"
            },
            state_specific: {
              ZWE524: {
                name: "Mashonaland Central",
                description: "0 Active <br> 0 Deaths <br> 0 Recovered",
                color: "default",
                hover_color: "default",
                url: "default"
              },
              ZWE525: {
                name: "Harare"
              },
              ZWE526: {
                name: "Matabeleland North",
              },
              ZWE527: {
                name: "Midlands"
              },
              ZWE528: {
                name: "Mashonaland East"
              },
              ZWE529: {
                name: "Manicaland"
              },
              ZWE530: {
                name: "Matabeleland South"
              },
              ZWE531: {
                name: "Bulawayo"
              },
              ZWE532: {
                name: "Masvingo",
              },
              ZWE533: {
                name: "Mashonaland West"
              }
            },
            locations: {
              "0": {
                lat: "-17.817778",
                lng: "31.044722",
                name: "Harare"
              },
              "1": {
                lat: "-20.1914",
                lng: "32.6334",
                name: "Chipinge"
              }
            }
          };
          return red;
    }); 
}

console.log(datas());