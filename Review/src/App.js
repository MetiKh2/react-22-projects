import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Review from "./Review";

const App = () => {
    return (
        <main className={'d-flex justify-content-center align-items-center flex-column'}>
                <h1>Our Reviews</h1>
                <section className={'post-container mt-4'}>
                    <Review></Review>
                </section>
        </main>
    );
};

export default App;