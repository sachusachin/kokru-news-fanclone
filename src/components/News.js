import React, {useEffect, useState} from 'react';
// import axios from "axios";
import './news.css';

function News() {
    const [news,setNews] =useState([]);
    // const api = process.env.React_App_News_Api;
    const api = "9ccd4a2ce794449fb7b11796d7ad3583" ;
    const apiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey="+api;
     console.log(apiUrl);
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(apiUrl).then((res)=>{
           return res.json();
        }).then((datas)=>{
               setNews(datas.articles);
               console.log("datas = ",datas);
            })

    }, [])
     console.log(news)
    return(
        <div className='news'>
            <div className='news__body'>
                {news.map((data)=>{
                    if(data.urlToImage != null || undefined){
                        return <div className='content'>
                            <div className='news__left__top'>
                                <div className='news__image'>
                                    <img src={data.urlToImage} alt={data.title} key={data.title}/>
                                </div>
                                <div key={data.title} className='link'><a href={data.url+"&width=500"} target='_blank'>{data.source.name}</a></div>
                                <div key={data.title} className='bookmark'><button><i className="fal fa-bookmark"> </i></button></div>
                            </div>
                            <div className='news__right__bottom' key={data.title}>
                                <div className='news__title' key={data.title}>
                                    <h3 key={data.title}>{data.title}</h3>
                                </div>
                                {/*<div className='news__discription' key={data.title}>*/}
                                {/*    <p key={data.title}>{data.description}</p>*/}
                                {/*</div>*/}
                                <div key={data.title} className='news__time'>
                                    <p>publishedAt : {data.publishedAt}</p>
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