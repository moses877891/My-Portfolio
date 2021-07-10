import React from 'react';

import { v4 as uuid } from 'uuid';

import Skill from './skill';

function SkillStack({ skill, loading }) {
    if (loading) return (<div className="text-center"><i className="fas fa-spinner"></i></div>)

    const finalSkillRow = [];
    for (let i = 0; i < skill[0].length / 4; i++) {
        let skillRow = skill[0].slice(i * 4, (i + 1) * 4);
        finalSkillRow.push(
            <div key={uuid()} className="d-flex justify-content-around flex-wrap py-3">
                {
                    skillRow.map((i) => (
                        <Skill key={uuid()} skill={i} />
                    ))
                }
            </div>
        );
    }
    return (
        <div className="bg-light w-100">
            <div className="container text-center py-5">
                <h1 className="font-weight-light">
                    <span className="text-danger">Technology</span> stack
                </h1>
                <div className="lead pb-5">
                    My Arsenal
                </div>
                {finalSkillRow}
            </div>
        </div>
    )
}

export default SkillStack;