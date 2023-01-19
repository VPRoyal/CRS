import React, { Component } from 'react'
import {Route, Routes } from 'react-router-dom'
import Login from './login'
import Signup from './signup'
export default class account extends Component {
    render() {
        return (
            <div style={{ "width": "100%", "height": "100vh", "backgroundColor": "var(--yellow)" }} >
                  <Routes>
                    <Route exact path="/account" element={<Login />}></Route>
                    <Route exact path="/account/signin" element={<Login/>}></Route>
                    <Route exact path="/account/signup" element={<Signup/>}></Route>
                </Routes>
            </div>
        )
    }
}