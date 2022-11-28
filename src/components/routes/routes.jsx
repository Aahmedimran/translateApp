import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,

} from 'react-router-dom'
import Login from '../pages/login'
import Translate from '../pages/translate'
import Profile from '../pages/profile'
import PrivateRoutes from './PrivateRoutes'

const Approutes = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route element={<Translate />} path='/Translate' />
                        <Route element={<Profile />} path='/profile' />
                    </Route>
                    <Route element={<Login />} path='/Login' />
                    <Route element={<Login />} path='/' />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Approutes
