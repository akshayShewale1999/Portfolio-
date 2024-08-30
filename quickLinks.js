import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/PortfolioImages';
import { NavigationMixin } from 'lightning/navigation';

export default class QuickLinks extends NavigationMixin(LightningElement) {
    data = [
        {
            id: 1,
            image: `${Image_Url}/PortfolioImages/Projects.jpg`,
            text: 'Projects',
        },
        {
            id: 2,
            image: `${Image_Url}/PortfolioImages/skills.png`,
            text: 'Skills',
        },
        {
            id: 3,
            image: `${Image_Url}/PortfolioImages/certificates.jpg`,
            text: 'Certifications',
        },
    ];

    handleClick(event) {
        const selectedCard = event.currentTarget.dataset.id;
        console.log(`selectedCard: ${selectedCard}`);

        switch (selectedCard) {
            case '1':
                this.navigateToPages('project__c');
                break;
            case '2':
                this.navigateToPages('skill__c');
                break;
            case '3':
                this.navigateToPages('certification__c');
                break;
            default:
                console.log('Invalid selection');
        }
    }

    navigateToPages(pageApiName) {
        console.log(`pageApiName in navigation function: ${pageApiName}`);

        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: pageApiName
            }
        });
    }
}
