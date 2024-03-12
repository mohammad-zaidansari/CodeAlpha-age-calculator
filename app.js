function calculateAge() {
    let birthdateString = document.getElementById("DOBdate").value;
    let birthdate = new Date(birthdateString);
    let currentDate = new Date();

    if(birthdateString == ""){
        alert("Please enter your date of birth");
    }else{
        let ageInMilliseconds = currentDate - birthdate;

        let ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
        let ageInMonths = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12)));
        let ageInDays = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24));
    
        let resultElement = document.getElementById("result");
        resultElement.innerHTML = `Your age is ${ageInYears}  years, ${ageInMonths} months, and ${ageInDays} days`;
    }

    
}