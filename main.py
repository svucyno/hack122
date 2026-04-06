from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "Backend running 🚀"}

@app.get("/predict")
def predict(crop: str, location: str):
    
    valid_states = [
        "Andhra Pradesh",
        "Telangana",
        "Tamil Nadu",
        "Karnataka",
        "Maharashtra"
    ]

    # validation
    if location not in valid_states:
        return {"error": "Invalid state selected"}

    return {
        "crop": crop,
        "location": location,
        "best_sell_day": "Tomorrow",
        "price": 2500
    }