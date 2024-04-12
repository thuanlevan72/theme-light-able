import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const EditClassic = () => {

    // CK Editor
    const editorRef = useRef<any>();
    const [editor, setEditor] = useState(false);
    const { CKEditor, ClassicEditor }: any = editorRef.current || {};

    useEffect(() => {
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
            ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
        };
        setEditor(true);
    }, []);

    const editorConfig = {
        toolbar: {
            items: [
                'heading',
                '|',
                'bold',
                'italic',
                'underline',
                '|',
                'bulletedList',
                'numberedList',
                '|',
                'imageInsert',
                'blockQuote',
                '|',
                'undo',
                'redo',
            ],
        },
        placeholder: 'Type your text here...',
    };

    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Classic Editor" />
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <h5>Classic Editor</h5>
                        </Card.Header>
                        <Card.Body>
                            {editor ? <CKEditor
                                editor={ClassicEditor}
                                config={editorConfig}
                                data={
                                    `
                                    <h2>The three greatest things you learn from traveling</h2>
                                    <p>Like all the great things on earth traveling teaches us by example. Here are some of the most precious lessons I’ve learned over the years of traveling.</p>
                                    <figure class="image image-style-side illustration" style="height:400px"><img alt="Three Monks walking on ancient temple." src="https://ckeditor.com/docs/ckeditor5/latest/assets/img/volcano.jpg">
                                        <figcaption>Leaving your comfort zone might lead you to such beautiful sceneries like this one.</figcaption>
                                    </figure>
                                    <h3>Appreciation of diversity</h3>
                                    <p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p>
                                    <blockquote>
                                        <p>The real voyage of discovery consists not in seeking new landscapes, but having new eyes.</p>
                                        <p><strong>Marcel Proust</strong></p>
                                    </blockquote>
                                    <h3>Improvisation</h3>
                                    <p>Life doesn't allow us to execute every single plan perfectly. This especially seems to be the case when you travel. You plan it down to every minute with a big checklist; but when it comes to executing it, something always comes up and you’re left with your improvising skills. You learn to adapt as you go. Here’s how my travel checklist looks now:</p>
                                    <ul class="todo-list">
                                        <li>
                                            <label class="todo-list__label">
                                                <input type="checkbox" checked="checked"><span class="todo-list__label__description">buy the ticket</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="todo-list__label">
                                                <input type="checkbox" checked="checked"><span class="todo-list__label__description">start your adventure</span>
                                            </label>
                                        </li>
                                    </ul>
                                    <h3>Confidence</h3>
                                    <p>Going to a new place can be quite terrifying. While change and uncertainty makes us scared, traveling teaches us how ridiculous it is to be afraid of something before it happens. The moment you face your fear and see there was nothing to be afraid of, is the moment you discover bliss.</p>`
                                }
                            /> : <p>ckeditor5</p>}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}


EditClassic.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default EditClassic;