//loadSkills

var xhr = new XMLHttpRequest();
xhr.open('GET', 'api/myAllWorks.php', true);


xhr.onload = function(){
    
    if(this.status == 200){
        
        var works = JSON.parse(this.responseText);
                
        var output = '';

        for(var i in works){

            output +=   '<div class="col-xl-4 col-md-6 filtr-item" data-category="'+works[i].projectCat+'">'+
                            '<div class="folio-card js-tilt">'+
                                //'<a href="portfolio.html" class="folio-link" title="Title Text">'+
                
                                '<a href="javascript:void(0);" onClick="portfolio('+works[i].workId+')" class="folio-link" title="Title Text">'+
                
                                    '<img class="folio-thumb" src="'+works[i].folioThumb+'" alt="">'+
                                    '<div class="card-overlay bg-primary">'+
                                        '<div class="content-wrap">'+
                                            '<h3 class="folio-card-title text-white">'+works[i].folioCardTitle+'</h3>'+
                                            '<p class="folio-card-desc text-light m-0">'+works[i].folioCardDesc+'</p>'+
                                        '</div>'+
                                    '</div>'+
                                '</a>'+
                            '</div>'+
                        '</div>'; 
            
            

        }

        document.getElementById('all-works').innerHTML = output;
        
        

    }
}

xhr.send();

// Link to product detail
function portfolio(workId) {
    
    
    var getUrl = window.location;
    var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

    localStorage.setItem("workId", workId);

    window.location.href = baseUrl + "/project.html?id=" + workId;

}
    
