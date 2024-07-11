import React from 'react'
import Slider from "react-slick";
import headphone from '../../../assets/headphone.png';
import watch from '../../../assets/smartwatch2-removebg-preview.png';
import macbook from '../../../assets/macbook.png';
const HeroData = [
    {
        id:1,
        img: headphone,
        subtitle:"Beats Solo",
        title:"wirless",
        title2:"headphone",

    },
    {
        id:2,
        img: watch,
        subtitle:"Beats Solo",
        title:"wirless",
        title2:"headphone",

    },
    {
        id:3,
        img: macbook,
        subtitle:"Beats Solo",
        title:"wirless",
        title2:"headphone",

    },
];
const Hero = () => {
    const settings ={
        dots: false,
        arrow: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,

        autoplaySpeed:4000,
        cassEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true,

         
    };
  return (
    <div className='container'>
        <div className='overflow rounded-3xl min-h-[550px]
        sm:min-h-[650px] .hero-bg-color flex justify-center 
        items-center'>
            <div className='container pb-8 sm:pb-0'>
            {/*hero section*/}
                <Slider {...settings}>
                    {HeroData.map((data)=>(
                        <div key={data.id}>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                                {/*text content section*/}
                                <div className='flex flex-col justify-center
                                gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                    <h1 className='text-2xl sm:text-6xl lg:text-2xl font-bold'>{data.subtitle}</h1>
                                    <h1 className='text-5xl uppercasse text-white dark:text-white/5 sm:text-[80px] md:text-[100px] font-bold'>{data.title}</h1>
                                    <h1>{data.title2}</h1>
                                    <div>
                                        <button text='shop now' 
                                        bgColor='bg-primary' 
                                        textColor='text-white'/>
                                    </div>
                                </div>
                                {/*img  section*/}
                                <div className='order-1 sm:order-2'>
                                    <div>
                                        <img src={data.img} alt=""
                                        className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-150 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]'/>
                                    </div>
                                </div>
                            </div>      
                        </div>
                    ))}    
                </Slider>
        </div>
        </div>
    </div>
  );
};

export default Hero