const request=require("supertest")
const app=require("./src/index")
test("test for hobby",(done)=>{
  request(app)
  .get("/")
  .expect(200)
  .expect('Content-Type', /html/)
  .end((err,res)=>{
    if(err) return done(err)
    return done()
  })
})
  test("test for 404 error",(done)=>{
    request(app)
    .get("/nada")
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err,res)=>{
      if(err) return done(err)
      done()
    })
  })
  
  