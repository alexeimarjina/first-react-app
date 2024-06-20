import classes from "./Dialogs.module.css";
import Box from "./Box/Box";
import Item from "./Items/Item";

function Dialogs() {
     return(
         <div className={classes.right}>
             <div className={classes.dialogBody}>
                 <Box/>
                 <Item/>
             </div>
         </div>
     )
 }

export default Dialogs;



// import { useParams } from 'react-router-dom';
// import ItemMessage from './Items/Item'; // import the message component
//
// function Dialog() {
//     const { dialogId } = useParams();
//
//     // Mock data for messages, in a real app this might come from props, context, or an API
//     const messages = {
//         1: [
//             { imgSrc: "https://fakeimg.pl/100/", name: "Aima", text: "Hello, how are you?" },
//             // more messages...
//         ],
//         2: [
//             { imgSrc: "https://fakeimg.pl/100/", name: "Mite", text: "Good afternoon!" },
//             // more messages...
//         ],
//         // add more dialog IDs and messages as needed...
//     };
//
//     return (
//         <div>
//             <h3>Dialog {dialogId}</h3>
//             <div>
//                 {messages[dialogId]?.map((message, index) => (
//                     <ItemMessage
//                         key={index}
//                         imgSrc={message.imgSrc}
//                         name={message.name}
//                         text={message.text}
//                     />
//                 )) || <p>No messages for this dialog</p>}
//             </div>
//         </div>
//     );
// }