from fastapi import APIRouter
from database import student_collection
from models import student_model
student_router =APIRouter(prefix="/STUDENT",tags=["students"])

@student_router.post("/addstudent")
def addstudent(stu:student_model):
    result=student_collection.insert_one(stu.model_dump())
    return "add student method called"

@student_router.get("/getstudent")
def getstudent():
    return "getstudent method called "

@student_router.put("/putstudent")
def putstudent():
    return "putstudent method called "

@student_router.delete("/deletestudent")
def deletestudent():
    return "deletestudent method called "



