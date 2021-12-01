import './styles.css';
import pexel from '../../assets/pexel.jpeg';

export const Banner = () => {
    return (
        
        <div className='container'>
            <div className='content'>
                <div>
                    <button>Saiba mais</button>
                </div>
                <div>
                    <img src={pexel} alt="Logo" srcset="" />
                </div>
            </div>
        </div>

        
    )
}