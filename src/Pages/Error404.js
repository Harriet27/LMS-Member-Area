import React from 'react';

const Error404 = () => {
    return (
        <div style={styles.root}>
            No Page Found
        </div>
    );
};

const styles = {
    root: {
        padding: '0px 35px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        // Optional
        fontSize: 'larger',
        fontWeight: 600,
        justifyContent: 'center',
        textAlign: 'center',
    },
};

export default Error404;
