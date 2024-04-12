<!DOCTYPE html>
<html lang="en">
  <!-- [Head] start -->
  <head>
    <?= $this->element('head-page-meta', array('title' => 'Feather Icon Pack')); ?> <?= $this->element('head-css') ?> 
  </head>
  <!-- [Head] end -->
  <!-- [Body] Start -->
  <?= $this->element('body') ?>
    <?= $this->element('layout-vertical') ?>

    <!-- [ Main Content ] start -->
    <div class="pc-container">
      <div class="pc-content">
        <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Icons', 'breadcrumbitemactive' =>'Feather Icon')); ?>

        <!-- [ Main Content ] start -->
        <div class="row">
          <!-- [ feather-icon ] start -->
          <div class="col-sm-12">
            <div class="card">
              <div class="card-header">
                <h5>Feather Icon</h5>
                <p>Use svg icon with <code>&lt;i data-feather="&lt;&lt; Copied code &gt;&gt;"&gt;</code> in you html code</p>
              </div>
              <div class="card-body text-center">
                <div class="row justify-content-center">
                  <div class="col-sm-6">
                    <input type="text" id="icon-search" class="form-control mb-4" placeholder="search . . " >
                  </div>
                </div>
                <div class="i-main" id="icon-wrapper"></div>
              </div>
            </div>
          </div>
          <!-- [ feather-icon ] end -->
        </div>
        <!-- [ Main Content ] end -->
      </div>
    </div>
    <!-- [ Main Content ] end -->
    <?= $this->element('footer-block') ?> <?= $this->element('footer-js') ?> <?= $this->element('customizer') ?>

    <!-- [Page Specific JS] start -->
    <script src="js/plugins/clipboard.min.js"></script>
    <script>
      var icon_list = [
        'alert-octagon',
        'alert-circle',
        'activity',
        'alert-triangle',
        'align-center',
        'airplay',
        'align-justify',
        'align-left',
        'align-right',
        'arrow-down-left',
        'arrow-down-right',
        'anchor',
        'aperture',
        'arrow-left',
        'arrow-right',
        'arrow-down',
        'arrow-up-left',
        'arrow-up-right',
        'arrow-up',
        'award',
        'bar-chart',
        'at-sign',
        'bar-chart-2',
        'battery-charging',
        'bell-off',
        'battery',
        'bluetooth',
        'bell',
        'book',
        'briefcase',
        'camera-off',
        'calendar',
        'bookmark',
        'box',
        'camera',
        'check-circle',
        'check',
        'check-square',
        'cast',
        'chevron-down',
        'chevron-left',
        'chevron-right',
        'chevron-up',
        'chevrons-down',
        'chevrons-right',
        'chevrons-up',
        'chevrons-left',
        'circle',
        'clipboard',
        'chrome',
        'clock',
        'cloud-lightning',
        'cloud-drizzle',
        'cloud-rain',
        'cloud-off',
        'codepen',
        'cloud-snow',
        'compass',
        'copy',
        'corner-down-right',
        'corner-down-left',
        'corner-left-down',
        'corner-left-up',
        'corner-up-left',
        'corner-up-right',
        'corner-right-down',
        'corner-right-up',
        'cpu',
        'credit-card',
        'crosshair',
        'disc',
        'delete',
        'download-cloud',
        'download',
        'droplet',
        'edit-2',
        'edit',
        'external-link',
        'eye',
        'feather',
        'facebook',
        'file-minus',
        'eye-off',
        'fast-forward',
        'file-text',
        'film',
        'file',
        'file-plus',
        'folder',
        'filter',
        'flag',
        'globe',
        'grid',
        'heart',
        'home',
        'github',
        'image',
        'inbox',
        'layers',
        'info',
        'instagram',
        'layout',
        'link-2',
        'life-buoy',
        'link',
        'log-in',
        'list',
        'lock',
        'log-out',
        'loader',
        'mail',
        'maximize-2',
        'map',
        'map-pin',
        'menu',
        'message-circle',
        'message-square',
        'minimize-2',
        'mic-off',
        'minus-circle',
        'mic',
        'minus-square',
        'minus',
        'moon',
        'monitor',
        'more-vertical',
        'more-horizontal',
        'move',
        'music',
        'navigation-2',
        'navigation',
        'octagon',
        'package',
        'pause-circle',
        'pause',
        'percent',
        'phone-call',
        'phone-forwarded',
        'phone-missed',
        'phone-off',
        'phone-incoming',
        'phone',
        'phone-outgoing',
        'pie-chart',
        'play-circle',
        'play',
        'plus-square',
        'plus-circle',
        'plus',
        'pocket',
        'printer',
        'power',
        'radio',
        'repeat',
        'refresh-ccw',
        'rewind',
        'rotate-ccw',
        'refresh-cw',
        'rotate-cw',
        'save',
        'search',
        'server',
        'scissors',
        'share-2',
        'share',
        'shield',
        'settings',
        'skip-back',
        'shuffle',
        'sidebar',
        'skip-forward',
        'slack',
        'slash',
        'smartphone',
        'square',
        'speaker',
        'star',
        'stop-circle',
        'sun',
        'sunrise',
        'tablet',
        'tag',
        'sunset',
        'target',
        'thermometer',
        'thumbs-up',
        'thumbs-down',
        'toggle-left',
        'toggle-right',
        'trash-2',
        'trash',
        'trending-up',
        'trending-down',
        'triangle',
        'type',
        'twitter',
        'upload',
        'umbrella',
        'upload-cloud',
        'unlock',
        'user-check',
        'user-minus',
        'user-plus',
        'user-x',
        'user',
        'users',
        'video-off',
        'video',
        'voicemail',
        'volume-x',
        'volume-2',
        'volume-1',
        'volume',
        'watch',
        'wifi',
        'x-square',
        'wind',
        'x',
        'x-circle',
        'zap',
        'zoom-in',
        'zoom-out',
        'command',
        'cloud',
        'hash',
        'headphones',
        'underline',
        'italic',
        'bold',
        'crop',
        'help-circle',
        'paperclip',
        'shopping-cart',
        'tv',
        'wifi-off',
        'minimize',
        'maximize',
        'gitlab',
        'sliders'
      ];
      for (var i = 0, l = icon_list.length; i < l; i++) {
        let icon_block = document.createElement('div');
        icon_block.setAttribute('class', 'i-block');
        icon_block.setAttribute('data-clipboard-text', icon_list[i]);
        icon_block.setAttribute('data-bs-toggle', 'tooltip');
        icon_block.setAttribute('data-filter', icon_list[i]);
        icon_block.setAttribute('title', icon_list[i]);

        let icon_main = document.createElement('i');
        icon_main.setAttribute('data-feather', icon_list[i]);
        icon_block.appendChild(icon_main);
        document.querySelector('#icon-wrapper').append(icon_block);
      }
      feather.replace();
      window.addEventListener('load', (event) => {
        var i_copy = new ClipboardJS('.i-block');
        i_copy.on('success', function (e) {
          var targetElement = e.trigger;
          let icon_badge = document.createElement('span');
          icon_badge.setAttribute('class', 'ic-badge badge bg-success');
          icon_badge.innerHTML = 'copied';
          targetElement.append(icon_badge);
          setTimeout(function () {
            targetElement.children[1].remove();
          }, 3000);
        });

        i_copy.on('error', function (e) {
          var targetElement = e.trigger;
          let icon_badge = document.createElement('span');
          icon_badge.setAttribute('class', 'ic-badge badge bg-danger');
          icon_badge.innerHTML = 'Error';
          targetElement.append(icon_badge);
          setTimeout(function () {
            targetElement.children[1].remove();
          }, 3000);
        });
        document.querySelector('#icon-search').addEventListener('keyup', function () {
          var g = document.querySelector('#icon-search').value.toLowerCase();
          var tc = document.querySelectorAll('.i-main .i-block');
          for (var i = 0; i < tc.length; i++) {
            var c = tc[i];
            var t = c.getAttribute('data-filter');
            if (t) {
              var s = t.toLowerCase();
            }
            if (s) {
              var n = s.indexOf(g);
              if (n !== -1) {
                c.style.display = 'inline-flex';
              } else {
                c.style.display = 'none';
              }
            }
          }
        });
      });
    </script>
    <!-- [Page Specific JS] end -->
  </body>
  <!-- [Body] end -->
</html>
