import React, { Component } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      works:[]
    };
    this.getProfile()
    this.getUserWorks()
  }
  componentDidMount(){
    //alert(this.props.match.params.username)
  }
  getProfile()
  {
    let self=this;    
      axios.get('https://api.fori.io/api/v1/users/'+this.props.match.params.username+'/profile')
    .then(function (response) {
      self.setState({profile:response.data.profile})
      document.title = response.data.profile.name;
      //console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  getUserWorks()
  {
    let self=this;    
      axios.get('https://api.fori.io/api/v1/users/'+this.props.match.params.username+'/works')
    .then(function (response) {
      self.setState({works:response.data.works})
      
      //console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    let profile=this.state.profile;
    return (
     
      <div className="hero_profile_div">
      
          <div className="container">
              <div className="profile_div">

                  <div className="loading-image">
                     
                  </div>

                  <div className="profile_left">
                      <div className="user_profile">
                          <img src={profile && profile.avatar && profile.avatar.default} />
                      </div>

                      <div className="user_profile_detail">
                          <div className="profile_heading">
                              <h2>{profile.name}</h2>
                              <ul>
                                  <li><a href="#"><img src="/src/images/arrow.png" /></a></li>
                                  <li><a href={profile.facebook_url}><i className="fa fa-facebook"></i></a></li>
                                  <li><a href={profile.twitter_url}><i className="fa fa-twitter"></i></a></li>
                                  <li><a href={profile.instagram_url}><i className="fa fa-instagram"></i></a></li>
                              </ul>
                          </div>
                          <div className="profile_description">
                              <p>{profile.bio}</p>
                          </div>
                      </div>
                  </div>
                  <div className="profile_right_link">
                      <ul>
                          <li><i className="fa fa-map-marker"></i><span>{profile.location}</span></li>
                          <li><i className="fa fa-globe"></i><a href="#">{profile.website}</a></li>
                          <li><i className="fa fa-envelope"></i><a href="#">{profile.contact_email}</a></li>
                          <li><i className="fa fa-star-o"></i><span>{profile.profession}</span></li>
                      </ul>
                  </div>
                  <div className="clr"></div>
              </div>


              <div className="thumbnail-image">
                  <ul>
                  {
                  this.state && this.state.works && this.state.works.map((work, index) => {
                    return (
                      <li key={"work"+index}>
                      <Link to={"/work/"+work.id}>                        
                          <div className="thumbnail-image-div">                           
                            { work.type==="image" && work.images.length> 0 && 
                            <img src={work.images[0].urls.list} />}                           
                           { work.type==="video" && work.videos.length> 0 && 
                            <img src={work.videos[0].picture_url} />}
                              <div className="thumbnail-image-hover"> View Work </div>
                          </div>

                          <div className="thumbnail-image-name"> {work.title}</div>
                          </Link>
                          
                      </li>
                    )
                  })
                }
                      
                  </ul>
                  <div className="clear-both"></div>
              </div>

            
          </div>
      </div>
    );
  }
}
