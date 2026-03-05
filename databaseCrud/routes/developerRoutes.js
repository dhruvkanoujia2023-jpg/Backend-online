
const route=require('express').Router();
const developer=require('../models/developer')
const {updateDeveloper,createDeveloper,getDeveloper,deleteDeveloper}=require('../controllers/developerControllers')

route.post('/',createDeveloper)
route.get('/', async (req, res) => {
 const developers=await developer.find();
 res.send(developers)
});
route.get('/:id',getDeveloper );
route.put('/:id',updateDeveloper)

route.delete('/:id',deleteDeveloper)

module.exports=route; 