import React, { useState } from 'react';
import Order from './Order';
import Tests from './Tests';
import Qa from './Qa';
import { useAuth } from '../context';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const nav = useNavigate();
    const prof = {
        name: "Amit jha",
        addr: "4321 Oak Avenue Apartment 205 Brooklyn, NY 11201 United States",
        ph: "+918808090190",
        email: "rt@mamam.com"
    };

    const orders = [
        {
            id: '1293',
            name: 'Sample Book name',
            addr: '4321 Oak Avenue Apartment 205 Brooklyn, NY 11201 United States',
            date: '10-03-2024'
        },
        {
            id: '1293',
            name: 'Sample Book name',
            addr: '4321 Oak Avenue Apartment 205 Brooklyn, NY 11201 United States',
            date: '10-03-2024'
        },
    ];
    const tests = [{
        testname: 'TEST NAME',
        modname: 'NAME OF MODULE',
        dur: '30 MINS',
        marks: '100',
        date: '10-03-2024'
    }];
    const qa = [
      {
        title: 'QUESTION TITLE',
        module: 'NAME OF MODULE',
        date: '10-03-2024'
      }
    ];

    const [dataType, setDataType] = useState('orders');
    const { isLoggedIn, logout } = useAuth();

    const handleDataTypeChange = (type) => {
        setDataType(type);
    };
        return (
            <div className='profile-con container d-flex flex-column'>
                <div className='pro-sub d-flex' style={{flexWrap:"wrap"}}>
                    <div className='d-flex flex-column'>
                        <h3>{prof.name}</h3>
                        <p>{prof.ph}</p>
                        <p>{prof.email}</p>
                        <div className='d-flex'>
                            <button>EDIT</button>
                            <button onClick={()=>{logout(); nav("/login");}}>LOGOUT</button>
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <h3>ADDRESS</h3>
                        <p style={{ maxWidth: "50%" }}>{prof.addr}</p>
                    </div>
                </div>
                <div className='pro-sub'>
                    <div className='d-flex' style={{flexWrap:"wrap"}}>
                        <button onClick={() => handleDataTypeChange('orders')} className={!(dataType==='orders')&&'white-btn'}>Orders</button>
                        <button onClick={() => handleDataTypeChange('tests')} className={!(dataType==='tests')&&'white-btn'}>Tests</button>
                        <button onClick={() => handleDataTypeChange('qa')} className={!(dataType==='qa')&&'white-btn'}>Q/A</button>
                    </div>
                    <div className='pro-details'>
                      {(dataType==='tests' || dataType==='qa')&&<input type='text' placeholder='search...' style={{width:"100%",height:'40px'}}/>}
                        {dataType === 'orders' && orders.map((dat) => (
                            <Order key={dat.id} id={dat.id} name={dat.name} date={dat.date} addr={dat.addr} />
                        ))}
                        {dataType === 'tests' && tests.map((test, index) => (
                            <Tests key={index} testname={test.testname} date={test.date} modname={test.modname} dur={test.dur} marks={test.marks} />
                        ))}
                        {dataType === 'qa' && qa.map((dat,index)=>(<Qa key={index} qtitle={dat.title} module={dat.module} date={dat.date}/>))}
                    </div>
                </div>
            </div>
        );
    };

export default Profile;
