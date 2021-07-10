import React from 'react';

import {
    firestore,
    convertRecommendationSnapshotToMap,
    convertProjectSnapshotToMap,
    convertSkillSnapshotToMap
} from '../../Firebase/firebase.utils';

import Title from '../../Components/Title/title.component';
import RecommendationSection from '../../Components/recommendation/recommendation.component';
import About from '../../Components/About/about.component';
import SkillStack from '../../Components/skillsection/skill.compponent';
import ProjectSection from '../../Components/project/project.component';

class HomePage extends React.Component {
    recommendation = null;
    projects = null;
    skills = [];
    state = {
        loadingRec: true,
        loadingPro: true,
        loadingskill: true,
    }

    componentDidMount = () => {
        const recommendationRef = firestore.collection('recommendations');
        recommendationRef.onSnapshot(async snapshot => {
            const recMap = convertRecommendationSnapshotToMap(snapshot);
            this.recommendation = recMap;
            this.setState({ loadingRec: false });
            return this.recommendation;
        });

        const projectRef = firestore.collection('projects');
        projectRef.onSnapshot(async snapshot => {
            const proref = convertProjectSnapshotToMap(snapshot);
            this.projects = proref;
            this.setState({ loadingPro: false });
            return this.projects;
        });

        const skillsRef = firestore.collection('skills');
        skillsRef.onSnapshot(async snapshot => {
            const skiRef = convertSkillSnapshotToMap(snapshot);
            const ski = Object.values(skiRef[0]);
            //console.log(ski);
            this.skills.push(ski);
            this.setState({ loadingskill: false });
            return this.skills;
        });
    }

    componentWillUnmount = () => {
        this.recommendation = null;
        this.projects = null;
    }

    render() {
        const { loadingRec, loadingPro, loadingskill } = this.state;
        return (
            <div className="txt">
                <Title />
                <RecommendationSection recommendation={this.recommendation} loading={loadingRec} />
                <About />
                <SkillStack skill={this.skills} loading={loadingskill} />
                <ProjectSection project={this.projects} loading={loadingPro} />
            </div>
        );
    }
}

export default HomePage;