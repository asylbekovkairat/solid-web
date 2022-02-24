import Head from 'next/head';
import Footer from '../components/common/footer/Footer.js';
import HomePage from '../components/pages/HomePage.js';
import { useEffect } from 'react';
import { db } from "../config/firebase.js"

export default function Home() {
  useEffect(() => { 
    let course = [] 
    db.collection("WhoCanStudy").get().then((querySnapshot) => { 
      querySnapshot.forEach((doc) => { 
        course.push(doc.data()) 
      }); 
    }) 
    console.log(course) 
  }, [])
  return (
    <div>
      <Head>
        <title>Solid Academy</title>
        <meta name="keywords" content="
          Solid, Solid Academy, Курсы по программированию, 
          Курсы по программированию Бишкек, Курсы,
          Программирование"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage/>
      <Footer />
    </div>
  )
}