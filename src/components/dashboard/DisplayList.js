import React from 'react';
import './Displaylist.css';
import Listitem from './Listitem';
import {AddIcon} from '@chakra-ui/icons';
import {NavLink} from "react-router-dom";
import {Text} from "@chakra-ui/react";
 
function DisplayList() {
    
    return (
        <div>
            <NavLink to="/add">
          <AddIcon w={5} h={5} m="10px"/>
          <Text fontSize="xl">Add Student</Text>
          </NavLink>
            <Listitem/>
        </div>
    )
}

export default DisplayList;
