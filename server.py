from flask import Flask, redirect, request, render_template
from flask_cors import CORS
from bson.objectid import ObjectId
import pymongo
import sys
from markupsafe import escape

app = Flask(__name__, static_folder="./niblk-frontend/build", static_url_path="/")
cors = CORS(app)
crpytAlpha = "QWERTYUIOPLKJHGFDSAZXCVBNMzxvcbnmlkjhgfdsaqwertyuiop1234567890"

def encrypt(code) :
    global crpytAlpha
    nibURL = ""
    while code > 0 :
        rem = int(code % 62)
        nibURL = nibURL + crpytAlpha[rem]
        code = code // 62
    if len(nibURL) < 7:
        diff = 7 - len(nibURL)
        for i in range(diff):
            nibURL = nibURL + crpytAlpha[0]
    return nibURL



def getCode(longURL, shortURL, password):
    try:
        client = pymongo.MongoClient(
            "mongodb+srv://niblkmano4:niblkmano4@cluster0.vzv6e.mongodb.net/niblk?retryWrites=true&w=majority")
    except pymongo.errors.ConfigurationError:
        print("An Invalid URI host error was received. Is your Atlas host name correct in your connection string?")
        sys.exit(1)
    db = client.nbLinks
    myLinks = db["Links"]

    longurl = myLinks.find_one({"nibURL" : shortURL})
    if longurl is not None:
        return "exist"

    nibCode = shortURL
    if shortURL == "" :
        counter = 0
        val = myLinks.find_one_and_update({
            '_id': ObjectId("5fd598beeb83234f873bf04a")
        }, {
            '$inc': {
                'counter': 1
            }
        }, upsert=False)
        if val is not None:
            counter = val['counter']
        nibCode = encrypt(counter)
    myLinks.insert_one({"nibURL" : nibCode, "longURL" : longURL, "password" : password})
    return nibCode

def getURL(nibURL) :
    try:
        client = pymongo.MongoClient(
            "mongodb+srv://niblkmano4:niblkmano4@cluster0.vzv6e.mongodb.net/niblk?retryWrites=true&w=majority")
    except pymongo.errors.ConfigurationError:
        print("An Invalid URI host error was received. Is your Atlas host name correct in your connection string?")
        sys.exit(1)
    db = client.nbLinks
    myLinks = db["Links"]
    longURL = myLinks.find_one({"nibURL" : nibURL})
    if longURL is not None:
        return longURL['longURL']
    return ""


def updateURL(longURL, shortURL, password) : 
    try:
        client = pymongo.MongoClient(
                "mongodb+srv://niblkmano4:niblkmano4@cluster0.vzv6e.mongodb.net/niblk?retryWrites=true&w=majority")
    except pymongo.errors.ConfigurationError:
            print("An Invalid URI host error was received. Is your Atlas host name correct in your connection string?")
            sys.exit(1)
    # client = pymongo.MongoClient(
    #             "mongodb+srv://niblkmano4:niblkmano4@cluster0.vzv6e.mongodb.net/niblk?retryWrites=true&w=majority")
    db = client.nbLinks
    myLinks = db["Links"]
    doc = myLinks.find_one({"nibURL" : shortURL, "password" : password})
    if doc is None :
        return str(False)
    myLinks.find_one_and_update({
            "nibURL" : shortURL
        }, {
            '$set': {
                "longURL" : longURL
            }
        }, upsert=False)
    return str(True)

@app.route('/')
def home_page():
    return app.send_static_file('index.html')

@app.route('/niblknotfound')
def not_found():
    return app.send_static_file('404.html')

@app.route('/niblkdonate')
def donate():
    return app.send_static_file('payment.html')

@app.route('/add', methods=['POST'])
def add_service():
    data = request.get_json()
    nib = getCode(data["longURL"], data["shortURL"], data["password"])
    return nib

@app.route('/update', methods=['POST'])
def update_service():
    data = request.get_json()
    nib = updateURL(data["longURL"], data["shortURL"], data["password"])
    return nib

@app.route('/<nibURL>')
def redirect_service(nibURL):
    res = getURL(escape(nibURL))
    if len(res) > 0:
        return redirect(res)
    return redirect("/niblknotfound")

@app.route('/home')
def home():
   return "hello"

if __name__ == "__main__":
        app.run(threaded=True)
