var x = location.origin;
console.log(x);

// <script src="handlebars-v4.5.3.js"></script>

//async function getData() {
//  var response = await fetch(window.location.origin + "/api/orders",
 //   {
 //     method: "GET",
 //     headers: {
  //      "Accept": "application/json",
  //      "Content-Type": "application/json",
 //     },
//    });

//console.log("in this main area now");

async function getData() {
    var response = await fetch("testdata.json");
    var myData = await response.json();
//    console.log("myData: ", myData);
//   console.log("fieldtype: ",myData.questions[0].fieldtype);
    createHTML(myData);
    return(myData);
    
  };


 

Handlebars.registerHelper("calculateAge", function(age){
 var displayAge = age;
 if (displayAge > 30) {
   return displayAge + " (seriously old)";
 } else {
   return displayAge + " (not so old)";
 }
 
});


Handlebars.registerHelper("list", function(items, options) {
  const itemsAsHtml = items.map(item => "<li>" + options.fn(item) + "</li>");
  return "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>";
});


$(document).ready(function() {

  var characterTemplate = "{{first_name}}";
  var compiledCharacterTemplate = Handlebars.compile(characterTemplate);
  $.ajax("testdata.json").done(function(myData) {
    console.log("mydata = ", myData[0]);
    console.log(myData);
    $(".deanData").html(compiledCharacterTemplate(myData));
  });


  
  
  console.log(characterTemplate);
  

});



  function setFieldType(fieldType) {
    switch (fieldType) {
      case "ynquestion": 
       console.log("in yn switch");
       return "in yn";
       break;
      case "name": 
        console.log("in name switch");
        return "in name switch";
        break;
    }
  }


function createHTML(jsonData) {

  
  var i = 0;
  var text = "";
  var rawTemplate = "";
  console.log(jsonData.questions[i].fieldtype);

  for (;jsonData.questions[i];) {
    text == jsonData.questions[i].fieldtype + "<br>";
    console.log("looping though the questions");
  
    switch (jsonData.questions[i].fieldtype) {
      case "name":
        console.log("this is a name question");
        rawTemplate += document.getElementById("nameTemplate").innerHTML;
        console.log(rawTemplate);
        break;
      case "ynquestion":
        rawTemplate += document.getElementById("yesnoTemplate").innerHTML;
        console.log("this is a yes no question");
        console.log(rawTemplate);
        break;
      case "":
        console.log("this is an empty question");
        break;
      }
  
  
  
    console.log(text);
    i++;
  }

let newRawTemplate = document.getElementById("nameTemplate").innerHTML;
let newCompliledTemplate = Handlebars.compile(newRawTemplate);
let newGeneratedHTML = newCompliledTemplate(jsonData);
let newerContentArea = document.getElementById("newContentArea");
    newerContentArea.innerHTML = newGeneratedHTML;

 // console.log("here... raw template = " + rawTemplate);

  //  var rawTemplate = document.getElementById("deansTemplate").innerHTML;
    var rawTemplate = document.getElementById("questionsTemplate").innerHTML;
    var compliledTemplate = Handlebars.compile(rawTemplate);
  //  console.log("compiled template = ");
  //  console.log(compiledTemplate);
    var ourGeneratedHTML = compliledTemplate(jsonData);
  //  console.log(rawTemplate);
    console.log("generated html = " + ourGeneratedHTML);
    var newcontentarea = document.getElementById("contentArea");
    newcontentarea.innerHTML = ourGeneratedHTML;
  //  console.log("here in createhtml");


 


};