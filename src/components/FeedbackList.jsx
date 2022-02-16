import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

const FeedbackList = ({ handleDelete }) => {


    const { feedback } = useContext(FeedbackContext)
        //check if there is no feedback
    if (!feedback || feedback.length == 0) {
        return <p > No feedback available < /p>
    }

    return (

        <
        div className = "feedback-list" >

        {
            feedback.map((item) => {
                return <FeedbackItem key = { item.id }
                actualItem = { item }
                />
            })
        }

        <
        /div>
    )
}



export default FeedbackList