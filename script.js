const jmenoInput = document.querySelector('#jmeno');
const prijmeniInput = document.querySelector('#prijmeni');
const vysledekElement = document.querySelector('#vysledek');

document.querySelector('#generujEmail').addEventListener('click', function () {
    const jmeno = jmenoInput.value.trim();
    const prijmeni = prijmeniInput.value.trim();
    const zkracenePrijmeni = prijmeni.slice(0, 5).toLowerCase();
    const zkraceneJmeno = jmeno.slice(0, 3).toLowerCase();
    const email = `${zkracenePrijmeni}${zkraceneJmeno}@fit.cvut.cz`;

    vysledekElement.textContent += `Tvoje e-mailová adresa: ${email}`;
});
