"use client";
import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react'

export default function CountryLookup() {
    const [country, setCountry]= useState('United States');
    

    useEffect(() =>{
        const getCountry =async () =>{
            const response =await fetch(`http://ip-api.com/json/`)
            .then ((res)=>res.json())
            .then ((data)=> data.country);
            if(!response)return;
            setCountry(response);
        };
        getCountry();
    },[]);


  return <div>{country}</div>;
  
}