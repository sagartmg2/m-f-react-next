import Header from '@/components/Header'
import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Slider from 'react-slick'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { checkAuthentication } from '@/utilis/checkAuthentication'
import useAuthenticate from '@/hooks/useAuthenticate'

export default function SingleProduct({ product }) {

    const [disply_type, setDisplay] = useState("description")

    const authenticate = useAuthenticate()

    const redux_user = useSelector(store => store.user.value)


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

    const [data, setData] = useState({
        rating: 0,
        comment: ""
    });

    function handleChange(e) {
        console.log(e)
        console.log(e.target.files)
        console.log(e.target.value)


        setData({ ...data, [e.target.name]: e.target.type == "file" ? [...data.images, ...e.target.files] : e.target.value })
    }


    function handleSubmit(e) {
        e.preventDefault()

        // if (!redux_user) {
        //     alert("login required.")
        //     return;
        // }
        // checkAuthentication();

        function updateReview(){
            let url = "https://ecommerce-sagartmg2.vercel.app/api/products/review/" + router.query.slug
    
            axios.put(url, data, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("access_token")
                }
            })
        }

        authenticate(updateReview)

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

    function getRating(number)
    {
        let arr = new Array(number)
        return arr.fill("⭐").join("")
    }

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
                    <button className='border bg-secondary p-2 text-white' onClick={() => {

                        // if (!redux_user) {
                        //     alert("login required.")
                        // }


                        function addtoCart(){
                            console.log("add to cart");
                        }

                        authenticate(addtoCart)


                    }}>Add To Cart</button>

                </div>

            </div>
            <div className="container">
                <div className='flex gap-3'>
                    <p className={` cursor-pointer ${disply_type == "description" && "text-secondary"}  `} onClick={() => {
                        setDisplay("description")
                    }}>Description</p>
                    <p className={`cursor-pointer ${disply_type == "reviews" && "text-secondary"}  `} onClick={() => {
                        setDisplay("reviews")
                    }} >Reviews</p>
                </div>
                {
                    disply_type == "description"
                    &&
                    <div>
                        {product.description}
                    </div>
                }
                {
                    disply_type == "reviews"
                    &&
                    <>
                        <div className=''>
                            {/* {JSON.stringify(product.reviews)} */}
                            {
                                product.reviews.map(review => {
                                    return <div>
                                        <p>user: {review.created_by.name}</p>
                                        <p>rating:{getRating(review.rating)}</p>
                                        <p>comment:{review.comment}</p>

                                    </div>
                                })
                            }
                        </div>
                        <form className='container' onSubmit={handleSubmit}  >

                            <div class="mb-6">
                                <label class=" form-label">Rating</label>
                                <input type="text" name='rating' value={data.rating}
                                    onChange={handleChange}
                                    className="form-control" placeholder="" />
                            </div>
                            <div class="mb-6">
                                <label class=" form-label">Comment</label>
                                <textarea type="text" name='comment' value={data.comment}
                                    onChange={handleChange}
                                    className="form-control" placeholder="" />
                            </div>
                            <button type="submit" class="text-white disabled:bg-blue-100 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Submit</button>
                        </form>
                    </>
                }

            </div>

        </>
    )
}

export async function getServerSideProps(ctx) {

    let product = null
    try {
        let res = await axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products/${ctx.query.slug}`)

        product = res.data.data


    } catch (err) {

        return {
            notFound: true,
            props: {

            }
        }

    }

    return {
        props: {
            product
        }
    }

}
