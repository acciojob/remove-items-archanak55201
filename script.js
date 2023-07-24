//your JS code here. If required.
  const buttonre= document.querySelector("input[type=button]")
    const select= document.getElementById("colorSelect").children;
    buttonre.addEventListener("click",()=>{
       for(let i=0;i<select.length;i++){
                if(select[i].selected){
                    select[i].remove();
                }
        }
    })
