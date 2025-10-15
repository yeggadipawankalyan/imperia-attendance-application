import { Link, useNavigate } from 'react-router-dom';
import MyButton from '../../../components/Button/Button';

export default function Routes() {
    const navigate = useNavigate();

    return (
        <div className="container-fluid m-4 d-flex justify-content-between align-items-center">
            <h3>Drivers page</h3>
            <MyButton 
                active={true} 
                onClick={() => navigate("/transport/driverForm")}>  
                + Add Driver
            </MyButton>
        </div>
    );
}
