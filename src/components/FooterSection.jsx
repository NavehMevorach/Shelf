import React from 'react'
import Footer from './Footer'
function FooterSection() {
    return (
      <footer className="theme-footer-six">
        <div className="inner-container">
          <div className="container">
            <Footer />
            <p className="copyright">
              {" "}
              Copyright @{new Date().getFullYear()}{" "}
              <a
                href="/"
                target="_blank"
                rel="noreferrer">
                Shelf
              </a>{" "}
              inc.
            </p>
          </div>
        </div>
        {/*  /.inner-container */}
      </footer>
    )
}

export default FooterSection
