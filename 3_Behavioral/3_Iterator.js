function* generator(arr) {
    let index = 0

    while (index < arr.length) {
        yield arr[index++]
    }
}

const gen = generator(['This', 'is', 'iterator'])

for (const val of gen) {
  console.log('Value: ', val)
}
