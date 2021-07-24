import React, {useEffect, useState} from 'react';
// import axios from "axios";
import './news.css';

function News() {
    const [news,setNews] =useState([]);
    const api = process.env.React_App_News_Api;
    const apiUrl = "http://api.mediastack.com/v1/news?access_key=" + api+"&languages=en&limit=100";

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(apiUrl).then((res)=>{
           return res.json();
        }).then((datas)=>{
               setNews(datas.data);
               console.log("success");
            })

    }, [])
     console.log(news)
    return(
        <div className='news'>
            <div className='news__body'>
                {news.map((data)=>{
                    if(data.image != null || undefined){
                        return <div className='content'>
                            <div className='news__left__top'>
                                <div className='news__image'>
                                    <img src={data.image} alt={data.title} key={data.title}/>
                                </div>
                            </div>
                            <div className='news__right__bottom'>
                                <div className='news__title'>
                                    <h3>{data.title}</h3>
                                </div>
                                <div className='news__discription'>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        </div>;
                    }
                })}
            </div>
        </div>
    )
}

export default News;