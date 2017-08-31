/*var request = require('supertest')*/
let assert = require('chai').assert
let supertest = require('supertest')
let express = require('express')
let app = require("../app")

var url = supertest("http://localhost:3000")

describe("Testing the Calculator", function(err) {
    it("should add the value", function(done) {
        url
            .post("/calc/add/5/6")
            .end(function(err, res) {
                if (err) {
                    throw err
                }

                assert.equal(res.text, '11')
                done()

            })
    })

it("should subtract the value", function(done) {
    url
        .post("/calc/subtract/5/6")
        .end(function(err, res) {
            if (err) {
                throw err
            }

            assert.equal(res.text, '-1')
            done()
        })
    })

        it("should multiply the value", function(done) {
    url
        .post("/calc/multiply/5/6")
        .end(function(err, res) {
            if (err) {
                throw err
            }

            assert.equal(res.text, '30')
            done()
        })
    })

        it("should divide the value", function(done) {
    url
        .post("/calc/divide/6/6")
        .end(function(err, res) {
            if (err) {
                throw err
            }

            assert.equal(res.text, '1')
            done()
        })
})
    })
