const brain = require('./node_modules/lib/brain.js');    //"import brain.js"
const data = require('./data.json')
const network = new brain.recurrent.LSTM(); //use brainjs to make a new neural network first step

const trainingData = data.map(item => ({
    input: item.url,
    output: item.category
  }));
  
  network.train(trainingData, {
    iterations: 2000
  });
  
  const output = network.run("www.twitter.com");
  
  console.log(`Category: ${output}`);
