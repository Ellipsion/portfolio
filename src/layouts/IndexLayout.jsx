import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';


import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"
import Container from "../components/Container"
import Footer from "../components/Footer"

const IndexLayout = () => {
    const location = useLocation()
    return (
        <Layout>
            <Sidebar />
            <Container >
                <Outlet />
                {
                    (!location.pathname.includes("contact") && <Footer />)
                }
            </Container>
        </Layout>
    )
}

export default IndexLayout;
