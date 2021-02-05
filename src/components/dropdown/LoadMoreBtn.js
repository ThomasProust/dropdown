import { Dropdown, Button } from 'semantic-ui-react';

const LoadMoreBtn = ({ current, inc = 10, setDisplayIndex }) => {
    const handleOnClick = () => {
        setDisplayIndex(current + inc);
    };
    return (
        <>
            <Dropdown.Divider />
            <Button basic onClick={handleOnClick}>
                Load More
            </Button>
        </>
    );
};

export default LoadMoreBtn;
