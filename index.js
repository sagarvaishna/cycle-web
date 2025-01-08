

let str = "comport and  relaxation Bikes bulit-in";
let text = document.getElementById("text");

window.onload=() =>{
    for (let i = 0; i < str.length; i++) {
          let span = document.createElement("span");
          span.innerHTML = str[i];
       let textbar =   text.appendChild(span);
          textbar.style.transform = `rotate( ${9 *i}deg)`;
            
         
    }
}


// init Isotope

var $grid = $('.grid').isotope({
  
});
// filter functions


// bind filter button click
$('.port-item').on( 'click', '.am', function() {
 var filterValue = $( this ).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
 
$('.product-name').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', '.am', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


var setCurrentYear = function(){
  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();
 let elements = document.getElementsByClassName("current-year"); 

  for (const element of elements) {
  element.innerHTML = currentYear;
}

}

  
