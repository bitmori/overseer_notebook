import React from 'react';
import {Glyph, Table, Pagination, Dropdown, Container} from "elemental";
import DwellerInfo from './dweller';
import DwellerDetailModal from './dwellerDetailModal';
import {Actions} from './reduxette';

const DROPDOWN_OPTIONS = [
    { label: 'Newborn Baby', value: 'ADD_BABY'},
    { label: 'From Wasteland', value: 'ADD_OUTSIDER' },
    { label: 'Existing Dweller', value: 'ADD_EXISTING'},

    { type: 'divider' },
    { type: 'header', label: 'Misc' },
    { label: 'Help', value: 'HELP' }
];

export default class OverallView extends React.Component {
    constructor(props) {
        super(props);
    }

    /*componentDidMount(){
        $.get(this.props.source, (result) => {
            let lastGist = result[0];
            if (this.isMounted()) {
                this.setState({
                    username: lastGist.owner.login,
                    lastGistUrl: lastGist.html_url
                });
            }
        });
    }*/

    _onDropdownSelected(selectedItemValue) {
        switch (selectedItemValue) {
            case 'ADD_BABY':
                Actions.addDwellerBaby();
                break;
            case 'ADD_OUTSIDER':
                Actions.addDwellerOutsider();
                break;
            case 'ADD_EXISTING':
                Actions.addDwellerExisting();
                break;
            default:
                console.log(`${selectedItemValue} is not implemented.`);
                break;
        }
    }

    renderColGroup() {
        let wSetting = [25, 25, 10, 5, 5, 5, 5, 5, 5, 5, 5];
        return (<colgroup>
            {wSetting.map((w, id) => (<col key={`col_group_${id}`} width={`${w}%`}/>))}
        </colgroup>);
    }

    renderTHead() {
        let names = [`First Name`, `Last Name`, `Gender`, `Lv`, `S`, `P`, `E`, `C`, `I`, `A`, `L`];
        return (<thead>
        <tr>
            {names.map((n, id)=> (<th key={`thead-${n}`}>{n}</th>))}
        </tr>
        </thead>);
    }

    render() {
        let Dwellers = [{
            firstName: "Jerry",
            lastName: "Shaw",
            gender: "M",
            lv: 1,
            special: [3, 1, 10, 1, 9, 10, 2]
        }];
        return (
            <Container maxWidth={900} className="table-container">
                <h2>Dwellers</h2>
                <Dropdown items={DROPDOWN_OPTIONS} buttonLabel="+ New Dwellers" onSelect={ e => this._onDropdownSelected(e) } />
            <Table>
                {this.renderColGroup()}
                {this.renderTHead()}
                <tbody>
                {Dwellers.map((dweller, id) => (<DwellerInfo data={dweller} key={`dweller-info-${id}`} />))}
                </tbody>
            </Table>
                <DwellerDetailModal />
            </Container>
        );
    }
}