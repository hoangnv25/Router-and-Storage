import imghome from '../img/img_home.jpg'

function Home()
{
    return (
        <>
            <div style={
                {
                margin: '32px auto',
                padding: '32px',
                maxWidth: '800px',
                display: 'block',
                boxShadow: '2px 2px 10px rgb(220, 220, 220)',
                textAlign: 'center'
                }
            } >

                <h1 style={
                    { fontSize: '2.2em'
                    }
                }>Chào mừng đến với Online Tetris Battle!</h1>

                <img
                style={
                    {height:'545px',
                    margin: '32px 0 0',
                    display: 'block'
                    }
                }
                src={imghome} alt="Home img" 
                />
            </div>
        </>
        
    );
}

export default Home;