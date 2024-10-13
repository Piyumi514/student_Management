const studentmodel = new mongoose.schema({
    reg : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    }
})

export default mongoose.model('students',studentModel);