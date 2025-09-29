// import React, { useEffect, useState } from 'react'
// import { Form, Input, message } from 'antd'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import Spinner from '../components/Spinner'
// const Register = () => {
//     const navigate = useNavigate()
//     const [laoding, setLaoding] = useState(false)
//     //Form Submit
//     const submitHandler = async (values) => {
//         try {
//             setLaoding(true)
//             await axios.post('/users/register', values)
//             message.success('Registration Successful')
//             setLaoding(false)
//             navigate('/login')
//         } catch (error) {
//             setLaoding(false)
//             message.error("Invalid Something Went Wrong");
//         }
//     };


//     //Prevent for login user
//     useEffect(() => {
//         if (localStorage.getItem('user')) {
//             navigate('/')
//         }
//     }, [navigate]);


//     return (
//         <div className='register'>  
//             <div className='register-loading'>
//                 {laoding && <Spinner />}
//             </div>
//             <div className='register-page'>
//                 <Form layout='vertical' onFinish={submitHandler}>
//                     <h1>Registration Form</h1>
//                     <Form.Item label="Name" name="name">
//                         <Input />
//                     </Form.Item>
//                     <Form.Item label="Email" name="email">
//                         <Input type="email" />
//                     </Form.Item>
//                     <Form.Item label="Password" name="password">
//                         <Input type="password" />
//                     </Form.Item>
//                     <div className='d-flex justify-content-between'>
//                         <Link to="/login">Already Registered?<br></br> Click Here To Login!</Link>
//                         <button className='btn btn-primary'>Register</button>
//                     </div>
//                 </Form>
//             </div>
//         </div>
//     )
// }

// export default Register

import React, { useEffect, useState } from 'react';
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // Form Submit
    const submitHandler = async (values) => {
        try {
            setLoading(true);
            await axios.post('/users/register', values);
            message.success('Registration Successful');
            setLoading(false);
            navigate('/login');
        } catch (error) {
            setLoading(false);
            message.error("Something Went Wrong");
        }
    };

    // Prevent for logged-in user
    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <div className='register'>
            {loading && <Spinner />}
            <div className='register-page'>
                <Form layout='vertical' onFinish={submitHandler}>
                    <h1>Registration Form</h1>
                    <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
                        <Input type="email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
                        <Input type="password" />
                    </Form.Item>
                    <div className='d-flex justify-content-between'>
                        <Link to="/login" className='link'>Already Registered?<br/> Click Here To Login!</Link>
                        <button className='btn btn-primary'>Register</button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Register;
