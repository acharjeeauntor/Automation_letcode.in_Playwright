import { test, expect, APIResponse } from "@playwright/test"

let jsonResponse: any
let response: APIResponse
let bookId: number
let token: string
let orderId: string



test(`@API Verify API Status Code`, async ({ request }) => {
    response = await request.get(`/status`)
    jsonResponse = await response.json()

    expect(jsonResponse.status).toEqual("OK")
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
})

test(`@API Verify List of Books`, async ({ request }) => {
    response = await request.get(`/books`, {
        params: {
            type: "fiction",
            available: true
        }
    })
    jsonResponse = await response.json()
    const firstBook = jsonResponse[0]
    bookId = firstBook.id
    
    expect(firstBook.type).toEqual("fiction")
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()
})

test(`@API Get a single book`, async ({ request }) => {
    response = await request.get(`/books/${bookId}`)
    jsonResponse = await response.json()

    expect(jsonResponse.id).toEqual(bookId)
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()

})

test(`@API Request API client`, async ({ request }) => {
    response = await request.post(`/api-clients`, {
        data: {
            clientName: "Auntor",
            clientEmail: Math.random() + "@example.com"
        }
    })
    jsonResponse = await response.json()
    token = await jsonResponse.accessToken

    expect(response.status()).toBe(201)
    expect(response.ok()).toBeTruthy()
    

})


test(`@API Submit an order`, async ({ request }) => {
    response = await request.post(`/orders`, {
        headers: {
            'Authorization': `${token}`
        },
        data: {
            bookId: bookId,
            customerName: "Auntor"+Math.random()
        }
    })
    jsonResponse = await response.json()
    orderId = jsonResponse.orderId

    expect(jsonResponse.created).toBeTruthy()
    expect(response.status()).toBe(201)
    expect(response.ok()).toBeTruthy()

})

test(`@API Get all orders`, async ({ request }) => {
    response = await request.get(`/orders`, {
        headers: {
            'Authorization': `${token}`
        }
    })

    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()

})

test(`@API Get a single order`, async ({ request }) => {
    response = await request.get(`/orders/${orderId}`, {
        headers: {
            'Authorization': `${token}`
        }
    })
    jsonResponse = await response.json()

    expect(jsonResponse.id).toEqual(orderId)
    expect(response.status()).toBe(200)
    expect(response.ok()).toBeTruthy()

})

test(`@API Update a single order`, async ({ request }) => {
    response = await request.patch(`/orders/${orderId}`, {
        headers: {
            'Authorization': `${token}`
        },
        data: {
            customerName: "Auntor" + Math.random()
        }
    })
   
    expect(response.status()).toBe(204)
    expect(response.ok()).toBeTruthy()

})

test(`@API Delete a single order`, async ({ request }) => {
    const response = await request.delete(`/orders/${orderId}`, {
        headers: {
            'Authorization': `${token}`
        }
    })
   
    expect(response.status()).toBe(204)
    expect(response.ok()).toBeTruthy()

})