import React from 'react';
import { Typography, Space } from 'antd';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                Crypto App <br />
                Created by Bogdan Kolesov, 2021 year
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>


            </Space>
        </>
    );
};

export default Footer;