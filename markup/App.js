import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
const App = () => {
    const [text,setText]=useState('# markdown preview')
    return (
        <main>
            <section className={'my-container'}>
                <div className={'row'}>
                    <div className={'col-12 col-lg-6'}>
                        <textarea value={text} onChange={(e)=>{setText(e.target.value)}} className={'input-type'}>
                        </textarea>
                    </div>
                    <div className={'col-12 col-lg-6 overflow-auto'}>
                        <ReactMarkdown>
                            {text}
                        </ReactMarkdown>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default App;