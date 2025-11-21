const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')
const bar4 = document.querySelector('.bar4')
const bar5 = document.querySelector('.bar5')
const bar6 = document.querySelector('.bar6')
const bar7 = document.querySelector('.bar7')

const price1 = document.querySelector('.price1')
const price2 = document.querySelector('.price2')
const price3 = document.querySelector('.price3')
const price4 = document.querySelector('.price4')
const price5 = document.querySelector('.price5')
const price6 = document.querySelector('.price6')
const price7 = document.querySelector('.price7')



fetch('data.json')
    .then(res => res.json())
    .then(data => {
        bar1.style.height = `${(data[0].amount / 100) * 450}px`
        bar2.style.height = `${(data[1].amount / 100) * 450}px`
        bar3.style.height = `${(data[2].amount / 100) * 450}px`
        bar4.style.height = `${(data[3].amount / 100) * 450}px`
        bar5.style.height = `${(data[4].amount / 100) * 450}px`
        bar6.style.height = `${(data[5].amount / 100) * 450}px`
        bar7.style.height = `${(data[6].amount / 100) * 450}px`

        price1.innerText = `$${((data[0].amount / 100) * 478.33).toFixed(2)}`
        price2.innerText = `$${((data[1].amount / 100) * 478.33).toFixed(2)}`
        price3.innerText = `$${((data[2].amount / 100) * 478.33).toFixed(2)}`
        price4.innerText = `$${((data[3].amount / 100) * 478.33).toFixed(2)}`
        price5.innerText = `$${((data[4].amount / 100) * 478.33).toFixed(2)}`
        price6.innerText = `$${((data[5].amount / 100) * 478.33).toFixed(2)}`
        price7.innerText = `$${((data[6].amount / 100) * 478.33).toFixed(2)}`
    })
    .catch(error => console.error("Can't Fetch"))


const days = document.querySelectorAll('.day')
const prices = document.querySelectorAll('.price')

for (const day of days) {


    day.addEventListener('mouseenter', () => {
        if (day.id == 'mon') {
            price1.style.display = 'block'
        }
        if (day.id == 'tue') {
            price2.style.display = 'block'
        }
        if (day.id == 'wed') {
            price3.style.display = 'block'
        }
        if (day.id == 'thu') {
            price4.style.display = 'block'
        }
        if (day.id == 'fri') {
            price5.style.display = 'block'
        }
        if (day.id == 'sat') {
            price6.style.display = 'block'
        }
        if (day.id == 'sun') {
            price7.style.display = 'block'
        }
    })
    day.addEventListener('mouseout', () => {
        if (day.id == 'mon') {
            price1.style.display = 'none'
        }
        if (day.id == 'tue') {
            price2.style.display = 'none'
        }
        if (day.id == 'wed') {
            price3.style.display = 'none'
        }
        if (day.id == 'thu') {
            price4.style.display = 'none'
        }
        if (day.id == 'fri') {
            price5.style.display = 'none'
        }
        if (day.id == 'sat') {
            price6.style.display = 'none'
        }
        if (day.id == 'sun') {
            price7.style.display = 'none'
        }
    })
}