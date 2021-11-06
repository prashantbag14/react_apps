import React,{useContext, useState} from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';


const Home=(props)=>{

    const [newlink,setNewLink]=useState();

const currentuser=props;
    const breakPoints=[
        {width:1,itemToShow:1},
        {width:550,itemToShow:2},
        {width:768,itemToShow:3},
        {width:1200,itemToShow:4},

    ];

    const getexplore=()=>{
        currentuser.newuser!=null ? 
        setNewLink("https://www.apollo247.com/"):alert("Please Login First");
    }

    return (<div>
               

           

            <div className="mainimg">
           
            <div className="pt-lg-5 imgtext">
            <div className="joinus">
            <hr/>
            <h4 className="text-uppercase">Join Us</h4>
            <hr/>
            </div>
            <h2 className="apollotext" >
        <span> <strong className="text-warning">Apollo 24/7 </strong></span>THE GREATEST OF ALL.
    </h2>
    <button className="btn btn-dark text-white explorebtn" onClick={e=>getexplore(e)}><a href={newlink} className="text-decoration-none text-white">Explore</a></button>
    <p className="text-warning pb-lg-4 text-center" >
    Fastest Growing Health Care Company with all health services.</p>
    </div>
            </div>
            
        {currentuser.newuser==null  ?
            (<h3 className="text-center text-dark bg-danger">Please SignUp First to see all services</h3>)
            :
            (
            <div className="carouselitems">
            <Carousel breakPoints={breakPoints}>
            <Item><img src="https://newassets.apollo247.com/pub/media/magestore/bannerslider/images/f/b/fb-0_web_banner_2.jpg" alt="item1" className="carouselimg"/></Item>
            <Item><img src="https://newassets.apollo247.com/pub/media/magestore/bannerslider/images/w/e/web_banner_2.jpg" alt="item2" className="carouselimg"/></Item>
            <Item><img src="https://newassets.apollo247.com/images/banners/Labtests_15Oct21.jpg" alt="item3" className="carouselimg"/></Item>
            <Item><img src="https://newassets.apollo247.com/images/banners/CircleMembership.jpg" alt="item4" className="carouselimg"/></Item>
            <Item><img src="https://newassets.apollo247.com/images/banners/ApolloHomeCare.jpg" alt="item5" className="carouselimg"/></Item>
            <Item><img src="https://newassets.apollo247.com/images/banners/internationalConsult.png" alt="item6" className="carouselimg"/></Item>
            <Item><img src="https://newassets.apollo247.com/images/banners/vaccination.jpg" alt="item7" className="carouselimg"/></Item>
            <Item><img src="https://newassets.apollo247.com/images/banners/Labtests_15Oct21.jpg" alt="item8" className="carouselimg"/></Item>
            </Carousel>
            </div>)
        }

        {currentuser.newuser!=null ? (
             <div className='row servicecard'>
            <div className="card col-lg-1 services shadow">
            <img className="card-img-top" src="https://cdn.brainpop.com/health/diseasesinjuriesandconditions/coronavirus/icon.png" alt="Card image cap"/>
                <div className="card-body text-center">
                    <p className="card-text">Covid-19</p>
                </div>
            </div>
            
            <div className="card col-lg-1 services shadow">
            <img className="card-img-top" src="https://st2.depositphotos.com/4679193/9320/v/600/depositphotos_93206428-stock-illustration-old-man-vector-character.jpg" alt="Card image cap"/>
                <div className="card-body text-center">
                    <p className="card-text">Senior Citizen</p>
                </div>
            </div>
            <div className="card col-lg-1 services shadow">
            <img className="card-img-top" src="https://img.freepik.com/free-vector/man-have-cold-high-fever-checking-body-by-using-digital-thermometer_34708-244.jpg?size=338&ext=jpg" alt="Card image cap"/>
                <div className="card-body text-center">
                    <p className="card-text">Fever</p>
                </div>
            </div>
            <div className="card col-lg-1 services shadow">
            <img className="card-img-top" src="https://www.doctorsinitaly.com/wp-content/uploads/elementor/thumbs/insulin-diabetes-1-oj1p0aafrl6uogloonurifpn8r2hi0gn25b79422hc.jpg" alt="Card image cap"/>
                <div className="card-body text-center">
                    <p className="card-text">Diabetes</p>
                </div>
            </div>
            <div className="card col-lg-1 services shadow">
            <img className="card-img-top" src="https://www.nicepng.com/png/detail/290-2906871_alive-story-girl-pretty-cartoon-girl.png" alt="Card image cap"/>
                <div className="card-body text-center">
                    <p className="card-text">Women's Heath</p>
                </div>
            </div>
            <div className="card col-lg-1 services shadow">
            <img className="card-img-top" src="https://media.istockphoto.com/vectors/anemia-conceptglass-laboratory-test-tube-and-magnifier-with-blood-of-vector-id1286375915?k=20&m=1286375915&s=612x612&w=0&h=_a4oecowJHAO8u6bI9MO72OpyMuZEqWWjb0j1R2Bmfs=" alt="Card image cap"/>
                <div className="card-body text-center">
                    <p className="card-text">Anemia</p>
                </div>
            </div>
            <div className="card col-lg-1 services shadow">
            <img className="card-img-top" src="https://www.jing.fm/clipimg/full/250-2500667_register-now-health-check-up-clipart.png" alt="Card image cap"/>
                <div className="card-body text-center">
                    <p className="card-text">Full Body Checkup</p>
                </div>
            </div>

            </div>
            ):
            (<h3 className="text-center text-dark bg-danger">Please SignUp First to see all services</h3>)
        }

        
            </div>
    );
}

export default Home;