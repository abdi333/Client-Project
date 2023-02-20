import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, onSnapshot } from 'firebase/firestore';

export default function ContactPage() {
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [message, setMessage] = useState("");

    const [contact, setContact] = useState([])
    console.log(contact)
    const [loader, setLoader] = useState(false);  
    
    useEffect(
        () =>
        onSnapshot(collection(db, "contacts"), (snapshot) =>
           setContact(snapshot.docs.map(doc => doc.data()))
        ), []
    );

    const handleSubmit = async (e) => {
        const collectionRef = collection(db, "contacts")
        const info = {Name: name, Email: email, Message: message}
        await addDoc(collectionRef, info)
                
        .then (() => {            
            setLoader(true); 
            alert("Thank You. Message Submitted.");
            setLoader(false);
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false);
        });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="py-24 flex justify-center">
            <img
                src="https://images.unsplash.com/photo-1627307887011-8a5029b6adcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                className="rounded-lg h-auto" />

            <div className="grow-0 shrink-0 ml-10 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                <h2 className="text-3xl font-bold mb-6">Contact us</h2>
                <p className="text-black mb-6 w-3/4">
                We’re here to help and answer any question you might have. We look forward to hearing from you 😊.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-6">
                        <b>Name</b>
                        <input
                            type="text"
                            className="form-control block
                                w-half
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput7"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}>
                        </input>
                    </div>
                    <div className="form-group mb-6">
                        <p><b>Email</b></p>
                        <input
                            type="email"
                            className="form-control block
                                                w-half
                                                px-3
                                                py-1.5
                                                text-base
                                                font-normal
                                                text-gray-700
                                                bg-white bg-clip-padding
                                                border border-solid border-gray-300
                                                rounded
                                                transition
                                                ease-in-out
                                                m-0
                                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleInput8"
                            placeholder="JohnDoe@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}>
                        </input>
                    </div>
                    <div className="form-group mb-6">
                        <b>Message</b>
                        <textarea
                            className="
                                form-control
                                block
                                w-3/4
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid
                                rounded                                
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            rows="3"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}>
                        </textarea>
                    </div>

                    <button                       
                        style={{background: loader ? "#ccc" : "#4FA730"}}                     
                        type="submit"
                        className="
                            w-36
                            h-10
                            px-6                            
                            bg-lightgreen
                            text-white
                            font-bold                            
                            text-lg                            
                            rounded
                            ">Send
                    </button>
                </form>
            </div>
        </div>


    )
}