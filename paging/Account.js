import React from 'react';

const Account = ({account}) => {
    console.log('item')
    return (
        <div className={'col-12 col-sm-6 col-lg-4 col-xl-3  mb-4'}>
            <div className={'text-center bg-white shadow-lg p-3 rounded-3 shadow-lg'}>
                <img src={account.avatar_url} width={150} height={150} className={'rounded-circle mb-3'}/>
                <p className={'fw-bold fs-6 item-name'}>{account.login}</p>
                <a target={'_blank'} href={account.html_url} className={'btn btn-info rounded-3 text-white fs-6 fw-bold'}>View profile</a>
            </div>
        </div>

    );
};

export default  Account;