import React from 'react';

import { Outlet } from 'react-router-dom';

import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"
import Container from "../components/Container"
import Footer from "../components/Footer"

const IndexLayout = () => {
    return (
        <Layout >
            <Sidebar />
            <Container >
                <Outlet />
                <Footer />
            </Container>
        </Layout>
    )
}

export default IndexLayout;
