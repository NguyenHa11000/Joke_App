import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import './JokeDetail.css'

const JokeDetail = () => {
    const [jokes, setJokes] = useState([]);
    const [joke, setJoke] = useState("");
    //get joke detail
    const getJokeDetail = () => {
        axios.get('/get/joke/detail').then(function (response)
        {
            setJokes(response.data);
            console.log(response.data);
        })

    }

    const getJoke = () => {
        setJoke(jokes.shift())
        console.log(jokes.length)
        console.log(joke)
    }

    useEffect(() => {
        getJokeDetail();
        
    }, []);

    useEffect(() => {
        if (jokes.length > 0) {
            getJoke();
        }
    }, [jokes]);
    return (
        <>
            <div className="container">
                <div className="row  joke_header">
                    <h1>A joke a day keeps the doctor away</h1>
                    <p>If you joke wrong way, your teeth have to pay. (Serious)</p>
                </div>
                <div className="row justify-content-center joke_body">
                    
                {jokes.length >= 0 && joke ? (<>
                        <div className="col-lg-2">
                        </div>
                        <div className="col-lg-8 ">
                            <div className="row joke_content">
                                <span>{joke &&joke.joke_content}</span> <br />
                            </div>
                            <div className="row">
                                <div className="col-lg-3">
                                </div>
                                <div className="col-lg-6 button_joke">
                                    <button className="joke_like" onClick={()=>getJoke()}>This is funny!</button>
                                    <button className="joke_dislike" onClick={()=>getJoke()}>This is not funny!</button>
                                </div>
                                <div className="col-lg-3">
                                </div>    
                            </div>
                        </div>
                        <div className="col-lg-2">
                        </div>
                    </>) : 
                        <span>That's all the jokes for today! Come back another day!</span> 
                    }
                </div>
                <div className="row joke_footer">
                    <div className="col-lg-2">
                    </div>
                    <div className="col-lg-8">
                        <span>This website is created as part of Hisolutions program. The materials contained on this website are provided for general information only and do not constitute any form of advice HLS assumes no responsibility for the accuracy of any particular statement and accepts no liability for any loss or damage which may arise from reliance on the information contained on this site</span>
                    </div>
                    <div className="col-lg-2">
                    </div>
                </div>
            </div>
        </>
    );
};

export default JokeDetail;
