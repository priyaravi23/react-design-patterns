import React from 'react';

const Reviews = (props) => {
    const {reviews} = props;
    const titles = reviews.map(r => <li key={r.id}>{r.title}</li>);
    return (
        <div>
            <ul>
                {titles}
            </ul>
        </div>
    );
};

export default Reviews;
