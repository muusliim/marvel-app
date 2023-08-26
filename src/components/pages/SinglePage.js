import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import AppBanner from "../appBanner/AppBanner";

const SinglePage = ({Component, dataType}) => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    const {getComics, getCharacter, clearError, process, setProcess} = useMarvelService();

    
    useEffect(() => {
        updateComic(); 
    }, [id])

    const onDataLoaded = (data) => {
        setData(data);
    }

    const updateComic = () => {
        clearError();
        switch (dataType) {
            case 'comic':
                getComics(id).then(onDataLoaded)
                .then(() => setProcess('confirmed'));
                break;
            case 'character':
                getCharacter(id).then(onDataLoaded)
                .then(() => setProcess('confirmed'));
        }
    }


    return (
        <>
        <AppBanner/>
        {setContent(process, Component, data)}
        </>
    )
}

export default SinglePage;