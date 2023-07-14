import styles from '../styles/Hashtags.module.css';
import Image from 'next/image';
import Tweet from './Tweet';

function Hashtags() {

    let tweetsWithHashtags =
        <>
            <Tweet />
            <Tweet />
        </>

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
                <h1>Hashtag</h1>
                <input type="text" placeholder="What's up?" style= {{padding: '10px', backgroundColor: 'rgb(74, 73, 111)'}}/>
            </div>
            <div className={styles.centerDown}>
                {tweetsWithHashtags}
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

export default Hashtags;