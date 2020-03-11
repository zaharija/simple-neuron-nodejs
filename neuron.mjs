import { sigmoid, sigmoidDerivative } from './math.mjs'
export class Neuron {
  #weights = []; #input
  constructor(LengthOfinput) {
    for (let i = 0; i < LengthOfinput; i++) {
      this.#weights[i] = Math.random() * 3
    }
  }
  train(tInput, tOutput) {
    if(tInput.length === this.#weights.length) {
      const output = this.#calculateOutput(tInput)
      const error = this.#calculateError(tOutput, output)
      this.#adjustWeights(tOutput, error, tInput)
      return output
    }
  }
  run(tInput) {
    return this.#calculateOutput(tInput)
  }
  #calculateOutput = function(tInput) {
    const output = []
    for (let i = 0; i < tInput.length; i++) {
      output.push(sigmoid(this.#weights[i] + tInput[i]))
    }
    return output
  }
  #calculateError = function(tOutput, output) {
    const error = []
    for (var i = 0; i < tOutput.length; i++) {
      error.push(tOutput[i] - output[i])
    }
    return error
  }
  #adjustWeights = function(output, error, tInput) {
    const adjustments = []
    for (let i = 0; i < output.length; i++) {
      adjustments.push(error[i] * sigmoidDerivative(output[i]))
    }
    for (let i = 0; i < adjustments.length; i++) {
      this.#weights[i] += +adjustments[i] * tInput[i]
    }
  }
}
