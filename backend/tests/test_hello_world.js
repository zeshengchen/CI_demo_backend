import request from 'supertest'
import app from '../hello_world.js'

describe('Get /', function () {
    it('get info', function (done) {
        request(app)
            .get('/')
            .expect(200,
                "Hello World!"
                , done)
    })
})
