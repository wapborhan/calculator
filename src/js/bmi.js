const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  // Result Show Hide
  var card = document.getElementById("card-res");
  card.style.display = "inline-block";

  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("Please fill out the input fields!");
    return;
  }

  // BMI = weight in KG / (height in m * height in m)
  height = height / 100;
  height = height * 30.48;

  let BMI = weight / (height * height);

  BMI = BMI.toFixed(2);

  

  if (BMI < 18.5) {
    document.querySelector("#bmi-result").innerHTML = "Your BMI is: " + BMI;
    document.querySelector(".comment").innerHTML = `You are <span id="comment">Underweight</span>`;
  }
  if (BMI >= 18.5 && BMI < 25) {
    document.querySelector("#bmi-result").innerHTML = "Your BMI is:" + BMI;
    document.querySelector(".comment").innerHTML = `You are <span id="comment">Healthy</span>`;
  }
  if (BMI >= 25 && BMI < 30) {
    document.querySelector("#bmi-result").innerHTML = "Your BMI is:" + BMI;
    document.querySelector(".comment").innerHTML = `You are <span id="comment">Overweight</span>`;
  }
  if (BMI >= 30) {
    document.querySelector("#bmi-result").innerHTML = "Your BMI is:" + BMI;
    document.querySelector(".comment").innerHTML = `You are <span id="comment">Obese</span>`;
  } 
  



