import React from 'react';

const AddProduct = () => {
    const handleAddItems = (e) => {
        e.preventDefault();

        const purchase = {
            name: e.target.name.value,
            price: e.target.price.value,
            stock: e.target.stock.value,
            // ratings: e.target.ratings.value,
            description: e.target.description.value,
            image: e.target.image.value,
            category: e.target.category.value
        }
        console.log(purchase);

        fetch('https://fruity-mongoose.vercel.app/api/v1/products/create', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                e.target.reset();
                alert('Product Added SuccessFully')
            }).catch((err) => {
                console.log("Added failed " + err);
            })
    }
    return (
        <div>
            <div className='w-1/2 mx-auto mt-10 mb-10'>
                <h1 className='text-3xl mb-5 font-bold'>Add To <span className='text-primary'>Product</span></h1>
                <form onSubmit={handleAddItems} className='w-full'>
                {/* <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/> */}

                    <div className='form-control w-full max-w-xs'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Product Code</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " type="text" name="code" placeholder='Product Code' required />
                    </div>
                    <div className='form-control w-full max-w-xs'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Product Name</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " type="text" name="name" placeholder='Product name' required />
                    </div>
                    <br />
                    <div className='form-control w-full max-w-xs'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Product price</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " type="text" name="price" placeholder='Product price' required />
                    </div>
                    <br />
                    <div className='form-control w-full max-w-xs'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Product Stock</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " type="number" name="stock" placeholder='Stock Available' required />
                    </div>
                    {/* <br />
                    <div className='form-control w-full max-w-xs'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Product Ratings</label>
                        <input type='number' placeholder="ratings" name="ratings" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" max={5} required />
                    </div> */}
                    <br />
                    <div className='form-control w-full max-w-xs'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Product Image</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " type="file" name="image" placeholder='image' required />
                    </div>
                    <br />
                    <div className='form-control w-full max-w-xs'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Product Category</label>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="category" placeholder='Category'>
                            <option selected>Choose a Category</option>
                            <option value="customer">Category 1</option>
                            <option value="admin">Category 2</option>
                            <option value="admin">Category 3</option>
                        </select>
                    </div>
                    <br />
                    <div className='form-control w-full max-w-xs'>
                    <label className="block mb-2 text-sm font-medium text-gray-900">Product Description</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="description" placeholder='Description' required />
                    </div>
                    <br />

                    <div className="">
                        <button className='btn bg-orange-400 text-white rounded-md ms-0'>Add Products</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddProduct;