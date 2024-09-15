
    let input = document.getElementById('inputBox');
    let buttons = document.querySelectorAll('button');
    let string = "";
    let arr = Array.from(buttons);   // to need all numbers
        arr.forEach(button => {
        button.addEventListener('click', (e) => {  //to see what happens when you click on buttons
            if (e.target.innerHTML == '=') {
                string = eval(string);  // eval is in-built function to calculate all maths function
                input.value = string;
            }

            // below is for all clear bar to earse everything
            else if (e.target.innerHTML == 'AC') {
                string = "";
                input.value = string;
            }

            // below is for delete one digit number
            else if (e.target.innerHTML == 'DEL') {
                string = string.substring(0, string.length - 1);
                input.value = string;
            }

            //below add strings to the input bar 
            else {
                string += e.target.innerHTML;
                input.value = string;
            }

        })
    })
