from flask import Flask, redirect, request
from bson.objectid import ObjectId
import pymongo
import sys
from markupsafe import escape

app = Flask(__name__)

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



def getCode(longURL):
    try:
        client = pymongo.MongoClient(
            "mongodb+srv://niblkmano4:niblkmano4@cluster0.vzv6e.mongodb.net/niblk?retryWrites=true&w=majority")
    except pymongo.errors.ConfigurationError:
        print("An Invalid URI host error was received. Is your Atlas host name correct in your connection string?")
        sys.exit(1)
    db = client.nbLinks
    myLinks = db["Links"]
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
    myLinks.insert_one({"nibURL" : nibCode, "longURL" : longURL})
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
    




@app.route('/add')
def add_service():
    nib = getCode(request.args["q"])
    return nib, 200

@app.route('/<nibURL>')
def redirect_service(nibURL):
    res = getURL(escape(nibURL))
    if len(res) > 0:
        return redirect(res)
    return redirect("https://github.com/hj1kjshdkfjs")


if __name__ == "__main__":

    app.run(port=8080, debug=True, threaded=True)
