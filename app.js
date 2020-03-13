
document.querySelector('.getjokes').addEventListener('click',loaddata);

function loaddata(e){
 
    const number=document.getElementById('number').value;
    
    const xhr=new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

    xhr.onload=function(){
       const response=JSON.parse(this.responseText);
       
       let output='';
       if (response.type==='success'){
           response.value.forEach(function(i){
               output+=`<li>${i.joke}</li>`;
           })
       }
       else{
           output+=`<li>Something Went Wrong</li>`;
       }
       document.querySelector('.jokes').innerHTML=output;
    }
    

    xhr.send();
   e.preventDefault();
}
