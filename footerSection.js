import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/PortfolioImages';

export default class FooterSection extends LightningElement {
    instalogo = `${Image_Url}/PortfolioImages/insta.jpeg`;
    linkdinlogo = `${Image_Url}/PortfolioImages/linkdin.jpg`;
    githublogo = `${Image_Url}/PortfolioImages/github.jpg`;
    mylogo = `${Image_Url}/PortfolioImages/logo.jpg`;
}
