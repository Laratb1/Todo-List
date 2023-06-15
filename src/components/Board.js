import React, { useState } from 'react';
import TodoList from './TodoList';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api'

const Board = () => {

    const [list, createList] = useState([])

    useEffect(() => {
        api.get('lists').then(response => {
          setIncidents(response.data)
        })
      }, [ongId])

}