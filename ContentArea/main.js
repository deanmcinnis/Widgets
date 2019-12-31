var x = location.origin;
console.log(x);



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
    console.log("myData: ", myData);
   console.log("fieldtype: ",myData.questions[0].fieldtype);
    createHTML(myData);
    
  };

Handlebars.registerHelper("calculateAge", function(){
 return "testing 123";
});

function createHTML(jsonData) {
    var rawTemplate = document.getElementById("questionsTemplate").innerHTML;
    var compliledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compliledTemplate(jsonData);
  //  console.log(ourGeneratedHTML);
    var newcontentarea = document.getElementById("contentArea");
    newcontentarea.innerHTML = ourGeneratedHTML;
  //  console.log("here in createhtml");

};