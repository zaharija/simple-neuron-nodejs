import { Neuron } from './neuron.mjs'
import { sigmoid } from './math.mjs'
const rock = sigmoid(0)
const paper = sigmoid(0.5)
const scissors = sigmoid(1)

const input = [rock, paper, scissors, paper, rock, scissors, scissors, rock, paper]
const output = [paper, scissors, rock, scissors, paper, rock, rock, paper, scissors]

const sInput = ['rock', 'paper', 'scissors', 'paper', 'rock', 'scissors', 'scissors', 'rock', 'paper']
const sOutput = ['paper', 'scissors', 'rock', 'scissors', 'paper', 'rock', 'rock', 'paper', 'scissors']

const neuron = new Neuron(input.length)

const train = _ => {
  const iterations = 2000 //change this number to see different results
  console.log('Training initialized')
  for (let i = 0; i <= iterations; i++) {
    if (i % 1000 === 0) console.log('Iteration', ""+i)
    neuron.train(input, output)
  }
}

const run =_=> {
  console.log('Training completed')
  const outputArray = neuron.run(input)
  for (let i = 0; i < outputArray.length; i++) {
    const values = [outputArray[i] % rock + 1, outputArray[i] % paper + 1, outputArray[i] % scissors + 1]
    if (Math.min(...values) === values[0]) outputArray[i] = 'rock'
    else if (Math.min(...values) === values[1]) outputArray[i] = 'paper'
    else outputArray[i] = 'scissors'
  }
  console.log(outputArray)
}

console.log('Training input ->', sInput)
console.log('Training output ->', sOutput)

train()
run()
