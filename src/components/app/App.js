import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ComicsPage } from "../pages";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";
import SinglePage from "../pages/SinglePage";
// import SingleCharPage from "../pages/SingleCharPage/SingleCharPage";
// import SingleComicsPage from "../pages/singleComicPage/SingleComicsPage";

const Page404 = lazy(() => import('../pages/404.js'));
const MainPage = lazy(() => import('../pages/MainPage.js'));
const SingleCharPage = lazy(() => import('../pages/SingleCharPage/SingleCharPage'));
const SingleComicsPage = lazy(() => import('../pages/singleComicPage/SingleComicsPage'));





const App = () => {

   return (
    <Router>
        <div className="app">
        <AppHeader/>
            <main>
                <Suspense fallback={Spinner}>
                    <Routes>
                        <Route path="/" element={<MainPage/>} />
                        <Route path="/comics" element={<ComicsPage/>} />
                        <Route path="/comics/:id" element={<SinglePage Component={SingleComicsPage} dataType='comic'/>} />
                        <Route path="/characters/:id" element={<SinglePage Component={SingleCharPage} dataType='character'/>} />
                        <Route path="*" element={<Page404/>} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    </Router>
    )
}

export default App;