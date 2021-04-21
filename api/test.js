module.exports = async (req, res) => {
  var jsonOut = {
    env_TestVar: process.env.TestVar
  };
  res.json(jsonOut);
}

