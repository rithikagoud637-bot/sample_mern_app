from fastapi import FastAPI
from routes.student import student_router
from routes.staff import staff_router
app=FastAPI()

app.include_router(staff_router)
app.include_router(student_router)





















































# @app.get("/getStudent")
# def getStudents():
#     return "get student method called"
# # http://localhost:8000/getStudent
# @app.post("/addStudent")
# def addStudent():
#     return "add student called"

# @app.put("/updateStudent")

# def updateStudent():
#     return "update student method caalled"

# @app.delete("/deleteStudent")
# def deleteStudents():
#     return "delete students method called "

# @app.get("/getParticularStudent/{userid}")
# def getParticularStudent(userid:int):
#     return {"userid":userid}

# @app.get("/getdeptdetails")
# def getdeptdetails(dept:str,mark:int):
#     return {"dept":dept,"mark":mark}