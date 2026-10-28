            const myWinner = ['Nripen Biswas','Kakoly Biswas',
            'Shamoly Biswas','Shibani Biswas','Nupur Biswas'];

            let box=document.getElementById('winners');
            for(let i=0; i<myWinner.length; i++){
           
           setTimeout(function() {
              box.innerHTML += '<p>' + myWinner[i] + ' - ' + i + '</p>';
            },i*1000)
          }
