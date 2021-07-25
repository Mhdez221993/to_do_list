class Subject {
    constructor(){
        this.observers = []
    }

    notify(data){
        if(this.observers.length > 0){
            this.observers.forEach(observer => observer.update(data))
        }
    }
}

export default Subject