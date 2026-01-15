
from flask import Flask, jsonify, request
import json


app = Flask(__name__)


@app.route("/get_shelters", methods=["GET"])

def get_shelters():
    with open("./shelters.json", "r") as data:
        return json.load(data)  #200, {"Content-Type" : "application/json"}
        

    
@app.route("/add_shelters", methods=["POST"])

def add_shelters():
    with open("./shelters.json", "r") as f:
        existingData = json.load(f)

    
    data = json.loads(request.data.decode("utf-8"))
    existingData.append(data)
    with open("./shelters.json", "w") as f:
        json.dump(existingData, f)
    return "data you sent:\n"

        

@app.route("/edit_shelters", methods=["PATCH"])

def edit_shelters():
    pass
    

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10465, debug=True)
