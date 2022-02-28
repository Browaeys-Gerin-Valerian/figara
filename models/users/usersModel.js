import pkg from "mongoose";
const {Schema, model} = pkg;

const usersSchema = Schema(
    {
        index: Number,
        mail: {type: String, required: true, unique: true},
        pseudo: {type: String, required: true, unique: true},
        password: {type: String, minlength: 6,required: true},
        isAdmin: {type: Boolean, required: true},

    },
    {timestamps: true}
);

usersSchema.pre("save", async function () {

    const docCount = await Users.countDocuments();
    return (this.index = docCount + 1) && (this.isAdmin = 0);
})

export const Users = model("users", usersSchema);