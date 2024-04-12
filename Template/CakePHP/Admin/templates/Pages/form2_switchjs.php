<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->element('head-page-meta', array('title' => 'Bootstrap Switch')); ?> <?= $this->element('head-css') ?> 

    <!-- [Page specific CSS] start -->
    <link rel="stylesheet" href="css/plugins/bootstrap-switch-button.min.css">
    <!-- [Page specific CSS] end -->
  </head>
  <!-- [Head] end -->
  <!-- [Body] Start -->
  <?= $this->element('body') ?>
    <?= $this->element('layout-vertical') ?>

    <!-- [ Main Content ] start -->
    <section class="pc-container">
      <div class="pc-content">
        <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Forms', 'breadcrumbitemactive' =>'Bootstrap Switch')); ?>

        <!-- [ Main Content ] start -->
        <div class="row">
          <!-- [ form-element ] start -->
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <h5>Colors</h5>
                <small>Bootstrap Switch Button implements all standard bootstrap 4 button colors.</small>
              </div>
              <div class="card-body">
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="primary">
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="secondary">
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="success">
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="danger">
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="warning">
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="info">
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="light">
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="dark">
              </div>
            </div>
            <div class="card bg-dark">
              <div class="card-header">
                <h5 class="text-white">Dark Theme Colors</h5>
                <small class="text-white">Bootstrap Switch Button colors look great on dark backgrounds.</small>
              </div>
              <div class="card-body">
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="primary" data-offstyle="secondary">
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="secondary" data-offstyle="success">
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="success" data-offstyle="danger">
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="danger" data-offstyle="warning">
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="warning" data-offstyle="info">
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="info" data-offstyle="light">
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="light" data-offstyle="dark" data-style="border">
                <input type="checkbox" data-toggle="switchbutton" checked data-onstyle="dark" data-offstyle="light" data-style="border">
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <h5>Custom Text</h5>
                <small>The text can be changed easily with attributes or options.</small>
              </div>
              <div class="card-body">
                <input
                  type="checkbox"
                  data-toggle="switchbutton"
                  checked
                  data-onlabel="Ready"
                  data-offlabel="Not Ready"
                  data-onstyle="success"
                  data-offstyle="danger"
               >
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <h5>HTML, Icons, Images</h5>
                <small>You can easily add icons or images since html is supported for on/off text.</small>
              </div>
              <div class="card-body">
                <input
                  type="checkbox"
                  data-toggle="switchbutton"
                  checked
                  data-onlabel="<i class='fa fa-play'></i> Play"
                  data-offlabel="<i class='fa fa-pause'></i> Pause"
               >
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <h5>Multiple Lines of Text</h5>
                <small>Toggles with multiple lines will adjust its heights.</small>
              </div>
              <div class="card-body">
                <input type="checkbox" data-toggle="switchbutton" checked data-onlabel="Hello<br>World" data-offlabel="Goodbye<br>World">
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <h5>Animation Speed</h5>
                <small
                  >Transition speed can be easily controlled with css <code>transition</code> property on <code>.switch-group</code>. You
                  can also turn animation off completely.</small
                >
              </div>
              <div class="card-body">
                <input type="checkbox" data-toggle="switchbutton" checked data-style="slow">
                <input type="checkbox" data-toggle="switchbutton" checked data-style="fast">
                <input type="checkbox" data-toggle="switchbutton" checked data-style="quick">
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <h5>Stacked checkboxes</h5>
                <small>Simply add <code>data-toggle="switchbutton"</code> to convert checkboxes into toggles.</small>
              </div>
              <div class="card-body">
                <div class="form-check ps-0">
                  <input id="stackedCheck1" class="form-check-input" type="checkbox" data-toggle="switchbutton" checked>
                  <label for="stackedCheck1" class="form-check-label">Enabled</label>
                </div>
                <div class="form-check ps-0">
                  <input id="stackedCheck2" class="form-check-input" type="checkbox" data-toggle="switchbutton" disabled>
                  <label for="stackedCheck2" class="form-check-label">Disabled</label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card">
              <div class="card-header">
                <h5>Event Propagation</h5>
                <small>Note All events are propagated to and from input element to the switch-button.</small>
              </div>
              <div class="card-body">
                <input id="switch_event" type="checkbox" data-toggle="switchbutton">
                <div id="console_event"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <h5>Methods</h5>
                <small>Methods can be used to control a switch button directly.</small>
              </div>
              <div class="card-body">
                <input id="switch-demo" type="checkbox" data-toggle="switchbutton">
                <div class="table-responsive mt-2">
                  <table class="table switch-table">
                    <thead>
                      <tr>
                        <th>Method</th>
                        <th>Demo</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><em>initialize</em></td>
                        <td
                          ><button class="btn btn-outline-secondary btn-sm" onclick="document.getElementById('switch-demo').switchButton()"
                            >Initialize</button
                          >
                        </td>
                        <td>Initializes the switch-button with options</td>
                      </tr>
                      <tr>
                        <td>destroy</td>
                        <td
                          ><button
                            class="btn btn-outline-secondary btn-sm"
                            onclick="document.getElementById('switch-demo').switchButton('destroy')"
                            >Destroy</button
                          >
                        </td>
                        <td>Destroys the switch-button</td>
                      </tr>
                      <tr>
                        <td>on</td>
                        <td
                          ><button
                            class="btn btn-outline-secondary btn-sm"
                            onclick="document.getElementById('switch-demo').switchButton('on')"
                            >On</button
                          >
                        </td>
                        <td>Sets the switch-button to 'On' state</td>
                      </tr>
                      <tr>
                        <td>off</td>
                        <td
                          ><button
                            class="btn btn-outline-secondary btn-sm"
                            onclick="document.getElementById('switch-demo').switchButton('off')"
                            >Off</button
                          >
                        </td>
                        <td>Sets the switch-button to 'Off' state</td>
                      </tr>
                      <tr>
                        <td>toggle</td>
                        <td
                          ><button
                            class="btn btn-outline-secondary btn-sm"
                            onclick="document.getElementById('switch-demo').switchButton('toggle')"
                            >Toggle</button
                          >
                        </td>
                        <td>Toggles the state of the switch-button</td>
                      </tr>
                      <tr>
                        <td>enable</td>
                        <td
                          ><button
                            class="btn btn-outline-secondary btn-sm"
                            onclick="document.getElementById('switch-demo').switchButton('enable')"
                            >Enable</button
                          >
                        </td>
                        <td>Enables the switch-button</td>
                      </tr>
                      <tr>
                        <td>disable</td>
                        <td
                          ><button
                            class="btn btn-outline-secondary btn-sm"
                            onclick="document.getElementById('switch-demo').switchButton('disable')"
                            >Disable</button
                          >
                        </td>
                        <td>Disables the switch-button</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </section>
    <!-- [ Main Content ] end -->
    <?= $this->element('footer-block') ?> <?= $this->element('footer-js') ?> <?= $this->element('customizer') ?>

    <!-- [Page Specific JS] start -->
    <script src="js/plugins/bootstrap-switch-button.min.js"></script>
    <script>
      (function () {
        var switch_event = document.querySelector('#switch_event');

        switch_event.addEventListener('change', function () {
          if (switch_event.checked) {
            document.querySelector('#console_event').innerHTML = 'Switch Button Checked';
          } else {
            document.querySelector('#console_event').innerHTML = 'Switch Button Unchecked';
          }
        });
      })();
    </script>
    <!-- [Page Specific JS] end -->
  </body>
  <!-- [Body] end -->
</html>
