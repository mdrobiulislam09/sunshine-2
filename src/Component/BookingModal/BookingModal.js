import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const BookingModal = ({ phone, date, setPhone}) => {
    const { productName, sellPrice } = phone;
    
    const { user } = useContext(AuthContext)
    console.log(user)

    const handleBooking = (event) =>{
        event.preventDefault();
        const form = event.target;
        const model = form.model.value;
        const price = form.price.value;
        const date = form.date.value;
        const location = form.location.value;
        const number = form.number.value;
        const email = form.email.value;
        const user = form.user.value;
        
        const booking ={
            mobileModel: model,
            bookingTime: date,
            buyerName: user,
            price: price,
            location: location,
            MobileNumber: number,
            email
        }
        console.log(booking)
        alert('This product added in Dashbord')
        setPhone(null)
        
        fetch('https://sunshine-2-server.vercel.app//bookings', {
            method: 'POST',
            headers: {
                'content-type':'application/json',
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledge){
                form.reset()
            }
        })
        .catch(err => console.error(err))
    }

    return (
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form className='m-auto' onSubmit={handleBooking}>
                        <p>Mobile Name</p>
                        <input type="text" name='model' disabled value={productName}  className="input input-bordered w-full max-w-xs" />
                        <p>Price</p>
                        <input type="text" name='price'  disabled  value={sellPrice} className="input input-bordered w-full max-w-xs" />
                        <p>Date</p>
                        <input type="text" name='date' disabled value={date} className="input input-bordered w-full max-w-xs" />
                        <p>Location</p>
                        <input type="text" name='location' placeholder="Meet Location" required className="input input-bordered w-full max-w-xs" />
                        <p>Mobile Name</p>
                        <input type="text" name='number' placeholder="Mobile Number" required className="input input-bordered w-full max-w-xs" />
                        <p>Email</p>
                        <input type="email" name='email' value={user?.email} required className="input input-bordered w-full max-w-xs" />
                        <p>Name</p>
                        <input type="text" name='user' value={user?.displayName} required className="input input-bordered w-full max-w-xs" />
                        <br/>
                        <br/>
                        {/* <input type="submit" value="OK" className="w-full btn btn-info" /> */}
                        <input type="submit" value="OK" class="btn btn-secondary" data-bs-dismiss="modal"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;