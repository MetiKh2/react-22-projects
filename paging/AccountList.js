import React from 'react';
import Account from "./Account";

const AccountList = ({accounts}) => {
    console.log('list')
    return (
        <div className={'row'}>
            {accounts.map(item=><Account key={item.id} account={item}/>)}
        </div>
    );
};

export default AccountList;