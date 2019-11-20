class Task {
    _id: string;
    title: string;
    description: string;
    type: string;
    type2: string;
    status: string;

    constructor(){
        this.title = "";
        this.description = "";
        this.type = "";
        this.type2 = "";
        this.status = "Pending";
    }
}

export default Task;