function login() {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(res => {
        if (!res.ok) throw new Error("Invalid login");
        return res.json();
    })
    .then(data => {
        if (data.success) {
            window.location.href = "dashboard.html";
        }
    })
    .catch(() => {
        alert("Invalid email or password");
    });
}



/* ---------- Button Click Animation ---------- */
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";
        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);
    });
});
function predictRisk() {

    const data = {
        age: Number(document.getElementById("age").value),
        sex: 1,
        cp: 3,
        trestbps: Number(document.getElementById("bp").value),
        chol: Number(document.getElementById("glucose").value),
        fbs: 1,
        thalach: 150,
        exang: 1,
        oldpeak: 3.0,
        slope: 0,
        ca: 2,
        thal: 3
    };

    fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        document.getElementById("result").innerHTML = `
            <h3>Prediction Result</h3>
            <p><b>Disease:</b> ${result.disease}</p>
            <p><b>Risk Level:</b> ${result.risk}</p>
            <p><b>Probability:</b> ${result.probability}</p>
        `;
    });
}
function viewHistory(event) {
    event.preventDefault();

    fetch("http://127.0.0.1:5000/history")
        .then(res => res.json())
        .then(data => {
            let html = "<h2>📜 Health History</h2><ul>";
            data.forEach(item => {
                html += `<li>${item.date} - Risk: ${item.risk}, Probability: ${item.probability}</li>`;
            });
            html += "</ul>";
            document.getElementById("result").innerHTML = html;
        });
}

function healthTips(event) {
    event.preventDefault();

    fetch("http://127.0.0.1:5000/tips")
        .then(res => res.json())
        .then(data => {
            let html = "<h2>💡 Health Tips</h2><ul>";
            data.forEach(tip => {
                html += `<li>${tip}</li>`;
            });
            html += "</ul>";
            document.getElementById("result").innerHTML = html;
        });
}

function healthTrends(type, event) {
    event.preventDefault();

    fetch(`http://127.0.0.1:5000/trends/${type}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("result").innerHTML = `
                <h2>📊 Health Trend</h2>
                <p>Values: ${data.join(", ")}</p>
            `;
        });
}
function openTrend(type) {
    window.location.href = `trend.html?type=${type}`;
}
function openTrend(type) {
    if (type === "heart") {
        window.location.href = "heart.html";
    }
    else if (type === "sugar") {
        window.location.href = "sugar.html";
    }
    else if (type === "bp") {
        window.location.href = "bp.html";
    }
}




