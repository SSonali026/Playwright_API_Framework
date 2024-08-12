const base = require('@playwright/test');

exports.customtest = base.test.extend(
    {
        commontestdata: {
             baseUrl : "https://reqres.in/api"
        }
,
        testdataforcreateUser: {
            name: "sonali",
            job: "IT"
       }
,
       testdataforupdateUser: {
            name: "Swarnim",
            job: "Medical"
      }
, 
    }

)


