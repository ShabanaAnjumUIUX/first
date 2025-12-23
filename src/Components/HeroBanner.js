import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components';

import { Sigma,BookOpen } from 'lucide-react';
import { FaUserLarge,FaUsersRectangle } from 'react-icons/fa6';
import { LuAlignCenterVertical } from 'react-icons/lu';
function HeroBanner() {
    const Heading=styled.h1` 
    color:red;
    font-family:poppins,sans-serif;
    `

    const List=styled.ul`
    display:flex;
    list-style:none;
    justify-content:space-between;
    `


    const ListItems=styled.li`
    padding:1em;
    border:1px solid gray;
    box-shadow:5px 2px 3px black;
    
    `
  return (
    <>
        <List>
            <ListItems><a>Home</a></ListItems>
            <ListItems><a>Home</a></ListItems>
            <ListItems><a>Home</a></ListItems>
            <ListItems><a>Home</a></ListItems>
            <ListItems><a>Home</a></ListItems>
         
            </List>


      <Heading>Welcome to the hero banner section</Heading>

      <div className="container bg-warning p-lg-5 w-25">
        <h1 className="text-danger">Welcome to the bootstrap class</h1>
      </div>

      <button className='btn btn-danger'>Click</button>
      <Button variant={"secondary"} className='w-50 border border-primary'>Click</Button>

      <i class="fa-solid fa-person"></i>
      <Sigma style={{color:"red"}} size={150}/>
      <BookOpen />


      <FaUserLarge />
      <FaUsersRectangle className='border border-primary bg-danger p-lg-5 rounded'/>
      <LuAlignCenterVertical />


      Welcome back to the class
    </>
  )
}

export default HeroBanner
