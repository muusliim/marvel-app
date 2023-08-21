import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import { Helmet } from "react-helmet";

const ComicsPage = () => {
    return(
        <>
            <Helmet>
                <meta
                name="description"
                content="Comics page"
                /> 
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <title>Comics page</title>
            </Helmet>
            <AppBanner/>
            <ComicsList/>
        </>
    )
}

export default ComicsPage;