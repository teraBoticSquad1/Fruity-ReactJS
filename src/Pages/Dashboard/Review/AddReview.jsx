import React from 'react';

const AddReview = () => {
    const handleReviews = (e) => {
        e.preventDefault();

        const review = {
            product: e.target.product.value,
            rating: e.target.rating.value,
            feedback: e.target.feedback.value,
        }
        console.log(review);

        fetch('https://fruity-mongoose.vercel.app/api/v1/review/create', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset();
                alert('Successfully added a review')
            }).catch((err) => {
                console.log("Added failed " + err);
            })
    }
    // const { register, handleSubmit } = useForm();
    // const onSubmit = (data, event) => {
    //     console.log(data)
    //     const url = ' https://vast-plateau-50068.herokuapp.com/review';
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             toast.success('Successfully added a review')
    //             event.target.reset();
    //         })
    // };

    return (
        <section className='myReview py-16'>
            {/* <u> <h3 className='text-xl font-paragraph font-bold text-center py-4 text-orange-400' >Add a Review</h3> */}
            <div className='w-1/2 mx-auto mt-10 mb-10'>
                <h1 className='text-3xl mb-5 font-bold'>Add To <span className='text-primary'>Review</span></h1>
                <form onSubmit={handleReviews} className='w-full'>
                {/* <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/> */}

                    <div className='form-control w-full max-w-xs'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Product Id</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " type="text" name="product" placeholder='Product' required />
                    </div>
                    <br />
                    <div className='form-control w-full max-w-xs'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Product Ratings</label>
                        <input type='number' placeholder="ratings" name="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" max={5} required />
                    </div>
                    <br />
                    <div className='form-control w-full max-w-xs'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Your Feedback</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="feedback" placeholder='Your Feedback' required />
                    </div>
                    <br />

                    <div className="">
                        <button className='btn bg-orange-400 text-white rounded-md ms-0'>Add Review</button>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default AddReview;