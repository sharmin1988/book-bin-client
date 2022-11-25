import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import PrimaryBtn from '../../../Components/PrimaryBtn';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const BookingModal = ({ productBooking, setProductBooking }) => {
    // console.log(productBooking)
    const { bookName, resalePrice, img } = productBooking
    const { user } = useContext(AuthContext)

    const handelBooking = event => {
        event.preventDefault()
        const form = event.target;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const bookName = form.bookName.value;
        const resalePrice = form.resalePrice.value;
        const buyerPhone = form.buyerPhone.value;
        const buyerMeetingLocation = form.buyerMeetingLocation.value;


        const booking = {
            buyerName,
            buyerEmail,
            bookName,
            resalePrice,
            img,
            buyerPhone,
            buyerMeetingLocation
        }
        console.log(booking)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setProductBooking(null);
                    toast.success('Booking Done!!!!')
                }
                else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="text-lg font-semibold mb-5">Booking form for <span className=' text-fuchsia-700 font-bold'>{bookName}</span> book </h3>
                    
                    {/*==================== booking form ===================== */}
                    <form onSubmit={handelBooking}>
                        <input type="text"
                            name='buyerName' disabled
                            value={`${user?.displayName ? user.displayName : 'N/A'}`}
                            placeholder="Type here"
                            className="input h-10 input-bordered w-full max-w-lg " />

                        <input type="email"
                            name='buyerEmail' disabled value={user?.email}
                            placeholder="Type here" className="input h-10 input-bordered w-full max-w-lg my-3" />

                        <input type="text" name='bookName' disabled value={bookName} placeholder="Type here" className="input h-10 input-bordered w-full max-w-lg" />

                        <div className="form-control flex-row justify-between">
                            <label className="label">
                                <span className="label-text font-semibold">Resale price:</span>
                            </label>
                            <input type="text" name='resalePrice' disabled value={resalePrice} placeholder="Type here" className="input h-10 input-bordered w-full max-w-xs ml-3 my-3" />
                        </div>

                        <input type="text"
                            name='buyerPhone'
                            placeholder="enter your contact number" className="input h-10 input-bordered w-full max-w-lg " />

                        <input type="text"
                            name='buyerMeetingLocation'
                            placeholder="meeting location"
                            className="input h-10 input-bordered w-full max-w-lg my-3" />

                        <PrimaryBtn>Submit</PrimaryBtn>
                    </form>


                </div>
            </div>
        </>
    );
};

export default BookingModal;