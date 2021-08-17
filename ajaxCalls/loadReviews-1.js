//loadSkills

var xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'api/myReviews.php', true);

console.log(xhr2);

xhr2.onload = function(){
    if(this.status == 200){
        
        var review = JSON.parse(this.responseText);
        
        console.log(review);

        var output = '';

        for(var i in review){

            output +=   '<div class="testimonial bg-white swiper-slide">'+
                            '<div class="testimonial-head d-flex justify-content-between align-items-center mb-3">'+
                                '<div class="client-details">'+
                                    '<strong class="text-dark stronger">'+review[i].client_name+'</strong> <br>'+review[i].client_post+' at <a href="#" title="">'+review[i].client_company+'</a>'+
                                '</div>'+
                                '<div class="rating">'+
                                    '<ul class="rating-list list-inline d-flex">'+
                                        '<li><i class="fa fa-star text-primary"></i></li>'+
                                        '<li><i class="fa fa-star text-primary"></i></li>'+
                                        '<li><i class="fa fa-star text-primary"></i></li>'+
                                        '<li><i class="fa fa-star text-primary"></i></li>'+
                                        '<li><i class="fa fa-star text-primary"></i></li>'+
                                    '</ul>'+
                                '</div>'+
                            '</div>'+
                            '<blockquote class="m-0">'+
                                '<p class="m-0">'+review[i].testimonial+'</p>'+
                            '</blockquote>'+
                        '</div>';                

        }

        document.getElementById('my-reviews').innerHTML = output;

    }
}

xhr2.send();
    
