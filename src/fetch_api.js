const URL = "https://api.thecatapi.com/v1/images/search?limit=10";

// let promise = fetch(URL);
// console.log(promise);
const btn = document.querySelector("#randImg");
const img = document.querySelector("#fetchImg");
//using asyn await
const getData = async () => {
  console.log("Getting the Data.....");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  let random = Math.floor(Math.random() * data.length);
  console.log(data);
  console.log(data[random].url);
  img.src = data[random].url;
  //
  //   console.log(Math.random(data[1].url));
};

btn.addEventListener("click", getData);
