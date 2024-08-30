import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/PortfolioImages';

export default class ProjectSection extends LightningElement {
    projectImage = `${Image_Url}/PortfolioImages/HomeProject.jpg`;

    projectData = [
        {
            id: 1,
            name: 'Recruitment Management',
            description: 'The Recruitment Management Application is a cloud-based application hosted in Salesforce and designed to streamline the recruitment process for organizations using declarative and custom development. This application enables organizations to manage Positions, Candidate Profiles, Candidate Skill Set, Job Applications, Candidate Reviews, and manage details of Job Postings on various Employment Websites. The goal of this project is to improve the efficiency of the recruitment process, reduce manual workloads, and enhance the overall recruitment experience.',
            technology: 'Salesforce, LWC, Apex, Triggers, Flow Builder, JavaScript',
            website: 'https://www.google.com'
        },
        {
            id: 2,
            name: 'Portfolio',
            description: 'Portfolio website built in Salesforce LWR Experience site using custom LWC with mobile responsiveness.',
            technology: 'Salesforce, LWC, Apex, Experience Cloud, JavaScript',
            website: 'https://www.google.com'
        }
    ];
}
