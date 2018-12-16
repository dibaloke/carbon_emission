let myChart = document.getElementById('myChart').getContext('2d');
let activity_chart = new Chart(myChart,{
type:'horizontalBar',//bar,horizontal bar,pie,line,doghnout, radar,polararea
data:{
    labels:['Natural Gas Heating','Water Use ','Electricity','Vehical Use'],
    datasets:[{
        label:'Activity',
        data:[34,56,78,90,89],
        backgroundColor:[ 'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)'
       ],
       borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'

  

    }]

         },
     options:{
          title:{
              display:true,
              text:'Carbon Emission Comparision of the Activities',
              fontSize:25
          }

     }    
});