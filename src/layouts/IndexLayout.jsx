import React from 'react';
import { Outlet } from 'react-router-dom';


import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"
import Container from "../components/Container"
import Footer from "../components/Footer"
import { useLocation } from 'react-router-dom';
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
