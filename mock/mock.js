let Mock = require('mockjs')

var Random = Mock.Random

module.exports = function () {
    return {
        getUser:{ //获取短信条数
            "data":{
                "msgCount":9846,
                "userName":"15655511595"
            },
            "result":"1"
        },
        showSelfMarkName:{//展示我的签名
            "data": {
                "channelType": "719",
                "customize": true,
                "passedSelfMarkNameList": [
                    {
                        "id": 84311,
                        "modified": "2018-01-09 13:51:50",
                        "shopName": "xujunhua",
                        "signature": "xxx哈哈",
                        "status": 1,
                        "taobaoId": 88995530,
                        "taobaoNick": "xujunhua"
                    }
                ],
                "recommendMark": {
                    "京东": true,
                    "天猫": true,
                    "天猫国际": true,
                    "淘宝": true,
                    "苏宁": true,
                    "蘑菇街": true
                }
            },
            "result": "1"
        },
        getYhMsg:{
            "data":{
                "hasYh":true,
                "yhcost":0,
                "yhcount":0,
                "yhdiscost":0,
                "yhdisprice":0,
                "yhprice":0.1
            },
            "result":"1"
        }
    }
}
