import requests as rq
import json

ENDPOINT = "http://localhost:4000/app"

def test_check():
    res = rq.get(ENDPOINT)
    assert res.status_code==200
    
def test_create_user():
    data1 = {
    "username": "apple123",
    "email" : "appleamp2003@gmail.com",
    "password": "apple123"
    }
    res = rq.post(ENDPOINT+"/signup", json=data1)
    assert res.status_code!=404
    dt = res.json()


def test_check_user_login():
    data1 = {
        "username":"apple",
        "password":"123"
    }
    res = rq.post(ENDPOINT+"/login", json=data1)
    assert res.status_code==200
   
    
def test_cardata():
    data1 = {
     "username": "pk",
    "modelName": "Ferrari",
    "bodyColor": "#73009e",
    "tireColor": "#212121",
    "rimColor": "#1a1a1a",
    "lineColor": "#ffffff",
    }

    res = rq.post(ENDPOINT+"/cardata",data=data1)
    assert res.status_code!=404
    
def test_order():
    data1 = {
    "username": "pk",
    "orderNo": "e160219b",
    "paymentStatus": "Done",
    "modelName":"Lambo",
    "bodyColor": "#343434",
    "tireColor" :"#212121",
    "rimColor": "#1a1a1a",
    "lineColor": "#ffffff",
    }
    res = rq.post(ENDPOINT+"/order",data=data1)
    assert res.status_code!=404
    
# def test_change_password():
#     data1 = {
#      "username": "",
#     "password": ""
#     }
#     res = rq.put(ENDPOINT+"/change_password",data=data1)
#     assert res.status_code==200


