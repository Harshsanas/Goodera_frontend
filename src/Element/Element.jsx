import React from 'react'
import styled from "styled-components"

export default function Element() {
    const CARD = styled.div`
      display: grid;
      grid-template-columns: auto auto;
      width: 1100px;
      margin: 0 auto;

      .card {
        background-color: white;
        padding: 10px;
        border-radius: 8px;
        height: auto;
        float: right;
        margin: 15px;
      }

      .box {
        width: 140px;
        height: 140px;
        background-color: grey;
        border-radius: 8px;
        margin-right: 10px;
        margin-top: 28px;
        float: left;
      }

      button {
        float: right;
        border: 2px solid #f07987;
        color: #F07987;
        height:25px;
        font-weight: 600;
        border-radius:4px;
        background-color: transparent;
      }
    `;

    return (
      <div>
        <CARD>
          <div className="card">
            <div className="box"></div>
            <div>
              <h2>Executive Producer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button>View Details</button>
          </div>

          <div className="card">
            <div className="box"></div>
            <div>
              <h2>Executive Producer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button>View Details</button>
          </div>
          <div className="card">
            <div className="box"></div>
            <div>
              <h2>Executive Producer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button>View Details</button>
          </div>
          <div className="card">
            <div className="box"></div>
            <div>
              <h2>Executive Producer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button>View Details</button>
          </div>
          <div className="card">
            <div className="box"></div>
            <div>
              <h2>Executive Producer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button>View Details</button>
          </div>
          <div className="card">
            <div className="box"></div>
            <div>
              <h2>Executive Producer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button>View Details</button>
          </div>
          <div className="card">
            <div className="box"></div>
            <div>
              <h2>Executive Producer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button>View Details</button>
          </div>
        </CARD>
      </div>
    );
}
