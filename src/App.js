import React, {useState} from 'react';
import data from './data';
import Reviews from "./components/props";
import {Link, Route, Switch} from 'react-router-dom';
import RenderProps from "./components/render-props";

const ReviewRenderer = ({review}) => <div>
    Review title is <strong>{review.title}</strong> and the price is <code>{review.price}</code>
</div>;


function App() {
    const [reviews, setReviews] = useState(data);

    return (
        <section className="app">
            <header>
                <nav>
                    <ul>
                        <li><Link to={'/props'}>Passing as Props</Link></li>
                        <li><Link to={'/render-props'}>Render Props</Link></li>
                    </ul>
                </nav>
            </header>
            <Switch>
                <Route path={'/props'}>
                    <Reviews reviews={reviews}/>
                </Route>
                <Route path={'/render-props'}>
                    <RenderProps reviews={reviews} renderProp={
                        review => {
                            console.log('Printing from parent App.js but created by child RenderPropsAsExample.js', review);
                            return <ReviewRenderer review={review}/>
                        }
                    }/>
                </Route>
            </Switch>
        </section>
    );
}

export default App;
