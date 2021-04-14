import React, {useState, useEffect} from 'react';
import Youtube from './api/Youtube';
import './Main.css';
import { actionTypes } from './Reducer';
import {useStateValue} from './StateProvider';
import ytch from 'yt-channel-info';
import VideoCard from './VideoCard';

// const results = [
//     {
//         title: "India's Prestigious Tech University Scamming Students...You Can Buy A Job",
//         description: 'Something in India Happening right now!',
//         id: 'vqo18JCJ5DY',
//         image: 'https://yt3.ggpht.com/ytc/AAUvwnh7Mc3UQPAsAQNBJLBp6Zupc4DbP_knSxSuLj7qxA=s176-c-k-c0x00ffffff-no-rj'
//     },
//     {
//         title: 'Another 5 Must Know JavaScript Features That Almost Nobody Knows',
//         description: 'JavaScript is a vast language with tons of features and it is impossible to know them all. In this video I will be covering yet another 5 features in JavaScript that nobody knows but are incredibly useful.',
//         id: 'yJDofSGTSPQ',
//         image: 'https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s176-c-k-c0x00ffffff-no-rj'
//     },
//     {
//         title: 'Full Stack MERN Project - Build and Deploy an App | React + Redux, Node, Express, MongoDB [Part 1/2]',
//         description: `Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Project - from start to finish. The App is called "Memories" and it is a simple social media MERN application that allows users to post interesting events that happened in their lives.`,
//         id: 'ngc9gnGgUdA',
//         image: 'https://yt3.ggpht.com/ytc/AAUvwnheg2Wwh32lkbWjsqqysqh0fe6-WU_BMn4Qh0FIFg=s176-c-k-c0x00ffffff-no-rj'
//     },
//     {
//         title: 'Full Stack MERN Project - Build and Deploy an App | React + Redux, Node, Express, MongoDB [Part 1/2]',
//         description: `Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Project - from start to finish. The App is called "Memories" and it is a simple social media MERN application that allows users to post interesting events that happened in their lives.`,
//         id: 'ngc9gnGgUdA',
//         image: 'https://yt3.ggpht.com/ytc/AAUvwnheg2Wwh32lkbWjsqqysqh0fe6-WU_BMn4Qh0FIFg=s176-c-k-c0x00ffffff-no-rj'
//     }
// ]

const Main = () => {

    const KEY = 'AIzaSyDpOLuxAuE9A7y7aXambgpOVIwegPu3puI'
    const [{open, searchTerm}, dispatch] = useStateValue()
    const [videoResponse, setVideoResponse] = useState([])

    useEffect(() => {
        const termRequest = async () => {
            const response = await Youtube.get('/search', {
                params: {
                    part: 'snippet',
                    maxResults: 24,
                    key: KEY,
                    type: 'video',
                    q: searchTerm || 'Star Wars'
                }
            })
            dispatch({
                type: actionTypes.SET_RESULTS,
                results: response.data.items
            })
            setVideoResponse(response.data.items)
        }
        termRequest()
    }, [searchTerm])

    const videoList = videoResponse.map((video) => {
        return (
            <VideoCard key={video.id.videoId} id={video.id.videoId} image={video.snippet.thumbnails.default.url} title={video.snippet.title} />
        );
    });

    const isOpen = open ? 'main__open' : 'main__closed'

    return (
        <div className={isOpen}>
            <div className="main__videos">
                {videoList}
            </div>
        </div>
    )
}

export default Main
