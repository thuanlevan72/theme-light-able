@extends('layouts.main')

@section('title', 'Uppy File Upload')
@section('breadcrumb-item', 'Forms')

@section('breadcrumb-item-active', 'Uppy')

@section('css')
    <!-- [Page specific CSS] start -->
    <link rel="stylesheet" href="{{ URL::asset('build/css/plugins/uppy.min.css') }}">
    <!-- [Page specific CSS] end -->
@endsection

@section('content')
    <!-- [ Main Content ] start -->
    <div class="row">
        <!-- [ form-element ] start -->
        <div class="col-sm-12">
          <div class="alert alert-primary" role="alert">
            <div class="alert-text">
              Uppy is a sleek, modular open source JavaScript file uploader.
              <br />
              For more info please visit the plugin's <a class="" href="https://uppy.io/" target="_blank">Demo Page</a> or
              <a class="" href="https://github.com/transloadit/uppy" target="_blank">GitHub</a>.
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <h5>Dashboard Example</h5>
            </div>
            <div class="card-body">
              <div class="pc-uppy" id="pc-uppy-1"> </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header">
              <h5>Drag and Drop [ autoProceed is on ]</h5>
            </div>
            <div class="card-body">
              <div id="files-drag-drop">
                <div class="for-DragDrop"></div>
                <div class="for-ProgressBar"></div>
                <div class="uploaded-files mt-3">
                  <h5>Uploaded files:</h5>
                  <ol></ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header">
              <h5>Popup Upload</h5>
            </div>
            <div class="card-body">
              <div class="text-center">
                <button class="pc-uppy-btn btn btn-light-primary" id="uppyModalOpener">Open Popup Window</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- [ form-element ] end -->
  </section>
@endsection

@section('scripts')
    <!-- [Page Specific JS] start -->
    <script src="{{ URL::asset('build/js/plugins/uppy.min.js') }}"></script>
    <script type="module">
        // Function for displaying uploaded files
        const onUploadSuccess = (elForUploadedFiles) => (file, response) => {
          const url = response.uploadURL;
          const fileName = file.name;
  
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = url;
          a.target = '_blank';
          a.appendChild(document.createTextNode(fileName));
          li.appendChild(a);
  
          document.querySelector(elForUploadedFiles).appendChild(li);
        };
  
        import { Uppy, Dashboard, Webcam, Tus, DragDrop, ProgressBar } from 'https://releases.transloadit.com/uppy/v3.23.0/uppy.min.mjs';
  
        // for popup modal open and upload files
        const uppy = new Uppy({ debug: true, autoProceed: false })
          .use(Dashboard, { trigger: '#uppyModalOpener' })
          .use(Webcam, { target: Dashboard })
          .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' });
  
        uppy.on('success', (fileCount) => {
          console.log(`${fileCount} files uploaded`);
        });
  
        // for dashboard and upload files
        const uppy1 = new Uppy({ debug: true, autoProceed: false })
          .use(Dashboard, { target: '#pc-uppy-1', inline: true })
          .use(Webcam, { target: Dashboard })
          .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' });
  
        uppy1.on('success', (fileCount) => {
          console.log(`${fileCount} files uploaded`);
        });
  
        // for structure change upload files
        const uppy2 = new Uppy({ debug: true, autoProceed: true })
          .use(DragDrop, { target: '#files-drag-drop .for-DragDrop' })
          .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
          .use(ProgressBar, { target: '#files-drag-drop .for-ProgressBar', hideAfterFinish: false })
          .on('upload-success', onUploadSuccess('#files-drag-drop .uploaded-files ol'));
  
        uppy2.on('success', (fileCount) => {
          console.log(`${fileCount} files uploaded`);
        });
      </script>
  
      <!-- To support older browsers, you can use the legacy bundle which adds a global `Uppy` object.  -->
      <script nomodule src="https://releases.transloadit.com/uppy/v3.23.0/uppy.legacy.min.js"></script>
      <script nomodule>
        {
          const { Dashboard, Webcam, Tus } = Uppy;
          // for popup modal open and upload files
          const uppy = new Uppy.Uppy({ debug: true, autoProceed: false })
            .use(Dashboard, { target: '#uppyModalOpener' })
            .use(Webcam, { target: Dashboard })
            .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' });
  
          uppy.on('success', function (fileCount) {
            console.log(`${fileCount} files uploaded`);
          });
        }
  
        {
          const { Dashboard, Webcam, Tus } = Uppy;
          // for dashboard and upload files
          const uppy1 = new Uppy.Uppy({ debug: true, autoProceed: false })
            .use(Dashboard, { trigger: '#pc-uppy-1', inline: true })
            .use(Webcam, { target: Dashboard })
            .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' });
  
          uppy1.on('success', function (fileCount) {
            console.log(`${fileCount} files uploaded`);
          });
        }
  
        {
          const { DragDrop, ProgressBar, Tus } = Uppy;
          // for structure change upload files
          const uppy2 = new Uppy.Uppy({ debug: true, autoProceed: true })
            .use(DragDrop, { target: '#files-drag-drop .for-DragDrop' })
            .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
            .use(ProgressBar, { target: '#files-drag-drop .for-ProgressBar', hideAfterFinish: false })
            .on('upload-success', onUploadSuccess('#files-drag-drop .uploaded-files ol'));
  
          uppy2.on('success', function (fileCount) {
            console.log(`${fileCount} files uploaded`);
          });
        }
      </script>
    <!-- [Page Specific JS] end -->
@endsection
