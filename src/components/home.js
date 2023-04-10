import React from "react";
import profile from 'D:/Mern/api-assess/src/utils/images/santhosh.jpg'
import '../utils/css/style.css'
const Portfolio=()=>{
    return(
        <div>
            <div class="container">
    <div class="profile">
      <div class="profile_container">
        <div class="profile_profileImg">
          <img src="Sandy.jpeg" alt="Sandy-Santhosh" />
        </div>
        <div>
          <h1 class="profile_name">
            <span class="profile_name_lastName">Santhosh</span>
          </h1>
          <p class="profile_title">Software Developer</p>
          <p class="description profile_description">
            I am seeking a role in a company where I can contribute my ideas and be
            mentored towards a successful career. An organized and motivated employee
            capable of time management and working under pressure in all environments.
            Seeking to join as an Administrative Assistant to assist in ensuring good internal
            communications and budget management. Create value for my prospective
            employer through my dedicated and diligent efforts.
          </p>
        </div>
      </div>
    </div>
    <div class="group-1">
      <div class="skills">
        <h3 class="title">Technical Skills</h3>
        <ul class="skills_list description" style="list-style:disc">
          <li>Python Programming</li>
          <li>HTML CSS</li>
          <li>C Programing</li>
          <li>Java</li>
        </ul>
      </div>
      <div class="ref">
        <h3 class="title">Languages</h3>
        <div class="ref_item">
          <ul class="known_language description" style="list-style:disc">
            <li>English</li>
            <li>Tanil</li>
          </ul>
        </div>
      </div>
      <div class="certification">
        <h3 class="title">certification</h3>
        <div class="certification_item">
          <p class="item_preTitle">2022</p>
          <h4 class="item_title">React JS</h4>
          <p class="description">
            Workshop in Saveetha Engineering College
          </p>
        </div>
      </div>
    </div>
    <div class="group-2">
      <div class="exp">
        <h3 class="title">Education</h3>
        <div class="edu_item">
            <p class="item_preTitle">2020-2024</p>
            <h4 class="item_title">CSE</h4>
            <p class="item_subtitle">
              Saveetha Engineering College
            </p>
          </div>
          <div class="edu_item">
            <p class="item_preTitle">2017-2018</p>
            <h4 class="item_title">10 Standard - 75.8% </h4>
            <p class="item_subtitle">
              st.Joseph's matriculation higher school
            </p>
          </div>
          <div class="edu_item">
              <p class="item_preTitle">2019-2020</p>
              <h4 class="item_title">12 Standard - 74.3%</h4>
              <p class="item_subtitle">
                  PSBB matriculation higher secondary
                  school
              </p>
            </div>
      </div>
      <div class="skills">
        <h3 class="title">Soft Skills</h3>
        <ul class="skills_list description" style="list-style:disc">
          <li class="item_title">Team work</li>
          <li class="item_title">Adaptibility</li>
          <li class="item_title">Positive Thinking</li>
          <li class="item_title">Time Management</li>
        </ul>
      </div>
      <div class="interest">
        <h3 class="title">Interest</h3>
        <div class="interest_items">
          <div class="interest_item">
            <i data-feather="music"></i>
            <span>Music</span>
          </div>
          <div class="interest_item">
            <i data-feather="book"></i>
            <span>Books</span>
          </div>
          <div class="interest_item">
            <i data-feather="award"></i>
            <span>Sports</span>
          </div>
        </div>

      </div>
    </div>
    <hr></hr>
    <div class="group-3">
      <div class="contact">
        <h3 class="title">Contact</h3>
        <div class="contact_info">
          <p class="description">
            <i data-feather="map"></i>
            No.4,Vignesh nagar, north ragunathapuram,mangadu,600122
          </p>
          <p class="description">
            August 14, 2003
          </p>
          <p class="description">
            <i data-feather="phone-call"></i>
            7358669483
          </p>
        </div>
      </div>
      <div class="social">
        <h3 class="title">Socials</h3>
        <div class="social_items">
          <a href="#" target="_b" class="social_item">
            <i data-feather="github"></i>
            <span>/santhoshsat</span>
          </a>
          <a href="#" target="_blank" class="social_item">
            <i data-feather="linkedin"></i>
            <span>/sandysan002</span>
          </a>
          <a href="#" target="_blank" class="social_item">
            <i data-feather="instagram"></i>
            <span>/sandy_santhosh_002</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <script>
    feather.replace()
  </script>
        </div>
    )
}

export default Portfolio;