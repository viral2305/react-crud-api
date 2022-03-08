import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const toastMsg = (toastMsg,time)=>{
 
    // Calling toast method by passing string
    toast(toastMsg,time)
}
export default toastMsg;