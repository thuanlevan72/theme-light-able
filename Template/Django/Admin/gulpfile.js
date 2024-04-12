
var gulp = require("gulp");
var sass = require('gulp-sass')(require('sass'));
var del = require('del');
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var cssmin = require("gulp-cssmin");
var merge = require("merge-stream");
var babel = require("gulp-babel");
var npmlodash = require("lodash");
var smushit = require("gulp-smushit");
var autoprefixer = require("gulp-autoprefixer");
var cssbeautify = require("gulp-cssbeautify");
var fileinclude = require("gulp-file-include");
var browsersync = require("browser-sync");
var htmlmin = require("gulp-htmlmin");
const { parallel } = require('gulp');

// =======================================================
// -----------   Light Able Theme Configuration  -----------
// =======================================================

const caption_show = 'true'; // [ false , true ]
const dark_navbar = 'false'; // [ false , true ]
const preset_theme = 'preset-1'; // [ preset-1 to preset-10 ]
const dark_layout = 'false'; // [ false , true , default ]
const rtl_layout = 'false'; // [ false , true ]
const box_container = 'false'; // [ false , true ]
const version = 'v1.0';

// =======================================================

//  [ scss compiler ] start
gulp.task("sass", function () {
  // main style css
  return gulp
    .src("src/assets/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("public/assets/css"));
});
//  [ scss compiler ] end

//  [ Copy assets ] start
gulp.task("build", function () {
  var required_libs = {
    js: [
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/@popperjs/core/dist/umd/popper.min.js",
      "node_modules/simplebar/dist/simplebar.min.js",
      "node_modules/feather-icons/dist/feather.min.js",
      "node_modules/clipboard/dist/clipboard.min.js",
      "node_modules/apexcharts/dist/apexcharts.min.js",
      "node_modules/prismjs/prism.js",
      "node_modules/sweetalert2/dist/sweetalert2.all.min.js",
      "node_modules/vanillajs-datepicker/dist/js/datepicker-full.min.js",
      "node_modules/notifier-js/dist/js/notifier.js",
      "node_modules/bootstrap-slider/dist/bootstrap-slider.min.js",
      "node_modules/tiny-slider/dist/min/tiny-slider.js",
      "node_modules/intro.js/minified/intro.min.js",
      "node_modules/vanillatree/vanillatree.min.js",
      "node_modules/flatpickr/dist/flatpickr.min.js",
      "node_modules/choices.js/public/assets/scripts/choices.min.js",
      "node_modules/imask/dist/imask.min.js",
      "node_modules/nouislider/dist/nouislider.min.js",
      "node_modules/wnumb/wNumb.min.js",
      "node_modules/bootstrap-switch-button/dist/bootstrap-switch-button.min.js",
      "node_modules/type-ahead/src/type-ahead.min.js",
      "node_modules/simplemde/dist/simplemde.min.js",
      "node_modules/quill/dist/quill.min.js",
      "node_modules/dropzone/dist/min/dropzone-amd-module.min.js",
      "node_modules/uppy/dist/uppy.min.js",
      "node_modules/formbouncerjs/dist/bouncer.min.js",
      "node_modules/croppr/dist/croppr.min.js",
      "node_modules/simple-datatables/dist/umd/simple-datatables.js",
      "node_modules/simple-datatables/dist/module.js",
      "node_modules/datatables.net/js/dataTables.min.js",
      "node_modules/datatables.net-bs5/js/dataTables.bootstrap5.min.js",
      "node_modules/datatables.net-select/js/dataTables.select.min.js",
      "node_modules/datatables.net-autofill-bs5/js/autoFill.bootstrap5.min.js",
      "node_modules/datatables.net-keytable-bs5/js/keyTable.bootstrap5.min.js",
      "node_modules/datatables.net-scroller-bs5/js/scroller.bootstrap5.min.js",
      "node_modules/datatables.net-responsive/js/dataTables.responsive.min.js",
      "node_modules/datatables.net-responsive-bs5/js/responsive.bootstrap5.min.js",
      "node_modules/datatables.net-keytable/js/dataTables.keyTable.min.js",
      "node_modules/datatables.net-colreorder/js/dataTables.colReorder.min.js",
      "node_modules/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js",
      "node_modules/datatables.net-fixedcolumns/js/dataTables.fixedColumns.min.js",
      "node_modules/datatables.net-autofill/js/dataTables.autoFill.min.js",
      "node_modules/datatables.net-buttons-bs5/js/buttons.bootstrap5.min.js",
      "node_modules/datatables.net-buttons/js/dataTables.buttons.min.js",
      "node_modules/datatables.net-buttons/js/buttons.colVis.min.js",
      "node_modules/datatables.net-buttons/js/buttons.print.min.js",
      "node_modules/datatables.net-buttons/js/buttons.html5.min.js",
      "node_modules/datatables.net-rowreorder/js/dataTables.rowReorder.min.js",
      "node_modules/pdfmake/build/pdfmake.min.js",
      "node_modules/jszip/dist/jszip.min.js",
      "node_modules/pdfmake/build/vfs_fonts.js",
      "node_modules/dragula/dist/dragula.min.js",
      "node_modules/fullcalendar/index.global.min.js",
      "node_modules/wow.js/dist/wow.min.js",
      "node_modules/isotope-layout/dist/isotope.pkgd.min.js",
      "node_modules/fslightbox/index.js",
      "node_modules/jsvectormap/dist/js/jsvectormap.min.js",
      "node_modules/jsvectormap/dist/maps/world.js",
      "node_modules/jsvectormap/dist/maps/world-merc.js",
      "node_modules/swiper/swiper-bundle.js",
      "node_modules/star-rating.js/dist/star-rating.min.js",
      "node_modules/vanilla-wizard/dist/js/wizard.min.js",
      "node_modules/peity-vanilla/dist/peity-vanilla.min.js",
    ],
    css: [
      "node_modules/bootstrap/dist/css/bootstrap.min.css",
      "node_modules/animate.css/animate.min.css",
      "node_modules/prismjs/themes/prism-coy.css",
      "node_modules/vanillajs-datepicker/dist/css/datepicker-bs5.min.css",
      "node_modules/notifier-js/dist/css/notifier.css",
      "node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css",
      "node_modules/tiny-slider/dist/tiny-slider.css",
      "node_modules/intro.js/minified/introjs.min.css",
      "node_modules/vanillatree/vanillatree.css",
      "node_modules/flatpickr/dist/flatpickr.min.css",
      "node_modules/nouislider/dist/nouislider.min.css",
      "node_modules/bootstrap-switch-button/css/bootstrap-switch-button.min.css",
      "node_modules/simplemde/dist/simplemde.min.css",
      "node_modules/quill/dist/quill.core.css",
      "node_modules/quill/dist/quill.snow.css",
      "node_modules/quill/dist/quill.bubble.css",
      "node_modules/dropzone/dist/min/dropzone.min.css",
      "node_modules/uppy/dist/uppy.min.css",
      "node_modules/croppr/dist/croppr.min.css",
      "node_modules/datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css",
      "node_modules/datatables.net-fixedcolumns-bs5/css/fixedColumns.bootstrap5.min.css",
      "node_modules/datatables.net-colreorder-bs5/css/colReorder.bootstrap5.min.css",
      "node_modules/datatables.net-fixedheader-bs5/css/fixedHeader.bootstrap5.min.css",
      "node_modules/datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css",
      "node_modules/datatables.net-scroller-bs5/css/scroller.bootstrap5.min.css",
      "node_modules/datatables.net-keytable-bs5/css/keyTable.bootstrap5.min.css",
      "node_modules/datatables.net-autofill-bs5/css/autoFill.bootstrap5.min.css",
      "node_modules/datatables.net-select-bs5/css/select.bootstrap5.min.css",
      "node_modules/datatables.net-bs5/css/dataTables.bootstrap5.min.css",
      "node_modules/datatables.net-rowreorder-bs5/css/rowReorder.bootstrap5.min.css",
      "node_modules/dragula/dist/dragula.min.css",
      "node_modules/simple-datatables/dist/style.css",
      "node_modules/jsvectormap/dist/css/jsvectormap.min.css",
      "node_modules/swiper/swiper-bundle.css",
      "node_modules/star-rating.js/dist/star-rating.min.css",
    ],
  };
  npmlodash(required_libs).forEach(function (assets, type) {
    if (type == "css") {
      gulp.src(assets).pipe(gulp.dest("public/assets/css/plugins"));
    } else {
      gulp.src(assets).pipe(gulp.dest("public/assets/js/plugins"));
    }
  });
  var required_libs = {
    classic: [
      "node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js",
    ],
    inline: [
      "node_modules/@ckeditor/ckeditor5-build-inline/build/ckeditor.js",
    ],
    balloon: [
      "node_modules/@ckeditor/ckeditor5-build-balloon/build/ckeditor.js",
    ],
    document: [
      "node_modules/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js",
    ],
  };
  npmlodash(required_libs).forEach(function (assets, type) {
    if (type == "classic") {
      gulp.src(assets).pipe(gulp.dest("public/assets/js/plugins/ckeditor/classic"));
    }
    if (type == "inline") {
      gulp.src(assets).pipe(gulp.dest("public/assets/js/plugins/ckeditor/inline"));
    }
    if (type == "balloon") {
      gulp.src(assets).pipe(gulp.dest("public/assets/js/plugins/ckeditor/balloon"));
    }
    if (type == "document") {
      gulp.src(assets).pipe(gulp.dest("public/assets/js/plugins/ckeditor/document"));
    }
  });

  var cpyassets = gulp
    .src(["src/assets/**/*.*", "!src/assets/scss/**/*.*"])
    .pipe(gulp.dest("public/assets"));

  var cpytinymceassets = gulp
    .src(["node_modules/tinymce/**/*.*"])
    .pipe(gulp.dest("public/assets/js/plugins/tinymce"));

  var cpytrumbowygassets = gulp
    .src(["node_modules/trumbowyg/dist/**/*.*"])
    .pipe(gulp.dest("public/assets/js/plugins/trumbowyg"));

  return merge(cpyassets, cpytinymceassets, cpytrumbowygassets);
});

//  [ Copy assets ] end


//  [ build js ] start
gulp.task("build-js", function () {
  var layoutjs = gulp
    .src("src/assets/js/*.js")
    .pipe(gulp.dest("public/assets/js"));

  var pagesjs = gulp
    .src("src/assets/js/pages/*.js")
    .pipe(gulp.dest("public/assets/js/pages"));

  return merge(layoutjs, pagesjs);
});
//  [ build js ] end

//  [ scss compiler ] start
gulp.task("mincss", function () {
  // main style css
  return gulp
    .src("src/assets/scss/*.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssbeautify())
    .pipe(cssmin())
    .pipe(gulp.dest("public/assets/css"));
});
//  [ scss compiler ] end

//  [ uglify js ] start
gulp.task("uglify", function () {
  var layoutjs = gulp
    .src("src/assets/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("public/assets/js"));

  var pagesjs = gulp
    .src("src/assets/js/pages/*.js")
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest("public/assets/js/pages"));

  return merge(layoutjs, pagesjs);
});
//  [ uglify js ] end

//  [ image optimizer ] start
gulp.task("imgmin", function () {
  return gulp
    .src("src/assets/img/**/*.{jpg,png}")
    .pipe(smushit())
    .pipe(gulp.dest("public/assets/img"));
});
//  [ image optimizer ] end

//  [ browser reload ] start
gulp.task("browserSync", function () {
  browsersync.init({
    server: {
      baseDir: ['./public', './src'],
    }
  });
});
//  [ browser reload ] end

gulp.task("cleandist", function (callback) {
  del.sync(["dist/*/"]);
  callback();
});

//  [ watch ] start
gulp.task("watch", function () {
  gulp
    .watch("src/assets/scss/**/*.scss", gulp.series("sass"))
    .on("change", browsersync.reload);
  gulp
    .watch("src/assets/js/**/*.js", gulp.series("build-js"))
    .on("change", browsersync.reload);
});

//  [ watch ] start


//  [ watch minify ] start
gulp.task("watch-minify", function () {
  gulp.watch("src/assets/scss/**/*.scss", gulp.series("mincss"));
  gulp.watch("src/assets/js/**/*.js", gulp.series("uglify"));
});
//  [ watch minify ] start

// const compile = gulp.parallel("browserSync", "watch");

//  [ Default task ] start
gulp.task(
  "default",
  gulp.series("cleandist", "build", "sass", "build-js", "imgmin")
);
//  [ Default task ] end

// build in production mode
gulp.task(
  "build-prod",
  gulp.series("cleandist", "build", "sass", "build-js", "imgmin")
);
