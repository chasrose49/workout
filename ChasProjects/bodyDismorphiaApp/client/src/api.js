import axios from "axios"
const url =`http://localhost:3001/`


export const showAll=()=>axios.get(url+"show_all_users")
export const showOne=(id)=>axios.get(url+'user/'+id) 
export const showUserInfo=(id)=>axios.get(url+'singleUser/'+id)
export const createUser=payload=>axios.post(url+'create_user_account',payload)
export const createJournalEntry=(id,payload)=>axios.post(url+'create_journal_entry/'+id,payload)

const apis={
showAll,
showOne,
createUser,
createJournalEntry,
showUserInfo
}





export default apis