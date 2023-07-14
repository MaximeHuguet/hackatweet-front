import styles from '../styles/Tweet.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';

function Tweet() {

    function like () {
    }

    function deleteTweet () {
    }


  
  return (
    <>
      <div className={styles.main}>
          <div className={styles.tweetsHeader}>
            <Image src="/../public/twitterIcon.png" alt="background" width={40} height={40}></Image>
            <h3 style={{marginLeft: '10px', marginRight: '10px'}}>Firstname</h3>
            <h4>@username -</h4>
            <span>6 hours ago</span>
          </div>
          <p>Text content of the tweet</p>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'left'}}>
            <div style={{marginLeft: '10px', marginRight: '10px'}}>
                <FontAwesomeIcon onClick={()=>like()} className={styles.userSection} icon={faHeart}/>
                <span style={{marginLeft: '5px', marginRight: '5px'}}>2</span>
            </div>
            <FontAwesomeIcon onClick={()=>deleteTweet()} className={styles.userSection} icon={faTrash}/>
          </div>
      </div>
    </>
  );
}

export default Tweet;
