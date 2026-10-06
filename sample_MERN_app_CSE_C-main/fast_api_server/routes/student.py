from fastapi import APIRouter
student_router =APIRouter(PREFIX="/STUDENT")

@student_router.post("/addstudent")
def addstudent():
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

