import { Link } from "react-router-dom";
import './singleComicPageStyle.scss';
import { Helmet } from "react-helmet";


const SingleComicPage = ({data}) => {
    const {title, description, thumbnail, pageCount, price, language} = data;

    return (
    <div className="single-comic">
            <Helmet>
                <meta
                name="description"
                content={`${title} comics book`}
                /> 
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <title>{title}</title>
            </Helmet>
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
            <div className="single-comic__price">{price}</div>
        </div>
        <Link to='/comics' className="single-comic__back">Back to all</Link>
    </div>
    )
}

export default SingleComicPage;