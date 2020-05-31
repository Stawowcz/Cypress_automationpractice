
describe('ReqRes Api testing', () => {
    Cypress.config('baseUrl', 'https://reqres.in/api')
    it('GET -read', () => {
        cy.request('/users?page=2').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.per_page).to.equal(6)
            expect(response.body.page).to.equal(2)
            expect(response.body.data).to.have.length(6)
            expect(response.body.data).to.have.length.of.at.most(7)
            expect(response.body.data[0]).to.deep.equal({
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
            })
            expect(response.body.data[0].first_name).to.not.equal('Jakub')
            expect(response.body.data[0].avatar).to.be.a('string')
            expect(response.body.data[0]).to.have.property("last_name")
            expect(response.body.data).to.be.a('Array')
            expect(response.body.page).to.be.a('number')
            expect(response.body.data[1]).to.have.any.keys("email", "first_name", "last_name" )
            expect([response.body.data[0]]).to.be.instanceOf(Array)
        })
    })

    it('GET -read', () => {
        cy.request('/users/2').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.data.id).to.equal(2)
            expect(response.body.data.first_name).to.be.a('string')
            expect(response.body.data).to.deep.equal({
                "id": 2,
                "email": "janet.weaver@reqres.in",
                "first_name": "Janet",
                "last_name": "Weaver",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
            })
            expect(response.body.ad).to.deep.equal({
                "company": "StatusCode Weekly",
                "url": "http://statuscode.org/",
                "text": "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."
            })
            expect(response.body.data.id).to.not.equal(3)
            expect(response.body.ad).to.have.any.keys("company", "url")
            expect(response.body.data).to.have.all.keys("id", "email", "first_name", "last_name", "avatar")
            expect(response.body.data).to.exist
            expect(response.body.data.id).to.be.lessThan(5)
            expect(response.body.data).to.have.property("last_name")
            expect(response.body.data).to.have.deep.property("last_name")
            expect(response.body.data).to.have.ownProperty("last_name")
            expect(response.body.data.id).to.be.oneOf([1,2,3])
            // expect([response.body.data.id]).to.include.members([4,2,3])
            expect(response.body.data.id).to.be.closeTo(2,3)
        })
    })
    it('GET -read', () => {
        var d = new Date()
        cy.request({method:'GET', url:'/users/23', failOnStatusCode: false}).then((response) => {
            expect(response).to.have.property('status',404)
            expect(response.body).to.be.empty
        })

    })

    it('GET -read', () => {
        var d = new Date()
        cy.request({method:'GET', url:'/unknown', failOnStatusCode: false}).then((response) => {
            expect(response).to.have.property('status',200)
            expect(response.body.data).to.have.length(6)
            for (let i = 0; i < response.body.data.length; i++) {
                expect(response.body.data[i]).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value' )
                expect(response.body.data[i].year).to.be.a('number')
                expect(response.body.data[i].color[0]).to.equal("#")
                expect(response.body.ad).to.deep.equal({
                    "company": "StatusCode Weekly",
                    "url": "http://statuscode.org/",
                    "text": "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."
                })
            }
        })

    })

    it('GET -read', () => {
        var d = new Date()
        cy.request({method:'GET', url:'/unknown/2', failOnStatusCode: false}).then((response) => {
            expect(response).to.have.property('status',200)
            expect(response.body.data.name).to.equal("fuchsia rose")
            expect(response.body.ad).to.deep.equal({
                "company": "StatusCode Weekly",
                "url": "http://statuscode.org/",
                "text": "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."
            })

        })
    })

    it('GET -read', () => {
        var d = new Date()
        cy.request({method:'GET', url:'/unknown/23', failOnStatusCode: false}).then((response) => {
            expect(response).to.have.property('status',404)
            expect(response.body).to.be.empty
        })

    })

    it('Post create', () => {
        const item = {
            "name": "morpheus",
            "job": "leader"
        }
        cy.request({method: 'POST', url:'/users', body:item}).then((response) => {
            expect(response).to.have.property('status', 201)
            expect(response.body.name).exist
            expect(response.body.createdAt).to.be.a("string")
            expect(response.body.job).to.equal("leader")
            expect(response.body.id).to.match(/\d/)
        })
    })

    it('Put update', () => {
        const item = {
            "name": "morpheus",
            "job": "zion resident"
        }
        cy.request({method: 'PUT', url:'/users/2', body:item}).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body.name).to.be.a('string')
            expect(response.body.name).to.equal("morpheus")
            expect(response.body.job).to.equal("zion resident")
            expect(response.body.job).to.have.string("zion reside")
            expect(response.body.updatedAt).to.match(/\./)
        })
    })

    it('PATCH update', () => {
        const item = {
            "name": "morpheus",
            "job": "zion resident"
        }
        cy.request({method: 'PATCH', url:'/users/2', body:item}).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body.name).to.be.a('string')
            expect(response.body.name).to.equal("morpheus")
            expect(response.body.job).to.equal("zion resident")
            expect(response.body.job).to.have.string("zion reside")
            expect(response.body.updatedAt).to.match(/\./)
        })
    })

    it('DELETE remove', () => {
        const item = {
            "name": "morpheus",
            "job": "zion resident"
        }
        cy.request({method: 'DELETE', url:'/users/2'}).then((response) => {
            expect(response).to.have.property('status', 204)
        })
    })

    it('POST register successfully update', () => {
        const item = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
        cy.request({method: "POST", url:'/register', body:item}).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body.token).exist
            expect(response.body.token).to.be.a("string")
            expect(response.body.id).to.match(/\d/)
        })
    })

    it('POST register unsuccessfuly update', () => {
        const item = {
            "email": "sydney@fife"
        }
        cy.request({method: "POST", url:'/register', body:item, failOnStatusCode: false}).then((response) => {
            expect(response).to.have.property('status', 400)
            expect(response.body).to.deep.equal({
                "error": "Missing password"
            })
            
        })
    })

    it('POST login successfully', () => {
        const item = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
        cy.request({method: "POST", url:'/register', body:item, failOnStatusCode: false}).then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.deep.equal({
                id: 4, token: "QpwL5tke4Pnpja7X4"
            })
            expect(response.body).to.have.any.keys('id', 'token')
            expect(response.body.token).to.be.a('string')
            
        })
    })

    it('POST login unsuccessfuly update', () => {
        const item = {
            "email": "peter@klaven"
        }
        cy.request({method: "POST", url:'/register', body:item, failOnStatusCode: false}).then((response) => {
            expect(response).to.have.property('status', 400)
            expect(response.body).to.deep.equal({
                "error": "Missing password"
            })    
        })
    })


})





// describe('Api testing', () => {
//     Cypress.config('baseUrl', 'http://dummy.restapiexample.com/api/v1')
//     it('GET - read', () => {
//         cy.request('/employees').then((response) => {
//             expect(response).to.have.property('status', 200)
//             expect(response.body).to.not.be.null
//             expect(response.body.data).to.have.length(43)
//         })

//     })
//     it('GET - read', () => {
//         cy.request('/employees/{id}').then((response) => {
//             expect(response).to.have.property('status', 200)
//             expect(response.body).to.not.be.null
//         })
//     })

//     it('POST - create', () => {
//         const item = {"name":"test","salary":"123","age":"23"}
//         cy.request('POST', '/create', item)
//         .its('body')
//         .its('data')
//         // .should('deep.eq', item)
//         .should('include', {name:'test'})
//         })

//     it('PUT - update', () => {
//         const item = {"name":"test1"}
//         cy.request({method:'PUT', url:'/update/1', body: item, failOnStatusCode: false}).its('status').should('eq', 401)
//     })

//     it('DELETE - update', () => {
//         id = req.id
//         cy.request({method:'DELETE', url:'/delete/1'}).its('status').should('eq', 200)
//     })
// })