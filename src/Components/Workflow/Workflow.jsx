import React from 'react'
import "./Workflow.css";
const Workflow = () => {

    return (
        <>
            {true ?
                <div class="SBSP">
                    <div class="work1">
                        <div class="postdesc">
                            <p>
                                <strong class="postdescnote">LIGHTNING FAST WORKFLOW</strong>
                                <br />
                                <strong class="postdesctitle">Data-driven insights</strong>
                                <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                        </p>
                        </div>
                        <div class="postimg">
                            <img class="img" src="post1.png" alt="POST1" />
                        </div>
                    </div>
                    <div class="work1">
                        <div class="postdesc">
                            <p>
                                <strong class="postdescnote">LIGHTNING FAST WORKFLOW</strong>
                                <br />
                                <strong class="postdesctitle">Data-driven insights</strong>
                                <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                        </p>
                        </div>
                        <div class="postimg">
                            <img class="img" src="post1.png" alt="pOST1" />
                        </div>
                    </div>

                </div>
                :
                <h1>
                    No Workflow
                </h1>

            }
        </>
    )
}

export default Workflow;
