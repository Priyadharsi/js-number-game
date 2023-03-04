let randonum=document.getElementById("randomno");
let ranbutton=document.getElementById("ran-btn");

function magicnum(){
    
      return Math.floor(Math.random() * 10);
}

let count;
function generateno(){
        count=0;
        let getnum=magicnum();
        randonum.innerText=getnum;
    
        
        let getranno=[];

        while (getranno.length < 10){
            let setrand=magicnum();
            if (!getranno.includes(setrand)){
                getranno.push(setrand);
                console.log(setrand);
            };

        };
        
        displaybox(getranno);
    };
    ranbutton.addEventListener("click",generateno);


let displaynum=document.getElementById("numbers");

  function displaybox(data){
    displaynum.innerHTML="";

      data.forEach(function(elm,i,arr){
        let colelm=document.createElement("div");
        let getnos=document.createElement("h4");

        colelm.setAttribute("class","col-3 secretno");
        colelm.setAttribute("data-target",elm);
        getnos.setAttribute("class","displayno");
        colelm.onclick = checkingbox;

        getnos.innerText=elm;

        colelm.appendChild(getnos);
        displaynum.appendChild(colelm);
    });
    
  };

  function checkingbox(a){
    count +=1;
    let numb=a.target.dataset.target
    if (count<=3){
        if (numb == randonum.innerText){
            a.target.classList.add("active-success");
            alert("Your guess is right");

        }else{
            a.target.classList.add("active-loss");
            // alert("Better luck next time");
        };
    };
  };
  



















































   




