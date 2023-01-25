import axios from 'axios'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

export default function Details() {
    const [ninja,setNinja]=useState([])
    const id=window.location.pathname.split('/')[2]
    // console.log(id)

    useEffect(()=>{
    async function fetch(){
      const res= await axios.get('https://jsonplaceholder.typicode.com/users/'+id)
      // console.log(res.data)
      res.data && setNinja(res.data)
    }
    fetch()
  })

//   console.log(ninja)


  return (
    <div>
    <Head>
    <title>Details</title>
    <meta name="keywords" content="ninjas"/>
    </Head>
    <h1>{ ninja?.name }</h1>
      <p>Email: { ninja?.email }</p>
      <p>Website: { ninja?.website }</p>
      <p>City: { ninja?.address?.city }</p>
    </div>
  )
}
