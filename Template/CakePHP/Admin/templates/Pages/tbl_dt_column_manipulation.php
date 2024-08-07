<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->element('head-page-meta', array('title' => 'Column Manipulation Bootstrap Table')); ?>
    <link rel="stylesheet" href="css/plugins/style.css" >
    <?= $this->element('head-css') ?> 
  </head>
  <!-- [Head] end -->
  <!-- [Body] Start -->
  <?= $this->element('body') ?>
    <?= $this->element('layout-vertical') ?>

    <!-- [ Main Content ] start -->
    <section class="pc-container">
      <div class="pc-content">
        <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Table', 'breadcrumbitemactive' =>'Column Manipulation')); ?>

        <!-- [ Main Content ] start -->
        <div class="row">
          <!-- [ basic-table ] start -->
          <div class="col-xl-12">
            <div class="card">
              <div class="card-header">
                <h5>Column Manipulation</h5>
              </div>
              <div class="card-body table-border-style">
                <div class="table-responsive">
                  <table class="table" id="pc-dt-column-manipulation"> </table>
                </div>
              </div>
            </div>
          </div>
          <!-- [ basic-table ] end -->
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </section>
    <!-- [ Main Content ] end -->
    <?= $this->element('footer-block') ?> <?= $this->element('footer-js') ?> <?= $this->element('customizer') ?>

    <!-- [Page Specific JS] start -->
    <script type="module">
    import {
      DataTable
    } from "/js/plugins/module.js"
    const columnData = [
      {
        // Select the first column ...
        select: 0,
        // ...add a random number (age) to the cells
        render: data => `${data} (${(Math.floor(Math.random() * (70 - 18)) + 18)})`
      }, {
        // select the fourth column ...
        select: 3,
        // ... let the instance know we have datetimes in it ...
        type: "date",
        // ... pass the correct datetime format ...
        format: "YYYY/DD/MM",
        // ... sort it ...
        sort: "desc"
      }
    ]
    // Customise our labels
    const labelData = {
      placeholder: "Search students...",
      searchTitle: "Search within students",
      perPage: "students per page",
      noRows: "No students to display",
      info: "Showing {start} to {end} of {rows} students (Page {page} of {pages} pages)"
    }
    // Instantiate
    fetch("/json/datatable.json").then(
      response => response.json()
    ).then(
      data => {
        const datatable = new DataTable("#pc-dt-column-manipulation", {
          data: {
            headings: Object.keys(data[0]),
            data: data.map(item => Object.values(item))
          },
          columns: columnData,
          labels: labelData,
          type: "string"
        })
        datatable.on("datatable.init", () => {
          fetch("/json/datatable.column.json").then(response => response.json())
            .then(column => {
              column.render = (value, _td, rowIndex, _cellIndex) => `${value} <button type='button' data-id='${rowIndex}' class='btn btn-sm btn-primary ms-2 notify'>Click Me</button>`
              datatable.columns.add(column)
            })
        })
        datatable.dom.addEventListener("click", e => {
          if (e.target.nodeName === "BUTTON" && e.target.hasAttribute("data-id")) {
            const index = parseInt(e.target.getAttribute("data-id"), 10)
            const row = datatable.data.data[index].cells
            let message = [
              "This is row ",
              (e.target.closest("tr").rowIndex + 1), " of ",
              datatable.options.perPage, " rendered rows and row ",
              (index + 1), " of ",
              datatable.data.length, " total rows."
            ]
            const data = [].slice.call(row).map(cell => cell.data)
            message = message.join("")
            message = `${message}\n\nThe row data is:\n${JSON.stringify(data)}`
            alert(message)
          }
        })
      }
    )
  </script>
    <!-- [Page Specific JS] end -->
  </body>
  <!-- [Body] end -->
</html>
