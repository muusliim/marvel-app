import './singleCharPageStyle.scss';
import { Helmet } from 'react-helmet';


const SingleCharPage = ({data}) => {
    const {name, description, thumbnail} = data;

    return (  
        <div className="single-comic">
            <Helmet>
                <meta
                name="description"
                    content={`About ${name}`}
                /> 
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <title>About: {name}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className="single-comic__char-img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
        </div>
    )
}

export default SingleCharPage;