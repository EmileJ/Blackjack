/**
 * aces van alle kaarten
 */

const body = document.body
console.log(body)

offset = parseInt('10',16)
first = parseInt("1F0A1",16)

for (let i = 0; i < 4; i++) {
    let test = first
    for (let j = 0; j < 13; j++) {
        body.innerHTML += "&#x" + ((test+j)+(i*offset)).toString(16) + ';'
    }
    body.innerHTML += '<br/>'
}
