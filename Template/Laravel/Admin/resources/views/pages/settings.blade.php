@extends('layouts.main')

@section('title', 'Settings')
@section('breadcrumb-item', 'Ui kit')

@section('breadcrumb-item-active', 'Settings')

@section('css')
<!-- fileupload-custom css -->
<link rel="stylesheet" href="{{ URL::asset('build/css/plugins/dropzone.min.css') }}">
<!-- [Page specific CSS] end -->
@endsection

@section('content')
      <!-- [ Main Content ] start -->
      <div class="row">
        <!-- [ site settings ] start -->
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5>Site setting</h5>
            </div>
            <div class="card-body">
              <div class="form-group row">
                <label class="col-form-label col-sm-3 text-sm-end">Site name</label>
                <div class="col-lg-6 col-sm-7">
                  <input type="text" class="form-control" placeholder="Enter site name">
                </div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-sm-3 text-sm-end">Unique ID</label>
                <div class="col-lg-6 col-sm-7">
                  <input type="text" class="form-control" placeholder="Enter unique id">
                </div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-sm-3 text-sm-end">Site Url</label>
                <div class="col-lg-6 col-sm-7">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter site url">
                    <button class="btn btn-primary" type="button"><i class="ti ti-copy align-middle"></i> Copy</button>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-sm-3 text-sm-end">Affiliate ID</label>
                <div class="col-lg-6 col-sm-7">
                  <input type="text" class="form-control" placeholder="Enter affiliate id">
                </div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-sm-3 text-sm-end">Favicon 
                  <span class="link-secondary" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title='<span class="mb-2 d-block">Upload a 32 x 32 pixels PNG, JPG or SVG to display in the browser tabs during the website experience.</span><span class="d-block">This element is going to enable your website visitors to get an idea of the content or brand of your site</span>'>
                    <i class="ph-duotone ph-question"></i>
                  </span>
                </label>
                <div class="col-lg-6 col-sm-7">
                  <form action="/build/json/file-upload.php" class="dropzone">
                    <div class="fallback">
                      <input name="file" type="file" multiple>
                    </div>
                  </form>                 
                  <a href="#" class="link-primary text-sm">Need help?</a>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-sm-3 text-sm-end">Webclip 
                  <span class="link-secondary" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title='<span class="mb-2 d-block">Upload a 32 x 32 pixels PNG, JPG or SVG to display in the browser tabs during the website experience.</span><span class="d-block">This element is going to enable your website visitors to get an idea of the content or brand of your site</span>'>
                    <i class="ph-duotone ph-question"></i>
                  </span>
                </label>
                <div class="col-lg-6 col-sm-7">
                  <form action="/build/json/file-upload.php" class="dropzone">
                    <div class="fallback">
                      <input name="file" type="file" multiple>
                    </div>
                  </form>
                  <a href="#" class="link-primary text-smin">Need help?</a>
                </div>
              </div>
              <div class="form-group row mb-0">
                <span class="col-form-label col-sm-3 text-sm-end"></span>
                <div class="col-lg-6 col-sm-7">
                  <button class="btn btn-primary me-2">Apply Change</button>
                  <button class="btn btn-outline-secondary">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- [ site settings ] end -->
      </div>
      <!-- [ Main Content ] end -->
@endsection

@section('scripts')
  <!-- [Page Specific JS] start -->
  <!-- file-upload Js -->
  <script src="{{ URL::asset('build/js/plugins/dropzone-amd-module.min.js') }}"></script>
  <!-- [Page Specific JS] end -->
@endsection