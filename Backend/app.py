from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = joblib.load("disease_model.pkl")

# ------------------ PREDICT API ------------------
@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    features = np.array([
        data["age"],
        data["sex"],
        data["cp"],
        data["trestbps"],
        data["chol"],
        data["fbs"],
        data["thalach"],
        data["exang"],
        data["oldpeak"],
        data["slope"],
        data["ca"],
        data["thal"]
    ]).reshape(1, -1)

    prediction = model.predict(features)[0]
    probability = model.predict_proba(features)[0][1] * 100

    return jsonify({
        "disease": "Heart Disease",
        "risk": "HIGH" if prediction == 1 else "LOW",
        "probability": f"{probability:.2f}%"
    })


# ------------------ LOGIN API ------------------
@app.route("/login", methods=["POST"])
def login():
    data = request.json

    email = data.get("email")
    password = data.get("password")

    if email == "admin@gmail.com" and password == "1234":
        return jsonify({"success": True})
    else:
        return jsonify({
            "success": False,
            "message": "Invalid credentials"
        }), 401


# ------------------ VIEW HISTORY ------------------
@app.route("/history", methods=["GET"])
def history():
    return jsonify([
        {"date": "2026-01-05", "risk": "HIGH", "probability": "78%"},
        {"date": "2026-01-10", "risk": "LOW", "probability": "12%"}
    ])


# ------------------ HEALTH TIPS ------------------
@app.route("/tips", methods=["GET"])
def tips():
    return jsonify([
        "Exercise at least 30 minutes daily",
        "Reduce salt and sugar intake",
        "Avoid smoking and alcohol",
        "Drink enough water"
    ])


# ------------------ HEALTH TRENDS ------------------
@app.route("/trends/<type>", methods=["GET"])
def trends(type):
    demo_data = {
        "heart": [72, 75, 78, 74, 70],
        "sugar": [90, 95, 100, 92, 88],
        "bp": [120, 130, 128, 125, 122]
    }
    return jsonify(demo_data.get(type, []))


@app.route("/")
def home():
    return "AI Disease Prediction Backend Running"


if __name__ == "__main__":
    app.run(debug=True)


