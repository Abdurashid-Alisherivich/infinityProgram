let parsed = "";
let x = 0;
let right = 0;
let wrong = 0;
let myObject = [
  {
    id: 1,
    name: "for",
    code: `
            const a = 6;
            let s = 1;
            for(let i = 0; i <= a; i++)
            s += i
            console.log(s)
            `,
    result: 22
  },
  {
    id: 2,
    name: "for",
    code: `
            const n = 7;
            let s = 0;
            for(let i = 0; i <= n; i++) 
            if(i % 2 === 1)
            s += i
            console.log(s)
            `,
    result: 16
  },
  {
    id: 3,
    name: "for",
    code: `
            const n = 8;
            let s = 0;
            for(let i = 1; i <= n; i++) 
            if(n % i === 0)
            s += i
            console.log(s)
            `,
    result: 15
  },
  {
    id: 4,
    name: "for",
    code: `
            const n = 8;
            let s = 0;
            for(let i = 1; i <= n; i++) 
            if(i % 2 === 1)
            s += 1
            console.log(s)
            `,
    result: 4
  },
  {
    id: 5,
    name: "for",
    code: `
            const n = 4;
            let s = 0;
            for(let i = 0; i <= n; i++) 
              s *= i
              console.log(s)
              `,
    result: 0
  },
  {
    id: 6,
    name: "for",
    code: `
            const n = 4;
            let s = 1;
            for(let i = 1; i <= n; i++) 
            s *= i
            console.log(s)
            `,
    result: 24
  },
  {
    id: 7,
    name: "for",
    code: `
            const n = 10;
            let s = 0;
            for(let i = 2; i <= n; i++){
              let b = true;
              for(let j = 2; j < i; j++)
              if(i % j === 0) {
                b = false;
                break;
              }
              if(b) s += i
            }
            console.log(s)
            `,
    result: 17
  },
  {
    id: 8,
    name: "for",
    code: `
            const n = 10;
            let s = 0;
            for(let i = 1; i <= n; i++){
              let k = 0;
              for(let j = 1; j < i; j++)
              if(i % j === 0) k++;
              
              if (k === 1) s+= i;
            }
            console.log(s)
            `,
    result: 17
  },
  {
    id: 9,
    name: "for",
    code: `
            const n = 5;
            let s = 1;
            let i = 2;
            for(let k = 1; k <= n; k++) 
            s *= i
            console.log(s)
            `,
    result: 32
  },
  {
    id: 10,
    name: "for",
    code: `
            let s = 1, a;
            const n = 2;
            a = n;
            for(let k = 1; k <= n; k++) 
            s *= a
            console.log(s)
            `,
    result: 4
  },
  {
    id: 11,
    name: "for",
    code: `
            const n = 7;
            let s = 0;
            for(let k = 1; k <= n; k++){
              if (k % 5 === 0)
                continue;
                s += k;
            }
            console.log(s)
            `,
    result: 23
  },
  {
    id: 12,
    name: "for",
    code: `
            let s = 0, i,n;
            n = 5;
            for(i = 1; i <= n; i++) 
            if(i % 2 === 1)
            s += i
            else
            s += 2 * i
            console.log(s)
            `,
    result: 21
  },
  {
    id: 13,
    name: "for",
    code: `
            let s = 0, i, n;
            n = 9;
            for(i = 1; i <= n; i++) 
            switch (i % 5) {
              case 0: s+= i;
              break;
              default: s++;
            }
            console.log(s)
            `,
    result: 13
  },
  {
    id: 14,
    name: "for",
    code: `
            let s = 0, i, n 
            n = 7;
            for(i = 1; i <= n; i++) 
            switch (i % 10) {
              case 0:
              case 2:
              case 4:
              case 6:
              case 8: s+= i;
              break;
              default: s++  
            }
            console.log(s)
            `,
    result: 16
  },
  {
    id: 14,
    name: "for",
    code: `
            let s = 0, n;
            n = 5;
            for(let i = 0; i <= n; i++) 
            s += i
            s *= 2
            console.log(s)
            `,
    result: 30
  },
  {
    id: 15,
    name: "for",
    code: `
            let s = 0, i, k = 1, n; 
            n = 5;
            for(i = 1; i <= n; i++) 
            s += k
            k += i
            console.log(s)
            `,
    result: 5
  },
  {
    id: 16,
    name: "for",
    code: `
            let s = 0, i, k = 1, n; 
            n = 2;
            for(i = 1; i <= n; i++) 
            k += i;
            s += k
            console.log(s)
            `,
    result: 4
  },
  {
    id: 17,
    name: "for",
    code: `
            let s = 0, k = 1, n; 
            n = 4;
            for(let i = 1; i <= n; i++){
               k += i;
               s += k;
            }
            console.log(s)
            `,
    result: 24
  },
  {
    id: 18,
    name: "for",
    code: `
            let s = 0, i, n 
            n = 6;
            for(i = 1; i <= n; i++) 
            if(i % 2 === 0){
              s += i
              s *= 2
            }
            console.log(s)
            `,
    result: 10
  },
  {
    id: 19,
    name: "for",
    code: `
            let s = 0, i, n 
            n = 3;
            for(i = 1; i <= n; i++) 
              if(i % 5 === 0)
            break;
              else s += i
            console.log(s)
            `,
    result: 6
  },
  {
    id: 20,
    name: "for",
    code: `
            const a = 4;
            const b = 8;
            let sum = 0;
            for (let i = a; i <= b; i++) {
              sum += i
            }
            console.log(sum)
            `,
    result: 30
  },
  {
    id: 21,
    name: "for",
    code: `
            const b = 10;
            let sum = 1;

            for (let i = 0; i <= b; i++) {
              sum *= i;
            }
            console.log(sum);
            `,
    result: 0
  },
  {
    id: 22,
    name: "for",
    code: `
            const n = 0;
            let sum = n ** 2;
            for (let i = 1; i <= n; i++) {
              sum += (n + i) ** 2;
            }
            console.log(sum);
            `,
    result: 0
  },
  {
    id: 23,
    name: "for",
    code: `
           const n = 2;
           const a = 5;
           let sum = 0;
           for (let i = 1; i <= n; i++) {
             sum *= i;
           }
           console.log(sum);
            `,
    result: 0
  },
  {
    id: 24,
    name: "for",
    code: `
           const n = 7;
           let sum = 1;
           let sum1 = 0;
           for(let i = 1; i <= n; i++){
               sum *= i;
               sum1 += sum;
           }
           console.log(sum1);
            `,
    result: 9
  },
  {
    id: 25,
    name: "for",
    code: `
           const n = 9;
           let s = 0;
           for (let i = 1; i <= n; i++)
             if (i % n === 0)
               s += i
           console.log(s)
            `,
    result: 9
  },
  {
    id: 26,
    name: "for",
    code: `
           const n = 4;
           let s = 0;
           for (let i = 1; i <= n; i += 2)
             if (n % i === 0)
               s += i
           console.log(s)
            `,
    result: 1
  },
  {
    id: 27,
    name: "for",
    code: `
           const n = 25;           
           let sum = 0;
           for (let i = 1; i <= n; i++) {
             sum *= i;
           }
           console.log(sum);
            `,
    result: 0
  },
  {
    id: 28,
    name: "for",
    code: `
           let s = 0, i, n;
           n = 5;
           for (i = 1; i <= n; i++)
             switch (i % 5) {
               case 0:
                 s += i;
                 break;
               default:
                 s++;
             }
           console.log(s)
            `,
    result: 16
  },
];
let userMinut = localStorage.getItem("timeOfUser") * 1;
let deadline = userMinut * 60; // sekund kiritiladi
let min = Math.floor(deadline / 60);
let sec = Math.floor(deadline % 60);
document.getElementById("deadlinetime").innerHTML = min + ":" + sec;
function start() {
  let userMinut = localStorage.getItem("timeOfUser") * 1;
  let deadline = userMinut * 60; // sekund kiritiladi
  let min = Math.floor(deadline / 60);
  let sec = Math.floor(deadline % 60);
  document.getElementById("deadlinetime").innerHTML = min + ":" + sec;
  document.getElementById("button").disabled = false;
  document.getElementById("button").style.opacity = "1";
  document.getElementById("display").style.color = "black";
  const deadlineInterval = setInterval(() => {
    if (deadline !== 0) {
      deadline -= 1;
      min = Math.floor(deadline / 60);
      sec = Math.floor(deadline % 60);
      document.getElementById("deadlinetime").innerHTML = min + ":" + sec;
      document.getElementById("startButton").disabled = true;
    } else {
      // Vaqt tugadi
      $("#display").val("Vaqt Tugadi :(");
      document.getElementById("button").disabled = true;
      document.getElementById("button").style.opacity = "0.3";
      clearInterval(deadlineInterval);
    }
  }, 1000);
}
$("#themeOfEnterHTML").text(localStorage.getItem("nameOfTheme"));

function buttonThemeName() {
  let y = document.getElementById("loopTheme").value;

  localStorage.setItem("nameOfTheme", y + " mavzuga oid masalalar");

  $("#themeOfEnterHTML").text(localStorage.getItem("nameOfTheme"));
}

function userButtonNumber() {
  x = document.getElementById("userNumber").value;
  localStorage.setItem("numberOfTasks", x * 1);

  userOfTime = document.getElementById("userTime").value;
  // alert((userOfTime * 1) + 1);
  localStorage.setItem("timeOfUser", userOfTime * 1);
}

for (let i = 0; i < 1; i++) {
  let sum = []; // [1, 2, 3]
  for (let j = 0; j <= (localStorage.getItem("numberOfTasks") * 1); j++) {
    sum += j;
  }

  function myFunction(sum) {
    return (result = Math.floor(Math.random() * sum.length));
  }
  let doneTask = [];

  function generateRandomTask() {
    let tempObj = myObject[sum[myFunction(sum)]];
    while (doneTask.includes(tempObj.id * 1)) {
      tempObj = myObject[sum[myFunction(sum)]];
    }
    return tempObj;
  }
  let currentResult = 0;
  function renewTask() {
    if (doneTask.length !== localStorage.getItem("numberOfTasks") * 1) {
      let myobj = generateRandomTask();
      currentResult = myobj.result;
      display(myobj);
      doneTask.push(myobj.id);
    } else {
      $("#display").val("Test Yakunlandi!");
      document.getElementById("button").disabled = true;
      document.getElementById("button").style.opacity = "0.3";
    }
  }

  function checkRess() {
    let foo = document.getElementById("ress").value;
    if (currentResult == foo) {
      right += 1;
    } else {
      wrong++;
    }

    document.getElementById("ress").value = ""
    $("#right").text("Correct: " + right);
    $("#wrong").text("Incorrect: " + wrong);
    renewTask();
  }
  renewTask();

  function display(obj) {
    parsed = "";
    parsed += obj.code + "\n";

    $("#display").val(parsed);
  }
}

$("#display").val(parsed);
