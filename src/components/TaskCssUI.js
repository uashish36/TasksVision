import React, { Component, useEffect, useState } from "react"
import '../components/TaskCss.css';
import { Link } from "react-router-dom";

function Box(){
    let [active,setActive]=useState(false);
  const onscroll=()=> {
    console.log(window.scrollY)
    if(window.scrollY >= 18){
        setActive(true);
        console.log(active,'"main-timeline"')
        
    }
  }

  window.addEventListener('scroll',onscroll);

    return(
        <>
        <div className="container">
            <div className="row">
            <div className="col-md-12" style={{padding:'50px',fontSize:'15px'}}>
                <Link to="/">Country State City Task</Link>
                </div>
                </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="main-timeline">
                        <div className="timeline color">
                            <a className="timeline-content">
                                <span className="timeline-year">2018</span>
                                <div className="timeline-icon" data-aos="fade-down">
                                    <i className="fa fa-rocket " id="rocket--part1" data-aos="fade-down"></i>
                                </div>
                                <div className="content">
                                    <h3 className="title">Web Development</h3>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi dolor in, maiores natus ipsum dolor sit amet, consectetur adipisicing elit. Alias animi dolor in, maiores natus.
                                    </p>
                                </div>
                            </a>
                        </div>
                    <div className="timeline">
                        <a className="timeline-content">
                            <span className="timeline-year">2017</span>
                            <div className="timeline-icon">
                                <i className="fa fa-users"></i>
                            </div>
                            <div className="content">
                                <h3 className="title">Java Script</h3>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi dolor in, maiores natus ipsum dolor sit amet, consectetur adipisicing elit. Alias animi dolor in, maiores natus.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
   </>
    )
  }

export default Box;