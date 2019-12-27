
var x = location.origin;
console.log(x);

    
   
async function getData() {
  var response = await fetch(window.location.origin + "/api/orders",
    {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    });
  var myData = await response.json();
  console.log("myData: ", myData);
  createHTML(myData);
}







function createHTML(jsonData) {
   var rawTemplate = document.getElementById("questionsTemplate").innerHTML;
//console.log("in function");
//console.log("json data = ",jsonData);
    var compliledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compliledTemplate(jsonData);
  //  console.log(ourGeneratedHTML);
    var newcontentarea = document.getElementById("contentArea");
    newcontentarea.innerHTML = ourGeneratedHTML;
};

