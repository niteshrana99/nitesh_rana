import React from 'react'

const Stack = () => {
    return (
        <div className="stack u-align-center">
            <div className="stack_item">
                <div className="stack_heading">
                    <i className="icon_tech"></i>
                    <div className="heading_secondary">
                        Technologies
                    </div>
                </div>

                <p className="u-normal-font u-margin-bottom-md stack_desc">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <h1 className="stack_list_heading">Tech Stack</h1>
                <ul className="stack_list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>ES6</li>
                    <li>Typescript</li>
                    <li>Reactjs</li>
                    <li>Angular</li>
                    <li>NodeJS</li>
                    <li>Mongodb</li>
                    <li>AWS</li>
                </ul>
            </div>
            <div className="stack_item">
                <div className="stack_heading">
                    <i className="icon_tools"></i>
                    <div className="heading_secondary">
                        Tools
                </div>
                </div>

                <p className="u-normal-font  stack_desc u-margin-bottom-md">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                <h1 className="stack_list_heading">Dev Tools</h1>
                <ul className="stack_list">
                    <li>VS Code</li>
                    <li>Atom</li>
                    <li>NPM</li>
                    <li>Yarn</li>
                    <li>Webpack</li>
                    <li>Postman</li>
                    <li>Bitbucket</li>
                    <li>Github</li>
                    <li>JIRA</li>
                    <li>Terminal</li>
                </ul>
            </div>
            <div className="stack_item">
                <div className="stack_heading">
                    <i className="icon_exper"></i>
                    <div className="heading_secondary">
                        Experience
                    </div>
                </div>

                <p className="u-normal-font stack_desc u-margin-bottom-md">I genuinely care about people, and love helping fellow developers work on their craft.</p>
                <h1 className="stack_list_heading">Experience</h1>
                <ul className="stack_list">
                    <li>4.6+ years of Experience</li>
                    <li>Worked as Team member</li>
                    <li>Worked as Individual Contributer</li>
                    <li>Senior Enginnering</li>
                    <li>Web Performance</li>
                    <li>Web Accessibility</li>
                </ul>
            </div>
        </div>
    )
}

export default Stack
