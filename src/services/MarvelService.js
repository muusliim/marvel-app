import { useHttp } from "../hooks/http.hook";

const  useMarvelService = () => {
    const {request, clearError, process, setProcess} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=6b17f583247fa824b911ec166786aa42';
    const _baseOffset = 200;
    const _baseComicsOffset = 24;


    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async(id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const getCharacterByName = async(name) => {
        const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
        
    }

    const getAllComics = async(offset = _baseComicsOffset) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics);
    }

    const getComics = async(id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`)
        return _transformComics(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        return {
            id:char.id,
            name: char.name,
            description: char.description.length > 210 ? char.description.slice(0, 210) + '...' : char.description = "NO DESCRIPTION. COMEBACK LATER",
            thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items.length > 9 ? char.comics.items.slice(0, 10) : char.comics.items
        }
    }

    const _transformComics = (comics) => {
        return{
            id:comics.id,
            title: comics.title,
            description: comics.description || 'There is no description',
            pageCount: comics.pageCount ? `Pages: ${comics.pageCount}` : 'No information about the number of pages',
            language: comics.textObjects.language || 'en-rus',
            thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
            price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'not available'
        }
    }


    return {clearError, 
            process, 
            setProcess,
            getAllCharacters, 
            getCharacter, 
            getAllComics, 
            getComics, 
            getCharacterByName
           };
}

export default useMarvelService;
