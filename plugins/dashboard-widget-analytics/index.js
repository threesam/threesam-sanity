import React from 'react'
import PropTypes from 'prop-types'

import styles from './Analytics.css'

const sites = [
  {
    name: 'umami',
    url: 'https://threesam-umami.herokuapp.com'
  }
]

const Analytics = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Analytics</h1>
      </header>
      <section className={styles.content}>
        <p>{sites[0].name} <a href={sites[0].url} target="_blank" rel="noopener noreferrer">dashboard</a></p>
      </section>
    </div>
  )
}

export default {
  name: 'analytics',
  component: Analytics
}
