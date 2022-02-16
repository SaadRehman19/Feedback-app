import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext, useEffect } from 'react'
import FeedbackContext from '../Context/FeedbackContext'


const FeedbackItem = ({ actualItem }) => {

    // const handleClick=(id)=>{
    //     console.log(id);
    // }



    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
    return (
        // <div className="card">

        <
        Card >
        <
        div className = "num-display" > { actualItem.rating } < /div> <
        button onClick = {
            () => deleteFeedback(actualItem.id) }
        className = "close" >
        <
        FaTimes color = 'purple' / >
        <
        /button> <
        button onClick = {
            () => editFeedback(actualItem) } >
        <
        FaEdit className = 'edit'
        color = 'purple' / >
        <
        /button> <
        div className = "text-display"
        style = {
            { color: 'black' } } > { actualItem.text } < /div> <
        /Card>



    );
};

FeedbackItem.propTypes = {
    actualItem: PropTypes.object.isRequired,
}

export default FeedbackItem;

function Example() {


    // Similar to componentDidMount and componentDidUpdate:

    return ( <
        div >

        <
        /div>
    );
}