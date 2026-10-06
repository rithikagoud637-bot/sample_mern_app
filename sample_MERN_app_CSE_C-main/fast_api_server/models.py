from pydantic import BaseModel
class student_model(BaseModel):
    stu_name:str
    stu_dpt:str
    stu_age:int
    stu_mark:float

class staff_model(BaseModel):
    staff_name:str
    staff_designation:str   
