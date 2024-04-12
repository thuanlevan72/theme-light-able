@extends('layouts.main')

@section('title', 'Form Elements')
@section('breadcrumb-item', 'Forms')

@section('breadcrumb-item-active', 'Elements')

@section('css')
@endsection

@section('content')
      <!-- [ Main Content ] start -->
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5>Form controls</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <form>
                    <div class="form-group">
                      <label class="form-label" for="exampleInputEmail1">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter email">
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="exampleInputPassword1">Password</label>
                      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    </div>
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary mb-4">Submit</button>
                  </form>
                </div>
                <div class="col-md-6">
                  <form>
                    <div class="form-group">
                      <label class="form-label">Text</label>
                      <input type="text" class="form-control" placeholder="Text">
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="exampleFormControlSelect1">Example select</label>
                      <select class="form-select" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="form-label" for="exampleFormControlTextarea1">Example textarea</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h5>Sizing</h5>
            </div>
            <div class="card-body">
              <div class="row g-4">
                <div class="col-md-6">
                  <input class="mb-3 form-control form-control-lg" type="text" placeholder=".form-control-lg">
                  <input class="mb-3 form-control" type="text" placeholder="Default input">
                  <input class="mb-0 form-control form-control-sm" type="text" placeholder=".form-control-sm">
                </div>
                <div class="col-md-6">
                  <select class="mb-3 form-select form-select-lg">
                    <option>Large select</option>
                  </select>
                  <select class="mb-0 form-select">
                    <option>Default select</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h5>Picker</h5>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group mb-0">
                  <label for="exampleColorInput" class="form-label">Color picker</label>
                  <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c"
                    title="Choose your color">
                </div>
              </form>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h5>DataList</h5>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="exampleDataList" class="form-label">Datalist example</label>
                  <input class="form-control" list="datalistOptions" id="exampleDataList"
                    placeholder="Type to search...">
                  <datalist id="datalistOptions">
                    <option value="San Francisco"> </option>
                    <option value="New York"> </option>
                    <option value="Seattle"> </option>
                    <option value="Los Angeles"> </option>
                    <option value="Chicago"> </option>
                  </datalist>
                </div>
              </form>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h5>Form Control State</h5>
            </div>
            <div class="card-body">
              <div class="row g-4">
                <div class="col-md-6">
                  <h5>Readonly</h5>
                  <hr>
                  <div class="form-group mb-0">
                    <label class="col-sm-3 col-form-label">Email</label>
                    <input class="form-control" type="text" placeholder="Readonly input here…" value="email@example.com"
                      readonly>
                  </div>
                </div>
                <div class="col-md-6">
                  <h5>Readonly plain Text</h5>
                  <hr>
                  <form>
                    <div class="form-group row mb-0">
                      <label for="staticEmail" class="col-sm-3 col-form-label">Email</label>
                      <div class="col-sm-9">
                        <input type="text" readonly class="form control form-control-plaintext" id="staticEmail"
                          value="email@example.com">
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h5>Inline Form</h5>
            </div>
            <div class="card-body">
              <form class="row row-cols-md-auto g-3 align-items-center">
                <div class="col-12">
                  <label class="sr-only" for="inlineFormInputName">Name</label>
                  <input type="text" class="form-control" id="inlineFormInputName" placeholder="Jane Doe">
                </div>
                <div class="col-12">
                  <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                  <div class="input-group">
                    <div class="input-group-text">@</div>
                    <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username">
                  </div>
                </div>
                <div class="col-12">
                  <label class="sr-only" for="inlineFormSelectPref">Preference</label>
                  <select class="form-select" id="inlineFormSelectPref">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                    <label class="form-check-label" for="inlineFormCheck"> Remember me </label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h5>Form Grid</h5>
            </div>
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="col-12">
                    <div class="alert alert-primary d-flex align-items-center" role="alert">
                      <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
                        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
                          <path
                            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z">
                          </path>
                        </symbol>
                      </svg>
                      <svg class="bi flex-shrink-0 me-2" width="24" height="24">
                        <use xlink:href="#info-fill"></use>
                      </svg>
                      <div> When working with the Bootstrap grid system, be sure to place form elements within column
                        classes. </div>
                    </div>
                  </div>
                  <div class="form-group col-md-6">
                    <label class="form-label" for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
                  </div>
                  <div class="form-group col-md-6">
                    <label class="form-label" for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label" for="inputAddress">Address</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                </div>
                <div class="form-group">
                  <label class="form-label" for="inputAddress2">Address 2</label>
                  <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
                </div>
                <div class="row">
                  <div class="form-group col-md-6">
                    <label class="form-label" for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity">
                  </div>
                  <div class="form-group col-md-4">
                    <label class="form-label" for="inputState">State</label>
                    <select id="inputState" class="form-select">
                      <option selected>select</option>
                      <option>Large select</option>
                    </select>
                  </div>
                  <div class="form-group col-md-2">
                    <label class="form-label" for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip">
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">Check me out</label>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
              </form>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h5>Horizontal Form</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6">
                  <h6>Horizontal Form Example</h6>
                  <hr>
                  <form>
                    <div class="row mb-3">
                      <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
                      <div class="col-sm-9">
                        <input type="email" class="form-control" id="inputEmail3">
                      </div>
                    </div>
                    <div class="row mb-3">
                      <label for="inputPassword3" class="col-sm-3 col-form-label">Password</label>
                      <div class="col-sm-9">
                        <input type="password" class="form-control" id="inputPassword3">
                      </div>
                    </div>
                    <fieldset>
                      <div class="row mb-3">
                        <div class="col-form-label col-sm-3 pt-0">Radios</div>
                        <div class="col-sm-9">
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                              value="option1" checked>
                            <label class="form-check-label" for="gridRadios1"> First radio </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                              value="option2">
                            <label class="form-check-label" for="gridRadios2"> Second radio </label>
                          </div>
                          <div class="form-check disabled">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3"
                              value="option3" disabled>
                            <label class="form-check-label" for="gridRadios3"> Third disabled radio </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <div class="row mb-3">
                      <div class="col-form-label col-sm-3 pt-0">Checkbox</div>
                      <div class="col-sm-9">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="gridCheck1">
                          <label class="form-check-label" for="gridCheck1"> Example checkbox </label>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary mb-4">Sign in</button>
                  </form>
                </div>
                <div class="col-lg-6">
                  <h6>Horizontal Form Label Sizing</h6>
                  <hr>
                  <div class="row mb-3">
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control form-control-sm" id="colFormLabelSm"
                        placeholder="col-form-label-sm">
                    </div>
                  </div>
                  <div class="row mb-3">
                    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control" id="colFormLabel" placeholder="col-form-label">
                    </div>
                  </div>
                  <div class="row">
                    <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                    <div class="col-sm-10">
                      <input type="email" class="form-control form-control-lg" id="colFormLabelLg"
                        placeholder="col-form-label-lg">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h5>Validation Form</h5>
            </div>
            <div class="card-body">
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-md-4 mb-3">
                    <label class="form-label" for="validationCustom01">First name</label>
                    <input type="text" class="form-control" id="validationCustom01" placeholder="First name"
                      value="Mark" required>
                    <div class="valid-feedback"> Looks good! </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label class="form-label" for="validationCustom02">Last name</label>
                    <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto"
                      required>
                    <div class="valid-feedback"> Looks good! </div>
                  </div>
                  <div class="col-md-4 mb-3">
                    <label class="form-label" for="validationCustomUsername">Username</label>
                    <div class="input-group">
                      <span class="input-group-text" id="inputGroupPrepend">@</span>
                      <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username"
                        aria-describedby="inputGroupPrepend" required>
                      <div class="invalid-feedback"> Please choose a username. </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label" for="validationCustom03">City</label>
                    <input type="text" class="form-control" id="validationCustom03" placeholder="City" required>
                    <div class="invalid-feedback"> Please provide a valid city. </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label class="form-label" for="validationCustom04">State</label>
                    <input type="text" class="form-control" id="validationCustom04" placeholder="State" required>
                    <div class="invalid-feedback"> Please provide a valid state. </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label class="form-label" for="validationCustom05">Zip</label>
                    <input type="text" class="form-control" id="validationCustom05" placeholder="Zip" required>
                    <div class="invalid-feedback"> Please provide a valid zip. </div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                    <label class="form-check-label" for="invalidCheck">Agree to terms and conditions</label>
                    <div class="invalid-feedback"> You must agree before submitting. </div>
                  </div>
                </div>
                <button class="btn btn-primary" type="submit">Submit form</button>
              </form>

              <script>
                // Example starter JavaScript for disabling form submissions if there are invalid fields
                (function () {
                  'use strict';
                  window.addEventListener(
                    'load',
                    function () {
                      // Fetch all the forms we want to apply custom Bootstrap validation styles to
                      var forms = document.getElementsByClassName('needs-validation');
                      // Loop over them and prevent submission
                      var validation = Array.prototype.filter.call(forms, function (form) {
                        form.addEventListener(
                          'submit',
                          function (event) {
                            if (form.checkValidity() === false) {
                              event.preventDefault();
                              event.stopPropagation();
                            }
                            form.classList.add('was-validated');
                          },
                          false
                        );
                      });
                    },
                    false
                  );
                })();
              </script>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h5>Supported Elements</h5>
            </div>
            <div class="card-body">
              <form class="was-validated">
                <div class="mb-3">
                  <div class="form-group">
                    <label for="validationTextarea" class="form-label">Textarea</label>
                    <textarea class="form-control is-invalid" id="validationTextarea"
                      placeholder="Required example textarea" required></textarea>
                    <div class="invalid-feedback"> Please enter a message in the textarea. </div>
                  </div>
                </div>
                <div class="form-check mb-3">
                  <input type="checkbox" class="form-check-input" id="validationFormCheck1" required>
                  <label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
                  <div class="invalid-feedback">Example invalid feedback text</div>
                </div>
                <div class="form-check">
                  <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required>
                  <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
                </div>
                <div class="form-check mb-3">
                  <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required>
                  <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
                  <div class="invalid-feedback">More example invalid feedback text</div>
                </div>
                <div class="mb-3">
                  <select class="form-select" required aria-label="select example">
                    <option value="">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <div class="invalid-feedback">Example invalid select feedback</div>
                </div>
                <div class="form-file mb-3">
                  <input type="file" class="form-control" aria-label="file example" required>
                  <div class="invalid-feedback">Example invalid form file feedback</div>
                </div>
                <div class="mb-3">
                  <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
              </form>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h5>Tooltips</h5>
            </div>
            <div class="card-body">
              <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4 position-relative">
                  <label for="validationTooltip01" class="form-label">First name</label>
                  <input type="text" class="form-control" id="validationTooltip01" value="Mark" required>
                  <div class="valid-tooltip"> Looks good! </div>
                </div>
                <div class="col-md-4 position-relative">
                  <label for="validationTooltip02" class="form-label">Last name</label>
                  <input type="text" class="form-control" id="validationTooltip02" value="Otto" required>
                  <div class="valid-tooltip"> Looks good! </div>
                </div>
                <div class="col-md-4 position-relative">
                  <label for="validationTooltipUsername" class="form-label">Username</label>
                  <div class="input-group">
                    <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                    <input type="text" class="form-control" id="validationTooltipUsername"
                      aria-describedby="validationTooltipUsernamePrepend" required>
                    <div class="invalid-tooltip"> Please choose a unique and valid username. </div>
                  </div>
                </div>
                <div class="col-md-6 position-relative">
                  <label for="validationTooltip03" class="form-label">City</label>
                  <input type="text" class="form-control" id="validationTooltip03" required>
                  <div class="invalid-tooltip"> Please provide a valid city. </div>
                </div>
                <div class="col-md-3 position-relative">
                  <label for="validationTooltip04" class="form-label">State</label>
                  <select class="form-select" id="validationTooltip04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                  </select>
                  <div class="invalid-tooltip"> Please select a valid state. </div>
                </div>
                <div class="col-md-3 position-relative">
                  <label for="validationTooltip05" class="form-label">Zip</label>
                  <input type="text" class="form-control" id="validationTooltip05" required>
                  <div class="invalid-tooltip"> Please provide a valid zip. </div>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
              </form>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h5>Checks and Radios</h5>
            </div>
            <div class="card-body">
              <div class="row g-4">
                <div class="col-md-6">
                  <h5>Checkboxes</h5>
                  <hr>
                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="customCheck1">
                    <label class="form-check-label" for="customCheck1">Check this custom checkbox</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <h5>Switches</h5>
                  <hr>
                  <div class="form-check form-switch">
                    <input type="checkbox" class="form-check-input" id="customswitch1">
                    <label class="form-check-label" for="customswitch1">Check this custom Switches</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <h5>Radios</h5>
                  <hr>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1"> Default radio </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                    <label class="form-check-label" for="flexRadioDefault2"> Default checked radio </label>
                  </div>
                  <h5 class="mt-3">Inline</h5>
                  <hr>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault11">
                    <label class="form-check-label" for="flexRadioDefault11"> Default radio </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault12"
                      checked>
                    <label class="form-check-label" for="flexRadioDefault12"> Default checked radio </label>
                  </div>
                </div>
                <div class="col-md-6">
                  <h5>Range</h5>
                  <hr>
                  <label class="form-label" for="customRange1">Example range</label>
                  <input type="range" class="form-range" id="customRange1">
                  <label class="form-label" for="customRange2">Min and max</label>
                  <input type="range" class="form-range" min="0" max="5" id="customRange2">
                  <label class="form-label" for="customRange3">Steps</label>
                  <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <!-- Input group -->
          <div class="card">
            <div class="card-header">
              <h5>Input Group</h5>
            </div>
            <div class="card-body">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                  aria-describedby="basic-addon1">
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Recipient's username"
                  aria-label="Recipient's username" aria-describedby="basic-addon2">
                <span class="input-group-text" id="basic-addon2">@example.com</span>
              </div>
              <label class="form-label" for="basic-url">Your vanity URL</label>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                <span class="input-group-text">.00</span>
              </div>
              <div class="input-group">
                <span class="input-group-text">With textarea</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <h5 class="mt-3">Sizing</h5>
                  <hr>
                  <div class="input-group input-group-sm mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                  </div>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
                    <input type="text" class="form-control" aria-label="Default"
                      aria-describedby="inputGroup-sizing-default">
                  </div>
                  <div class="input-group input-group-lg">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Large</span>
                    <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
                  </div>
                </div>
                <div class="col-md-6">
                  <h5 class="mt-3">Checkboxes and radios</h5>
                  <hr>
                  <div class="input-group mb-3">
                    <div class="input-group-text">
                      <input class="form-check-input" type="checkbox" value="" checked
                        aria-label="Checkbox for following text input">
                    </div>
                    <input type="text" class="form-control" aria-label="Text input with checkbox">
                  </div>
                  <div class="input-group">
                    <div class="input-group-text">
                      <input class="form-check-input" type="radio" value="" checked
                        aria-label="Radio button for following text input">
                    </div>
                    <input type="text" class="form-control" aria-label="Text input with radio button">
                  </div>
                </div>
                <div class="col-md-6">
                  <h5 class="mt-3">Multiple inputs</h5>
                  <hr>
                  <div class="input-group">
                    <span class="input-group-text">First and last name</span>
                    <input type="text" aria-label="First name" class="form-control">
                    <input type="text" aria-label="Last name" class="form-control">
                  </div>
                </div>
                <div class="col-md-6">
                  <h5 class="mt-3">Multiple addons</h5>
                  <hr>
                  <div class="input-group mb-3">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">0.00</span>
                    <input type="text" class="form-control"
                      aria-label="Dollar amount (with dot and two decimal places)">
                  </div>
                  <div class="input-group">
                    <input type="text" class="form-control"
                      aria-label="Dollar amount (with dot and two decimal places)">
                    <span class="input-group-text">$</span>
                    <span class="input-group-text">0.00</span>
                  </div>
                </div>
              </div>
              <h5 class="mt-3">Button Addons</h5>
              <hr>
              <div class="row">
                <div class="col-md-6">
                  <div class="input-group mb-3">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1">Button</button>
                    <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon"
                      aria-describedby="button-addon1">
                  </div>
                  <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Recipient's username"
                      aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-group mb-3">
                    <button class="btn btn-primary" type="button">Button</button>
                    <button class="btn btn-outline-primary" type="button">Button</button>
                    <input type="text" class="form-control" placeholder=""
                      aria-label="Example text with two button addons">
                  </div>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Recipient's username"
                      aria-label="Recipient's username with two button addons">
                    <button class="btn btn-secondary" type="button">Button</button>
                    <button class="btn btn-outline-secondary" type="button">Button</button>
                  </div>
                </div>
                <div class="col-md-6">
                  <h5 class="mt-3">Buttons With Dropdowns</h5>
                  <hr>
                  <div class="input-group mb-3">
                    <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-expanded="false">Dropdown</button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                    <input type="text" class="form-control" aria-label="Text input with dropdown button">
                  </div>
                  <div class="input-group mb-3">
                    <input type="text" class="form-control" aria-label="Text input with dropdown button">
                    <button class="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-expanded="false">Dropdown</button>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                  </div>
                  <div class="input-group">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-expanded="false">Dropdown</button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action before</a></li>
                      <li><a class="dropdown-item" href="#">Another action before</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                    <input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-expanded="false">Dropdown</button>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <h5 class="mt-3">Segmented Buttons</h5>
                  <hr>
                  <div class="input-group mb-3">
                    <button type="button" class="btn btn-outline-secondary">Action</button>
                    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                    <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
                  </div>
                  <div class="input-group">
                    <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
                    <button type="button" class="btn btn-outline-secondary">Action</button>
                    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li><a class="dropdown-item" href="#">Another action</a></li>
                      <li><a class="dropdown-item" href="#">Something else here</a></li>
                      <li>
                        <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <h5>Custom Forms</h5>
            </div>
            <div class="card-body">
              <div class="row g-4">
                <div class="col-md-6">
                  <h5>Custom Select</h5>
                  <hr>
                  <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Options</label>
                    <select class="form-select" id="inputGroupSelect01">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="input-group mb-3">
                    <select class="form-select" id="inputGroupSelect02">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label class="input-group-text" for="inputGroupSelect02">Options</label>
                  </div>
                  <div class="input-group mb-3">
                    <button class="btn btn-outline-secondary" type="button">Button</button>
                    <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="input-group">
                    <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <button class="btn btn-outline-secondary" type="button">Button</button>
                  </div>
                </div>
                <div class="col-md-6">
                  <h5>Custom File Input</h5>
                  <hr>
                  <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupFile01">Upload</label>
                    <input type="file" class="form-control" id="inputGroupFile01">
                  </div>

                  <div class="input-group mb-3">
                    <input type="file" class="form-control" id="inputGroupFile02">
                    <label class="input-group-text" for="inputGroupFile02">Upload</label>
                  </div>

                  <div class="input-group mb-3">
                    <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
                    <input type="file" class="form-control" id="inputGroupFile03"
                      aria-describedby="inputGroupFileAddon03" aria-label="Upload">
                  </div>

                  <div class="input-group">
                    <input type="file" class="form-control" id="inputGroupFile04"
                      aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                    <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Button</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- [ form-element ] end -->
      </div>
@endsection