from pymongo import MongoClient
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Connect to MongoDB
client = MongoClient(os.getenv("mongo_url"))

# Connect to database
db = client["vignan_db"]

student_collection=db["students"]
staff_collection=db["staff"]

# print("MongoDB connected successfully!")
