
import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import Map from "../../components/Map";
import { useMediaQuery } from "@mui/material";

export default function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const matches = useMediaQuery('(max-width:980px)')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
    };

    useEffect(() => {
        console.log(matches);
    }, []);

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box sx={{
                    flexDirection: matches ? "column" : "row",
                    textAlign: matches ? "center" : "left",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "20px",
                    padding: "20px",
                    width: "100%",
                    gap: 20,
                }}>
                    <Typography variant="h6" sx={{
                        fontFamily: 'var(--heading-font)',
                        fontWeight: 'bold',
                        maxWidth: 600,
                    }} mb={2}>
                        Head Office : Gat No.229 <br /> <br />

                        Alandi-Markal Road, Opp. Caparo India, <br /> <br />
                        Markal Pune-412105, Maharashtra, India Telephone: 91-2135-306915<br /> <br />

                        Fax No: 91 - 2135 - 306915 <br /> <br />

                        Email: marketing@electraenterprises.in
                    </Typography>
                    <Map />
                </Box>
                <Box sx={{
                    maxWidth: 600,
                    mx: "auto",
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    margin: '10px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                }}>
                    <Box sx={{
                        backgroundColor: 'var(--blue-hue-2)',
                        color: 'white',
                        padding: 3,
                    }}>
                        <Typography variant="h6" sx={{
                            fontFamily: 'var(--heading-font)',
                            fontWeight: 'bold',
                        }} mb={2}>
                            Contact Us
                        </Typography>
                        <Typography variant="body1" sx={{
                            fontFamily: 'var(--heading-font)',
                        }}>
                            Please fill out the form below and we will get back to you as soon as possible.
                        </Typography>
                    </Box>

                    <form onSubmit={handleSubmit} style={{
                        padding: 20,
                    }}>
                        <TextField
                            fullWidth
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            required
                            type="email"
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            margin="normal"
                            required
                            multiline
                            rows={4}
                        />
                        <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                            Submit
                        </Button>
                    </form>
                </Box>
            </Box>
        </>
    );
}
