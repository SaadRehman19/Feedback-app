import { useContext, useState } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

const FeedbackStats = () => {

    const { feedback } = useContext(FeedbackContext)
        //calculate the average rating 

    let averageRating = feedback.reduce((acc, curr) => {
        return (acc + curr.rating / (feedback.length))

    }, 0)

    averageRating = averageRating.toFixed(2)
        //  averageRating=averageRating.toFixed(2)
    return ( <
        div className = "feedback-stats" >
        <
        h2 > Review: { feedback.length } < /h2> <
        h3 > Rating: { averageRating } < /h3> <
        /div>
    )
}

export default FeedbackStats