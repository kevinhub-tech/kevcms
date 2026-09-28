import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

interface kevPopupProps { 
    heading?: string,
    message?: string,
    onClose: () => void
}
const KevPopup: React.FC<kevPopupProps> = ({
    heading = "Error", 
    message = "Please wait a moment to try again...", 
    onClose}) => {
    return (
        <Popup
            open={!!message}
            onClose={onClose}
            modal
        >
            <div className="error-modal">
                <h3>{heading}</h3>
                <p>{message}</p>
                <button type="button" onClick={onClose}>
                    Dismiss
                </button>
            </div>
        </Popup>
    )
};

export default KevPopup;