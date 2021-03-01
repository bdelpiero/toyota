/*
  Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
  Permission is hereby granted, free of charge, to any person obtaining a copy of this
  software and associated documentation files (the "Software"), to deal in the Software
  without restriction, including without limitation the rights to use, copy, modify,
  merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
  permit persons to whom the Software is furnished to do so.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
  INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
  PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
  HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
  OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

'use strict'

const { Mobile } = require('aws-sdk')
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 */

const { saveFormData } = require('./dynamodb')
// const { sendEmail } = require('./ses')

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': "Content-Type",
  "Access-Control-Allow-Methods": "OPTIONS,POST"
}

// Main Lambda entry point
exports.handler = async (event) => {

  console.log(`Started with: ${event.body}`)
  const formData = JSON.parse(event.body)
  var date = new Date()

  var manipulatedForm = {
    prospect: {
        requestDate: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
      customer: {
        comments: "",
        interest: "",
        contacts: [
          {
            emails: [
              {
                value: formData.email
              }
            ],
            names: [
              {
                part: "first",
                value: formData.firstname
              },
              {
                part: "last",
                value: formData.lastname
            }
            ],
            phones: [
              {
                type: "phone",
                value: "00000000"
              },
              {
                type: "mobile",
                value: formData.areacode + formData.phonenumber
              }
            ],
            addresses: [
              {
                city: formData.city,
                country: "Argentina"
              }
            ]
          }
        ]
      },
      vehicles: [
        {
          model: "Corolla",
          make: "Toyota"
        }
      ],
      provider: [
        {
          name: {
            value: "",
            origin: formData.dealership
        }
        }
      ]
    }      
  }

  var prettyform = JSON.stringify(manipulatedForm, null, 2)
      

  console.log(prettyform)

  try {
    // Save to DynamoDB in parallel using Promise.all
    await Promise.all([saveFormData(formData)])
      
    return {
      statusCode: 200,
      body: 'OK!',
      headers        
    }
  } catch(err) {
    console.error('handler error: ', err)  

    return {
      statusCode: 500,
      body: 'Error',
      headers    
    }
  }
}
