import React, { useState, useEffect } from 'react';
import './css/Contact.css'
function Contact() {
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="title">
                        <div className="heading">Contact</div>
                        <div className="subheading">
                            <p>Get in Touch</p>
                            <div className="line"></div>
                        </div>
                    </div>
                    <br />
                    <p>Ready to take the next step? I'm thrilled to connect with you and discuss how we can bring your vision to life. Whether you have a specific project in mind or need guidance on your web development needs, I'm here to help.</p>
                    <br />
                    <p><i>email : </i><a href="https://mail.google.com/mail/?view=cm&fs=1&to=parkarjunaid2811@gmail.com">parkarjunaid2811@gmail.com</a></p>
                    <br />
                    <div className="options">
                        <ul>
                            <li><i>Partner</i></li>
                            <li><a href="">zestlark</a></li>
                        </ul>

                        <ul>
                            <li><i>Support</i></li>
                            <li><a href="">terms and condition</a></li>
                            <li><a href="">privacy</a></li>
                        </ul>

                        <ul>
                            <li><i>Social</i></li>
                            <li>
                                <a href="https://www.instagram.com/Junaid_parkar25/"><img className='instagram' src="https://img.icons8.com/?size=1x&id=32292&format=png" alt="" /></a>
                                <a href="https://twitter.com/JunaidParkar8"><img className='instagram' src="https://img.icons8.com/?size=1x&id=437&format=png" alt="" /></a>
                                <a href="https://www.facebook.com/people/Junaid-Parkar/100091830905870/"><img className='instagram' src="https://img.icons8.com/?size=1x&id=60459&format=png" alt="" /></a>
                                <a href="https://github.com/JunaidParkar"><img className='instagram' src="https://img.icons8.com/?size=1x&id=12598&format=png" alt="" /></a>
                            </li>
                        </ul>

                    </div>
                    <br /><br />
                    <hr />
                    <center>
                        &#169; 2023
                    </center>
                </div>
            </div>
        </>
    )
}

export default Contact
