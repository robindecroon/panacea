import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';
import CircularProgressbar from 'react-circular-progressbar';

const T = i18n.createComponent();
const xpPerLevel = 600;

export default class LevelMain extends Component {
    constructor(props) {
        super(props);

        const maxLevel = 2400;
        const xp = Math.floor(Math.random() * (maxLevel+1));

        const level1Image = "/images/level1.png";
        const level2Image = "/images/level2.png";
        const level3Image = "/images/level3.png";
        const level4Image = "/images/level4.png";
        
        
        const levelImages = [level1Image, level2Image, level3Image, level4Image];

        // TODO: hack. Locale not update in init phase. Use i18n-key
        this.state = {
            message: "train_bepett",
            currentLevel: this.getLevel(xp),
            imageSrc: levelImages[(this.getLevel(xp) - 1)],
            currentXP: xp % xpPerLevel,
        };
    }

    getLevel(xp) {
        return Math.floor(xp/xpPerLevel) + 1;
    }

    render() {
        const firstWidth = 100 * this.state.currentXP/xpPerLevel;
        return (
            <div className="panacea-text">
                <div className="full-width">
                    <div className="md25">
                        <img className="panacea-image" src={this.state.imageSrc} />
                    </div>
                    <div className="md75">
                        <div className="panacea-image-text" >
                            <div><T>{this.state.message}</T></div>
                        </div>
                    </div>
                </div>
                <div className="md66">
                    <div className="small-text">
                        <div><T>level</T>{" " + this.state.currentLevel}</div>
                    </div>
                    <div className="week-5  rh50" style={{ width: firstWidth + "%" }}></div>
                    <div className="week-2  rh50" style={{ width: (100-firstWidth) + "%" }}></div>
                    <div className="small-text">
                        <div>{this.state.currentXP}/{xpPerLevel}</div>
                    </div>
                </div>
            </div>
        );
    }
}