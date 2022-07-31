import React from 'react';
import "../HomePage/Contact.css";
import {BsDiscord} from "react-icons/bs";
import {TbBrandTelegram} from "react-icons/tb";
import {BsLinkedin} from "react-icons/bs";
import {FiTwitter} from "react-icons/fi";
import {BsGithub} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";

const Contact = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-lg-6 col-md-12 col-sm-12" id="left-con">
          <p id='h-1'>Contact <span id='h-2'>Us</span></p>
          <p id='des'>Any question or remarks? Just write us a message</p>
          <div class="row">
            <div class="col">
              <p className='sub-head'>First name</p>
              <div>
              <input type="text" class="" placeholder="First name"  id='fname'/>
              </div>
              
            </div>
            <div class="col">
              <p className='sub-head'>Last name</p>
              <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" id='lname'/>
            </div>
          </div>
          <br/>
          <div class="mb-3">
            <p className='sub-head'>Mail</p>
            <input type="email" class="form-control input_box_contact" id="mail" placeholder="name@example.com"/>
          </div>
          <div class="mb-3">
            <p className='sub-head'>Message</p>
            <textarea class="form-control" id="message" placeholder="Write your message..." rows="4"></textarea>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end" id='cnt'>
            <button class="btn me-md-2" type="button" id='bt'>Send my message</button>
          </div>
        </div>
        <div class="col-xxl-6 col-lg-6 col-md-12 col-sm-12" id="right-con">
          <div class="container" id='con'>
            <h3 id='head-con'>Or check out these resources</h3>
            <div className='con-1'>
              <div className='left-content'><BsDiscord/></div>
              <div className='right-content'>
                <h3>Join our community on Discord</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
              </div>
            </div>
            <div className='con-1'>
              <div className='left-content'><TbBrandTelegram/></div>
              <div className='right-content'>
                <h3>Join our blogs</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
              </div>
            </div>
            <div className='con-2'>
              <div id='icon-1'><BsLinkedin/></div>
              <div id='icon-2'><FiTwitter/></div>
              <div id='icon-3'><BsGithub/></div>
              <div id='icon-4'><BsInstagram/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact