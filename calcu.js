const display =document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach(button =>{
button.addEventListener('click',()=>
{
   let value = button.value;
    if(value === "x") value ="*";

    else if (value ==="c"){
      display .value = "";
    }
    else if (value ==="ce"){
        display.value=display.value.slice(0,-1);
    }
    else if (value === "="){
        try{
            display.value=eval(display.value);
        }
        catch{
            display.value = "error";
        }
    }
        else {
         display.value += value;
        }

});

});
