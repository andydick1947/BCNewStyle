for (let x=1; x<=7; x++){ 
  
  let z=`sidebtn${x}`;
  let y=document.getElementById(z);
  y.addEventListener("click",function(e){  

   if(z=="sidebtn1"){ 
      clean();
      myintro();
   }

   if(z=="sidebtn2"){ 
      clean()
      myloc()
   }

   if(z=="sidebtn3"){ 
      clean()
      mycttee()
   }

   if(z=="sidebtn4"){ 
      clean()
      mymeets()
   }

   if(z=="sidebtn5"){ 
      clean()
      myfees()
   }

   if(z=="sidebtn6"){ 
      clean()
      myres()
   }

   if(z=="sidebtn7"){ 
      clean()
      myarch()
   }

  })
  };

   function clean(){
      const cleanse = document.getElementById("mainsect");
      while (cleanse.hasChildNodes()) {
         cleanse.removeChild(cleanse.firstChild);
   }
}
function tgle(){
   const hamMenu = document.querySelector(".ham-menu");
   const offScreenMenu = document.querySelector(".off-screen-menu");

     hamMenu.classList.toggle("active");
     offScreenMenu.classList.toggle("active");
   };

   function myintro1(){
      const int1='<p style="color: black;font-weight:bold;font-size:30px;">INTRODUCTION</p>';
      const div1=document.createElement("div");
      const mydiv1=document.getElementById("mainsect");
      mydiv1.appendChild(div1);
      div1.innerHTML=int1;
}

function myintro(){
      const int='<p class="mytxt"><br>    The Bridge Section of the LMBC was founded in 2021 by two members of the Bowling Club - Gill Daniels and Jenny Young. Since then it has developed into a thriving club of up to seven tables, using an electronic scoring system to enter and produce the results.  The aim of the club is to provide a regular facility for Duplicate Contract Bridge in a welcoming and friendly environment for players of all standards</p>';
      const div=document.createElement("div");
      const mydiv=document.getElementById("mainsect");
      mydiv.appendChild(div);
      div.innerHTML=int;
}

function myloc1(){
   const loc1='<p style="color: black;font-weight:bold;font-size:30px;">LOCATION<br></p>';
   const div1=document.createElement("div");
   const mydiv1=document.getElementById("mainsect");
   mydiv1.appendChild(div1);
   div1.innerHTML=loc1;
}
function myloc(){
   const loc='<p class="mytxt"><br>The Bowling Club is next door to the Rugby Club,sharing the same Car Park. Access is directly off the roundabout on the turning that passes the surgery.</p>';
   const div=document.createElement("div");
   const mydiv=document.getElementById("mainsect");
   mydiv.appendChild(div);
   div.innerHTML=loc;

  const loc1='<img id="img2" src="images/lh.jpg"></img>';
   const div1=document.createElement("div");
   const mydiv1=document.getElementById("mainsect");
   mydiv1.appendChild(div1);
   div1.innerHTML=loc1;
}
function mycttee1(){
const cte1='<p  style="color: black;font-weight:bold;font-size:30px;">CLUB COORDINATORS</p>'
const div1=document.createElement("div");
const mydiv1=document.getElementById("mainsect");
mydiv1.appendChild(div1);
div1.innerHTML=cte1;
}

function mycttee(){
      const cte='<p class="mytxt"><br>The activities of the Club are coordinated by Gill Daniels and Jenny Young. Andy Dick undertakes the control and scoring of the Club sessions.';
      const div=document.createElement("div");
      const mydiv=document.getElementById("mainsect");
      mydiv.appendChild(div);
      div.innerHTML=cte;

  /* const cte1='<img id="img3" src="images/chimps.png"></img>';
   const div1=document.createElement("div");
   const mydiv1=document.getElementById("mainsect");
   mydiv1.appendChild(div1);
   div1.innerHTML=cte1;*/
}

function mymeets1(){
   const mts1='<p style="color: black;font-weight:bold;font-size:30px;">CLUB SESSION<br></p>';
      const div1=document.createElement("div");
      const mydiv1=document.getElementById("mainsect");
      mydiv1.appendChild(div1);
      div1.innerHTML=mts1;
}

function mymeets(){
   const mts='<p id="meets" class="mytxt">The club meets on Friday afternoon at 1.30, with play starting at 1.45 and aiming to finish by 4.30. There is also a Christmas Party each year.</p>';
      const div=document.createElement("div");
      const mydiv=document.getElementById("mainsect");
      mydiv.appendChild(div);
      div.innerHTML=mts;
}

function myfees1(){
   const fees1='<p style="color: black;font-weight:bold;font-size:30px;">FEES<br></p>';
      const div1=document.createElement("div");
      const mydiv1=document.getElementById("mainsect");
      mydiv1.appendChild(div1);
      div1.innerHTML=fees1;
}
function myfees(){
   const fees='<p class="mytxt">The Fees are paid annually in April. There is a Table charge for £2 per session for members.</p>';
      const div=document.createElement("div");
      const mydiv=document.getElementById("mainsect");
      mydiv.appendChild(div);
      div.innerHTML=fees;
}


function myres(){
      const res='<iframe id="frm1" src="res-mnths.html"></iframe>';
      const div=document.createElement("div");
      const mydiv=document.getElementById("mainsect");
      mydiv.appendChild(div);
      div.innerHTML=res;
}

function myarch(){
   /*   const arc='<iframe id="frm1" src="https://andydick1947.github.io/BCArchive/"></iframe>';*/
      const arc='<iframe id="frm1" src="TBD.html"></iframe>';
      const div=document.createElement("div");
      const mydiv=document.getElementById("mainsect");
      mydiv.appendChild(div);
      div.innerHTML=arc;
}

const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

for (let x=1; x<=7; x++){ 
  
   let z=`debtn${x}`;
   let y=document.getElementById(z);
   y.addEventListener("click",function(e){  
 
    if(z=="debtn1"){ 
       clean();
       myintro1();
       myintro();
       tgle()
    }
 
    if(z=="debtn2"){ 
       clean()
       myloc1()
       myloc()
       tgle()
   
    }
 
    if(z=="debtn3"){ 
       clean()
       mycttee1()
       mycttee()
       tgle()
    }
 
    if(z=="debtn4"){ 
       clean()
       mymeets1()
       mymeets()
       tgle()
    }
 
    if(z=="debtn5"){ 
       clean()
       myfees1()
       myfees()
       tgle()
    }
 
    if(z=="debtn6"){ 
       clean()
       myres()
       tgle()
    }
 
    if(z=="debtn7"){ 
       clean()
       myarch()
       tgle()
    }

   })
   }