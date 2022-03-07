import React, {useState} from 'react';

const Photo = ({photo}) => {
    const [showInfo,setShowInfo]=useState(false)
    return (
        <div onMouseOver={()=>setShowInfo(true)} onMouseLeave={()=>setShowInfo(false)} className={'col-12 col-sm-6 col-lg-4 col-xl-3  mb-4 overflow-hidden'}>
            <div className={'text-center bg-white shadow-lg rounded-3 shadow-lg position-relative'}>
                <img src={photo.urls.regular}  height={300} className={'w-100'}/>
                <div className={`${showInfo?'bottom-0':'bottom--150'} photo-inf w-100`}>
                    <div className={`d-flex justify-content-between p-3 align-items-center`}>
                        <div style={{textAlign:'left'}}>
                            <p className={'mb-1 fw-bold text-white fs-5 space'}>{photo.user.name}</p>
                            <p className={'mb-1 text-white space fs-6'} style={{fontSize:'10px'}}>{photo.likes} likes</p>
                        </div>
                        <a href={photo.user.portfolio_url}>
                            <img className={'rounded-circle'} width={50} height={50} src={photo.user.profile_image.medium}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Photo;