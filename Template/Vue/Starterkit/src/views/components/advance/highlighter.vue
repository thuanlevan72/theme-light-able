<script>
import Layout from "@/layout/c-main.vue"
import * as Prism from 'prismjs';

import 'prismjs'

export default {
    mounted() {
        Prism.highlightAll();
    },
    components: {
        Layout
    }
}
</script>

<template>
    <Layout>
        <BRow>
            <BCol md="10" xxl="9" class="mb-4">
                <h2>Syntax Highlighter</h2>
                <p class="text-muted">Prism is a lightweight, extensible syntax highlighter, built with modern web standards
                    in mind. It’s used in millions of websites, including some of those you visit daily.</p>
                <div>
                    <a class="btn btn-sm btn-light-dark rounded-pill px-2" role="button" target="_blank"
                        href="https://prismjs.com/">
                        <i class="ti ti-external-link me-1"></i>
                        Reference
                    </a>
                </div>
            </BCol>
        </BRow>

        <BRow>
            <BCol sm="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Basic Usage</h5>
                    </BCardHeader>
                    <BCardBody>
                        <p>The recommended way to mark up a code block (both for semantics and for Prism) is a
                            <code>&lt;pre&gt;</code> element with
                            a element <code>&lt;code&gt;</code> inside, like so:
                        </p>
                        <h6 class="m-t-20 f-w-600">Code:</h6>
                        <pre>
                                            <code class="language-markup">
&lt;pre&gt;
    &lt;code class="language-css"&gt;
        p {
            color: #1abc9c
        }
    &lt;/code&gt;
&lt;/pre&gt;
                                            </code>
                                        </pre>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>HTML Markup</h5>
                    </BCardHeader>
                    <BCardBody>
                        <p>Use the following code to use HTML syntax highlighter.</p>
                        <h6 class="m-t-20 f-w-600">Usage:</h6>
                        <pre>
                                                <code class="language-markup">
&lt;pre&gt;
    &lt;code class="language-markup"&gt;
        HTML CODE ...
    &lt;/code&gt;
&lt;/pre&gt;
                                                </code>
                                            </pre>
                        <h6 class="m-t-20 f-w-600">Example:</h6>
                        <pre>
                                                <code class="language-markup">
&lt;div class="card"&gt;
    &lt;div class="card-header"&gt;
        &lt;h5&gt;Hello card&lt;/h5&gt;
        &lt;span&gt; lorem ipsum dolor sit amet, consectetur adipisicing elit&lt;/span&gt;
        &lt;div class="card-header-right"&gt;
            &lt;i class="icofont icofont-rounded-down"&gt;&lt;/i&gt;
            &lt;i class="icofont icofont-refresh"&gt;&lt;/i&gt;
            &lt;i class="icofont icofont-close-circled"&gt;&lt;/i&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="card-body"&gt;
        &lt;p&gt;
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        &lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;
                                                </code>
                                            </pre>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>CSS Markup</h5>
                    </BCardHeader>
                    <BCardBody>
                        <p>Use the following code to use CSS syntax highlighter.</p>
                        <h6 class="m-t-20 f-w-600">Example:</h6>
                        <pre>
                                            <code class="language-css">
a:active{
    color:#1abc9c;
}
p{
    font-size:13px;
}
.btn-primary{
    color: #1abc9c;
    background-color: #fff;
}
.label-primary {
    background-color: #1abc9c;
}
.badge-primary {
    background-color: #1abc9c;
}
.bg-primary {
    background-color: #1abc9c !important;
    color: #fff;
}
.panel-primary {
    border-color: #1abc9c;
}
                                            </code>
                                        </pre>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Line Number</h5>
                    </BCardHeader>
                    <BCardBody>
                        <p>Line number at the beginning of code lines.</p>
                        <p>Obviously, this is supposed to work only for code blocks (<code>&lt;pre&gt;&lt;code&gt;</code>)
                            and
                            not for inline code.
                            Add class line-numbers to your desired <code>&lt;pre&gt;</code> and line-numbers plugin will
                            take
                            care.</p>
                        <p>Optional: You can specify the data-start (Number) attribute on the <code>&lt;pre&gt;</code>
                            element. It will shift the
                            line counter.</p>
                        <h6 class="m-t-20 f-w-600">Usage:</h6>
                        <pre class="line-numbers language-js">
                                            <code class=" language-js">
&lt;pre class="line-numbers"&gt;
    &lt;code class="language-css"&gt;
        p {
            color: red;
        }

    &lt;/code&gt;
&lt;/pre&gt;
                                            </code>
                                        </pre>
                        <h6 class="m-t-20 f-w-600">Example:</h6>
                        <pre class="line-numbers">
                                            <code class="language-js">
(function() {
    if (typeof self==='undefined' || !self.Prism || !self.document) {
        return;
    }
});
                                            </code>
                                        </pre>
                    </BCardBody>
                </BCard>
            </BCol>
            <BCol sm="12">
                <BCard no-body>
                    <BCardHeader>
                        <h5>Line Highlight</h5>
                    </BCardHeader>
                    <BCardBody>
                        <p>Highlights specific lines and/or line ranges.</p>
                        <p>You specify the lines to be highlighted through the data-line attribute on the
                            <code>&lt;pre&gt;</code> element, in the
                            following simple format:
                        </p>
                        <ol>
                            <li>A single number refers to the line with that number</li>
                            <li>Ranges are denoted by two numbers, separated with a hyphen (-)</li>
                            <li>Multiple line numbers or ranges are separated by commas.</li>
                            <li>Whitespace is allowed anywhere and will be stripped off.</li>
                        </ol>
                        <h6 class="m-t-20 f-w-600">Usage:</h6>
                        <pre>
                                            <code class="language-markup">
&lt;pre data-line="2,4, 8-10"&gt;
    &lt;code class="language-css"&gt;
        p {
            color: red
        }
    &lt;/code&gt;
&lt;/pre&gt;
                                            </code>
                                        </pre>
                        <h6 class="m-t-20 f-w-600">Example:</h6>
                        <pre data-line="2,4,7-9">
											<code class="language-css">
pre.line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
}

pre.line-numbers > code {
    position: relative;
}

.line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3em;
    /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;
    border-end: 1px solid #999;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
                                            </code>
                                        </pre>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>
    </Layout>
</template>