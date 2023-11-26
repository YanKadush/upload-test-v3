const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a8d0e29e77mshea81b2e86a14bb8p1c92f8jsn17bfe52db4fa',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

export const getHotels = async () => {
    const res = await fetch(url, options);
    return res.json();
}