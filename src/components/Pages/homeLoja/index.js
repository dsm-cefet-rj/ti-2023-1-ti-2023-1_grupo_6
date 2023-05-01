import React from 'react'
import './style.css';
import HeaderLoja from '../HeaderLoja'
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom'

export default function HomeLoja() {
    const { user } = useAuth();
    const navigate = useNavigate();

    return (
    
        <div className='homeLoja'>
        <HeaderLoja/>
        <h2 className='teste'>dsads</h2>
        </div>
    )
}
