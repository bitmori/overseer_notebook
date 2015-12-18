import React from 'react';
import {Actions} from './reduxette';

export default class DwellerInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        Actions.showDwellerInfo(this.props.data);
    }

    renderSpecial() {
        return this.props.data.special.map((val, id) => (<td key={`special-${"special"[id]}`}>{val}</td>));
    }

    render() {
        let infoRowStyle= {
            cursor: "pointer"
        };
        return (
            <tr style={infoRowStyle} onClick={e => this.handleClick(e)} >
                {/**/}
                <td>{this.props.data.firstName}</td>
                <td>{this.props.data.lastName}</td>
                <td>{this.props.data.gender}</td>
                <td>{this.props.data.lv}</td>
                {this.renderSpecial()}
            </tr>
        );
    }
}