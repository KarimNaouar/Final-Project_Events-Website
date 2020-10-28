import React from 'react';
import '../AboutUs.css';
import {Button}from './Button'
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../bootstrap.scss"
function AboutUs() {
  return (
    <>
    <Navbar/>
    <div className="use-bootstrap">
    <div className="jumbotron jumbotron-simple-new jumbotron-simple-new-dark">
    <div className="exp1 container">
    <div className="row-2 row text-center">
      <div className="col-md-12 col-md-offset-1">
		<h1 className="title-1">Why CocoEvent</h1> 
		<p className="lead"> Here are the top 9 reasons event planners choose CocoEvent</p>
      </div>
    </div>
  </div>
</div>
{/*---***************the 9 reasons******************---*/}
<div className="exp1 container ">
<div className="row row-2 ">
	<div className="col-md-12 coll-1">
		<div className="row-2 row text-center icon-block">
			<div className="col-md-4  icon-4">
				<i className="icon icon-egg-timer"></i>				
				<h5 className="about-h5">Save time</h5> 
				<p className="para-1"> Get setup in seconds</p>
			</div>
			<div className="col-md-4  icon-4">
				<i className="icon icon-lock"></i>							
				<h5>Safe and secure</h5> 
				<p className="para-1"> Fully secure. PCI compliant. SSL enabled.</p>
			</div>	
			<div className="col-md-4 icon-4">
				<i className="icon icon-photo"></i>							
				<h5 className="about-h5">Remove our branding</h5> 
				<p className="para-1"> Feature your brand. Not ours.</p>
			</div>				
		</div>
		<div className="row-2 row text-center icon-block">
			<div className="col-md-4 icon-4">
				<i className="icon icon-money-withdrawal"></i>				
				<h5 className="about-h5">Get paid fast</h5> 
				<p className="para-1"> We don't hold your money.</p>
			</div>
			<div className="col-md-4 icon-4">
				<i className="icon icon-users"></i>							
				<h5 className="about-h5">Dedicated success manager</h5> 
				<p className="para-1"> We're here to help anytime.</p>
			</div>
			<div className="col-md-4 icon-4">
				<i className="icon icon-megaphone"></i>							
				<h5 className="about-h5">Powerful promotion built in</h5> 
				<p className="para-1"> Distribute your event in one click.</p>
			</div>	
		</div>
		<div className="row-2 row text-center icon-block">			
			<div className="col-md-4 icon-4">
				<i className="icon icon-database"></i>							
				<h5 className="about-h5">You own the data</h5> 
				<p className="para-1"> You own all your data. Not us.</p>
			</div>		
			<div className="col-md-4 icon-4">
				<i className="icon icon-ban"></i>							
				<h5 className="about-h5">No event cross promotion</h5> 
				<p className="para-1"> You won't see competing events on your event page.</p>
			</div>	
			<div className="col-md-4 icon-4">
				<i className="icon icon-power-mobile"></i>							
				<h5 className="about-h5">Mobile-friendly design</h5> 
				<p className="para-1"> Fully mobile and tablet friendly</p>
			</div>		
		</div>
	</div>
</div>
</div>
{/*---*******************how it work**************---*/}

<div className="jumbotron jumbotron-simple-new jumbotron-simple-new-dark">
  <div className="exp1 container">
    <div className="row-2 row text-center">
      <div className="col-md-12 coll-1 col-md-offset-1">
        <h1 className="title-1">How CocoEvent Works </h1>
        <p className="lead">Here's how CocoEvent works.
         It's simple, 
         yet powerful, 
         with hundreds of easy-to use features.
          Whether you're planning a small get-together or a large festival, 
          CocoEvent is perfect for events of any size or any occassion. </p>
      </div>
    </div>
  </div>
</div>
{/*---****************1*****************---*/}

<div className="page-section page-section-theme ">
        <div className="exp1 container">
            <div className="row-2 row">
                <div className="col-md-6 col-padding-right"
                >
                    <div className="number">1</div>
                    <h3 className="about-h3"> Build your Event Website </h3>
                    <p style={{color:"#fff"}}className="lead"> Instant setup. No coding required. </p>
                    <p className="para-1" style={{color:"#fff"}}> CocoEvent makes it easy to a beautiful,
                       professional-looking event in minutes using CocoEvent’s easy-to-use Event builder.
                        Get started by choosing one of CocoEvent's event . 
                        From there, you can quickly add content, 
                        import images or videos, and modify the Event . 
                        And don't worry. No coding skills are required and no server setup is needed. It's that easy </p>

                    <div className="form-group">
                        <Button className="btn btn-primary btn-purple"
                         href="/users/sign_up?pagesource=homepage&amp;referrallinksource=createwebsite">Continue<i class="far fa-arrow-right"></i></Button>
                    </div>
                 </div>
                <div className="col-md-6">
                    <img src="https://res.cloudinary.com/dy8r4yh5x/image/upload/v1554851706/home_1.jpg"
                     style={{width: "200%",
                     maxWidth: "114%",
                     float: "left",
                     marginLeft: "60px"}}/>
                </div>
            </div>
        </div>
    </div>
    <div className="page-section page-section-builder ">
    <div className="exp1 container">
        <div className="row-2 row">

            <div className="col-md-6"> 
                <img src="https://res.cloudinary.com/dy8r4yh5x/image/upload/v1554851706/home_2.jpg" class="img-responsive" 
                style={{width: "200%",
                maxWidth: "114%",
                float: "right",
                marginRight: "58px"}}/>
            </div>
{/*---****************2*****************---*/}

            <div className="col-md-6 col-padding-right"> 
                <div className="number">2</div>
                <h3 className="about-h3"> Collect Event Registrations and Track Attendees</h3>
                <p className="lead"> All the tools you need, built-in.</p>
                <p className="para-1"> Whether your event is a conference with thousands of attendees or a small party with friends,
                   CocoEvent gives you the power to create your event registration process.
                    Sell tickets, accept credit cards, and quickly tweak your registration form by adding unlimited custom questions (like “Are you bringing a guest?”). 
                     CocoEvent's powerful analytics allow you to easily track and manage your attendees in one place. 
                     We take analytics seriously, giving you unprecendented power to understand your event performance.
                      CocoEvent also helps you identify VIPs, influencers and learn more about who is attending your events.</p>


                <div className="form-group">
                    <Button className="btn btn-primary btn-purple" href="/users/sign_up?pagesource=homepage&amp;referrallinksource=registrations">Continue</Button>
                </div>
            </div>
        </div>
    </div>
</div>
{/* //------------------the team---------------// */}
<div className="jumbotron jumbotron-simple-new jumbotron-simple-new-dark">
  <div className="exp1 container">
    <div className="row-2 row text-center">
      <div className="col-md-12 coll-1 col-md-offset-1">
        <h1 className="title-1"> CocoEvent Team</h1>
        <p className="lead">
            Met our exceptionally talented team, ready to harness the force for good <br/>
             “Together, we can make waves.”

          </p>
      </div>
    </div>
  </div>
</div>


{/*---------------------------------------------------*/}

<section id="team">
        <div className="container">
            <div className="row">
                <div className=" col-md-4 profile-pic text-center">
                    <div className="img-box1"></div>
                    <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHitPEzAyyl85mJu94hAoo4OqUZxW4Vp_8NRkd7f1ZGFkVAhvX&usqp=CAU" />
                    <ul id="u1">
                        <a className="faa" herf="#">
                            <li className="fa1"><i class="fa fa-facebook" aria-hidden="true"></i></li>
                        </a>
                        <a className="faa" herf="#">
                            <li className="fa1"><i class="fa fa-twitter" aria-hidden="true"></i></li>
                        </a>
                        <a className="faa" herf="#">
                            <li className="fa1"><i class="fa fa-linkedin" aria-hidden="true"></i></li>
                        </a>
                    </ul>

                    <h2 className="about-h2" >Akshay Kumar</h2>
                    <h3 className="about-h3">Founder/CEO</h3>
                    <p className="para-1">We succeed by pursuing our vision and goals with tenacity and unwavering resolve</p>
                </div>
                <div className=" col-md-4 profile-pic text-center">
                    <div className="img-box1"></div>
                    <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYsC5n8Dib3nag0Uyf0XUE0MagznOU1_adXKCvhgl6ICvl7Dn8&usqp=CAU" />
                    <ul id="u1">
                        <a className="faa" herf="#">
                            <li className="fa1"><i class="fa fa-facebook" aria-hidden="true"></i></li>
                        </a>
                        <a className="faa" herf="#">
                            <li className="fa1"><i class="fa fa-twitter" aria-hidden="true"></i></li>
                        </a>
                        <a className="faa" herf="#">
                            <li className="fa1"><i class="fa fa-linkedin" aria-hidden="true"></i></li>
                        </a>
                    </ul>

                    <h2 className="about-h2">Arjun Kapur</h2>
                    <h3 className="about-h3">UI Designer</h3>
                    <p className="para-1">They reflect our common aspiration to build a sustainable business to bring long-term values to our shareholders, our customers and our employees.</p>
                </div>
                <div className=" col-md-4 profile-pic text-center">
                    <div className="img-box1"></div>
                    <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUNfNzNQuI3hs2yjNVE3kK5mvroZDoCv6a7oi_GIIYjmpnAiV2&usqp=CAU" />
                    <ul id="u1">
                        <a className="faa" herf="#">
                            <li className="fa1"><i class="fa fa-facebook" aria-hidden="true"></i></li>
                        </a>
                        <a  className="faa" herf="#">
                            <li className="fa1"><i class="fa fa-twitter" aria-hidden="true"></i></li>
                        </a>
                        <a className="faa" herf="#">
                            <li className="fa1"><i class="fa fa-linkedin" aria-hidden="true"></i></li>
                        </a>
                    </ul>

                    <h2 className="about-h2">Alia Bhatt</h2>
                    <h3 className="about-h3">Marketing Head</h3>
                    <p className="para-1">The creativity and innovation of our people and hence our products & services set us apart.</p>
                </div>
                
            </div>
        </div>
    </section>
    </div>
<Footer/>
    </>
  );
}

export default AboutUs;
