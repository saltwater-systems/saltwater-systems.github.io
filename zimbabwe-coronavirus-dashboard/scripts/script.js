$(document).ready(function (){
  M.AutoInit();
  loadData();
 //setInterval(loadData, 6000000);
  
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
   //$('#info').append("<tr><td>"+data.message3[index]['name']+"</td><td>"+data.message3[index]['cases']+"</td><td>"+data.message3[index]['death']+"</td></tr>");

    }

    

    function stateCol(new_value) {
      if(new_value == 0){hrecolor = "#fafafa"; return hrecolor};
      if (new_value > 0) {hrecolor="#ffcdd2"; return hrecolor};
    }
    
    var dataset = [];

    for (let index = 0; index < data.message2.length; index++) {
       dataset.push({lat: data.message2[index]['lat'], lng: data.message2[index]['lng'], name: data.message2[index]['name'], description: data.message2[index]['description']});
    }

  
     
      $('#loader').addClass('hide');
      loadChart(data);
      loadMap(data);
     
      break;
      case 'error':
      
      alert(data.message);
     
    }
  }).fail(function () {
    alert("You're Offline! Check Your Internet Connection.");
  })
}//End of loadData()

function loadMap(data) {
  var H = Highcharts,
    map = H.maps['countries/zw/zw-all'],
    chart;

var dataset = [];
    
    var json = data.message2;

    json.forEach(function (p) {
        p.z = p.population;
        dataset.push(p);
    });

    chart = Highcharts.mapChart('map-div', {
        title: {
            text: ''
        },

        credits: {
      enabled: false
  },

  exporting: {
      enabled: false
  },

  legend: {
    enabled: false
  },

        tooltip: {
            pointFormat: '{point.capital}<br>' +
                '{point.description}<br>' 
        },

        series: [{
            name: 'Basemap',
            mapData: map,
            borderColor: '#fafafa',
            nullColor: '#212121',
            showInLegend: false
        }, {
            name: 'Separators',
            type: 'mapline',
            data: H.geojson(map, 'mapline'),
            color: '#101010',
            enableMouseTracking: false,
            showInLegend: false
        }, {
            type: 'mapbubble',
            dataLabels: {
                enabled: false
            },
            name: '',
            data: dataset,
            maxSize: '7%',
            color: '#d50000'
        }]
    });
}//End od loadMap()

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

});

