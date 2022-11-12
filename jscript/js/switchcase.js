function week(){
    let day = document.getElementById('input-a-day').value;

    switch (day){
        case "Monday":
            document.getElementById('result').innerHTML = "Come Monday by Jimmy Buffett"
            break;
        case "Tuesday":
            document.getElementById('result').innerHTML = "Sweet Tuesday Morning by Badfinger"
            break;
        case "Wednesday":
            document.getElementById('result').innerHTML = "Wednesday Morning, 3 A.M. by Simon and Garfunkel"
            break;
        case "Thursday":
            document.getElementById('result').innerHTML = "Like A Summer Thursday by Eddie McGee"
            break;
        case "Friday":
            document.getElementById('result').innerHTML = "Last Friday Night (T.G.I.F.) by Katy Perry"
            break;
        case "Saturday":
            document.getElementById('result').innerHTML = "Saturday Nights Alright (For Fighting) byElton John"
            break;
        case "Sunday":
            document.getElementById('result').innerHTML = "Will You Be Staying After Sunday by Peppermint Rainbow"
            break;
        }
}

console.log("---------------------------------------");
console.log("Connection testing");
console.log("---------------------------------------");