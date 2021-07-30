import React, {useEffect, useState} from 'react';
// import axios from "axios";
import './news.css';
import { Offline, Online } from "react-detect-offline";
import nonetwork from './img/nonetwork.png';

function News() {
    const [news,setNews] =useState([]);

    //https://api.themoviedb.org/3/trending/all/day?api_key=9f8c3b07c18967d52d2f686423c4b3b0
    // const api = process.env.React_App_News_Api;https://api.themoviedb.org/3/movie/550?api_key=9f8c3b07c18967d52d2f686423c4b3b0
    // const api = "9ccd4a2ce794449fb7b11796d7ad3583" ;
    const api = "9f8c3b07c18967d52d2f686423c4b3b0";
    const apiUrl ="https://api.themoviedb.org/3/trending/all/day?api_key="+api;
     console.log(apiUrl);
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(apiUrl).then((res)=>{
           return res.json();
        }).then((datas)=>{
               setNews(datas.results);
               console.log("datas = ",datas);
            })

    }, [])
     console.log(news)
    return(
        <div className='news'>
            <Online>
                <div className='news__body'>
                    {news.map((data)=>{
                        if(data.poster_path != null || undefined){
                            return <div className='content'>
                                <div className='news__left__top'>
                                    <div className='news__image'>
                                        <img src={"https://image.tmdb.org/t/p/original/"+data.poster_path} alt={data.title} key={data.title}/>
                                    </div>
                                    <div key={data.title} className='link'><a href={data.url+"&width=500"} target='_blank'>{data.original_title}</a></div>
                                    <div key={data.title} className='bookmark'><button><i className="fal fa-bookmark"> </i></button></div>
                                </div>
                                <div className='news__right__bottom' key={data.title}>
                                    <div className='news__title' key={data.title}>
                                        <h3 key={data.title}>{data.overview}</h3>
                                    </div>
                                    <div key={data.title} className='news__time'>
                                        <p>release_date : {data.release_date}</p>
                                    </div>
                                </div>
                            </div>;
                        }
                    })}
                </div>
            </Online>
            <Offline>
                <div className='news__offline'>
                    <div className='news__offline__image'>
                        <img src={nonetwork} alt='no-network'/>
                    </div>
                    <div className='news__offline__text'>
                         Oops! Check your Internet Connection
                    </div>
                </div>
            </Offline>
        </div>
    )
}

export default News;