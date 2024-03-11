let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0]; //adding this line we can't select future date these are disable.
let result = document.getElementById("result");

function ageCal(){
    let dateOB = new Date(userInput.value);

    let d1 = dateOB.getDate();
    let m1 = dateOB.getMonth() + 1;
    let y1 = dateOB.getFullYear();

    let todayDate = new Date();

    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth() + 1;
    let y2 = todayDate.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;
       
    if(m2 >= m1){
        m3 = m2 = m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - m1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if(m3 < 0){
        m3 = 11;
        y3--; 
    }
    // console.log(y3, m3, d3);

    result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old`
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}
