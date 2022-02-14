import {Component} from 'react';
import styled from 'styled-components';
import { nanoid } from "nanoid";

const StyledForm = styled.form`
    border: 1px solid #000;
    padding: 10px;
    max-width: 400px;
`

const Label = styled.label`
`

const Input = styled.input`
    display: block;
    margin: 10px 0 20px;
    padding: 2px;
`

const Button = styled.button`
    background-color: #fff;
    border: 1px solid #c0bfbf;
    padding: 5px;
    cursor: pointer;
`

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    nameInputId = nanoid();
    numberInputId = nanoid();

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({ [name]: value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({name: '', number: ''});
    }

    render() {
        return (
        <StyledForm onSubmit={this.handleSubmit}>

            <Label htmlFor={this.nameInputId}>
                Name
                <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    id={this.nameInputId}
                    onChange={this.handleChange}
                    required />
            </Label>

            <Label htmlFor={this.numberInputId}>
                Number
                <Input
                    type="tel"
                    name="number"
                    value={this.state.number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    id={this.numberInputId}
                    onChange={this.handleChange}
                    required
                    />
            </Label>

            <Button type="submit">Add contact</Button>

        </StyledForm>
        )
    }
}

export default ContactForm;