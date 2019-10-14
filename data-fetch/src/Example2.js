import React, { Component } from 'react';
import data from "./data"; 
import './App.css';

class Example2 extends Component {
	render() {
		return (
            <div>
                {
                    data.Widgets.map((widget) => {
                        return (
                            <div className="box">
                                <div className="container-1">
                                <h1 className="box-2">Cancel    </h1>
                                <h1 className="box-1"> {widget.name}</h1>
                                 <h1 className="box-3">Save</h1>
                                </div>
                                <div className="container-2-box">
                                    {
                                        widget.items.map((itemDetails) =>{
                                            return (
                                                
                                                    <div className="container-2">
                                                <p>
                                                    {itemDetails.header}
                                                </p>
                                                </div>
                                                
                                            );
                                        })
                                    }
                                </div>
                                </div>
                        )
                    })
                }
            </div>
                
        );
    }
} 
export default Example2;