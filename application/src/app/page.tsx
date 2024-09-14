'use client'

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "../app/pages/HomePage";
import AuthPage from "../app/pages/AuthPage";
import PageLayout from "../app/layouts/PageLayout";

export default function Home() {
    return (
        <Router>
            <PageLayout>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/auth' element={<AuthPage />} />
                </Routes>
            </PageLayout>
        </Router>
    );
}
