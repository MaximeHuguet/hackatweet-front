import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Tweet from './Tweet';

function Home() {

<<<<<<< HEAD
// const [tweetData, setTweetData] = useState([]);


// useEffect(() => {
//     fetch('http://localhost:3000/tweets')
//       .then(response => response.json())
//       .then(data => {
//         console.log('data TWEETS', data.Tweets)
//         setTweetData(data.tweets)
//         // console.log(tweetData)
//       });
//   }, []);

//   const tweets = tweetData.map((data, i) => {
//     return <Tweet key={i} {...data} />
//   });


  const [tweetData, setTweetData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then(response => response.json())
      .then(data => {
        console.log('data TWEETS', data)
        setTweetData(data.tweets)
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la récupération des tweets:', error);
      });
  }, []);

  const tweets = tweetData.map((data, i) => {
    return <Tweet key={i} {...data} />
  });




=======

let tweets =
<>
<Tweet />
<Tweet />
</>
>>>>>>> 68814eaff83fac95d7faa3c8b356800e64607d2a

let hashtag =
<div style= {{display: 'flex', flexDirection: 'column', justifyContent: 'right', margin: '20px'}}>
<h3># chocolat</h3>
<span>3 tweets</span>
</div>


  return (
    <div className={styles.main}>
        <div className={styles.leftContainer}>
            <div>
                <Image src="/../public/twitterIcon.png" alt="background" width={60} height={60}></Image> 
            </div>
            <div>
                <div className={styles.bottomLeft}>
                    <Image src="/../public/twitterIcon.png" alt="background" width={60} height={10}></Image>
                    <div className={styles.bottomLeftTexts}>
                        <span>Firstname</span>  
                        <span>Username</span>  
                    </div>
                </div>
                <button>Logout</button>
            </div>
        </div>
        <div className={styles.centerContainer}>
            <div className={styles.centerUp}>
                <h1>Home</h1>
                <input type="text"  maxlength="280" placeholder="What's up?" style= {{padding: '10px', backgroundColor: 'rgb(74, 73, 111)'}}/>
                <div style= {{display: 'flex', flexDirection: 'row', justifyContent: 'right', margin: '20px'}}>
                    <span style= {{margin: '8px'}}>9/280</span>
                    <button>Tweet</button>
                </div>
            </div>
            <div className={styles.centerDown}>
            {tweets}
            </div>

        </div>
        <div className={styles.rightContainer}>
            <h1 style={{height: '5%'}} >Trends</h1>
            <div className={styles.rightDown}>
            {hashtag}
            {hashtag}
            </div>
        </div>
    </div>
  );
}

export default Home;