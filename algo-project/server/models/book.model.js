import {model, Schema} from 'mongoose';


const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required!"],
            minlength: [5, "Title to short, make it longer."],
            maxlength: [255, "I'm not reading this, try again."]
        },
        author: {
            type: String,
            required: [true, "Make sure to credit the author!"],
            minlength: [5, "Use a real name, silly."],
            maxlength: [255, "No one has a name like this. Don't be ridiculous."]
        },
        pages: {
            type: Number,
            required: [true, "Can't have a book with no pages."],
            min: [1, "Still need more pages."]
        },
        isAvailable: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

const Book = model("Books", BookSchema);

export default Book;
