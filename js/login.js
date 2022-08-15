//step 1:add click even handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    //step 2: get the email address inside the email input field
    // always remember to use .value to get text from as input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email)
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value; 
    console.log(password);
    //step 3: get password
    //3.a : set id on the html element
    //3.b : get the element
    //3.c : get the value from the element

})