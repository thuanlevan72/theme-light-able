<!DOCTYPE html>
<html lang="en">
<!-- [Head] start -->

<head>
    <?= $this->element('head-page-meta', array('title' => 'Sample Page')); ?>
    <?= $this->element('head-css') ?>
</head>
<!-- [Head] end -->
<!-- [Body] Start -->

<?= $this->element('body') ?>
    <?= $this->element('layout-vertical') ?>

  <!-- [ Main Content ] start -->
  <div class="pc-container">
    <div class="pc-content">
      <?= $this->element('breadcrumb', array('breadcrumbitem' => 'Maps', 'breadcrumbitemactive' =>'Gmap')); ?>

      <!-- [ Main Content ] start -->
      <div class="row">
        <!-- [ sample-page ] start -->
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5>Gmap</h5>
              <!-- <span>old Plugins link : <a href="https://hpneo.dev/gmaps/" target="_blank">https://hpneo.dev/gmaps/</a></span>               -->
            </div>
            <div class="card-body">
              <div id="map" style="height: 260px;"></div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen
                referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=
    &q=Space+Needle,Seattle+WA">
              </iframe>
            </div>
          </div>
        </div>
        <!-- [ sample-page ] end -->
      </div>
      <!-- [ Main Content ] end -->
    </div>
  </div>
  <!-- [ Main Content ] end -->
  <?= $this->element('footer-block') ?> <?= $this->element('footer-js') ?>

  <script>(g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })
      ({ key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", v: "weekly" });</script>

  <!-- <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script> -->
  <!-- <script>(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))}) ({key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", v: "weekly"});</script> -->

  <!-- <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
      defer
    ></script> -->

  <script>
    let map;

    async function initMap() {
      const { Map } = await google.maps.importLibrary("maps");

      map = new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }

    initMap();
  </script>
  <?= $this->element('customizer') ?>
</body>
<!-- [Body] end -->

</html>