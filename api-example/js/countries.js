const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));

}
loadCountries();

const displayCountries = countries => {
//     for (const country of countries) {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <h4>${country.region}</h4>
        <button onclick="loadCountryByName('${country.name}')">details</button>`
       /*  const h3 = document.createElement('h3');
        h3.innerText = country.name;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);
        countriesDiv.appendChild(div);
        const h4 = document.createElement('h4');
        h4.innerText = ` regoin: ${country.region} 
        alfha code:${country.alpha3Code}`; */


        countriesDiv.appendChild(div);
        
    }); 
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountriesDetails(data[0]));
}
const displayCountriesDetails = country => {
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `<h5>${country.name}</h5>
    <p>population: ${country.population}</p>
    <img width="200px" src="${country.flag}">`;
}