import './comicsList.scss';


import { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const setContent = (process, Component, newItemLoading) => {
    switch (process) {
        case 'waiting':
            return <Spinner/>;
        case 'loading':
            return newItemLoading ? <Component/> : <Spinner/>;
        case 'confirmed':
            return <Component/>
        case 'error':
            return <ErrorMessage/>
        default:
            throw new Error('Unexpected process state');
    }
}

const ComicsList = () => {

    const [comicsList, setComicslist] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(null);
    const [comicsEnded, setComicsEnded] = useState(false);

    const { getAllComics, process, setProcess} = useMarvelService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsListLoaded)
            .then(() => setProcess('confirmed'))
    } 

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 8) {
            ended = true; 
        }

        setComicslist(comicsList => [...comicsList, ...newComicsList]);
        setNewItemLoading(false);
        setOffset(offset => offset + 8);
        setComicsEnded(ended);
    }

    function renderListItems(arr) {
        const items = arr.map((item, i) => {
            return (
                <motion.li 
                    className="comics__item" key={i}
                    // initial={{opacity:0}}
                    // animate={{opacity:1}}
                    // transition={{duration:1}}
                    >
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title}  className="comics__item-img" />
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">Price: {item.price}</div>
                    </Link>
                </motion.li>
            )
        });

        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }


    return (
        <div className="comics__list">
                {setContent(process, () => renderListItems(comicsList), newItemLoading)}
            <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': comicsEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;