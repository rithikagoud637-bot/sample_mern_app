from fastapi import APIRouter
staff_router =APIRouter(PREFIX="/Staff")

@staff_router.post("/addstaff")
def addstaff():
    return "add staff method called"

@staff_router.get("/getstaff")
def getstaff():
    return "getstaff method called "

@staff_router.put("/putstaff")
def putstaff():
    return "putstaff method called "

@staff_router.delete("/deletestaff")
def deletestaff():
    return "deletestaff method called "

