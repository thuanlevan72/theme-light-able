<!DOCTYPE html>
<html lang="en">
  <head>
    <?= $this->element('head-page-meta', array('title' => 'Color')); ?>
    <!-- [Page specific CSS] start -->
    <link href="css/plugins/animate.min.css" rel="stylesheet" type="text/css" >
    <!-- [Page specific CSS] end -->
    <?= $this->element('head-css') ?> 
    <link rel="stylesheet" href="css/uikit.css" >
  </head>

  <?= $this->element('body') ?>
    <!-- [ Main Content ] start -->
    <?= $this->element('loader') ?> <?= $this->element('component-header') ?>
    <section class="component-block">
      <div class="container">
        <div class="row">
          <div class="col-xl-3"> <?= $this->element('component-menu-list') ?> </div>
          <div class="col-xl-9">
            <div class="row">
              <!-- prettier-ignore -->
              <?= $this->element('component-breadcrumb', array('title' => 'Color', 'text' =>'Bootstrap is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project.', 'link' =>'https://getbootstrap.com/docs/5.2/customize/color/')); ?>
            </div>
            <!-- [ Main Content ] start -->
            <div class="row">
              <!-- [ link-button ] start -->
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <h5>Background Color</h5>
                  </div>
                  <div class="card-body">
                    <div class="row gy-4">
                      <div class="col-md-4">
                        <div class="p-3 color-block bg-blue-100" data-clipboard-text="bg-blue-100">bg-blue-100</div>
                        <div class="p-3 color-block bg-blue-200" data-clipboard-text="bg-blue-200">bg-blue-200</div>
                        <div class="p-3 color-block bg-blue-300" data-clipboard-text="bg-blue-300">bg-blue-300</div>
                        <div class="p-3 color-block bg-blue-400" data-clipboard-text="bg-blue-400">bg-blue-400</div>
                        <div class="p-3 color-block bg-blue-500" data-clipboard-text="bg-blue-500">bg-blue-500</div>
                        <div class="p-3 color-block bg-blue-600" data-clipboard-text="bg-blue-600">bg-blue-600</div>
                        <div class="p-3 color-block bg-blue-700" data-clipboard-text="bg-blue-700">bg-blue-700</div>
                        <div class="p-3 color-block bg-blue-800" data-clipboard-text="bg-blue-800">bg-blue-800</div>
                        <div class="p-3 color-block bg-blue-900" data-clipboard-text="bg-blue-900">bg-blue-900</div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block bg-indigo-100" data-clipboard-text="bg-indigo-100">bg-indigo-100</div>
                        <div class="p-3 color-block bg-indigo-200" data-clipboard-text="bg-indigo-200">bg-indigo-200</div>
                        <div class="p-3 color-block bg-indigo-300" data-clipboard-text="bg-indigo-300">bg-indigo-300</div>
                        <div class="p-3 color-block bg-indigo-400" data-clipboard-text="bg-indigo-400">bg-indigo-400</div>
                        <div class="p-3 color-block bg-indigo-500" data-clipboard-text="bg-indigo-500">bg-indigo-500</div>
                        <div class="p-3 color-block bg-indigo-600" data-clipboard-text="bg-indigo-600">bg-indigo-600</div>
                        <div class="p-3 color-block bg-indigo-700" data-clipboard-text="bg-indigo-700">bg-indigo-700</div>
                        <div class="p-3 color-block bg-indigo-800" data-clipboard-text="bg-indigo-800">bg-indigo-800</div>
                        <div class="p-3 color-block bg-indigo-900" data-clipboard-text="bg-indigo-900">bg-indigo-900</div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block bg-purple-100" data-clipboard-text="bg-purple-100">bg-purple-100</div>
                        <div class="p-3 color-block bg-purple-200" data-clipboard-text="bg-purple-200">bg-purple-200</div>
                        <div class="p-3 color-block bg-purple-300" data-clipboard-text="bg-purple-300">bg-purple-300</div>
                        <div class="p-3 color-block bg-purple-400" data-clipboard-text="bg-purple-400">bg-purple-400</div>
                        <div class="p-3 color-block bg-purple-500" data-clipboard-text="bg-purple-500">bg-purple-500</div>
                        <div class="p-3 color-block bg-purple-600" data-clipboard-text="bg-purple-600">bg-purple-600</div>
                        <div class="p-3 color-block bg-purple-700" data-clipboard-text="bg-purple-700">bg-purple-700</div>
                        <div class="p-3 color-block bg-purple-800" data-clipboard-text="bg-purple-800">bg-purple-800</div>
                        <div class="p-3 color-block bg-purple-900" data-clipboard-text="bg-purple-900">bg-purple-900</div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block bg-pink-100" data-clipboard-text="bg-pink-100">bg-pink-100</div>
                        <div class="p-3 color-block bg-pink-200" data-clipboard-text="bg-pink-200">bg-pink-200</div>
                        <div class="p-3 color-block bg-pink-300" data-clipboard-text="bg-pink-300">bg-pink-300</div>
                        <div class="p-3 color-block bg-pink-400" data-clipboard-text="bg-pink-400">bg-pink-400</div>
                        <div class="p-3 color-block bg-pink-500" data-clipboard-text="bg-pink-500">bg-pink-500</div>
                        <div class="p-3 color-block bg-pink-600" data-clipboard-text="bg-pink-600">bg-pink-600</div>
                        <div class="p-3 color-block bg-pink-700" data-clipboard-text="bg-pink-700">bg-pink-700</div>
                        <div class="p-3 color-block bg-pink-800" data-clipboard-text="bg-pink-800">bg-pink-800</div>
                        <div class="p-3 color-block bg-pink-900" data-clipboard-text="bg-pink-900">bg-pink-900</div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block bg-red-100" data-clipboard-text="bg-red-100">bg-red-100</div>
                        <div class="p-3 color-block bg-red-200" data-clipboard-text="bg-red-200">bg-red-200</div>
                        <div class="p-3 color-block bg-red-300" data-clipboard-text="bg-red-300">bg-red-300</div>
                        <div class="p-3 color-block bg-red-400" data-clipboard-text="bg-red-400">bg-red-400</div>
                        <div class="p-3 color-block bg-red-500" data-clipboard-text="bg-red-500">bg-red-500</div>
                        <div class="p-3 color-block bg-red-600" data-clipboard-text="bg-red-600">bg-red-600</div>
                        <div class="p-3 color-block bg-red-700" data-clipboard-text="bg-red-700">bg-red-700</div>
                        <div class="p-3 color-block bg-red-800" data-clipboard-text="bg-red-800">bg-red-800</div>
                        <div class="p-3 color-block bg-red-900" data-clipboard-text="bg-red-900">bg-red-900</div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block bg-orange-100" data-clipboard-text="bg-orange-100">bg-orange-100</div>
                        <div class="p-3 color-block bg-orange-200" data-clipboard-text="bg-orange-200">bg-orange-200</div>
                        <div class="p-3 color-block bg-orange-300" data-clipboard-text="bg-orange-300">bg-orange-300</div>
                        <div class="p-3 color-block bg-orange-400" data-clipboard-text="bg-orange-400">bg-orange-400</div>
                        <div class="p-3 color-block bg-orange-500" data-clipboard-text="bg-orange-500">bg-orange-500</div>
                        <div class="p-3 color-block bg-orange-600" data-clipboard-text="bg-orange-600">bg-orange-600</div>
                        <div class="p-3 color-block bg-orange-700" data-clipboard-text="bg-orange-700">bg-orange-700</div>
                        <div class="p-3 color-block bg-orange-800" data-clipboard-text="bg-orange-800">bg-orange-800</div>
                        <div class="p-3 color-block bg-orange-900" data-clipboard-text="bg-orange-900">bg-orange-900</div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block bg-yellow-100" data-clipboard-text="bg-yellow-100">bg-yellow-100</div>
                        <div class="p-3 color-block bg-yellow-200" data-clipboard-text="bg-yellow-200">bg-yellow-200</div>
                        <div class="p-3 color-block bg-yellow-300" data-clipboard-text="bg-yellow-300">bg-yellow-300</div>
                        <div class="p-3 color-block bg-yellow-400" data-clipboard-text="bg-yellow-400">bg-yellow-400</div>
                        <div class="p-3 color-block bg-yellow-500" data-clipboard-text="bg-yellow-500">bg-yellow-500</div>
                        <div class="p-3 color-block bg-yellow-600" data-clipboard-text="bg-yellow-600">bg-yellow-600</div>
                        <div class="p-3 color-block bg-yellow-700" data-clipboard-text="bg-yellow-700">bg-yellow-700</div>
                        <div class="p-3 color-block bg-yellow-800" data-clipboard-text="bg-yellow-800">bg-yellow-800</div>
                        <div class="p-3 color-block bg-yellow-900" data-clipboard-text="bg-yellow-900">bg-yellow-900</div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block bg-green-100" data-clipboard-text="bg-green-100">bg-green-100</div>
                        <div class="p-3 color-block bg-green-200" data-clipboard-text="bg-green-200">bg-green-200</div>
                        <div class="p-3 color-block bg-green-300" data-clipboard-text="bg-green-300">bg-green-300</div>
                        <div class="p-3 color-block bg-green-400" data-clipboard-text="bg-green-400">bg-green-400</div>
                        <div class="p-3 color-block bg-green-500" data-clipboard-text="bg-green-500">bg-green-500</div>
                        <div class="p-3 color-block bg-green-600" data-clipboard-text="bg-green-600">bg-green-600</div>
                        <div class="p-3 color-block bg-green-700" data-clipboard-text="bg-green-700">bg-green-700</div>
                        <div class="p-3 color-block bg-green-800" data-clipboard-text="bg-green-800">bg-green-800</div>
                        <div class="p-3 color-block bg-green-900" data-clipboard-text="bg-green-900">bg-green-900</div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block bg-teal-100" data-clipboard-text="bg-teal-100">bg-teal-100</div>
                        <div class="p-3 color-block bg-teal-200" data-clipboard-text="bg-teal-200">bg-teal-200</div>
                        <div class="p-3 color-block bg-teal-300" data-clipboard-text="bg-teal-300">bg-teal-300</div>
                        <div class="p-3 color-block bg-teal-400" data-clipboard-text="bg-teal-400">bg-teal-400</div>
                        <div class="p-3 color-block bg-teal-500" data-clipboard-text="bg-teal-500">bg-teal-500</div>
                        <div class="p-3 color-block bg-teal-600" data-clipboard-text="bg-teal-600">bg-teal-600</div>
                        <div class="p-3 color-block bg-teal-700" data-clipboard-text="bg-teal-700">bg-teal-700</div>
                        <div class="p-3 color-block bg-teal-800" data-clipboard-text="bg-teal-800">bg-teal-800</div>
                        <div class="p-3 color-block bg-teal-900" data-clipboard-text="bg-teal-900">bg-teal-900</div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block bg-cyan-100" data-clipboard-text="bg-cyan-100">bg-cyan-100</div>
                        <div class="p-3 color-block bg-cyan-200" data-clipboard-text="bg-cyan-200">bg-cyan-200</div>
                        <div class="p-3 color-block bg-cyan-300" data-clipboard-text="bg-cyan-300">bg-cyan-300</div>
                        <div class="p-3 color-block bg-cyan-400" data-clipboard-text="bg-cyan-400">bg-cyan-400</div>
                        <div class="p-3 color-block bg-cyan-500" data-clipboard-text="bg-cyan-500">bg-cyan-500</div>
                        <div class="p-3 color-block bg-cyan-600" data-clipboard-text="bg-cyan-600">bg-cyan-600</div>
                        <div class="p-3 color-block bg-cyan-700" data-clipboard-text="bg-cyan-700">bg-cyan-700</div>
                        <div class="p-3 color-block bg-cyan-800" data-clipboard-text="bg-cyan-800">bg-cyan-800</div>
                        <div class="p-3 color-block bg-cyan-900" data-clipboard-text="bg-cyan-900">bg-cyan-900</div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block bg-gray-100" data-clipboard-text="bg-gray-100">bg-gray-100</div>
                        <div class="p-3 color-block bg-gray-200" data-clipboard-text="bg-gray-200">bg-gray-200</div>
                        <div class="p-3 color-block bg-gray-300" data-clipboard-text="bg-gray-300">bg-gray-300</div>
                        <div class="p-3 color-block bg-gray-400" data-clipboard-text="bg-gray-400">bg-gray-400</div>
                        <div class="p-3 color-block bg-gray-500" data-clipboard-text="bg-gray-500">bg-gray-500</div>
                        <div class="p-3 color-block bg-gray-600" data-clipboard-text="bg-gray-600">bg-gray-600</div>
                        <div class="p-3 color-block bg-gray-700" data-clipboard-text="bg-gray-700">bg-gray-700</div>
                        <div class="p-3 color-block bg-gray-800" data-clipboard-text="bg-gray-800">bg-gray-800</div>
                        <div class="p-3 color-block bg-gray-900" data-clipboard-text="bg-gray-900">bg-gray-900</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card color-card">
                  <div class="card-header">
                    <h5>Text Color</h5>
                  </div>
                  <div class="card-body">
                    <div class="row gy-4">
                      <div class="col-md-4">
                        <div class="p-3 color-block text-blue-100" data-clipboard-text="text-blue-100">text-blue-100</div>
                        <div class="p-3 color-block text-blue-200" data-clipboard-text="text-blue-200">text-blue-200</div>
                        <div class="p-3 color-block text-blue-300" data-clipboard-text="text-blue-300">text-blue-300</div>
                        <div class="p-3 color-block text-blue-400" data-clipboard-text="text-blue-400">text-blue-400</div>
                        <div class="p-3 color-block text-blue-500" data-clipboard-text="text-blue-500">text-blue-500</div>
                        <div class="p-3 color-block text-blue-600" data-clipboard-text="text-blue-600">text-blue-600</div>
                        <div class="p-3 color-block text-blue-700" data-clipboard-text="text-blue-700">text-blue-700</div>
                        <div class="p-3 color-block text-blue-800" data-clipboard-text="text-blue-800">text-blue-800</div>
                        <div class="p-3 color-block text-blue-900" data-clipboard-text="text-blue-900">text-blue-900</div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block text-indigo-100" data-clipboard-text="text-indigo-100">text-indigo-100 </div>
                        <div class="p-3 color-block text-indigo-200" data-clipboard-text="text-indigo-200">text-indigo-200 </div>
                        <div class="p-3 color-block text-indigo-300" data-clipboard-text="text-indigo-300">text-indigo-300 </div>
                        <div class="p-3 color-block text-indigo-400" data-clipboard-text="text-indigo-400">text-indigo-400 </div>
                        <div class="p-3 color-block text-indigo-500" data-clipboard-text="text-indigo-500">text-indigo-500 </div>
                        <div class="p-3 color-block text-indigo-600" data-clipboard-text="text-indigo-600">text-indigo-600 </div>
                        <div class="p-3 color-block text-indigo-700" data-clipboard-text="text-indigo-700">text-indigo-700 </div>
                        <div class="p-3 color-block text-indigo-800" data-clipboard-text="text-indigo-800">text-indigo-800 </div>
                        <div class="p-3 color-block text-indigo-900" data-clipboard-text="text-indigo-900">text-indigo-900 </div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block text-purple-100" data-clipboard-text="text-purple-100">text-purple-100 </div>
                        <div class="p-3 color-block text-purple-200" data-clipboard-text="text-purple-200">text-purple-200 </div>
                        <div class="p-3 color-block text-purple-300" data-clipboard-text="text-purple-300">text-purple-300 </div>
                        <div class="p-3 color-block text-purple-400" data-clipboard-text="text-purple-400">text-purple-400 </div>
                        <div class="p-3 color-block text-purple-500" data-clipboard-text="text-purple-500">text-purple-500 </div>
                        <div class="p-3 color-block text-purple-600" data-clipboard-text="text-purple-600">text-purple-600 </div>
                        <div class="p-3 color-block text-purple-700" data-clipboard-text="text-purple-700">text-purple-700 </div>
                        <div class="p-3 color-block text-purple-800" data-clipboard-text="text-purple-800">text-purple-800 </div>
                        <div class="p-3 color-block text-purple-900" data-clipboard-text="text-purple-900">text-purple-900 </div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block text-pink-100" data-clipboard-text="text-pink-100">text-pink-100</div>
                        <div class="p-3 color-block text-pink-200" data-clipboard-text="text-pink-200">text-pink-200</div>
                        <div class="p-3 color-block text-pink-300" data-clipboard-text="text-pink-300">text-pink-300</div>
                        <div class="p-3 color-block text-pink-400" data-clipboard-text="text-pink-400">text-pink-400</div>
                        <div class="p-3 color-block text-pink-500" data-clipboard-text="text-pink-500">text-pink-500</div>
                        <div class="p-3 color-block text-pink-600" data-clipboard-text="text-pink-600">text-pink-600</div>
                        <div class="p-3 color-block text-pink-700" data-clipboard-text="text-pink-700">text-pink-700</div>
                        <div class="p-3 color-block text-pink-800" data-clipboard-text="text-pink-800">text-pink-800</div>
                        <div class="p-3 color-block text-pink-900" data-clipboard-text="text-pink-900">text-pink-900</div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block text-red-100" data-clipboard-text="text-red-100">text-red-100</div>
                        <div class="p-3 color-block text-red-200" data-clipboard-text="text-red-200">text-red-200</div>
                        <div class="p-3 color-block text-red-300" data-clipboard-text="text-red-300">text-red-300</div>
                        <div class="p-3 color-block text-red-400" data-clipboard-text="text-red-400">text-red-400</div>
                        <div class="p-3 color-block text-red-500" data-clipboard-text="text-red-500">text-red-500</div>
                        <div class="p-3 color-block text-red-600" data-clipboard-text="text-red-600">text-red-600</div>
                        <div class="p-3 color-block text-red-700" data-clipboard-text="text-red-700">text-red-700</div>
                        <div class="p-3 color-block text-red-800" data-clipboard-text="text-red-800">text-red-800</div>
                        <div class="p-3 color-block text-red-900" data-clipboard-text="text-red-900">text-red-900</div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block text-orange-100" data-clipboard-text="text-orange-100">text-orange-100 </div>
                        <div class="p-3 color-block text-orange-200" data-clipboard-text="text-orange-200">text-orange-200 </div>
                        <div class="p-3 color-block text-orange-300" data-clipboard-text="text-orange-300">text-orange-300 </div>
                        <div class="p-3 color-block text-orange-400" data-clipboard-text="text-orange-400">text-orange-400 </div>
                        <div class="p-3 color-block text-orange-500" data-clipboard-text="text-orange-500">text-orange-500 </div>
                        <div class="p-3 color-block text-orange-600" data-clipboard-text="text-orange-600">text-orange-600 </div>
                        <div class="p-3 color-block text-orange-700" data-clipboard-text="text-orange-700">text-orange-700 </div>
                        <div class="p-3 color-block text-orange-800" data-clipboard-text="text-orange-800">text-orange-800 </div>
                        <div class="p-3 color-block text-orange-900" data-clipboard-text="text-orange-900">text-orange-900 </div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block text-yellow-100" data-clipboard-text="text-yellow-100">text-yellow-100 </div>
                        <div class="p-3 color-block text-yellow-200" data-clipboard-text="text-yellow-200">text-yellow-200 </div>
                        <div class="p-3 color-block text-yellow-300" data-clipboard-text="text-yellow-300">text-yellow-300 </div>
                        <div class="p-3 color-block text-yellow-400" data-clipboard-text="text-yellow-400">text-yellow-400 </div>
                        <div class="p-3 color-block text-yellow-500" data-clipboard-text="text-yellow-500">text-yellow-500 </div>
                        <div class="p-3 color-block text-yellow-600" data-clipboard-text="text-yellow-600">text-yellow-600 </div>
                        <div class="p-3 color-block text-yellow-700" data-clipboard-text="text-yellow-700">text-yellow-700 </div>
                        <div class="p-3 color-block text-yellow-800" data-clipboard-text="text-yellow-800">text-yellow-800 </div>
                        <div class="p-3 color-block text-yellow-900" data-clipboard-text="text-yellow-900">text-yellow-900 </div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block text-green-100" data-clipboard-text="text-green-100">text-green-100 </div>
                        <div class="p-3 color-block text-green-200" data-clipboard-text="text-green-200">text-green-200 </div>
                        <div class="p-3 color-block text-green-300" data-clipboard-text="text-green-300">text-green-300 </div>
                        <div class="p-3 color-block text-green-400" data-clipboard-text="text-green-400">text-green-400 </div>
                        <div class="p-3 color-block text-green-500" data-clipboard-text="text-green-500">text-green-500 </div>
                        <div class="p-3 color-block text-green-600" data-clipboard-text="text-green-600">text-green-600 </div>
                        <div class="p-3 color-block text-green-700" data-clipboard-text="text-green-700">text-green-700 </div>
                        <div class="p-3 color-block text-green-800" data-clipboard-text="text-green-800">text-green-800 </div>
                        <div class="p-3 color-block text-green-900" data-clipboard-text="text-green-900">text-green-900 </div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block text-teal-100" data-clipboard-text="text-teal-100">text-teal-100</div>
                        <div class="p-3 color-block text-teal-200" data-clipboard-text="text-teal-200">text-teal-200</div>
                        <div class="p-3 color-block text-teal-300" data-clipboard-text="text-teal-300">text-teal-300</div>
                        <div class="p-3 color-block text-teal-400" data-clipboard-text="text-teal-400">text-teal-400</div>
                        <div class="p-3 color-block text-teal-500" data-clipboard-text="text-teal-500">text-teal-500</div>
                        <div class="p-3 color-block text-teal-600" data-clipboard-text="text-teal-600">text-teal-600</div>
                        <div class="p-3 color-block text-teal-700" data-clipboard-text="text-teal-700">text-teal-700</div>
                        <div class="p-3 color-block text-teal-800" data-clipboard-text="text-teal-800">text-teal-800</div>
                        <div class="p-3 color-block text-teal-900" data-clipboard-text="text-teal-900">text-teal-900</div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block text-cyan-100" data-clipboard-text="text-cyan-100">text-cyan-100</div>
                        <div class="p-3 color-block text-cyan-200" data-clipboard-text="text-cyan-200">text-cyan-200</div>
                        <div class="p-3 color-block text-cyan-300" data-clipboard-text="text-cyan-300">text-cyan-300</div>
                        <div class="p-3 color-block text-cyan-400" data-clipboard-text="text-cyan-400">text-cyan-400</div>
                        <div class="p-3 color-block text-cyan-500" data-clipboard-text="text-cyan-500">text-cyan-500</div>
                        <div class="p-3 color-block text-cyan-600" data-clipboard-text="text-cyan-600">text-cyan-600</div>
                        <div class="p-3 color-block text-cyan-700" data-clipboard-text="text-cyan-700">text-cyan-700</div>
                        <div class="p-3 color-block text-cyan-800" data-clipboard-text="text-cyan-800">text-cyan-800</div>
                        <div class="p-3 color-block text-cyan-900" data-clipboard-text="text-cyan-900">text-cyan-900</div>
                      </div>
                      <div class="col-md-4">
                        <div class="p-3 color-block text-gray-100" data-clipboard-text="text-gray-100">text-gray-100</div>
                        <div class="p-3 color-block text-gray-200" data-clipboard-text="text-gray-200">text-gray-200</div>
                        <div class="p-3 color-block text-gray-300" data-clipboard-text="text-gray-300">text-gray-300</div>
                        <div class="p-3 color-block text-gray-400" data-clipboard-text="text-gray-400">text-gray-400</div>
                        <div class="p-3 color-block text-gray-500" data-clipboard-text="text-gray-500">text-gray-500</div>
                        <div class="p-3 color-block text-gray-600" data-clipboard-text="text-gray-600">text-gray-600</div>
                        <div class="p-3 color-block text-gray-700" data-clipboard-text="text-gray-700">text-gray-700</div>
                        <div class="p-3 color-block text-gray-800" data-clipboard-text="text-gray-800">text-gray-800</div>
                        <div class="p-3 color-block text-gray-900" data-clipboard-text="text-gray-900">text-gray-900</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- [ link-button ] end -->
            </div>
            <!-- [ Main Content ] end -->
          </div>
        </div>
      </div>
    </section>
    <!-- [ Main Content ] end -->
    <?= $this->element('footer-js') ?> <?= $this->element('layout-component-footer-js') ?>
    <?= $this->element('customizer') ?>
    <script src="js/plugins/clipboard.min.js"></script>
    <script>
      window.addEventListener('load', (event) => {
        var i_copy = new ClipboardJS('.color-block');
        i_copy.on('success', function (e) {
          var targetElement = e.trigger;
          let icon_badge = document.createElement('span');
          icon_badge.setAttribute('class', 'ic-badge badge bg-success float-end');
          icon_badge.innerHTML = 'copied';
          targetElement.append(icon_badge);
          setTimeout(function () {
            targetElement.children[0].remove();
          }, 3000);
        });

        i_copy.on('error', function (e) {
          var targetElement = e.trigger;
          let icon_badge = document.createElement('span');
          icon_badge.setAttribute('class', 'ic-badge badge bg-danger float-end');
          icon_badge.innerHTML = 'Error';
          targetElement.append(icon_badge);
          setTimeout(function () {
            targetElement.children[0].remove();
          }, 3000);
        });
      });
    </script>
  </body>
</html>
