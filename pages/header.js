import React from 'react';
import styles from '../styles/Home.module.css'
import Tweet from './Tweet'
import path from 'path'
import fs from 'fs'

export default function Home( {tweets }) {
  return(  
    <div className={styles.container}> 
    {tweets.map(tweet => <Tweet key = {tweet.id} text={tweet.text}  url={tweet.url} />)}
      </div>
  )
}


export async function getServerSideProps() {
  const filePath = path.join(process.cwd(),'./daata.json')
  const tweets = JSON.parse(fs.readFileSync(filePath))
  return {
    props: {
      tweets
    }
  }
}