var router = require("express").Router(); 

router.get('/data', async (req, res) => {
  res.status(200).send({
    status:"logged in",
    user:{name: "Dave joe"}
  });
  return;
});
  
module.exports = router;