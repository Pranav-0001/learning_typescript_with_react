import axios from "axios";
import { FirstList } from "../model/reminder";

class ReminderService{
    http=axios.create({
        baseURL:'https://jsonplaceholder.typicode.com/'
    })

    async getReminders(){
        let response=await this.http.get<FirstList[]>('/todos')
        return response.data
    }
}

export default new ReminderService()