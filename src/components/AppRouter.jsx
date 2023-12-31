import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import {routes} from "./router";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route path={route.path} element={route.element} key={route.path}/>
            )}
            <Route path="/*" element={<Navigate replace to="/rate"/>}/>
        </Routes>
    );
};

export default AppRouter;