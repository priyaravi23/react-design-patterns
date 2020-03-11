import React, {useState} from 'react';

// This will randomly select a review and show it
const RenderProps = (props) => {
    const {reviews, renderProp} = props;
    const [randIndex, setRandIndex] = useState(0);
    const selectRandomReview = () => {
        const index = ~~(Math.random() * reviews.length);
        setRandIndex(index);
    };
    return (
        <div>
            <h3>Render Props</h3>
            <div>
                Randomly selected review is: {renderProp(reviews[randIndex])}
            </div>
            <button onClick={selectRandomReview}>Select a Random Review</button>
        </div>
    );
};

export default RenderProps;
