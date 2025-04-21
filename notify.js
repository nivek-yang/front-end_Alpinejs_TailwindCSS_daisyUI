const Notify = () => ({
    show: true,
    init() {
        console.log(123)
    },
    dismiss() {
        this.show = false
    }
})

export default Notify