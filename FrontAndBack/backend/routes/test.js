const router = require('express').Router();
const { appendJson , readJson} = require('../helper/files')

router.get('/', (req, res) => {
  res.send({ success: 1, test: 1 })
})

router.post('/', (req, res) => {
  res.send({ success: 1, test: 1 })
})

router.get('/check', async (req, res) => {
  try{
    const filedata = await readJson('data.json')
    res.send({ success: 1, data: filedata });
  }
  catch(err){
    res.send({ err: err});
  }
  
})
  

router.post('/check', async (req, res) => {
  try{
    if (req.body) {
      const timeNow = Math.floor(+new Date() / 1000)
      const newData = { ...req.body, id: timeNow }
      const status= await appendJson('data.json', newData)
      res.send({ success: 1, msg: status });
    }
  }
  catch(err){
    res.send({ err: err});
  }
  
})


module.exports = router;