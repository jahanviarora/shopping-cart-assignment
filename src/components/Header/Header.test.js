import { render, screen } from "@testing-library/react";
import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";

test ('nav link home present',()=>{

    //Arrange
    ReactDOM.render(<Header/>)
        //Act
        //... nothing

        //Assert
        const home = screen.getByText('Home', {exact :false});
        expect(home).toBeInTheDocument();
})