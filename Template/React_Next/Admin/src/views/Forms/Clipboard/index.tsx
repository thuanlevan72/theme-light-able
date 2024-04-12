import Link from 'next/link';
import React, { useState } from 'react';
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Clipboard = () => {
    const [copyText, setCopyText] = useState<string>('');
    const handleCopy = () => {
        alert("Copied");
    };

    const [copyText1, setCopyText1] = useState<string>('Lorem ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga.');
    const handleCopy1 = () => {
        alert("Copied");
    };

    const copyText2: any = "Just because you can doesn't mean you should — clipboard.js";
    const handleCopy2 = () => {
        alert("Copied");
    };

    const copyText3: string = "Lorem ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga."
    const handleCopy3 = () => {
        alert("Copied");
    };
    return (
        <React.Fragment>
            <Row className="form-group">
                <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Copy text from another element</label>
                <Col lg={6} md={9} sm={12}>
                    <InputGroup className="mb-2">
                        <Form.Control type="text" id="pc-clipboard-1" placeholder="Type some value to copy"
                            value={copyText}
                            onChange={(e) => setCopyText(e.target.value)}
                            autoComplete='off' />
                        <CopyToClipboard text={copyText} onCopy={handleCopy}>
                            <Link href="#" className="btn btn-lg btn-primary">
                                <i className="feather icon-copy"></i>
                            </Link>
                        </CopyToClipboard>
                    </InputGroup>
                    <small>You can do by adding a <code>data-clipboard-target</code> attribute in your trigger element</small>
                </Col>
            </Row>
            <Row className="form-group">
                <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Cut text from another element</label>
                <Col lg={6} md={9} sm={12}>
                    <Form.Control as="textarea" className="mb-2" id="pc-clipboard-3" rows={6}
                        value={copyText1}
                        onChange={(e) => setCopyText1(e.target.value)}
                        autoComplete='off'>
                    </Form.Control>
                    <small>
                        you can define a <code>data-clipboard-action</code> attribute to specify if you want to either <code>copy</code> or
                        <code>cut</code> content</small><br />
                    <CopyToClipboard text={copyText1} onCopy={handleCopy1} options={{ format: 'text/plain' }}>
                        <Button variant='danger' className="mt-2">Cut to clipboard</Button>
                    </CopyToClipboard>
                </Col>
            </Row>
            <Row className="form-group">
                <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Copy text from attribute</label>
                <Col lg={6} md={9} sm={12}>
                    <CopyToClipboard text={copyText2} onCopy={handleCopy2} options={{ format: 'text/plain' }}>
                        <Button variant='success' className="mb-2">
                            Copy to clipboard
                        </Button>
                    </CopyToClipboard>
                    <br />
                    <small>You can just include a <code>data-clipboard-text</code> attribute in your trigger element</small>
                </Col>
            </Row>
            <Row className="form-group mb-0">
                <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Copy From Container</label>
                <Col lg={6} md={9} sm={12}>
                    <div id="pc-clipboard-4" style={{ border: "4px solid rgba(234, 234, 234, 0.5)", padding: "10px" }}>
                        Lorem ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga.
                    </div >
                    <CopyToClipboard text={copyText3} onCopy={handleCopy3} options={{ format: 'text/plain' }}>
                        <Link href="#" className="btn btn-primary mt-2">Copy to clipboard</Link>
                    </CopyToClipboard>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default Clipboard;