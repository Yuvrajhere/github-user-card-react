import React from "react";
import "./User.css";

function User(props) {
  
  return (
    <div className = "User">
      <div className = "top" >
        <img src = {props.user.avatar_url} alt = {props.user.login}/>
        <div>
          <p>Followers<br/><a 
          href= {`https://github.com/${props.user.login}?tab=followers`}>{props.user.followers}</a></p>
          <p>Following<br/><a href= {`https://github.com/${props.user.login}?tab=following`}  >{props.user.following}</a></p>
          <p>Public Repos<br/><a href = {`https://github.com/${props.user.login}?tab=repositories`}>{props.user.public_repos}</a></p>
        </div>
      </div>
      <div className = "middle">
        <p>Name : <a href= {props.user.html_url} >{props.user.name}</a></p>
        <p>Bio : {props.user.bio}</p>
        <p>Location : {props.user.location}</p>
        <p>Twitter : <a href={`https://twitter.com/${props.user.twitter_username}`}>{props.user.twitter_username}</a></p>
        <p>Created at : {props.user.created_at}</p>
      </div>
      <div className = "bottom">
        <img src={`https://grass-graph.moshimo.works/images/${props.user.login}.png?`} alt="Contribution graph "/>
      </div>
    </div>
  )
}

export default User;