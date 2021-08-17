//loadPortfolioCat

var xhr1 = new XMLHttpRequest();
xhr1.open('GET', 'api/myPortfolioCat.php', true);

console.log(xhr1);

xhr1.onload = function(){
    if(this.status == 200){
        
        var portfolioCat = JSON.parse(this.responseText);

        console.log(portfolioCat);
        
        var output = '';

        

            output += '<ul class="filters-list list-inline d-sm-flex justify-content-center mb-5">'+
                        '<li class="mixer current" data-filter="all" title="All"> <i class="icon-grid"></i> </li>'+
                        '<span id="oneCat" style="display: inherit;">'+
                        '</span>'+
                        '<li class="mixer" data-shuffle title="Random"> <i class="icon-shuffle"></i> </li>'+
                        '<li class="mixer" data-sortasc title="Ascending"> <i class="icon-arrow-up"></i> </li>'+
                        '<li class="mixer" data-sortdesc title="Descending"> <i class="icon-arrow-down"></i> </li>'+
                     '</ul>';
        
        document.getElementById('portfolioCat').innerHTML = output;

        // Show spec string (name)
        var oneCat =  '';

        //Show all
        for(var j in portfolioCat){
            oneCat += '<li class="category" data-filter="'+portfolioCat[j].catFilter+'"> '+portfolioCat[j].catName+' </li>';
        }

        //document.getElementById('portfolioCat').innerHTML = oneCat;
        $( "#oneCat" ).append(oneCat);

    }
}

xhr1.send();