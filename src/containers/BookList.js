import React from 'react';
import {connect} from 'react-redux';
import selectBook from "../actions/index";
import _ from 'underscore';
import {bindActionCreators} from 'redux';

class BookList extends React.Component {
    onClick(book){
        this.props.selectBook(book);
    }
    renderList(){
        var books = this.props.books || [], _this = this;
        return books.map(function(book){
            return <li
                onClick={_this.onClick.bind(_this, book)}
                key={book.title}>
                {book.title}
            </li>
        });
    }
    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({"selectBook": selectBook}, dispatch);
}

function mapStateToProps(state){
    return {
        "books":state.books
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
