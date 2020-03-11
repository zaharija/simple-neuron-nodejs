export const sigmoid = x => {
    const e = 2.71828
    return 1 / (1 + Math.pow(e, -x))
}

export const sigmoidDerivative = x => {
    return x * (1 - x)
}
