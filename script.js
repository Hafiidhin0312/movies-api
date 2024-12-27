$('.search-button').on('click', function () { 

  
  $.ajax({
    url:'https://www.omdbapi.com/?apikey=a9dbbaaf&s=' + $('.input-search').val(),
    success: result => {
      const movies = result.Search
      let cards = ``
  
      movies.forEach(m => {
        cards += moviecards(m)
      });
  
      $('.movies-container').html(cards);
      $('.detail-button').on('click', function () { 
  
        $.ajax({
  
          url : "https://www.omdbapi.com/?apikey=a9dbbaaf&i="+$(this).data('imdbid'),
          success : m => {

            const details= moviedetails(m)
  
  
  
          
          $('.movies-details').html(details);
  
        
          },

          error: (e)=>{
            console.log(e.responseText)
          }
  
        })
  
  
       })
  
  
    },
  
    error: (e)=>{
      console.log(e.responseText)
    }
  })
  
  
  
})



function moviecards(m) { 
 return `<div class="col-sm-12 col-md-4 col-lg-3">
 <div class="card" >
   <img class="" src="${m.Poster}" alt="">
   <div class="card-body">
     <h5 class="card-title">${m.Title}</h5>
     <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
     <a href="#" class="btn btn-primary detail-button" data-toggle="modal" data-target="#MovieDetailsModal" data-imdbid=${m.imdbID}>Details</a>
   </div>
 </div>
</div>
</div>`
 }
  
  
  function moviedetails(m) {  
     return ` <div class="container-fluid"> 
              <div class="row">
                <div class="col-sm-12 col-md-4 col-lg-3">
    
                <img src="${m.Poster}" class="img-fluid">
    
                </div>
    
                <div class="col-md">
                  <ul class="list-group">
                    <li class="list-group-item"><h4>${m.Title}=="N/A"?"-":${m.Title}</h4></li>
                    <li class="list-group-item"><strong>Director :</strong>${m.Director}</li>
                    <li class="list-group-item"><strong>Aktor :</strong>${m.Actors}</li>
                    <li class="list-group-item"><strong>Writer :</strong>${m.Writer}</li>
                    <li class="list-group-item"><strong>Plot :</strong><br>${m.Plot}</li>
                  </ul>
                </div>
              </div>
            </div>`
    }
