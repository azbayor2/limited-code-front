import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Test from './pages/Home/test/test.tsx';
import RegisterForm from './pages/register/RegisterForm.tsx';
import { Header, Footer } from './components/index.tsx';
import styles from './Appstyle.module.css';
import LoginForm from './pages/login/loginForm.tsx';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.root}>
        <Header /> {/** 헤더 */}
        <div className={styles.body}>
          <Routes>
            <Route path="/test" element={<Test />} /> {/**테스트 페이지  */}
            <Route path="/register" element={<RegisterForm />} />{' '}
            <Route path='/login' element={<LoginForm/>}/>
            {/**로그인 페이지 (임시) */}
          </Routes>
        </div>
        <Footer /> {/** 풋터 */}
      </div>
    </BrowserRouter>
  );
}

export default App;
