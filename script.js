const input = document.getElementById('input-box');
const list = document.getElementById("List-box")


document.addEventListener('DOMContentLoaded', function() {
    const bunt = document.getElementById ('bu')
    bunt.addEventListener('click' , out)

});

function out() {
    // alert('deu bom')
    if(input.value === ""){
        alert('you must write someting!');
    }  else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        let span  = document.createElement('span')
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    input.value = '';
    save();
}

list.addEventListener('click' , function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        save();
    } 
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        save();
    }

}, false);


    // Enviando para o LocalStorage

        function save (){
            localStorage.setItem('data' , list.innerHTML);
        }

        function Task() {
            list.innerHTML = localStorage.getItem('data'); 
            
        };
        Task();