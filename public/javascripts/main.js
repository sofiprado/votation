
$('.icon').on('click', function(){
console.log($(this).attr('data-id'))
$.ajax({
  method: 'PUT', 
  url: "http://localhost:3000/home",
  data: {
   id: $(this).attr('data-id')
  }
})
})






