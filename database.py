# database.py
from pymongo import MongoClient

def get_db():
    client = MongoClient('mongodb://admin:password@localhost:27017/')
    db = client['ecofashion']
    return db

db = get_db()
users_collection = db.users

def create_user(user_data):
    result = users_collection.insert_one(user_data)
    return result.inserted_id

def get_user(email):
    return users_collection.find_one({"email": email})
