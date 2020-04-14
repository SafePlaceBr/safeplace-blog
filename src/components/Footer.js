import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>© {new Date().getFullYear()} SafePlace</span>
      </div>
    </footer>
  </div>
)
