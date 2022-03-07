import React from 'react';
import ReactLoading from "react-loading";
const Loading = () => {
    return (
        <div className={'d-flex justify-content-center align-items-center'} style={{marginTop:'7rem'}}>
            <article>
                <ReactLoading type={'bars'} color="#476A2E" width={'180px'} />
            </article>
        </div>
    );
};

export default Loading;