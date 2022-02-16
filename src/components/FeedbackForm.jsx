import Card from "./shared/Card";
import { useEffect, useState } from "react";
import Button from "../components/shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "../Context/FeedbackContext";
// import {name}  from "./RatingSelect"

const FeedbackForm = () => {
        const { addFeedback, feedbackEdit, updateFeedback } =
        useContext(FeedbackContext);

        const [text, setText] = useState("");
        const [btnDisabled, setBtnDisabled] = useState("");
        const [message, setMessage] = useState("");
        const [rating, setRating] = useState("");

        useEffect(() => {
            // console.log(feedbackEdit);
            if (feedbackEdit.edit === true) {
                setBtnDisabled(false);
                setText(feedbackEdit.item.text);
                setRating(feedbackEdit.item.rating);
            }
        }, [feedbackEdit]);

        const getText = (e) => {
            setText(e.target.value);
            if (text == "") {
                setMessage(null);
                setBtnDisabled(true);
            } else if (text !== "" && text.length <= 10) {
                setMessage("Text must be atleast 10 characters long");
                setBtnDisabled(true);
            } else {
                setBtnDisabled(false);
                setMessage(null);
            }
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            // same // text:text, only text
            const newFeedback = {
                text: text,
                rating: rating,
            };
            // console.log(newFeedback);

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback);
            }
            setText("");
        };
        return ( <
            Card >
            <
            form onSubmit = { handleSubmit } >
            <
            h2 style = {
                { color: "black" } } > { " " }
            How would you rate your service with us { " " } <
            /h2> <
            RatingSelect select = {
                (rating) => setRating(rating) }
            /> <
            div className = "input-group" >
            <
            input type = "text"
            onChange = { getText }
            placeholder = "Write a Review"
            value = { text }
            /> { /* <button type="submit"> Send </button> */ } <
            Button type = "submit"
            version = "primary"
            isDisabled = { btnDisabled }
            /> <
            /div> {
                message ? < div className = "message" > { message } < /div> : null} <
                    /form> <
                    /Card>
            );
        };

        export default FeedbackForm;