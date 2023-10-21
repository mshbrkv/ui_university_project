document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let isValid = true;
        let alertMessage="";

        const usernameInput = document.querySelector("#username");
        let username = usernameInput.value.trim();
        if (usernameInput.value.length < 3) {
           alertMessage+="Name must have at least 3 characters\n";
            isValid = false;
        }

        const passwordInput = document.querySelector("#password");
        let password = passwordInput.value;
        if (!/[A-Z]/.test(password)) {
           alertMessage+="The password must contain at least one capital letter.\n";
            isValid = false;
        }
        if (!/[a-z]/.test(password)) {
            alertMessage+="The password must contain at least one lowercase letter.\n";
            isValid = false;
        }
        if (!/\d/.test(password)) {
            alertMessage+="The password must contain at least one number.\n";
            isValid = false;
        }


        const birthDayInput=document.querySelector("#birthdate")
        let birthDay=birthDayInput.value
        console.log(birthDay)

        if (alertMessage!==""){
            alert(alertMessage)
        }
    });
});
