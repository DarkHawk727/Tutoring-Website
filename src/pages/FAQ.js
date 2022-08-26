import React from 'react'
import {faqcontent} from './FAQContent.js';
import { Collapsible } from 'collapsible-react-component'
import 'collapsible-react-component/dist/index.css'

const FAQ = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="m-3">
    <br />
    <br />
    <h1 className="title">Frequently Asked Questions</h1>
    <h3>Have Questions? We're here to help.</h3>

    <section class="section">
        <div class="container">
            <div class="card is-fullwidth">
                <header class="card-header">
                    <p class="card-header-title">Card #1</p>
                    <a class="card-header-icon card-toggle">
                    <i class="fa fa-angle-down"></i>
                    </a>
                </header>
                <div class="card-content is-hidden">
                    <div class="content">
                        Content goes here <small>Small text</small>
                    </div>
                </div>
            </div>
            <div class="card is-fullwidth">
                <header class="card-header">
                    <p class="card-header-title">Card #2</p>
                    <a class="card-header-icon card-toggle">
                    <i class="fa fa-angle-down"></i>
                    </a>
                </header>
                <div class="card-content is-hidden">
                    <div class="content">
                        Some more content. Look at all this whitespace. <small>(Unless you are on mobile)</small>
                    </div>
                </div>
            </div>
        </div>
</section>


    <section>
    <button type='button' onClick={() => {setOpen(!open)}}> {open ? 'Close' : 'Open'} </button>
      <Collapsible open={open}>
        TEST TEXT
      </Collapsible>
    </section>

    </div>
  )
}

export default FAQ