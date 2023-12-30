import React, { Component } from 'react';

class Ex47 extends Component {
    render() {
        return (
            <div>
                <form>
                    <label htmlFor='name'>Name:</label>
                    <br />
                    <label htmlFor='email'>Email:</label>
                    <br />
                    <label htmlFor='password'>Password:</label>
                    <input type="password" id="password" name="password" />
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Ex47;