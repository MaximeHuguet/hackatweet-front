import styles from '../styles/Login.module.css';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router'
import { signin, signup } from '../reducers/users';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Modal } from 'antd';

function Login() {

  const dispatch = useDispatch();
  const router = useRouter();



  const [signUpModalOpen, setSignUpModalOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);

	const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpFirstname, setSignUpFirstname] = useState('');
	const [signUpPassword, setSignUpPassword] = useState('');
	const [signInUsername, setSignInUsername] = useState('');
	const [signInPassword, setSignInPassword] = useState('');


const openSignUpModal = () => {
  setSignUpModalOpen(true)
}

const openSignInModal = () => {
  setSignInModalOpen(true)
}

const closeSignInModal = () => {
  setSignInModalOpen(false)
}

const closeSignUpModal = () => {
  setSignUpModalOpen(false)
}

const handleSignUp = () => {
  fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
          
					dispatch(signup({username: data.username, token: data.token, firstname: data.firstname }));

          // redirige vers la page Home
          router.push('/home')
				} else {
          setSignUpFirstname ('')
          setSignUpUsername('')
        setSignUpPassword('')
        }
			});

}

const handleSignIn = () => {
  fetch('http://localhost:3000/users/signin', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({  username: signInUsername, password: signInPassword}),
		}).then(response => response.json())
			.then(data => {
        console.log('test', data)

				if (data.result) {
					dispatch(signin({username: data.username, token: data.token, firstname: data.firstname}));

          // redirige vers la page Home
          router.push('/home')
				}
        else {setSignInUsername('')
        setSignInPassword('')
        }

			});

}
let signUpModal =      
  <Modal open={signUpModalOpen} onCancel={closeSignUpModal} footer={null}>
    <Image src="/../public/twitterIcon.png" alt="background" width={60} height={60}></Image>
    <p>Create your Hackatweet account</p>
    <div className={styles.loginButtons} style = {{padding: '10px'}}>
      <input onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname} style={{ width: '50%'}} type="text" placeholder='Firstname' />
      <input onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername} style={{ width: '50%'}} type="text" placeholder='Username' />
      <input onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} style={{ width: '50%'}} type="text" placeholder='Password' />
    </div>
    <Button style={{ width: '20%'}} type= 'primary' onClick={() => handleSignUp()}>Sign up</Button>
  </Modal>

  let signInModal =      
  <Modal open={signInModalOpen} onCancel={closeSignInModal} footer={null}>
    <Image src="/../public/twitterIcon.png" alt="background" width={60} height={60}></Image>
    <p>Connect to Hackatweet</p>
    <div className={styles.loginButtons} style = {{padding: '10px'}}>
      <input onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername} style={{ width: '50%'}} type="text" placeholder='Username' />
      <input onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} style={{ width: '50%'}} type="text" placeholder='Password' />
    </div>
    <Button style={{ width: '20%'}} type= 'primary' onClick={() => handleSignIn()}>Sign in</Button>
  </Modal>

  return (
    <>
      <div className={styles.main}>
        <div className={styles.loginContainer}>
          <div>
            <Image src="/../public/twitterIcon.png" alt="background" width={120} height={120}></Image>
          </div>
          <h1>See what's happening</h1>
          <h2>Join Hackatweet today.</h2>
          <div className={styles.loginButtons}>
            <Button style={{ width: '20%'}} type= 'primary' onClick={openSignUpModal}>Sign up</Button>
            <p>Already have an account?</p>
            <Button style={{ width: '20%'}} type= 'primary' onClick={openSignInModal}>Sign in</Button>
          </div>
        </div>
      </div>
        {signUpModal}
        {signInModal}
    </>
  );
}

export default Login;
