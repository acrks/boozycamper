import React from 'react';

const BookingBox = props => {
    const { booking } = props
    return (
        <div>
            <p>Client Name: {booking.client_name}</p>
            <p>Client Email: {booking.client_email}</p>
            <p>Opened: {booking.opened ? `Yes` : `No`}</p>
            <p>Date of Event: {booking.date}</p>
            <p>Date Created: {booking.date_created}</p>
            <p>Booking Duration: {booking.duration}</p>
            <p>Occasion: {booking.occasion}</p>
            <p>Number of Guests: {booking.number_of_guests}</p>
            <p>City: {booking.venue_city}</p>
            <p>Name of Venue: {booking.venue_name}</p>
            <p>Package: {booking.package}</p>
            <p>Comments/Questions: {booking.comments}</p>
        </div>
    );
}

export default BookingBox;