import React, { useState, useEffect } from 'react';
import './css/Skill.css'

function Skill() {
    const [count, setCount] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval;

        if (isHovered) {
            interval = setInterval(() => {
                setCount((prevCount) => (prevCount === 50 ? prevCount : prevCount + 1));
            }, 50);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isHovered]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };



    return (
        <>
            <div className="skill" onMouseEnter={handleMouseEnter}onTouchStart={handleMouseEnter}>
                <div className="lightcircle"></div>
                <div className="container">
                    <div className="title">
                        <div className="subheading">
                            <p>My Skills</p>
                            <div className="line"></div>
                        </div>

                        <div className="imgbox">
                            <img src="https://img.icons8.com/?size=1x&id=123603&format=png" alt="" />
                            <img src="https://img.icons8.com/?size=1x&id=EAUyKy3IwmqM&format=png" alt="" />
                            <img src="https://img.icons8.com/?size=1x&id=108784&format=png" alt="" />
                            <img src="https://img.icons8.com/?size=1x&id=21278&format=png" alt="" />
                            <img src="https://img.icons8.com/?size=1x&id=t2x6DtCn5Zzx&format=png" alt="" />
                            <img src="https://img.icons8.com/?size=1x&id=UFXRpPFebwa2&format=png" alt="" />
                            <img src="https://img.icons8.com/?size=1x&id=63777&format=png" alt="" />
                            <img src="https://img.icons8.com/?size=1x&id=62452&format=png" alt="" />

                        </div>

                        <div className="content">
                            <div className="count">
                                <h1>{count}+</h1>
                                <p><small><b><i>completed project !</i></b></small></p>
                            </div>
                            <p>Created more than 50 projects. Some are there in my Github.</p>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
            </div>
        </>
    )
}

export default Skill
