module.exports = async (req, res) => {
  console.log(`process.env.TestVar = ${process.env.TestVar}`);
  var jsonOut = {
    env_TestVar: process.env.TestVar
  };
  res.json(jsonOut);
}

