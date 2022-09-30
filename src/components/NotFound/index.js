import { useNavigate } from 'react-router-dom';
import './index.scss';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="not-found-page-container">
            <p>Page not found, Please go back <span className='home-link' onClick={() => navigate('/apps')}>HOME</span></p>
        </div>
    );
}

export default NotFound;