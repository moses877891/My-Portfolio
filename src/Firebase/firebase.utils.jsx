import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCb6bve2kQ2OvSMOhDbY_wZ5B0Tj2Rc0kM",
    authDomain: "portfolio-f687d.firebaseapp.com",
    projectId: "portfolio-f687d",
    storageBucket: "portfolio-f687d.appspot.com",
    messagingSenderId: "932208652875",
    appId: "1:932208652875:web:f5698fe4e555209ef893ce",
    measurementId: "G-P3J8CHKF74"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const convertRecommendationSnapshotToMap = recommendation => {
    const transformedRecommendation = recommendation.docs.map(doc => {
        const { company, designation, name, recommendationMessage } = doc.data();
        const createdAt = new Date();

        return {
            id: doc.id,
            company,
            designation,
            name,
            recommendationMessage,
            createdAt
        }
    });
    return transformedRecommendation;
    // return transformedRecommendation.reduce((accumulator, recommendations) => {
    //     accumulator[recommendations.id] = recommendations;
    //     return accumulator;
    // }, {})
}

export const convertProjectSnapshotToMap = project => {
    const transformedProjects = project.docs.map(doc => {
        const { body, excerpt, imageUrl, title, tools, id, duration, Website } = doc.data();
        const createdAt = new Date();

        return {
            id: id,
            title,
            excerpt,
            imageUrl,
            tools,
            body,
            duration,
            Website,
            createdAt
        }
    });
    return transformedProjects;
}

export const convertSkillSnapshotToMap = skill => {
    const transformedSkills = skill.docs.map(doc => {
        const skillsMap = doc.data();
        return skillsMap;
    });
    return transformedSkills;
    // return transformedSkills.reduce((accumulator, skills) => {
    //     accumulator[skills.id] = skills;
    //     return accumulator;
    // }, {})

}

export const addToFireStore = async (contactKey, itemToAdd) => {
    const collectionRef = firestore.collection(contactKey);
    const newDocRef = collectionRef.doc();
    const batch = firestore.batch();
    batch.set(newDocRef, itemToAdd);

    return await batch.commit()
}

// export const addSkillsToFireStore = async (contactKey, itemToAdd) => {
//     const collectionRef = firestore.collection(contactKey);
//     const newDocRef = collectionRef.doc();
//     const batch = firestore.batch();
//     console.log(itemToAdd);
//     batch.set(newDocRef, Object.assign({}, itemToAdd));

//     return await batch.commit()
// }