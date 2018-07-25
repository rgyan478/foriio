import React, { Component } from "react";
import axios from 'axios'
export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: {}
    };
    this.getworkDetail(this.props.match.params.id);
  }

  getworkDetail(id)
  {
    let self=this;    
      axios.get('https://api.fori.io/api/v1/works/'+id)
    .then(function (response) {
      self.setState({work:response.data.work})
      document.title = response.data.work.title;
      //console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
        <div className="about_div">
        <div>
       
      </div>
        <div className="container">
            <div className="Media_Container">
                
                   
                    { this.state.work.type==="image" && 
                        this.state.work.images. map((img, index) => {
                            return( <img src={img.urls.detail3x}  key={"img"+index}/>)
                        })
                    }
                    { this.state.work.type==="video" && 
                     this.state.work.videos. map((video, index) => {
                        //https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/7697987
                      
                        return( 
                            <div className="video_left" key={"video"+index}>
                            {video.platform=="youtube" && <iframe width="100%" height="100%" src={video.url.replace('watch?v=','embed/') + "?rel=0&amp;amp;controls=0&amp;amp;showinfo=0"} frameborder="0" allow="autoplay; encrypted-media"></iframe>}
                            {video.platform=="vimeo" && <iframe src={"https://player.vimeo.com/video/"+video.video_id+"?autoplay=1&loop=1&autopause=0"} width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>}
                        </div>
                        )
                    })
                    }
                    
              
            </div>
            <div className="Detail_Container">
                <div className="video_right_detail">
                    <div className="detail_header">
                        <h2>{this.state.work.title}</h2>
                        <p>{this.state.work.description}</p>
 
                       
 
                    </div>
                    <div className="avtar_item">
                        <h5>CREDIT</h5>
                        {
                          this.state.work.creative_roles &&  this.state.work.creative_roles.map((cRole, index) => {
                                return(<div key={"credit"+index}>
                                    <div className="avtar_img">
                                   { cRole.user.profile.avatar && <img src={cRole.user.profile.avatar.small} />}
                        </div>
                        <div className="avtar_detail">
                            <span>{cRole.name}</span>
                            <h3>{cRole.user.profile.name}</h3>
                        </div>
                                </div>)
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="clr"></div>
    </div>
    );
  }
}