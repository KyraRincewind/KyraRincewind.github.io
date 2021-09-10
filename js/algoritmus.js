/* Összegzés tétele
A feladat egyszerű, egy sorozat elemeit kell összesíteni.
let x=[1,2,3,4,5,6,7]
for (let i=0, i< x.lenght; i++) {
    i+=x;
}*/

/*Számlálás tétele
Itt össze kell számolni, hogy egy bizonyos feltétel hány elemre igaz.
let numericArray = [1,2,3,4,5,6,6,7];
let sum = 0;
for (let i = 0; i < numericArray.length; i++){
    sum += numericArray[i];
}
console.log("Sum: ", sum);*/

/*Szélsőérték keresése (maximum vagy minimum)
A dolog egyszerű. Van mondjuk egy számsorozatod, és meg kell mondanod, hogy melyik a legkisebb vagy legnagyobb szám, azaz a szélsőértékeket keresed.
let numericArray = [1,2,3,4,5,6,6,7];
let count = 0;
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0) {
        count++
    }
}
console.log("Even nimbers: ", count);*/

/*Eldöntés tétele
Megvizsgálod, szerepel-e olyan elem a sorozatban, melyre igaz a feltétel. Például: prímszám-e. Ahogy találsz egy osztót, ami nem önmaga és nem 1, tudod hogy nem az.
let numericArray = [1,2,3,4,16,6,6,7];
let biggest = numericArray[0]
for (let i = 0; i < numericArray.length; i++){
    if (numericArray[i] > biggest){
        biggest = numericArray[i]
    }
}
console.log(biggest)*/

let numericArray = [1, 2, 3, 4, 16, 6, 6, 7];
let contains = false;
for (let i = 0; i < numericArray.length && contains == false /*vagy !contains, mert ez negálja, vagyis contain=true-t jelent, de a contaons=false mindaddig, amíg nem teljesül a feltétel, és utána már nem fut le */; i++) {
    if (numericArray[i] == 7) {
        contains = true;
    }
}
console.log(contains);
