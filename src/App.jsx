// src/App.js
import React from 'react';
import CardList from './Component/Default';
import User from './Component/User';
import Header from './Component/Header';
// import './App.css';
import Priority from './Component/Priority';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<CardList></CardList>
      ),
    },
    {
        path: "/priority",
        element: (<Priority></Priority>
        ),
      },
    
  ]);
  
  
  
  function App() {
    return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
    );
  }
  
  export default App;
  