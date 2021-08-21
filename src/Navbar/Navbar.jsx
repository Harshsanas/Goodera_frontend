import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom"

export default function Navbar() {
  //NAVBAR CSS
    const NAVBAR = styled.div`
      background: linear-gradient(274.83deg, #5db0df 0.58%, #5d7adf 74.3%);
      height: 364px;
      left: 0px;
      top: 0px; 
      margin: auto;
      padding:70px 0 0 150px;

      .navlinks{
        color: #fff;
        text-decoration: none;
        margin: 20px;
      }

      .right{
        float: left;
      }

      .left{
        float: right;
        padding-right: 200px;
      }

      h1{
        margin-top:100px;
        color: #fff;
      }
      p{
        color: #fff;
        margin-top:-20px;
        font-size:16px;
      }

      img{
        margin-left: -20px;
        margin-right:10px;
      }
    `;
    //NAVBAR
    return (
      <>
        <NAVBAR>
          <div className="right">
            <NavLink className="navlinks" to="/">
            <img src="Vector.png" alt="img" />
              JobHunt
            </NavLink>
            <NavLink className="navlinks" to="/">
              Findjob
            </NavLink>
            <NavLink className="navlinks" to="/">
              upskill Yourself
            </NavLink>
          </div>
          <div className="left">
            <NavLink className="navlinks" to="/">
              Post a Job
            </NavLink>
            <NavLink className="navlinks" to="/">
              Sign in
            </NavLink>
          </div>

          <h1>Find Your Dream Job</h1>
          <p>Browse through thousands of full-time and part-time jobs near you</p>
        </NAVBAR>
        
      </>
    );
}
