import React, {Component} from 'react'
import '../css/Hero.css'


class Hero extends Component {

  render() {
    return (


      <header>
        {/* <!-- Intro -->*/}
        <section className="view">

          <div className="row">

          <div className="col-md-6">

            <div className="view">
              <img src="https://uc833620bc9d52d64f2e62f5b9ac.previews.dropboxusercontent.com/p/thumb/AAULuwmKk2DLnnkZA1myrJeGkJpuoYOlgkZzVsLYwGR6AnfwRAeuhTpHLsWsW6uhPKRGvi3VTeWRu1gblq6vMCxqVQL8ObKQ7DwYo2ncvKwTgNrY2iN33m0AdnCVGM1H1zTtkDIoUrCN5SxNaCAqskFb36JYy1euDQJo2T2kcjfXJvYMPRvmARlyrmkMLB01qScysiAWxePTwFj5OIoyn1INWLV1oVbctETBikr0yjy2e9qHTwvRyDUS1xoeNHz-kJfBk3U4cLX5kzHGRx7aktP4/p.png?size_mode=5" className="img-fluid" alt="smaple image"/>
              <div className="mask flex-center ">
              </div>
            </div>

        </div>

            <div className="col-md-6">

              <div className="d-flex flex-column justify-content-center h-100">
                <h1 className="heading display-3">Welcome to HopeOneSource</h1>
                <h4 className="subheading font-weight-bold">Are You in need of services? Are you a Service Provider? Are you a Web Developer? Do you want to volunteer with us?</h4>
                <div className="mr-auto">
                  <button type="button" className="btn btn-lily btn-margin btn-rounded">Get started <i className="fas fa-caret-right ml-3"></i></button>
                </div>
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
