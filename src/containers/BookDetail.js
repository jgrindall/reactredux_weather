import React from 'react';
import {connect} from 'react-redux';
import _ from 'underscore';

class BookDetail extends React.Component {
    render() {
        if(this.props.selectedBook){
            return (
                <div>
                    <p>{this.props.selectedBook.title}</p>
                    <p>{this.props.selectedBook.pages}</p>
                </div>
            );
        }
        return <div><p>(None)</p></div>
    }
}

function mapStateToProps(state){
    return {
        "selectedBook":state.selectedBook
    };
}

export default connect(mapStateToProps)(BookDetail);
