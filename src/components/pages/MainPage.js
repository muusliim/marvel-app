import { useState } from "react";
import { Helmet } from "react-helmet";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import CharSearchForm from "../charSearchForm/CharSearchForm";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';
import './styleForCharInfo.scss'

const MainPage = () => {
    const [selectedChar, setChar] = useState(null); 
    const onCharSelected = (id) => setChar(id);

    return (
        <>
            <Helmet>
                <meta
                name="description"
                content="Marvel information portal"
                /> 
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <title>Marvel information portal</title>
            </Helmet>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected}/>
                </ErrorBoundary>
                <div className="char__charInfo" id='element'>
                <ErrorBoundary>
                    <CharInfo charId={selectedChar}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <CharSearchForm/>
                </ErrorBoundary>
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;