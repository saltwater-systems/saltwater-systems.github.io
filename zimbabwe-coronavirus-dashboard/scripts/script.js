$(document).ready(function (){
  M.AutoInit();
  loadData();
 //setInterval(loadData, 6000);
  
  function loadData() {
   	$.get('data.json', function(data) {
    switch(data.type) {
      case 'success':
        
     if (data.message[11]['active'] != 0) {$('#overall_active').text(data.message[11]['active']).css('color', '#ef6c00')}else{$('#overall_active').text('0').css('color', '#fafafa')};
     if (data.message[11]['new'] != 0) {$('#overall_new').text(data.message[11]['new']).css('color', '#d50000')}else{$('#overall_new').text('0').css('color', '#fafafa')};
     if (data.message[11]['deaths'] != 0) {$('#overall_deaths').text(data.message[11]['deaths']).css('color', '#d50000')}else{$('#overall_deaths').text('0').css('color', '#fafafa')};
    if (data.message[11]['recovered'] != 0) {$('#overall_recovered').text(data.message[11]['recovered']).css('color', '#388e3c')}else{$('#overall_recovered').text('0').css('color', '#fafafa')};
  
    $('#info').html('');  
    for (let index = 0; index < data.message3.length; index++) {
      $('#info').append("<tr><td>"+data.message3[index]['name']+"</td><td>"+data.message3[index]['cases']+"</td><td>"+data.message3[index]['active']+"</td><td>"+data.message3[index]['death']+"</td><td>"+data.message3[index]['recovered']+"</td></tr>");
    }

    

    function stateCol(new_value) {
      if(new_value == 0){hrecolor = "#fafafa"; return hrecolor};
      if (new_value > 0) {hrecolor="#ffcdd2"; return hrecolor};
    }
    
    var dataset = [];

    for (let index = 0; index < data.message2.length; index++) {
       dataset.push({lat: data.message2[index]['lat'], lng: data.message2[index]['lng'], name: data.message2[index]['name'], description: data.message2[index]['description']});
    }

  
     window.simplemaps_countrymap_mapdata={
      main_settings: {
        //General settings
        width: "responsive", //or 'responsive'
        background_color: "#fafafa",
        background_transparent: "yes",
        border_color: "#212121",
        pop_ups: "detect",
        
        //State defaults
        state_description: "0 Active <br> 0 Deaths <br> 0 Recovered",
        state_color: "#fafafa",
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
        label_color: "#fafafa",
        label_hover_color: "#fafafa",
        label_size: 22,
        label_font: "Arial",
        hide_labels: "no",
        hide_eastern_labels: "no",
       
        //Zoom settings
        zoom: "no",
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
        popup_color: "#fafafa",
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
          description: data.message[4]['new']+" Cumulative Cases<br>"+data.message[4]['active']+" Active <br> " + data.message[4]['deaths'] +" Deaths <br>" + data.message[4]['recovered'] + " Recovered",
          color: stateCol(data.message[4]['new']),
          hover_color: "default",
          url: "default"
        },
        ZWE525: {
          name: "Harare",
          description: data.message[2]['new']+" Cumulative Cases<br>"+data.message[2]['active']+" Active <br> " + data.message[2]['deaths'] +" Deaths <br>" + data.message[2]['recovered'] + " Recovered",
          color: stateCol(data.message[2]['new'])
        },
        ZWE526: {
          name: "Matabeleland North",
          description: data.message[8]['new']+" Cumulative Cases<br>"+data.message[8]['active']+" Active <br> " + data.message[8]['deaths'] +" Deaths <br>" + data.message[8]['recovered'] + " Recovered",
          color: stateCol(data.message[8]['new'])
        },
        ZWE527: {
          name: "Midlands",
          description: data.message[10]['new']+" Cumulative Cases<br>"+data.message[10]['active']+" Active <br> " + data.message[10]['deaths'] +" Deaths <br>" + data.message[10]['recovered'] + " Recovered",
          color: stateCol(data.message[10]['new'])
        },
        ZWE528: {
          name: "Mashonaland East",
          description: data.message[5]['new']+" Cumulative Cases<br>"+data.message[5]['active']+" Active <br> " + data.message[5]['deaths'] +" Deaths <br>" + data.message[5]['recovered'] + " Recovered",
          color: stateCol(data.message[5]['new'])
        },
        ZWE529: {
          name: "Manicaland",
          description: data.message[3]['new']+" Cumulative Cases<br>"+data.message[3]['active']+" Active <br> " + data.message[3]['deaths'] +" Deaths <br>" + data.message[3]['recovered'] + " Recovered",
          color: stateCol(data.message[3]['new'])
        },
        ZWE530: {
          name: "Matabeleland South",
          description: data.message[9]['new']+" Cumulative Cases<br>"+data.message[9]['active']+" Active <br> " + data.message[9]['deaths'] +" Deaths <br>" + data.message[9]['recovered'] + " Recovered",
          color: stateCol(data.message[9]['new'])
        },
        ZWE531: {
          name: "Bulawayo",
          description: data.message[1]['new']+" Cumulative Cases<br>"+data.message[1]['active']+" Active <br> " + data.message[1]['deaths'] +" Deaths <br>" + data.message[1]['recovered'] + " Recovered",
          color: stateCol(data.message[1]['new'])
        },
        ZWE532: {
          name: "Masvingo",
          description: data.message[7]['new']+" Cumulative Cases<br>"+data.message[7]['active']+" Active <br> " + data.message[7]['deaths'] +" Deaths <br>" + data.message[7]['recovered'] + " Recovered",
          color: stateCol(data.message[7]['new'])
        },
        ZWE533: {
          name: "Mashonaland West",
          description: data.message[6]['new']+" Cumulative Cases<br>"+data.message[6]['active']+" Active <br> " + data.message[6]['deaths'] +" Deaths <br>" + data.message[6]['recovered'] + " Recovered",
          color: stateCol(data.message[6]['new'])
        }
      },
      locations:  dataset
    };

    
    
     $.getScript("countrymap.js").done(function() {
      $('#loader').addClass('hide');
      loadChart(data);
     });
     
      break;
      case 'error':
      
      alert(data.message);
     
    }
  }).fail(function () {
    alert("You're Offline! Check Your Internet Connection.");
  })
}//End of loadData()

function loadChart(data) {
  var categoriesdata = [];
  var casesdata = [];
  var deathdata = [];
  var recovereddata = [];

    for (let index = 0; index < data.message4.length; index++) {
       categoriesdata.push(data.message4[index]['date']);
       casesdata.push(Number(data.message4[index]['new']));
       deathdata.push(Number(data.message4[index]['death']));
       recovereddata.push(Number(data.message4[index]['recovered']));
    }
    
  Highcharts.chart('highchart1', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Zimbabwe Covid-19 Incident Chart'
    },
    subtitle: {
        text: 'Data Source: Ministry of Health and Child Care, WHO'
    },
    xAxis: {
        categories: categoriesdata,
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Cumulative Number of People'
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ''
    },
    credits: {
      enabled: false
  },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Confirmed Cases',
        data: casesdata,
        color: '#ff8a65'
    },
     {
        name: 'Deaths',
        data: deathdata,
        color: '#ef5350'
    }, {
        name: 'Recovered',
        data: recovereddata,
        color: '#81c784'
    }]
});
            
}//End of loadChart()

})

var hello = 7;