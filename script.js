let inputField=document.querySelector("#text");
let para=document.querySelector(".p");
let button = document.querySelector("#btn")

function clickPress(event) {
    if (event.key == "Enter") {
        let str =inputField.value;
        let arr=[...str];
        let j=arr.length;
       if(arr==""){
        para.innerHTML="Please Enter Value"

       }
        for(let i=0;i<j;i++){
           
            if(arr[i]===arr[j-1]){
                j--;   
                console.log("palind");
                para.innerHTML="Palindrome"
            }
            else{
                para.innerHTML="Not a Palindrome"
                console.log("NAP");
                break;
            }
    
        }
    }
}

function Checkbtn(){
    let str =inputField.value;
    let arr=[...str];
    let j=arr.length;
    if(arr=="")
        para.innerHTML="Please Enter Value";
    for(let i=0;i<j;i++){
       
        if(arr[i]===arr[j-1]){
            j--;   
            console.log("palind");
            para.innerHTML="Palindrome"
        }
        else{
            para.innerHTML="Not a Palindrome"
           
            console.log("NAP");
            break;
        }

    }
}

