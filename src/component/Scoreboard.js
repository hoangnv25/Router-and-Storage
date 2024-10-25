import ScoreBoard from '../img/Scoreboard.svg'

function Scoreboard()
{
    return (
        <>
        <img style={
            {height:'800px',
            margin: '32px auto',
            display: 'block',
            boxShadow: '2px 2px 10px rgb(102, 102, 102)'
            }
        }
    
         src={ScoreBoard} alt="Ảnh minh họa" />
        </>
    );
}

export default Scoreboard;