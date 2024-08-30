import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/PortfolioImages';

export default class Hero extends LightningElement {
    heroImage = `${Image_Url}/PortfolioImages/main.jpg`;

    handleClick() {
        // Navigation logic for the Projects button
        window.location.href = '/Portfolio/s/projects'; // Adjust the URL as needed
    }
}
