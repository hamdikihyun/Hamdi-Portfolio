//loadSkills

var xhr3 = new XMLHttpRequest();
xhr3.open('GET', 'api/myWorks.php', true);


xhr3.onload = function(){
    
    if(this.status == 200){
        
        var work = JSON.parse(this.responseText);
                
        var output = '';

        for(var i in work){

            output +=   '<div class="col-xl-4 col-md-6 filtr-item" data-category="'+work[i].projectCat+'">'+
                            '<div class="folio-card js-tilt">'+
                                //'<a href="portfolio.html" class="folio-link" title="Title Text">'+
                
                                '<a href="javascript:void(0);" onClick="portfolio('+work[i].workId+')" class="folio-link" title="Title Text">'+
                
                                    '<img class="folio-thumb" src="'+work[i].folioThumb+'" alt="">'+
                                    '<div class="card-overlay bg-primary">'+
                                        '<div class="content-wrap">'+
                                            '<h3 class="folio-card-title text-white">'+work[i].folioCardTitle+'</h3>'+
                                            '<p class="folio-card-desc text-light m-0">'+work[i].folioCardDesc+'</p>'+
                                        '</div>'+
                                    '</div>'+
                                '</a>'+
                            '</div>'+
                        '</div>'; 
            
            

        }

        document.getElementById('index-portfolio').innerHTML = output;
        
        

    }
}

xhr3.send();

// Link to product detail
function portfolio(workId) {
    
    
    var getUrl = window.location;
    var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

    localStorage.setItem("workId", workId);

    window.location.href = baseUrl + "/project.html?id=" + workId;

}
    
