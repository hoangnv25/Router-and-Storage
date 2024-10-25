import { useNavigate } from 'react-router-dom';
import './messenger_login.css'

function MessengerLogin () {
    
    const navigate = useNavigate();

    const NavigateToLogin = () => {
        const element = document.querySelector('.ML');
        if (element) {
            
            element.classList.add('hide');
        }
        navigate('/login');
    };

    return (
        <div className="ML hide">
            <div className="ML_container">
                <div className="ML_desc">Vui lòng đăng nhập</div>
                <button className="ML_btn" 
                
                onClick={() => {
                    NavigateToLogin(); 
                }}

                >Đăng nhập</button>

                <button className="ML_btn" 
                
                onClick={() => {
                    const element = document.querySelector('.ML');
                    element.classList.add('hide');
       
                }}

                >Đóng</button>

            </div>

        </div>
    )
};

export default MessengerLogin;