// var tweet = prompt("compose your tweet:");
// var tweetcount = tweet.length;
// alert("you have written " + tweetcount + " characters, you have " + (140 - tweetcount) + "characters remainig.");
  
// var tweet = prompt("compose your message:");
// // tweet.slice(0,139);
// diteminetedtweet = tweet.slice(0,100);
// alert(diteminetedtweet); 


// alert(prompt("compose your message:").slice )

// var idname = prompt("what is your name ?");
// idname = idname.toUpperCase();
// alert("Hello," + idname.toUpperCase());




// var idname = prompt("what is your name ?");
// var firstchar = idname.slice(0,1);
// var uppercasefirstchar = firstchar.toUpperCase();
// var therest = idname.slice(1,idname.length);
// var lowercasetherest = therest.toLowerCase();
// var capitalised = uppercasefirstchar + lowercasetherest
// alert("Hello," + capitalised);


// var dogage = prompt("How old is your dog?");
// var humanage = (dogage - 2) * 4 + 21;
// alert("your dog is " + humanage + "!");


// function lifeWeeks(age) {

//     var yearsRemainig = 90 - age;
//     var days = yearsRemainig * 365;
//     var weeks = yearsRemainig * 52;
//     var months = yearsRemainig * 12;

//     console.log("you have " + days + "days," + weeks +"weeks, and " + months +"months left. ");

// }

// lifeWeeks(20);

function bmicalculator(weight,height){
    var bmi = weight / Math.pow(height , 2);
    return Math.round(bmi);
}

var bmi = bmicalculator(65 , 1.8);
console.log(bmi);

