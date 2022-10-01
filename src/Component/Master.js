import React from 'react'
import './master.css'
import { useState } from 'react'

export const Master = () => {
    const data = [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'Bootstrap' },
        { name: 'Javascript' },
        { name: 'PHP' },
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'MongoDb' },
        { name: 'React' },
    ]
    const colors = [
        "#0c0013",
        "#a52a2a",
        "#5706a5",
        "#f0a47e",
        "#0c0013",
        "#f0a47e",
        "#f0a47e",
        "#ba7a5f",
        "#0c0013",
    ]
    const [showmore, setshowmore] = useState(6);
    const loadmore = () => {
        setshowmore((pre) => pre + 3)
    }

    return (
        <div className='container msection'>
            <div className="section-title">
                <h5>Mastered languages</h5>
                <span className='line'></span>
            </div>
            <div className="row api">
                {data.slice(0, showmore).map((items, index) => (
                    <div className="col-xl-4 col-md-6 col-sm-12 ">
                        <div className="items" key={index}>
                            <span className="spanarea" style={{ backgroundColor: colors[index] }}>
                                {index + 1}
                            </span>
                            <p >{items.name}</p>
                        </div>
                    </div>

                ))}
            </div>
            {showmore >= data.length ? null : (<span className="loadbutton" onClick={loadmore}>Load More</span>)}


        </div>
    )
}
export default Master
