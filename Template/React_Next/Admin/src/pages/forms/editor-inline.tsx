import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const EditorInline = () => {

    // CK Editor
    const editorRef = useRef<any>();
    const [editor, setEditor] = useState(false);
    const { CKEditor, InlineEditor }: any = editorRef.current || {};

    useEffect(() => {
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
            InlineEditor: require('@ckeditor/ckeditor5-build-inline'),
        };
        setEditor(true);
    }, []);

    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Inline Editor" />
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <h5>Inline Editor</h5>
                        </Card.Header>
                        <Card.Body>
                            <div id="cke5-inline-demo">

                                {/* {editor ? <CKEditor
                                    editor={InlineEditor}
                                    data={
                                        `
                                    <header class="ck-content" data-inline-inject="true">
                                          <h2>Gone traveling</h2>
                                          <h3>Monthly travel news and inspiration</h3>
                                    </header>
                                    `
                                    }
                                /> : null} */}
                                {/* {editor ? <CKEditor
                                    editor={InlineEditor}
                                    data={
                                        `
                                        <div class="ck-content ck-content1" data-inline-inject="true">
                                        <h3>Destination of the Month</h3>
                                        <h4>Valletta</h4>
                                        <figure class="image image-style-side"
                                          ><img
                                            alt="Picture of a sunlit facade of a Maltan building."
                                            src="https://ckeditor.com/docs/ckeditor5/latest/assets/img/malta.jpg"
                                         >
                                          <figcaption>It's siesta time in Valletta.</figcaption>
                                        </figure>
                                        <p
                                          >The capital city of <a href="https://en.wikipedia.org/wiki/Malta" target="_blank" rel="noopener">Malta</a> is the top
                                          destination this summer. It’s home to a cutting-edge contemporary architecture, baroque masterpieces, delicious local
                                          cuisine and at least 8 months of sun. It’s also a top destination for filmmakers, so you can take a tour through
                                          locations familiar to you from Game of Thrones, Gladiator, Troy and many more.</p
                                        >
                                      </div>
                                    `
                                    }
                                /> : null} */}
                                <div className="demo-row">
                                    <div className="demo-row__half">
                                        {/* {editor ? <CKEditor
                                            editor={InlineEditor}
                                            data={
                                                `
                                          <div class="ck-content ck-content2" data-inline-inject="true">
                                            <h3>The three greatest things you learn from traveling</h3>
                                            <p><a href="#">Find out more</a></p>
                                          </div>
                                          
                                          `
                                            }
                                        /> : null} */}
                                    </div>
                                    <div className="demo-row__half">
                                        {/* {editor ? <CKEditor
                                            editor={InlineEditor}
                                            data={
                                                `
                                                <div class="ck-content ck-content3" data-inline-inject="true">
                                                <h3>Walking the capitals of Europe: Warsaw</h3>
                                                <p><a href="#">Find out more</a></p>
                                              </div>
                                          
                                          `
                                            }
                                        /> : null} */}
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}


EditorInline.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default EditorInline;