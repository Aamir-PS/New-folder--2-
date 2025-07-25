
    let body = document.querySelector("body");
    body.style.backgroundColor = "black";
    // id seecter mate
    let a = document.getElementById("bg-black");
    a.style.padding = "1vw";
    a.style.borderRadius = "0.5vw";
    a.style.margin = "3vw";
    a.style.backgroundColor = "white";
    a.style.color = "red";

    // class mate ek id jev chale ane 1 thi vathare hoy to aatype nu for kato biju lagava pade

    let elements = document.getElementsByClassName("list-item");

    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "white";
    };

    (function () {
      let favicon = document.createElement("link");
      favicon.rel = "icon";
      favicon.href = "data:, ";
      document.head.appendChild(favicon);
    });

    /*
    let paren = document.querySelectorAll(".parent");
    
     for (let i = 0; i < paren.length; i++) {        
        console.log(paren[i]);
        console.log(paren[i].children);
        console.log(paren[i].children[1].innerHTML);
        console.log(paren);        
     }
    */

    let parent = document.querySelector(".parent");

    for (let i = 0; i < parent.children.length; i++){
        console.log(parent.children[i].innerHTML);
    }
    console.log(parent.lastElementChild);
    console.log(parent);
    console.log(parent.children);
    console.log(parent.children[1].innerHTML);
/*
    for (let i = 0; i < parent.children.length; i++) {
      console.log (parent.children[i].innerHTML);      
    }
*/
    parent.children[1].style.color = "black"
    console.log(parent.firstElementChild);
    console.log(parent.lastElementChild);

    const dayOne =  document.querySelector('.day');
    console.log(dayOne);
    console.log(dayOne.parentElement);
    console.log(dayOne.nextElementSibling);

    console.log("NODES:", parent);