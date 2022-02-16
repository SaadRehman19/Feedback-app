import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
let item;
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([{
            id: 1,
            rating: 10,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
        },
        {
            id: 2,
            rating: 8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
        },
        {
            id: 3,
            rating: 8,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
        },
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({

        item: {},
        edit: false,
    });

    //Delete feedback
    const deleteFeedback = (id) => {
        console.log("app", id);
        if (window.confirm("Are you sure you want to delete")) {
            setFeedback(
                feedback.filter((item) => {
                    return item.id !== id;
                })
            );
        }
    };

    //Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        // console.log(newFeedback);
        // setFeedback([...feedback,newFeedback])
        setFeedback([newFeedback, ...feedback]);
    };

    //EditFeedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true,
        });
    };

    //Update Feedback
    const updateFeedback = (id, updfeedback) => {
        setFeedback(feedback.map((item) => {
            return item.id == id ? {...item, ...updfeedback } : item
        }))
    }

    return ( <
        FeedbackContext.Provider value = {
            {
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
                feedbackEdit,
                updateFeedback,
            }
        } >
        { " " } { children } { " " } <
        /FeedbackContext.Provider>
    );
};

export default FeedbackContext;