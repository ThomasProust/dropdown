import { Dropdown, Button } from 'semantic-ui-react';
import './LoadMoreBtn.css';

const LoadMoreBtn = ({ current, inc = 10, setDisplayIndex }) => {
    const handleOnClick = (e) => {
        e.stopPropagation();
        setDisplayIndex(current + inc);
    };
    return (
        <>
            <Dropdown.Divider />
            <div className="button-container">
                <Button basic fluid color="violet" onClick={handleOnClick}>
                    Load More
                </Button>
            </div>
        </>
    );
};

export default LoadMoreBtn;
