var assert = require("assert");
var needle = require("needle");

//describe('Array', function(){
//  describe('#indexOf()', function(){
//    it('should return -1 when the value is not present', function(){
//      assert.equal(-1, [1,2,3].indexOf(5));
//      assert.equal(-1, [1,2,3].indexOf(0));
//    })
//  })
//})
String.prototype.startsWith = function (str) {
    console.log(str);
    return this.indexOf(str) == 0;
    };
describe('Array', function () {

    it('sum', function (done) {
        assert.equal(2 + 2, 4);
        done();
    })
    //            if (error) {
    //                //console.log(' >>>> ' + JSON.stringify(error));
    //            } else {
    //                assert.equal(typeof(body),Object);
    //                //console.log(' >>>> ' + JSON.stringify(response));
    //            }

    it('view', function (done) {

        needle.get('http://localhost:3000/employee', function (error, response, body) {

            ///            console.log(' >>>> ' + JSON.stringify(response));

            assert.equal(error, null);
            assert.ok(typeof (body), Object);
            done();
        })
    });
    it('viewUnauthorized', function (done) {

        needle.get('http://localhost:3000/', function (error, response, body) {

            ///            console.log(' >>>> ' + JSON.stringify(response));

            assert.equal(error, null);
            assert.ok(typeof (body), String);
            //body.startsWith('');//TODO: Fix this later.
            
            done();
        })
    });


    it('update', function (done) {
        needle.post('http://localhost:3000/employee', '', function (error, response, body) {
            assert.equal(error, null);
            assert.ok(typeof (body), Object);
            done();
        })
    });
    it('updateUnauthorized', function (done) {

        needle.post('http://localhost:3000/','', function (error, response, body) {

            ///            console.log(' >>>> ' + JSON.stringify(response));

            assert.equal(error, null);
            assert.ok(typeof (body), String);
            //body.startsWith('');//TODO: Fix this later.
            
            done();
        })
    });


    it('create', function (done) {
        needle.put('http://localhost:3000/employee', '', function (error, response, body) {

            ///            console.log(' >>>> ' + JSON.stringify(response));

            assert.equal(error, null);
            assert.ok(typeof (body), Object);
            done();
        })
    });
    it('createUnauthorized', function (done) {

        needle.put('http://localhost:3000/','', function (error, response, body) {

            ///            console.log(' >>>> ' + JSON.stringify(response));

            assert.equal(error, null);
            assert.ok(typeof (body), String);
            //body.startsWith('');//TODO: Fix this later.
            
            done();
        })
    });

it('delete', function (done) {
        needle.delete('http://localhost:3000/employee', '', function (error, response, body) {

            ///            console.log(' >>>> ' + JSON.stringify(response));

            assert.equal(error, null);
            assert.ok(typeof (body), Object);
            done();
        })
    });
    it('deleteUnauthorized', function (done) {

        needle.delete('http://localhost:3000/', '',function (error, response, body) {

            ///            console.log(' >>>> ' + JSON.stringify(response));

            assert.equal(error, null);
            assert.ok(typeof (body), String);
            //body.startsWith('');//TODO: Fix this later.
            
            done();
        })
    });

   
});