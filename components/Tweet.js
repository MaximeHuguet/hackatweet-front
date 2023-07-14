import styles from '../styles/Tweet.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';

function Tweet(props) {
  console.log(props);
  console.log(props.image);
    function like () {
    }

    function deleteTweet () {
    }


  
  return (
    <>
      <div className={styles.main}>
          <div className={styles.tweetsHeader}>
            <img src={props.image} alt="background" width={40} height={40}></img>
            <h3 style={{marginLeft: '10px', marginRight: '10px'}}>{props.firstname}</h3>
            <h4>@{props.username} -</h4>
            <span>{props.timeStamp}</span>
          </div>
          <p>{props.content}</p>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'left'}}>
            <div style={{marginLeft: '10px', marginRight: '10px'}}>
                <FontAwesomeIcon onClick={()=>like()} className={styles.userSection} icon={faHeart}/>
                <span style={{marginLeft: '5px', marginRight: '5px'}}>{props.like}</span>
            </div>
            <FontAwesomeIcon onClick={()=>deleteTweet()} className={styles.userSection} icon={faTrash}/>
          </div>
      </div>
    </>
  );
}

export default Tweet;
