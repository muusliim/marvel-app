import { useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';

import setContent from '../../utils/setContent';

import './charInfo.scss';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);

    const {getCharacter, clearError, process, setProcess} = useMarvelService();

    useEffect(() => {
        updateChar();
    }, [props.charId])

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        const {charId} = props;
        if (!charId) {
            return;
        }
        clearError();

        getCharacter(charId)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'))
    }


    return (
        <div className="char__info">
            {setContent(process, View, char)}
        </div>
    )
}

const View = ({data}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = data;

    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
        imgStyle = {'objectFit' : 'unset'}
    }

    return (
        
        <motion.div             
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]}}>

            <div className="char__basics">
                <img src={thumbnail} alt={name} style={imgStyle}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <Link to={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </Link>
                        <Link to={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length === 0 ? 'There is no comics with this character' : null}
                {
                    comics.map((item, i) => {
                        const comicId = item.resourceURI.split('/').pop();
                        return (
                            <Link 
                                to={`/comics/${comicId}`} 
                                key={i}  
                                className ="char__comics-item"
                            >
                                {item.name}
                            </Link>
                        )
                    })
                }
            </ul>
        </motion.div>
    )
}


export default CharInfo;