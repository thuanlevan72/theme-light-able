import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Card, Col } from "react-bootstrap";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), {
    ssr: false, // Disable SSR for react-quill
});

const FormBubbleTheme = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Set isClient to true when component mounts on the client
    }, []);

    return (
        <React.Fragment>
            <Col lg={12}>
                <Card>
                    <Card.Header>
                        <h5>bubble Theme</h5>
                    </Card.Header>
                    <Card.Body>
                        {isClient && ( // Render ReactQuill only on the client-side
                            <ReactQuill
                                modules={{
                                    toolbar: true,
                                }}
                                placeholder="Type your text here..."
                                theme="snow"
                                value={
                                    `
                                                                    <h1 class="ql-align-center">Quill Rich Text Editor</h1>
                                                                    <p><br></p>
                                                                    <p>
                                                                      Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web.
                                                                      With its <a href="https://quilljs.com/docs/modules/">modular architecture</a> and expressive
                                                                      <a href="https://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.
                                                                    </p>
                                                                    <p><br></p>
                                                                    <iframe
                                                                      class="ql-video ql-align-center"
                                                                      src="https://player.vimeo.com/video/253905163"
                                                                      width="500"
                                                                      height="280"
                                                                      allowfullscreen
                                                                    ></iframe>
                                                                    <p><br></p>
                                                                    <h2 class="ql-align-center">Getting Started is Easy</h2>
                                                                    <p><br></p>
                                    `
                                } // Your Quill content here
                            />
                        )}
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default FormBubbleTheme;
