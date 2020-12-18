$( document ).ready(function() {
   




var picture= [ 'https://media3.s-nbcnews.com/i/newscms/2020_45/3426206/201105-lebron-james-ew-1251p_2d98f600503a17c600b932a1dc9286d1.jpg',
       
              
              
              "https://i.insider.com/5f2f08f92618b960ac005e64?width=1100&format=jpeg&auto=webp",
              
              
              "https://en.as.com/en/imagenes/2020/07/07/football/1594128251_384220_noticia_normal.jpg"
     ];
picture.forEach(function(item,photo){
    
    $(".gallery").append("<img src=" + picture[photo] + ">");});

var itemTwo; 

$(".add").click(function() {
    var link = "https://cdn.vox-cdn.com/thumbor/U9stC7Vh54fvvUsDoMcJE1CQSlo=/0x0:5147x4282/1200x800/filters:focal(2140x769:2962x1591)/cdn.vox-cdn.com/uploads/chorus_image/image/66744471/usa_today_13421096.0.jpg">
    addImage(); 
        picture.push(itemTwo); 
  clearInput(); 
    
});

function addImage() {
      itemTwo = $(".item").val();
     $(".gallery").append("<img src= " + itemTwo + ">");
    
    
}

function clearInput() {
      $(".item").val("");
}


$('.gallery').empty();


picture.forEach(function(item,photo){
    
    $(".gallery").append("<img src=" + picture[photo] + ">");});
       });

