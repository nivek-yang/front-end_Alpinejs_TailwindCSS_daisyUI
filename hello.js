import axios from "axios"

const Hello = () => ({
    show: false,
    input_text: "",
    numbers: [],
    
    // async init() {
    //     const url = "https://jsonplaceholder.typicode.com/users"
    //     const { data } = await axios.get(url) // 解構
    //     console.log(data)
    //     this.numbers = data.map((user) => user.email)
        
    // },
    addText() {
        if (this.input_text !== "") {
            this.numbers.unshift(this.input_text)
            this.input_text = "" 
        }

        this.show = !this.show
    },
    clearText() {
        this.numbers = []
    }
})


export default Hello