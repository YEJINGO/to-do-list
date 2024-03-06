// import { useState } from 'react';

// function Login(props) {
//   //   const dispatch = useDispatch();

//   const [Nickname, setNickname] = useState('');

//   const onNicknameHandler = (event) => {
//     setNickname(event.currentTarget.value);
//   };

//   const onSubmitHandler = (event) => {
//     // 버튼만 누르면 리로드 되는것을 막아줌
//     event.preventDefault();
//     console.log('Nickname', Nickname);

//     // let body = {
//     //   nickname: Nickname,
//     // };
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%',
//         height: '100vh',
//       }}
//     >
//       <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
//         <label>Nickname</label>
//         <input type="email" value={Nickname} placeholder="닉네임을 입력해주세요" onChange={onNicknameHandler} />
//         <br />
//         <button formAction="">Login</button>
//       </form>
//     </div>
//   );
// }
// export default Login;
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
  const [inputId, setInputId] = useState('');
  //   const navigate = useNavigate();

  const handleInputId = (e) => {
    setInputId(e.target.value); // react input 입력값 가져오기.
  };

  const onClickLogin = () => {
    axios
      .post('http://localhost:8000/api/user/login', {
        id: inputId,
      })
      .then((res) => {
        // 로그인 요청이 성공했을 때 실행될 코드
        console.log('Login successful:', res);
        history.push('/api/plan'); // /api/plan으로 페이지 이동
      })
      .catch((error) => {
        console.log(error, 'error');
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>로그인</h2>
        <div>
          <label htmlFor="input_id">닉네임 : </label>
          <input
            type="text"
            name="input_id"
            value={inputId}
            placeholder="닉네임을 입력해주세요."
            onChange={handleInputId}
          />
        </div>
        <div>
          <button type="submit" onClick={onClickLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
