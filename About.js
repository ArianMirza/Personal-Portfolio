 // Ensure the script runs after the DOM is fully loaded
 window.onload = function() {
  const data = {
    
      labels: [
          'Javascript',
          'HTML',
          'CSS',
          'Designing',
          'Coding',
          'Cycling',
          'Running'
      ],
      datasets: [{
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgb(255, 255, 255)',
          borderColor: 'rgb(255, 255, 255)',
          pointBackgroundColor: 'rgb(255, 255, 255)',
          pointBorderColor: 'rgb(255, 255, 255)',
          pointHoverBackgroundColor: 'rgb(255, 255, 255)',
          pointHoverBorderColor: 'rgb(255, 255, 255)'
      }, {
    
      }]
  };

  const config = {
    
      type: 'radar',
      data: data,
      options: {
          elements: {
            
              line: {
                
                  borderWidth: 3
              }
          }
      }
  };

  // Get the canvas element
  const ctx = document.getElementById('myChart').getContext('2d');

  // Create the chart
  new Chart(ctx, config);
};