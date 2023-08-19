import React from 'react';

const ContactMe = () => {
    return (
        <div id='contact' className="bg-gray-700 text-white py-16">
            <div className="container mx-auto">
                <h3 className='text-5xl font-bold text-center pb-10'>Contact <span className='text-cyan-300'>Me!</span></h3>

                <form action="" className='w-3/4 mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3'>
                        <input type="text" placeholder='First Name' className='h-14 w-full md:w-[470px] bg-gray-800 border-none rounded-lg border-gray-900 pl-3' />
                        <input type="text" placeholder='Last Name' className='h-14 w-full md:w-[470px] bg-gray-800 border-none rounded-lg border-gray-900 pl-3' />
                        <input type="text" placeholder='Mobile Number' className='h-14 w-full md:w-[470px] bg-gray-800 border-none rounded-lg border-gray-900 pl-3' />
                        <input type="text" placeholder='Email Address' className='h-14 w-full md:w-[470px] bg-gray-800 border-none rounded-lg border-gray-900 pl-3' />
                    </div>
                    <div>
                        <textarea name="message" className='h-96 w-full bg-gray-800 border-none rounded-lg border-gray-900 pl-3 pt-3 mt-4' id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className='w-full flex justify-center'>
                        <input type="submit" value="Send Message" className="h-9 w-36 bg-cyan-300 rounded-full shadow-md shadow-cyan-300 hover:shadow-none text-slate-800 font-bold my-6" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;