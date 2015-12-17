import React from 'react';
import {Constants, AppDispatcher} from './dispatcher';
import {
    Modal, ModalHeader, ModalBody, ModalFooter,
    Button, Radio,
    Form, FormField, FormInput, InputGroup
} from 'elemental';

export default class DwellerDetailModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddingMode: false,
            isVisible: false,
            dwellerInfo: {}
        };
    }

    hideModal() {
        this.setState({
            isVisible: false,
            dwellerInfo: {}
        })
    }

    _formUpdated(e) {

    }


    _onChange(payload) {
        switch (payload.actionType) {
            case Constants.SHOW_DWELLER_INFO_MODAL:
                this.setState({
                    isAddingMode: false,
                    isVisible: true,
                    dwellerInfo: payload.dweller
                });
                break;
            case Constants.ADD_DWELLER_BABY:
            case Constants.ADD_DWELLER_EXISITING:
            case Constants.ADD_DWELLER_OUTSIDER:
                this.setState({
                    isAddingMode: true,
                    isVisible: true,
                    dwellerInfo: {}
                });
                break;
        }
    }

    componentDidMount() {
        this.dispToken = AppDispatcher.register(payload => this._onChange(payload));
    }

    componentWillUnmount() {
        AppDispatcher.unregister(this.dispToken);
    }

    renderSPECIALInput() {
        let p = "SPECIAL".split('');
        return p.map((char, id) =>
            (<InputGroup.Section key={`special-${char}`} grow>
                    <FormInput label={char} name={`special-${char}`}
                               placeholder={`${char.toUpperCase()}`}
                               onChange={e => this._formUpdated(e)} required/>
                </InputGroup.Section>
            ));
    }

    render() {
        return (
            <Modal isOpen={this.state.isVisible} onCancel={ () => this.hideModal() } backdropClosesModal>
                <ModalHeader
                    text={this.state.isAddingMode ? "Welcome New Dweller": `Dweller: ${this.state.dwellerInfo.firstName} ${this.state.dwellerInfo.lastName}`}
                    showCloseButton onClose={ () => this.hideModal() }/>
                <ModalBody>
                    <FormField label="Name">
                        <InputGroup>
                            <InputGroup.Section grow>
                                <FormInput label="First Name" name="firstName" placeholder="First Name"
                                           onChange={e => this._formUpdated(e)} required/>
                            </InputGroup.Section>
                            <InputGroup.Section grow>
                                <FormInput label="Lase Name" name="lastName" placeholder="Last Name"
                                           onChange={e => this._formUpdated(e)} required/>
                            </InputGroup.Section>
                        </InputGroup>
                    </FormField>
                    <FormField label="Level and S.P.E.C.I.A.L.">
                        <InputGroup>
                            <InputGroup.Section grow>
                                <FormInput label="Level" name="lv" placeholder="Level"
                                           onChange={e => this._formUpdated(e)} required/>
                            </InputGroup.Section>
                            {this.renderSPECIALInput()}
                        </InputGroup>
                    </FormField>
                    <FormField label="Gender">
                        <div className="inline-controls">
                            <Radio name="inline_radios" label="Male" />
                            <Radio name="inline_radios" label="Female" />
                        </div>
                    </FormField>
                </ModalBody>
                <ModalFooter>
                    <Button type="primary" onClick={ () => this.hideModal() }>Save</Button>
                    <Button type="link-cancel" onClick={ () => this.hideModal() }>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}