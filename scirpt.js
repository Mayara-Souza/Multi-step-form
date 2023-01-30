
function moveToogle(){
    let toogle = document.querySelector(".btnToogle");

    toogle.classList.toggle("active");

    toogleOptions();
}

let currentOption = "monthly";
function toogleOptions(){
    let yearlyOptions = document.querySelectorAll(".yearly");
    let monthlyOptions = document.querySelectorAll(".monthly");

    if(currentOption === "monthly"){
        hideOptions(monthlyOptions);
        showOptions(yearlyOptions);
        currentOption = "yearly";
        console.log("mudando current options para anual");
        return;
    }

    if(currentOption === "yearly"){
        hideOptions(yearlyOptions);
        showOptions(monthlyOptions);
        currentOption = "monthly";
        console.log("mudando current options para mensal");
        return;
    }

}

function showOptions(showOpt){
    showOpt.forEach(option => {
        option.classList.add("active");
    })
    console.log("mostrando opções escolhidas.");
}

function hideOptions(hideOpt){
    hideOpt.forEach(option => {
        if(option.classList.contains("active") == true){
            console.log("ocultando opção anterior");
            // hideOpt.forEach(option => {
                console.log("removendo classe active de opções anteriores");
                option.classList.remove("active");
            
        }
    })
}