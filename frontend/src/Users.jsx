import { useState, useEffect } from 'react'
import React, { Component } from 'react';
import {
  Button, TextField, Dialog, DialogActions, LinearProgress,
  DialogTitle, DialogContent, TableBody, Table,
  TableContainer, TableHead, TableRow, TableCell
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import swal from 'sweetalert';
const axios = require('axios');


function App() {
  const [problemList, setProblemList] = useState([]);

  useEffect(function() {

    fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(res => setProblemList(res));


  }, [])

  return (
    <div>
          {JSON.stringify(problemList)}
      </div>
  )

  // var number = 0;


}

export default App