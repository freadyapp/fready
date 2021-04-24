class APIController extends Pragma {
    constructor() {
        super()

        this.url = 'localhost:3000'
        this.createEvents("message", "send")
    }

    request(){
        fetch('http://localhost:3000/api')
            .then(response => response.text())
            .then(data => console.log(data));
    }

}

let API = new APIController
