let score = 0;

function startPractice() {
    document.getElementById("aptitude").scrollIntoView({
        behavior: "smooth"
    });
}

function submitTest() {

    score = 0;

    let answers = {
        q1: "30",
        q2: "20",
        q3: "20",
        q4: "60",
        q5: "10",
        q6: "50",
        q7: "40",
        q8: "180",
        q9: "15",
        q10: "10"
    };

    for (let question in answers) {

        let selected = document.querySelector(
            'input[name="' + question + '"]:checked'
        );

        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    let percentage = (score / 10) * 100;

    document.getElementById("testResult").innerHTML =
        "<h3>🎯 Test Completed!</h3>" +
        "<p>Score: " + score + " / 10</p>" +
        "<p>Percentage: " + percentage + "%</p>" +
        "<p>Keep practicing to improve your score! 🚀</p>";

    document.getElementById("attempted").innerText = 10;
    document.getElementById("correct").innerText = score;
}

function resetTest() {

    document.querySelectorAll(
        'input[type="radio"]'
    ).forEach(function(input) {
        input.checked = false;
    });

    document.getElementById("testResult").innerHTML = "";

    document.getElementById("attempted").innerText = 0;
    document.getElementById("correct").innerText = 0;

    score = 0;
}
function addTask() {
    let taskInput = document.getElementById("task");
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a study task!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}