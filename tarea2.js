const nums = [11, 8, 2, 3, 1, 4, 5, 3, 4, 6, 2, 3, 4, 4, 5, 7, 9, 3, 3, 1, 4, 7, 2, 3, 2, 2, 1, 5, 5, 7, 8, 9, 10, 4, 3, 2, 6, 9, 11, 3, 3, 4, 12, 5, 6, 8, 30, 6, 10, 13]

const mean = (nums) => {
  const sum = nums.reduce((acc, value) => {
    return acc + value
  }, 0)
  return sum / nums.length
}

let frequencies = {}
let probabilites = {}

nums.forEach((num) => {
  frequencies[num] ? frequencies[num]++ : frequencies[num] = 1
})

const uniqueNumbers = Object.keys(frequencies)

uniqueNumbers.forEach((key) => {
  probabilites[key] = frequencies[key] / nums.length
})

const m  = mean(nums)
const m2 = mean(nums.map(x => x * x))
const m3 = mean(nums.map(x => x * x * x))
const m4 = mean(nums.map(x => x * x * x * x))

const variance = m2 - (m * m)

const ul = mean(nums) + variance
const ll = mean(nums) - variance

const range = nums.filter((num) => {
  return num >= ll && num <= ul
})
