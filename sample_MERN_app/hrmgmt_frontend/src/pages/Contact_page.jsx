
import { useState } from "react";

function Contact_page() {
    let [name, setName] = useState("");
    let [age, setAge] = useState(18);
    let [phno, setPhno] = useState("");

    let RegisterData = (event) => {
        event.preventDefault();

        console.log(name);
        console.log(age);
        console.log(phno);
    };

    return (
        <div>
            <h1>Contact Page Called</h1>

            <form onSubmit={RegisterData}>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter your name"
                />
                <br /><br />

                <input
                    type="number"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                    placeholder="Enter your age"
                />
                <br /><br />

                <input
                    type="tel"
                    value={phno}
                    onChange={(event) => setPhno(event.target.value)}
                    placeholder="Enter your phone number"
                />
                <br /><br />

                <button type="submit">Submit the data </button>
            </form>

            <h3>Entered Details</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Phone Number: {phno}</p>
        </div>
    );
}

export default Contact_page;
