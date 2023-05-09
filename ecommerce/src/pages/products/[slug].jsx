import Header from '@/components/Header'
import React from 'react'
import axios from 'axios'
import Link from 'next/link'
import Slider from 'react-slick'
import { useRouter } from 'next/router'

export default function SingleProduct({ product }) {


    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", borderRadius: "100%" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "black", borderRadius: "100%" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const router = useRouter()
    console.log(router)

    return (
        <>
            <Header />
            <div className='py-24 bg-primary-tint'>
                <div className='container'>
                    <p className='text-3xl text-header font-bold capitalize '>{product.name}</p>
                    <p>
                        <Link href={"/"}>Home</Link> . <Link href={"/products"}>Products</Link></p>
                </div>
            </div>
            <div className='my-32 flex container gap-3'>
                <div className='w-1/2'>
                    <Slider {...settings}>
                        {
                            product.images.map(img => {
                                return <div className='aspect-video'>
                                    <img src={img} className='w-full h-full object-contain ' />
                                </div>
                            })
                        }
                    </Slider>
                </div>
                <div className='w-1/2'>
                    <p className='text-3xl font-bold'>{product.name}</p>
                    <p className=''>{product.price}</p>
                    <p className='line-clamp-2'>{product.description}</p>
                    <p>categories:{
                        product.categories.map(cat => {
                            return <span className='bg-primary text-white rounded mr-3 py-0.5 px-1'>{cat}</span>
                        })}
                    </p>
                    <p>brands:{
                        product.brands.map(cat => {
                            return <span className='bg-primary text-white rounded mr-3 py-0.5 px-1'>{cat}</span>
                        })}
                    </p>
                    <button className='border bg-secondary p-2 text-white'>Add To Cart</button>

                </div>

            </div>
            <div className="container">
                <div className='flex gap-3'>
                    <p>Description</p>
                    <p>Reviews</p>
                </div>
                <div>
                    {product.description}




                </div>
                <div className='bg-primary'>
                    John: Good
                    Doe: Bad
                </div>
            </div>

        </>
    )
}

export async function getServerSideProps(ctx) {

    let res = await axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products/${ctx.query.slug}`)

    return {
        props: {
            product: res.data.data
        }
    }

}
