```javascript
// ==========================================
// JavaScript Introduction Assignment
// Questions: Q10, Q11, Q12 and Q13
// ==========================================


// Q10. Demonstrate Dynamic Typing
console.log("----- Q10: Dynamic Typing -----");

let value = 25;
console.log(typeof value);

value = "JavaScript";
console.log(typeof value);

value = false;
console.log(typeof value);


// Q11. Alert Message
function showWelcomeMessage() {
    alert("Welcome to JavaScript!");
}


// Q12. Event-Driven Programming
document.getElementById("myBtn").addEventListener("click", function () {
    document.getElementById("demo").textContent = "Button was clicked!";
});


// Q13. Complete JavaScript Page
console.log("JavaScript is running successfully!");

document.getElementById("clickBtn").addEventListener("click", function () {
    alert("Hello, B.Tech Student!");

    document.body.style.backgroundColor = "lightblue";
});
```

file: `index.html`

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Assignment</title>
</head>
<body>

    <h1>JavaScript Assignment</h1>

    <!-- Q11 -->
    <h2>Q11 - Alert Message</h2>
    <button onclick="showWelcomeMessage()">Welcome</button>

    <!-- Q12 -->
    <h2>Q12 - Event-Driven Programming</h2>
    <button id="myBtn">Click Me</button>
    <p id="demo">Click the button to change this text.</p>

    <!-- Q13 -->
    <h2>Q13 - My First JavaScript Page</h2>
    <button id="clickBtn">Click Me</button>

    <script src="script.js"></script>

</body>
</html>
```
structure

```text
JavaScript-Assignment/
│
├── index.html
├── script.js
└── README.md
```

