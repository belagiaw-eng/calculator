const display =document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach(button =>{
button.addEventListener('click' , ()=>{

   let value = button.value;
    if(value === "x") {value ="*";
    }

    else if (value =="C"){
      display.value = " ";
      return;
    }
    else if (value =="CE"){
        display.value=display.value.slice(0 , -1);
        return;
    }
    else if (value == "="){
        try{
            display.value=eval(display.value);
        }
        catch{
            display.value = "error";
        }
        return;
    }
         display.value += value;
      
});

});
