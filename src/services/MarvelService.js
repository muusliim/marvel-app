class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/characters/';
    _apiKey = 'apikey=6b17f583247fa824b911ec166786aa42';
    getResourse = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${url.status}`)
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResourse(`${this._apiBase}?limit=9&offset=203&${this._apiKey}`);
    }

    getCharacter = (id) => {
        return this.getResourse(`${this._apiBase}/${id}?${this._apiKey}`);
    }
}

export default MarvelService;
