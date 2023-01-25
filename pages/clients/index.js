import axios from "axios"
import Head from "next/head"
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from './Jobs.module.css'

export default function Ninjas(){
  const [ninjas,setNinjas]=useState([])


  useEffect(()=>{
    async function fetch(){
      const res= await axios.get('https://jsonplaceholder.typicode.com/users')
      // console.log(res.data)
      res.data && setNinjas(res.data)
    }
    fetch()
  })
  return (
    <div>
    <Head>
     <title>Clients</title>
     <meta name="keywords" content="ninjas"/>
    </Head>
      <h1>All Clients</h1>
      {ninjas.map(ninja => (
        <>
        <Link href={'/clients/' + ninja.id}><div key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </div></Link></>
      ))}
    </div>
  )
}
 
