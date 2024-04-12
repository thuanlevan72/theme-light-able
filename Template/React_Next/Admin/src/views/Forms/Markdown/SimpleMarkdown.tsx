import React, { useState } from "react";
import { Card } from "react-bootstrap";
import dynamic from "next/dynamic";
const MdEditor: any = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
// const { commands } = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });


const SimpleMarkdown = () => {
    const [value1, setValue1] = useState(`# Intro\nGo ahead, play around with the editor! Be sure to check out **bold** and *italic* styling, or even [links](https://google.com). You can type the Markdown syntax, use the toolbar, or use shortcuts like \`cmd-b\` or \`ctrl-b\`.\n\n## Lists\nUnordered lists can be started using the toolbar or by typing \`* \`, \`- \`, or \`+ \`. Ordered lists can be started by typing \`1. \`.\n\n#### Unordered\n* Lists are a piece of cake\n* They even auto continue as you type\n* A double enter will end them\n* Tabs and shift-tabs work too\n\n#### Ordered\n1. Numbered lists...\n2. ...work too!\n\n## What about images?\n`);

    const [value2, setValue2] = useState(`# This one autosaves!\nBy default, it saves every 10 seconds, but this can be changed. When this textarea is included in a form, it will automatically forget the saved value when the form is submitted.`);

    const [value3, setValue3] = useState(`# This one is bare\nYou can also choose to hide the statusbar and/or toolbar for a simple and clean appearance. This one also checks for misspelled words as you type!`);
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <h5>SimpleMDE Markdown Editor</h5>
                </Card.Header>
                <Card.Body>
                    <div>
                        <MdEditor
                            value={value1}
                            onChange={setValue1}
                        // commands={[...commands.getCommands(), help]}
                        />
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>
                    <h5>Autosaving</h5>
                </Card.Header>
                <Card.Body>
                    <div>
                        <MdEditor
                            value={value2}
                            onChange={setValue2}
                        />
                    </div>
                </Card.Body>
            </Card>
            <Card className="d-none d-md-flex">
                <Card.Header>
                    <h5>Hidden toolbar and status bar</h5>
                </Card.Header>
                <Card.Body>
                    <div>
                        <MdEditor
                            value={value3}
                            onChange={setValue3}
                            hideToolbar // To hide the toolbar
                            hideStatusBar // To hide the status bar
                        />
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default SimpleMarkdown;