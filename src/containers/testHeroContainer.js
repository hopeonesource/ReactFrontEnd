import React, {Component} from 'react'
import '../css/Hero.css'


class Hero extends Component {

  render() {
    return (


      <header>
        {/* <!-- Intro -->*/}
        <section className="view">

            <div style={{'backgroundImage':'url(https://images.unsplash.com/photo-1543312226-3f1d5eb9f5e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1599&q=80)',
            "height":"80vh"}}>

              <div className="d-flex flex-column justify-content-center h-100">
                <h1 className="heading display-3" style={{'textAlign':'center', 'color':'white'}}>Welcome to HopeOneSource</h1>
                <h4 className="subheading font-weight-bold" style={{'textAlign':'center', 'color':'white'}}>Connecting Vulnerable People To Services</h4>
                <div className="mr-auto" style={{'textAlign':'center', 'color':'white', 'justify-content':'space-between', 'marginLeft':'auto', 'marginRight':'auto'}}>
                  <button type="button" className="btn btn-lily btn-margin btn-rounded" style={{'margin-left':'5px'}}>Get Services<i className="fas fa-caret-right ml-3"></i></button>
                  <button type="button" className="btn btn-lily btn-margin btn-rounded" style={{'margin-left':'5px'}}>Provide Services <i className="fas fa-caret-right ml-3"></i></button>
                </div>
              </div>

            </div>

        </section>
        {/* <!-- Intro -->*/}

      </header>

          )
        }

}

export default Hero
