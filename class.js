// / Requirements

// Implement a jQuery AJAX client for a simple REST service
// Build an application that uses AJAX to update a client
// Update an existing API resource from your client with new data
// Destroy an existing API resource from your client
console.clear()

// $('.clickme').click(function(){
//   reload();
// })
$(document).ready(function () {
  $('#refresh').click(function () {
    reload()
  })

  $('.delete').click(function () {
    relete()
  })

  function reload () {
      $.get('http://api.doughnuts.ga/doughnuts', function(datum){
          var revdatum = datum.reverse()
          // console.log(data)
            for (let i = 0; i < revdatum.length; i++) {
              $('#list').append('<li>' + revdatum[i].flavor + '-' + revdatum[i].style + '</li>' )
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.log(errorThrown)
        })
  }

  function relete () {
    $.delete('http://api.doughnuts.ga/doughnuts')
      .done(function (data){
        $('#list').html('')
        data.forEach( function(datum) {
          $('#list').append('<li>' + datum.flavor+ ' - ' + datum.style + ' <button class="delete">DELETE</button></li>')
        })

      }).fail(function(jqXHR, textStatus, errorThrown){
        console.log(errorThrown)
      });
  }

    $('#myForm').on("submit", function(event) {
    event.preventDefault();
    var data = $( this ).serialize()
    console.log( data );

    $.ajax({
    type: "POST",
    url: 'http://api.doughnuts.ga/doughnuts',
    data: data
    }).done(function(response){
        $('#list').append('<li>the best flavour is ' + response.myInput + '-' + response.myInput2 + '<button>DELETE</button><li>')
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log(errorThrown)
    });

  });

})
// function update() {
//   $.post('http://api.doughnuts.ga/doughnuts',)
// }
