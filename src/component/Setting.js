
import './Setting.css'

function Setting()
{
    return (
        <div className="Setting">
            <div className="Setting_container">
                <div className="Setting_desc">Chế độ</div>
                <button className="Setting_btn" 
                onClick={() => {
                    localStorage.setItem('mode', 'night');
                    document.body.classList.add('night-mode');
                }}
                >Tối</button>

                <button className="ML_btn" 
                onClick={() => {
                    localStorage.setItem('mode', 'day');
                    document.body.classList.remove('night-mode');
       
                }}
                >Sáng</button>

            </div>

        </div>
    );
}

export default Setting;