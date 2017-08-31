/*var request = require('supertest')*/
let assert = require('chai').assert
let expect = require('chai').expect
let supertest = require('supertest')
let express = require('express')
let sinon = require('sinon')
let app = require("../app")
let model = require("../model/empSchema")
let modelStub = sinon.stub(model, 'find')
let modelsave = sinon.stub(model.prototype, 'save')
let modelupdate = sinon.stub(model, 'update')
let modeldelete = sinon.stub(model, 'remove')
var url = supertest("http://localhost:3000")

describe("Testing Employee", function() {

/*beforeEach((done)=>{
    modelStub.yields(null, [{"id": "56", "name": "Prakhar"}, {"id": "13", "name": "Kro"}])
    done()
})*/
 modelStub.yields(null, {"name": "Prakhar"})
    it("find employees", function(done) {
       
        url
            .get("/emp/find")
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) {
                    throw err
                }
                expect(res.body.name).to.be.equal('Prakhar')
                done()

            })
    })

 modelsave.yields(null, {added: "success"})
    it("add employees", function(done) {
       

        url
            .post("/emp/add")
            .end(function(err, res) {
                if (err) {
                    throw err 
                }
                expect(res.body.added).to.be.equal("success")
                done()
            })
    })

 
 modelupdate.withArgs({id: "23"}, {$set: {name: "Krrr"}}).yields(null, {name: "Prakhar"})
    it("update employees", function(done) {
     
                url
                .put('/emp/update/23')
                .send({name: "Krrr"})
                .end((err, res) => {
                    if(err)
                        throw err
                    expect(res.body.name).to.be.equal("Prakhar")
                    done()
    })


            })
    

       it("delete employees", function(done) {
     modeldelete.withArgs({id: "23"}).yields(null, {name: "Prakhar"})
                url
                .delete('/emp/delete/23')
                .end((err, res) => {
                    if (err) throw err
          expect('Prakhar').to.be.equal(res.body.name)
              
done()
            })

                
    })
})
