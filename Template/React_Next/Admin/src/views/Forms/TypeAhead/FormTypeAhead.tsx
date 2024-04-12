import React from "react";
import { Card, Form} from "react-bootstrap";

const FormTypeAhead = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Body>
                    <Form>
                        <div className="form-group row mb-0">
                            <label className="col-form-label col-lg-3 col-sm-12 text-lg-end">Simple Demo</label>
                            <div className="col-lg-5 col-md-9 col-sm-12">
                                <div className="typeahead">
                                    <Form.Control id="pc-typeahead-1" type="text" dir="ltr" placeholder="States of USA" />
                                </div>
                            </div>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
}

export default FormTypeAhead;