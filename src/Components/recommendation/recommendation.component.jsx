import React from 'react';

import { v4 as uuid } from "uuid";
import { Link } from 'react-router-dom';

import './recommendation.styles.css';
import RecommendationCard from './recomendation.card';

function RecommendationSection({ recommendation, loading }) {
    if (loading) return (<div className="text-center"><i className="fas fa-spinner"></i></div>)
    return (
        <div className="container-fluid my-5">
            <div className="font-weight-light">
                <h1 className="text-center flt"><span className="text-danger">Recomme</span>ndations</h1>
            </div>
            <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
                {recommendation.slice(0, 10).reverse().map((i) => (
                    <RecommendationCard key={uuid()} recommendation={i} />
                ))}
            </div>
            <Link to="/write-a-recommendation" className="float-right text-info mb-3 hov"><span>Write a Recommendation<i className="fas fa-chevron-right ml-1 tr"></i></span></Link>
        </div>
    )
}

export default RecommendationSection;