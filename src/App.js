// function App() {
//   const title = "just checking the react jsx";
//   const comment = [
//     { id: 1, text: "Hello this is saad" },
//     { id: 2, text: "Hello this is saif" },
//   ];
//   const check = (
//     <div className="comments">
//       <h3> Comments: {comment.length} </h3>{" "}
//       <ul>
//         {" "}
//         {comment.map((x) => {
//           return <li key={x.id}> {x.text} </li>;
//         })}{" "}
//       </ul>{" "}
//     </div>
//   );
//   //working with conditionals
//   const showComments = true;

//   return (
//     <div className="myclass">
//       <h2> Hello from the App component </h2> <h1> {title} </h1>
//       {/* {showComments?'yes':'null'}
//                             {showComments?<div className="comments">
//                             <h3>Comments: {comment.length}</h3>
//                             <ul>
//                                 {comment.map((x)=>{
//                                     return<li key={x.id}>{x.text}</li>
//                                 })}
//                             </ul>
//                         </div>:null}
//                     </div> */}{" "}
//       {showComments ? check : null}
//     </div>
//   );
// }

//Above work is just for the practice

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import Card from "./components/shared/Card";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutlink from "./components/Aboutlink";
import Post from './components/Post'
import {FeedbackProvider} from "./Context/FeedbackContext"

function App() {

  // const deleteFeedback = (id) => {
  //   console.log("app", id);
  //   if (window.confirm("Are you sure you want to delete")) {
  //     setFeedback(
  //       feedback.filter((item) => {
  //         return item.id !== id;
  //       })
  //     );
  //   }
  // }
  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = uuidv4();
  //   console.log(newFeedback);
  //   // setFeedback([...feedback,newFeedback])
  //   setFeedback([newFeedback, ...feedback]);
  // };

  return (

    <FeedbackProvider>
    <BrowserRouter>
      <Header bgColor="rgba(0,0,0,0.3)" textColor="#ff6a95" />

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats/>
                <FeedbackList
                />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          {/* <Route path="/post/*" element={<Post />} /> */}

        </Routes>
        
      <Aboutlink />

        {/* {feedback.map((x)=>{
                return x.rating
            })} */}
        
      </div>

    </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
