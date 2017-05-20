import React from 'react';
import _ from 'underscore';
import {Sparklines, SparklinesLine} from 'react-sparklines';

class Chart extends React.Component {
    render() {
        return <Sparklines height={120} width={200} data={this.props.data}>
            <SparklinesLine color="red"/>
        </Sparklines>
    }
}

export default Chart;
