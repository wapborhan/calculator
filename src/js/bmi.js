const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  // Result Show Hide
  // var card = document.getElementById("card-res");
  // card.style.display = "inline-block";

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
    document.querySelector(
      ".comment"
    ).innerHTML = `You are <span id="comment">Underweight</span>`;
  }
  if (BMI >= 18.5 && BMI < 25) {
    document.querySelector(
      ".comment"
    ).innerHTML = `You are <span id="comment">Healthy</span>`;
  }
  if (BMI >= 25 && BMI < 30) {
    document.querySelector(
      ".comment"
    ).innerHTML = `You are <span id="comment">Overweight</span>`;
  }
  if (BMI >= 30) {
    document.querySelector(
      ".comment"
    ).innerHTML = `You are <span id="comment">Obese</span>`;
  }
});

// Chart
var dom = document.getElementById("chart");
var myChart = echarts.init(dom);
var app = {};
option = null;

option = {
  series: [
    {
      type: "gauge",
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 100,
      splitNumber: 4,
      axisLine: {
        lineStyle: {
          width: 6,
          color: [
            [0.184, "#89b7d8"],
            [0.25, "#73c7a3"],
            [0.3, "#58D9F9"],
            [1, "#7CFFB2"],
          ],
        },
      },
      pointer: {
        icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
        length: "12%",
        width: 20,
        offsetCenter: [0, "-60%"],
        itemStyle: {
          color: "auto",
        },
      },
      axisTick: {
        length: 12,
        lineStyle: {
          color: "auto",
          width: 2,
        },
      },
      splitLine: {
        length: 20,
        lineStyle: {
          color: "auto",
          width: 5,
        },
      },
      axisLabel: {
        color: "#464646",
        fontSize: 20,
        distance: -60,
        formatter: function (value) {
          if (value > 0) {
            return "A";
          } else if (value > 6) {
            return "B";
          } else if (value > 70) {
            return "C";
          } else if (value === 0.125) {
            return "D";
          }
          return "";
        },
      },
      title: {
        offsetCenter: [0, "-25%"],
        fontSize: 30,
      },
      detail: {
        fontSize: 50,
        offsetCenter: [0, "0%"],
        valueAnimation: true,
        formatter: function (value) {
          return value + "%";
        },
        color: "auto",
      },
      data: [
        {
          value: 26,
          name: "BMI",
        },
      ],
    },
  ],
};

if (option && typeof option === "object") {
  myChart.setOption(option, true);
}
