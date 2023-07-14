import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Tweet from './Tweet';
import { useDispatch, useSelector } from 'react-redux'
import {logoutUser} from '../reducers/users'
import { useRouter } from 'next/router'



function Home() {

  const dispatch = useDispatch();
  const router = useRouter();

  const [tweetsData, setTweetsData] = useState ([])
  const [tweetContent, setTweetContent] = useState()
  const user = useSelector((state) => {
		return state.users.value })


//afficher les tweets
useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then(response => response.json())
      .then(data => {
        console.log('data TWEETS', data.tweets)
        setTweetsData(data.tweets)
      });
  }, []);

  let sortedTweets = tweetsData.sort(function(a, b){
    return a.content.localeCompare(b.content);
  });
  

  console.log('sorted', sortedTweets)

  const tweets = sortedTweets.map((data, i) => {
    return (
    <Tweet key={i} 
    content={data.content} 
    username={data.userId.username} 
    firstname={data.userId.firstname}
    token={data.userId.token}
    timeStamp={data.timestamp}
    image={data.userId.image}
    likes={data.likes}
    hashtags={data.hashtags}
    mentions={data.mentions}
    />
    )
  });


//nouveau tweet
let addTweet = () => {
  if (user.token) {
    console.log("token", user.token);
    fetch('http://localhost:3000/tweets/addTweet', {
      method : "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify ( {
        content: tweetContent,
        userId: user.userId,
        hashtags: 'test',
        mentions: [],
      })
    })
      .then (response => response.json())
      .then ((data)=> {
        console.log("data", data);
        setTweetsData(data.data) 
      })
  }
}

let hashtag =
<div style= {{display: 'flex', flexDirection: 'column', justifyContent: 'right', margin: '20px'}}>
<h3># chocolat</h3>
<span>3 tweets</span>
</div>

const logout = () => {
  dispatch(logoutUser())
  router.push('/')
}


  return (
    <div className={styles.main}>
        <div className={styles.leftContainer}>
            <div>
                <img src="/../public/twitterIcon.png" alt="background" width={60} height={60}></img> 
            </div>
            <div>
                <div className={styles.bottomLeft}>
                 {user.image &&   <img src={user.image} alt="background" width={60} height={10}></img>}
                    <div className={styles.bottomLeftTexts}>
                        <span>{user.firstname}</span>  
                        <span>{user.username}</span>  
                    </div>
                </div>
                <button onClick={()=> logout()}>Logout</button>
            </div>
        </div>
        <div className={styles.centerContainer}>
            <div className={styles.centerUp}>
                <h1>Home</h1>
                <input onChange={(e) => setTweetContent(e.target.value)} value={tweetContent} type="text"  maxlength="280" placeholder="What's up?" style= {{padding: '10px', backgroundColor: 'rgb(74, 73, 111)'}}/>
                <div style= {{display: 'flex', flexDirection: 'row', justifyContent: 'right', margin: '20px'}}>
                    <span style= {{margin: '8px'}}>9/280</span>
                    <button onClick = {()=> addTweet()}>Tweet</button>
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