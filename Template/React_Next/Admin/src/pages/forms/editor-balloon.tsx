import BreadcrumbItem from "@common/BreadcrumbItem";
import Layout from "@layout/index";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const EditorBalloon = () => {

    // CK Editor
    const editorRef = useRef<any>();
    const [editor, setEditor] = useState(false);
    const { CKEditor, BalloonEditor }: any = editorRef.current || {};

    useEffect(() => {
        editorRef.current = {
            CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
            BalloonEditor: require('@ckeditor/ckeditor5-build-balloon'),
        };
        setEditor(true);
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('@ckeditor/ckeditor5-react')
                .then(({ CKEditor }: any) => {
                    // Use CKEditor here
                    CKEditor.editor = BalloonEditor;
                    CKEditor.data =
                        `
                <h2>Walking the capitals of Europe: Warsaw</h2>
                <figure class="media">
                  <oembed url="https://www.youtube.com/watch?v=7YRyFvjA_a8"></oembed>
                </figure>
                <p>If you enjoyed my previous articles in which we discussed wandering around <a href="https://en.wikipedia.org/wiki/Copenhagen">Copenhagen</a> and <a href="https://en.wikipedia.org/wiki/Vilnius">Vilnius</a>, you’ll definitely love exploring <a href="https://en.wikipedia.org/wiki/Warsaw">Warsaw</a>.</p>
                <h3>Time to put comfy sandals on!</h3>
                <p>The best time to visit the city is July and August when it’s cool enough not to break a sweat and hot enough to enjoy summer. The city, which has quite a combination of both old and modern textures, is located by the river of Vistula.</p>
                <p>The historic <strong>Old Town</strong>, reconstructed after World War II, with its late 18th-century characteristics, is a must-see. You can start your walk from <strong>Nowy Świat Street</strong> which will take you straight to the Old Town.</p>
                <p>Then you can go to the <strong>Powiśle</strong>area and take a walk on the newly renovated promenade on the riverfront. There are also lots of cafes, bars, and restaurants where you can shake off the exhaustion of the day. On Sundays, there are many parks where you can enjoy nature or listen to pianists from around the world playing Chopin.</p>
                <p>For museum lovers, you can add these to your list:</p>
                <ul>
                  <li><a href="http://www.polin.pl/en">POLIN</a></li>
                  <li><a href="http://www.1944.pl/en">Warsaw Uprising Museum</a></li>
                  <li><a href="http://chopin.museum/en">Fryderyk Chopin Museum</a></li>
                </ul>
                <h3>Next destination</h3>
                <p>We will go to Berlin and have a night walk in the city that never sleeps! Make sure you subscribe to our newsletter!</p>`
                })
                .catch((error) => {
                    console.error('Failed to load CKEditor:', error);
                });
        }
    }, [BalloonEditor]);

    return (
        <React.Fragment>
            <BreadcrumbItem mainTitle="Forms" subTitle="Balloon" />
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <h5>Balloon Editor</h5>
                        </Card.Header>
                        <Card.Body>
                            {editor ?
                                <CKEditor
                                    editor={BalloonEditor}
                                    data={
                                        `
                                    <h2>Walking the capitals of Europe: Warsaw</h2>
                                    <figure class="media">
                                      <oembed url="https://www.youtube.com/watch?v=7YRyFvjA_a8"></oembed>
                                    </figure>
                                    <p>If you enjoyed my previous articles in which we discussed wandering around <a href="https://en.wikipedia.org/wiki/Copenhagen">Copenhagen</a> and <a href="https://en.wikipedia.org/wiki/Vilnius">Vilnius</a>, you’ll definitely love exploring <a href="https://en.wikipedia.org/wiki/Warsaw">Warsaw</a>.</p>
                                    <h3>Time to put comfy sandals on!</h3>
                                    <p>The best time to visit the city is July and August when it’s cool enough not to break a sweat and hot enough to enjoy summer. The city, which has quite a combination of both old and modern textures, is located by the river of Vistula.</p>
                                    <p>The historic <strong>Old Town</strong>, reconstructed after World War II, with its late 18th-century characteristics, is a must-see. You can start your walk from <strong>Nowy Świat Street</strong> which will take you straight to the Old Town.</p>
                                    <p>Then you can go to the <strong>Powiśle</strong>area and take a walk on the newly renovated promenade on the riverfront. There are also lots of cafes, bars, and restaurants where you can shake off the exhaustion of the day. On Sundays, there are many parks where you can enjoy nature or listen to pianists from around the world playing Chopin.</p>
                                    <p>For museum lovers, you can add these to your list:</p>
                                    <ul>
                                      <li><a href="http://www.polin.pl/en">POLIN</a></li>
                                      <li><a href="http://www.1944.pl/en">Warsaw Uprising Museum</a></li>
                                      <li><a href="http://chopin.museum/en">Fryderyk Chopin Museum</a></li>
                                    </ul>
                                    <h3>Next destination</h3>
                                    <p>We will go to Berlin and have a night walk in the city that never sleeps! Make sure you subscribe to our newsletter!</p>`
                                    }
                                />
                                : <p>ckeditor5</p>}

                            <div>Your component rendering here</div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}


EditorBalloon.getLayout = (page: ReactElement) => {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default EditorBalloon;