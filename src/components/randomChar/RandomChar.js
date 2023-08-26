import './randomChar.scss';
import {motion} from 'framer-motion';
import mjolnir from '../../resources/img/mjolnir.png';
import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import React, { useState, useRef, useEffect } from 'react';

const RandomChar = () =>{

    const [char, setChar] = useState({});

    const myRef = useRef(null);


    const {loading, error, getCharacter, clearError, process, setProcess} = useMarvelService(); 

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000)) + 1011000;
        getCharacter(id)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed')) 
    }

    useEffect(() => {
        updateChar();
        myRef.current.focus();   
    }, [])


    return (
        <div className="randomchar">
            {setContent(process, View, char)}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button ref={myRef} onClick={updateChar} className="button button__main">
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )
}

const View = ({data}) => {
    const {name, thumbnail, homepage, wiki} = data;       
    let {description} = data;
    let style = {};
    if (thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
        style = {objectFit:'contain'};
    } else {
        style = {objectFit: 'cover'};
    }
    

    
    return (
        <motion.div className="randomchar__block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]}}
        >
        <img src={thumbnail} alt="Random character" style={style} className="randomchar__img"/>
        <div className="randomchar__info">
            <p className="randomchar__name">{name}</p>
            <p className="randomchar__descr">
            {description}
            </p>
            <div className="randomchar__btns">
                <a href={homepage}  className="button button__main">
                    <div className="inner">homepage</div>
                </a>
                <a href={wiki} className="button button__secondary">
                    <div className="inner">Wiki</div>
                </a>
            </div>
        </div>
    </motion.div> 
    )
}

export default RandomChar;