//ZADANIE 1 
document.getElementById('formularzUzytkownika').addEventListener('submit', function(e) {
    e.preventDefault();

    const osoba = {
        imie: document.getElementById('imie').value,
        nazwisko: document.getElementById('nazwisko').value,
        wiek: Number(document.getElementById('wiek').value)
    };

    console.log("1a. Obiekt:", osoba);
    console.log("1b. Właściwości:", osoba.imie, osoba.nazwisko, osoba.wiek);
    console.log("1c. JSON:", JSON.stringify(osoba));
});

//ZADANIE 2
class LiczbaZespolona {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    wypisz() {
        const znak = this.imaginary >= 0 ? "+" : "-";
        return `${this.real} ${znak} ${Math.abs(this.imaginary)}i`;
    }

    modul() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
}

//ZADANIE 3
function generujTabliceZespolonych(n) {
    const tablica = [];
    for (let i = 0; i < n; i++) {
        const re = Math.floor(Math.random() * 21) - 10;
        const im = Math.floor(Math.random() * 21) - 10;
        tablica.push(new LiczbaZespolona(re, im));
    }
    return tablica;
}

const daneTestowe = generujTabliceZespolonych(5);
console.log("Wygenerowane liczby:", daneTestowe.map(l => l.wypisz()));

//ZADANIE 4 (Filter)
const dodatnie = daneTestowe.filter(l => l.real > 0 && l.imaginary > 0);
console.log("4. Dodatnie:", dodatnie.map(l => l.wypisz()));

//ZADANIE 5 (Map)
const zamienione = daneTestowe.map(l => new LiczbaZespolona(l.imaginary, l.real));
console.log("5. Zamienione Re/Im:", zamienione.map(l => l.wypisz()));

//ZADANIE 6 (Reduce - Suma)
const suma = daneTestowe.reduce((acc, l) => acc + l.modul(), 0);
console.log("6. Suma modułów:", suma.toFixed(2));

//ZADANIE 7 (Reduce - Min) 
const minM = daneTestowe.reduce((min, l) => l.modul() < min ? l.modul() : min, daneTestowe[0].modul());
console.log("7. Najmniejszy moduł:", minM.toFixed(2));

//ZADANIE 8 (Reduce - Max obiekt)
const maxObj = daneTestowe.reduce((max, l) => l.modul() > max.modul() ? l : max);
console.log("8. Liczba z max modułem:", maxObj.wypisz());