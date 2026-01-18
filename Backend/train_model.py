import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import joblib

# Load dataset (CSV)
data = pd.read_csv("heart.csv")

X = data.drop("target", axis=1)
y = data["target"]
             # prediction column

# 3️⃣ Split data into training and testing (80-20 split)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 4️⃣ Train Logistic Regression model
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

# 5️⃣ Evaluate model
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print("Model Accuracy:", accuracy)

# 6️⃣ Save trained model
joblib.dump(model, "disease_model.pkl")
print("Model trained and saved successfully!")
