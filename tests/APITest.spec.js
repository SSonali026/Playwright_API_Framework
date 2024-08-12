const { test, expect } = require('@playwright/test');
const {customtest} = require('../Utils/test-base');

const baseUrl = "https://reqres.in/api"

customtest('Get Single User ', async ({ request, commontestdata}) => {

const response = await request.get(`${commontestdata.baseUrl}/users/2`)
expect(response.status()).toBe(200)

const responseBody = JSON.parse(await response.text())
console.log(responseBody)

expect(responseBody.data.id).toBe(2)
expect(responseBody.data.first_name).toBe('Janet')
expect(responseBody.data.last_name).toBe('Weaver')

})

customtest('Create New User ', async ({ request,commontestdata,testdataforcreateUser}) => {
    
const createUserPayload = {"name": testdataforcreateUser.name,"job": testdataforcreateUser.job,}

    const response = await request.post(`${commontestdata.baseUrl}/users`, 
        {
            data : createUserPayload,
        })

    expect(response.status()).toBe(201)
    
    const responseBody = JSON.parse(await response.text())
    console.log(responseBody)
    
    expect(responseBody.name).toBe(testdataforcreateUser.name)
    expect(responseBody.createdAt).toBeTruthy()
     return responseBody.name
   
    
    })

    customtest('Update User ', async ({ request, commontestdata,testdataforupdateUser}) => {

        const updateUserPayload = {"name": testdataforupdateUser.name, "job": testdataforupdateUser.job}
        const response = await request.put(`${commontestdata.baseUrl}/users/2`, 
            {
                data : updateUserPayload,
            })  
    
        expect(response.status()).toBe(200)
        
        const responseBody = JSON.parse(await response.text())
        console.log(responseBody)
        
        expect(responseBody.name).toBe(testdataforupdateUser.name)
        expect(responseBody.updatedAt).toBeTruthy()
               
        })