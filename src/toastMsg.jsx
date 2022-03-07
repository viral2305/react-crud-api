import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const toastMsg = (toastMsg)=>{
 
    // Calling toast method by passing string
    toast(toastMsg)
}
export default toastMsg;