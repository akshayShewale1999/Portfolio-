import { LightningElement, api } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/PortfolioImages';

export default class SkillSection extends LightningElement {
    @api skillName1;
    @api skillBarValue1;
    @api skillName2;
    @api skillBarValue2;
    @api skillName3;
    @api skillBarValue3;
    @api skillName4;
    @api skillBarValue4;
    @api skillName5;
    @api skillBarValue5;
    @api skillName6;
    @api skillBarValue6;
    @api skillName7;
    @api skillBarValue7;

    skillImage = `${Image_Url}/PortfolioImages/skillHome.jpg`;

    get skills() {
        return [
            { name: this.skillName1, value: this.skillBarValue1 },
            { name: this.skillName2, value: this.skillBarValue2 },
            { name: this.skillName3, value: this.skillBarValue3 },
            { name: this.skillName4, value: this.skillBarValue4 },
            { name: this.skillName5, value: this.skillBarValue5 },
            { name: this.skillName6, value: this.skillBarValue6 },
            { name: this.skillName7, value: this.skillBarValue7 },
        ];
    }
}
