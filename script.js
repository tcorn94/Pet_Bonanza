
// https://api.edamam.com/search?q=chicken&app_id=${appID}&app_key=${appKey}
//https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
//https://cors-anywhere.herokuapp.com/
//https://api.edamam.com/search?q=chicken&app_id=8762ceb6&app_key=87390675c80ad08855757b2abc17feb2&from=0&to=3&calories=591-722&health=alcohol-free"
var appID = "8762ceb6";
var appKey = "87390675c80ad08855757b2abc17feb2";
var data;
var queryURL = `https://api.edamam.com/search?q=chicken&app_id=${appID}&app_key=${appKey}`;
fetch(queryURL, {
  method: "GET"
}).then(function(response) {
  data = response.json();
  console.log(response.json());
});

// APIKey = AIzaSyAaRcgnx00VKEpGmrynTsPq4RnDQNBQU9M

// var title = "garlic";
// var queryURL = "https://www.themealdb.com/api/json/v1/1/list.php?c="+ title;
// //how to access API data (make http request)
// fetch({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
//   console.log(response);//comes back as an object, then we traverse through object to call info

// });





