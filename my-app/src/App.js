import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button.js';


class App extends Component {
    constructor(props){
    super(props);
    this.state = {
      publicId: 'sample'
    };
  };

  render() {
    return (
      <div className={'box'}>
                <div className={'font'}>Generate a profile pic using Cloudinary's upload widget and image transformations</div>
                <table >
                    <tbody>
                        <tr>
                            <td className={'padl'}></td>
                            <td className={'boxSmall'}>
                              <Button />
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <div>
                  <span className={'pads'}></span>
                </div>
            </div>
    );
  }
}

export default App;
