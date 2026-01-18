
# 🩺 AI-Based Disease Risk Prediction System

## 📌 Project Overview

The **AI-Based Disease Risk Prediction System** is a full-stack web application that predicts the risk of chronic diseases using **Machine Learning**.  
Users enter health and lifestyle data, and the system predicts disease risk levels with explanations, stores records in a database, and displays results through a user-friendly dashboard.

This project is developed as part of an **individual CTS NPN use-case evaluation**, fulfilling the following requirements:

- Full-stack development  
- AI/ML integration  
- Database usage  
- Proper system architecture  
- Documentation and GitHub submission  

---

## 🎯 Objectives

- Predict disease risk using Machine Learning algorithms  
- Provide early risk awareness and preventive suggestions  
- Store and track user health history  
- Demonstrate an end-to-end AI-based healthcare solution  

---

## 🧠 Diseases Covered

- **Diabetes**
- **Heart Disease**

These diseases are selected due to their real-world relevance and availability of standard medical datasets.

---

## 🏗️ System Architecture

```

User (Web Browser)
↓
Frontend (HTML, CSS, JavaScript)
↓
Backend API (Flask - Python)
↓
Machine Learning Model (.pkl)
↓
SQLite Database
↓
Prediction Result + Risk Level + Explanation

```

---

## 🧩 Technology Stack

### 🌐 Frontend
- HTML5  
- CSS3  
- JavaScript  

### ⚙️ Backend
- Python  
- Flask  

### 🤖 Machine Learning
- Scikit-learn  
- Pandas  
- NumPy  

### 🗄️ Database
- SQLite  

---

## 🧪 Machine Learning Details

- **Algorithms Used**: Logistic Regression / Random Forest  

### Input Features
- Age  
- Gender  
- BMI  
- Blood Pressure  
- Glucose Level  
- Smoking Habit  
- Physical Activity  

### Output
- Risk Percentage  
- Risk Level (Low / Medium / High)  
- Explanation based on feature values  

---

## 🗂️ Project Folder Structure

```

AI-Disease-Risk-Prediction/
│
├── frontend/
│   ├── login.html
│   ├── dashboard.html
│   ├── predict.html
│   ├── result.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── app.py
│   ├── train_model.py
│   ├── model.pkl
│   ├── database.db
│   └── requirements.txt
│
├── dataset/
│   └── diabetes.csv
│
├── docs/
│   └── AI_Disease_Risk_Prediction_Report.docx
│
└── README.md

````

---

## 🗄️ Database Design

### Users Table

| Field    | Type            |
|---------|-----------------|
| user_id | INTEGER (PK)    |
| name    | TEXT            |
| email   | TEXT            |
| password| TEXT            |

### Health Records Table

| Field           | Type           |
|-----------------|----------------|
| record_id       | INTEGER (PK)   |
| user_id         | INTEGER (FK)   |
| age             | INTEGER        |
| bmi             | REAL           |
| glucose         | REAL           |
| blood_pressure  | REAL           |
| prediction      | TEXT           |
| risk_level      | TEXT           |
| date            | TEXT           |

---

## ▶️ How to Run the Project

### 1️⃣ Backend Setup
```bash
cd backend
pip install -r requirements.txt
python train_model.py
python app.py
````

### 2️⃣ Frontend

* Open `login.html` in a browser
* Register / Login
* Enter health details
* View prediction results

---

## 📊 Results

* Successfully predicts disease risk levels
* Stores prediction history in the database
* Provides AI-based explanations for predictions
* Screenshots and outputs are included in the project documentation

---

## 🚀 Future Enhancements

* Add more diseases
* Integrate Deep Learning models
* Add RAG-based health chatbot
* Cloud deployment
* Mobile application

---

## 🧾 Conclusion

This project demonstrates a complete **AI-powered healthcare solution** using Machine Learning and full-stack development. It fulfills all evaluation requirements by integrating AI models, backend services, a database, and a user-friendly frontend with proper system architecture and documentation.

```
```
