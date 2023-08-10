import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const About = () => {
  return (
   <>
   <Head>
   
<meta></meta>
<title>About</title>
</Head>
   <main className="flex flex-col justify-center items-center">
    <Layout>
    <AnimatedText text={"Rakshith Shetty"} />
    </Layout>
   
   </main>
   </>
  )
}

export default About