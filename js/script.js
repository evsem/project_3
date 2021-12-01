console.log('Hello World.')

let text_1 = 'Hello'
const text_2 = 'JS'

const arrFun = (a, b) => console.log(`${a} ${b}.`)
arrFun(text_1, text_2)

const a = 67
const b = 43

const ab = a + b
let arr = [1, 45, 87, 34, 908]
arr.unshift(ab)
console.log(arr)

//-------------------------------------

const array_0 = [45, 67, 786, 1201, 56, 9000]

let nProm_0 = new Promise(function (res, rej) {
  console.log('Start...')
  let ob_Prom = {
    status: true,
    port: 1200,
    server: 'apde-ask',
    adress: {
      town: 'Rome',
      company: 'Ascatel',
    },
  }

  setTimeout(() => {
    function fun_0(c, d) {
      if (c == d) {
        console.log(`${c} = ${d}`)
      } else if (c > d) {
        console.log(`${c} > ${d}`)
      } else if (c < d) {
        console.log(`${c} < ${d}`)
      }
    }
    fun_0(array_0[1], array_0[3])
    res(ob_Prom)
  }, 2000)
})
nProm_0
  .then((obj_innProm_0) => {
    return new Promise(function (res, rej) {
      setTimeout(() => {
        const arrProm_1 = array_0

        console.log(arrProm_1[3], obj_innProm_0.server)
        res(arrProm_1)
      }, 2000)
    })
  })
  .then((arrNova) => {
    console.log(arrNova)
  })
  .catch((err) => {
    console.error(err)
  })
  .finally((text = 'End.') => {
    console.log(text)
  })
