<!-- Required Js -->

<script src="/js/plugins/popper.min.js"></script>
<script src="/js/plugins/simplebar.min.js"></script>
<script src="/js/plugins/bootstrap.min.js"></script>
<script src="/js/fonts/custom-font.js"></script>
<script src="/js/pcoded.js"></script>
<script src="/js/plugins/feather.min.js"></script>
<?php if ($pc_dark_layout == 'default'): ?>
    <script>
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            var dark_layout = 'true';
        } else {
            var dark_layout = 'false';
        }
        layout_change_default();
        if (dark_layout == 'true') {
            layout_change('dark');
        } else {
            layout_change('light');
        }
    </script>
<?php endif; ?>

<?php if ($pc_dark_layout != 'default'): ?>
    <?php if ($pc_dark_layout == 'true'): ?>
        <script>layout_change('dark');</script>
    <?php endif; ?>
    <?php if ($pc_dark_layout == 'false'): ?>
        <script>layout_change('light');</script>
    <?php endif; ?>
<?php endif; ?>

<?php if ($pc_dark_navbar == 'true'): ?>
    <script>layout_sidebar_change('dark');</script>
<?php endif; ?>

<?php if ($pc_dark_navbar == 'false'): ?>
    <script>layout_sidebar_change('light');</script>
<?php endif; ?>

<?php if ($pc_box_container == 'true'): ?>
    <script>change_box_container('true');</script>
<?php endif; ?>

<?php if ($pc_box_container == 'false'): ?>
    <script>change_box_container('false');</script>
<?php endif; ?>

<?php if ($pc_caption_show == 'true'): ?>
    <script>layout_caption_change('true');</script>
<?php endif; ?>

<?php if ($pc_caption_show == 'false'): ?>
    <script>layout_caption_change('false');</script>
<?php endif; ?>

<?php if ($pc_rtl_layout == 'true'): ?>
    <script>layout_rtl_change('true');</script>
<?php endif; ?>

<?php if ($pc_rtl_layout == 'false'): ?>
    <script>layout_rtl_change('false');</script>
<?php endif; ?>

<?php if ($pc_preset_theme != ""): ?>
    <script>preset_change("<?= h($pc_preset_theme) ?>");</script>
<?php endif; ?>
