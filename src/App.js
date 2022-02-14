import {Component} from 'react';
import styled from 'styled-components';
import { nanoid } from "nanoid";

import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const StyledBlock = styled.div`
    margin: 20px;
`
const H1 = styled.h1`
    text-transform: uppercase;
`
const H2 = styled.h2`
    font-weight: 500;
`

export default class App extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    };

    formSubmitHandler = data => {
      const existedContact = this.state.contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());
      if (!existedContact) {
        this.setState(prevState => ({
            contacts:[...prevState.contacts,{...data , id:nanoid()}],
            })
        );
      } else {
        alert(`${data.name} is already in contacts`);
      }
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({ [name]: value });
    };

    removeContact = e => {
      this.setState({
        contacts: this.state.contacts.filter(contact => contact.id !== e.target.dataset.id),
      })
    }

    render() {
    return (
        <StyledBlock>
            <H1>Phonebook</H1>
            <ContactForm onSubmit={this.formSubmitHandler} />

            <H2>Contacts</H2>
            <Filter handleChange={this.handleChange} />
            <ContactList filter={this.state.filter} items={this.state.contacts} removeContact={this.removeContact} />
        </StyledBlock>
        )
    }
}

