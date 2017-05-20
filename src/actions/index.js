export default function (book){
    console.log("selectBook", book);
    return {
        type:"SELECT_BOOK",
        payload:book
    };
};
