import React, { useState, useEffect } from 'react';

const TestimonialSlides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);  

  const testimonials = [
    {
      text: "Just wanted to take a minute to say Thank You to you and your team that helped us put together our trip to Dorado Beach! The staff and resort were amazing.",
      author: "Jason M.",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      text: "I really appreciate you making that happen for me, your time and effort is much appreciated. Your words are awful kind, I thank you for working with me.",
      author: "Sara S.",
      image: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=403&q=80",
    },
    {
      text: "Everything about our experience was excellent and lived up to all of my expectations. It was an awesome trip.",
      author: "Jordan J.",
      image: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      text: "Thank you again for helping organize an amazing once-in-a-lifetime experience. On behalf of all of us, we had an incredible time!",
      author: "Emily W.",
      image: "https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    }
  ];

  const nextTestimonial = () => {
    if (currentIndex === testimonials.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousTestimonial = () => {
    if (currentIndex === 0) {
      setCurrentIndex(testimonials.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  return (
    <div className="px-6 py-12 bg-hintgreen bg-opacity-20">
      <h1 className="text-3xl font-semibold text-center capitalize lg:text-4xl text-black">
        What golfers are saying
      </h1>

      <div className="flex justify-center mx-auto mt-6">
        <span className="inline-block w-40 h-1 bg-lightgreen rounded-full"></span>
        <span className="inline-block w-3 h-1 mx-1 bg-lightgreen rounded-full"></span>
        <span className="inline-block w-1 h-1 bg-lightgreen rounded-full"></span>
      </div>

      <img src={currentTestimonial.image} className="h-24 w-24 center flex justify-center mx-auto mt-8 rounded-full"/>

      <div className="flex justify-between max-w-6xl mx-auto">
        <button onClick={previousTestimonial} className="w-6">
          <img src="https://cdn-icons-png.flaticon.com/512/271/271220.png" />
        </button>

        <button onClick={nextTestimonial} title="right arrow" className="w-6">
          <img src='https://cdn-icons-png.flaticon.com/512/271/271228.png'/>
        </button>
      </div>

      <p className="flex justify-center mx-auto w-1/2 py-6">{currentTestimonial.text}</p>
      <h1 className="flex justify-center font-semibold dark:text-black py-6">{currentTestimonial.author}</h1>
      


    </div>
  );
};

export default TestimonialSlides;


