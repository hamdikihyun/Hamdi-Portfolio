//loadSkills

var xhr = new XMLHttpRequest();
xhr.open('GET', 'api/mySkills.php', true);

console.log(xhr);

xhr.onload = function(){
    if(this.status == 200){
        
        var skill = JSON.parse(this.responseText);
        
        console.log(skill);

        var output = '';

        for(var i in skill){

            output += '<div class="col-6 col-sm-4">'+    
                        '<div class="my-skill scroll-reveal">'+
                            '<div class="skill-label clearfix">'+
                                '<span class="percentage">'+skill[i].skillPercentage+'</span>'+
                                '<span class="title">'+skill[i].skillTitle+'</span>'+
                            '</div>'+
                            '<div class="skill-bar" data-width="'+skill[i].skillPercentage+'"></div>'+
                       '</div>'+
                  '</div>';

        }

        document.getElementById('my-skill').innerHTML = output;

    }
}

xhr.send();
    
