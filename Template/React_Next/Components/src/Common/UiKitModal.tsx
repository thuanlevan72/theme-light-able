import React, { useEffect } from 'react';
import hljs from 'highlight.js'; // Make sure to import hljs properly
import ClipboardJS from 'clipboard';

interface UiKitModelProps {
    // Define any props you might need here
}

const UiKitModel: React.FC<UiKitModelProps> = (props) => {
    useEffect(() => {
        const hasClass = (el: HTMLElement, cls: string) => {
            return el.className.split(' ').indexOf(cls) !== -1;
        };

        const pcodbnd = (source: string, blacklist: string[] | null) => {
            source = source
                .replace(/\r/g, '')
                .replace(/\t/g, '  ')
                .replace(/^ *\n+/, '\n')
                .replace(/[\s\n]+$/, '');

            const match = source.match(/^\n( *)/);
            if (match) {
                source = source.replace(new RegExp('\\n' + match[1], 'g'), '\n');
            }

            if (blacklist) {
                source = source.replace(/class="([^"]+)"/g, (m, clsStr) => {
                    var clsArr = clsStr
                        .replace(/^\s+|\s+$/, '')
                        .replace(/\s+/g, ' ')
                        .split(' ');

                    for (var i = 0, l = blacklist.length, clsInd; i < l; i++) {
                        if ((clsInd = clsArr.indexOf(blacklist[i])) !== -1) {
                            clsArr.splice(clsInd, 1);
                        }
                    }

                    return 'class="' + clsArr.join(' ') + '"';
                });
            }

            return source
                .replace(/\s+class=""/gi, '')
                .replace(/([a-z]+)=""/gi, '$1')
                .replace(/javascript:void\(0\)/g, '#')
                .replace(/^\n/, '');
        };

        const pcclp = (el: HTMLElement, src: string) => {
            return new ClipboardJS(el, {
                text: () => {
                    return src;
                },
            });
        };

        const pcopnmdl = (src: string, formattedSrc: string, parentEl: HTMLElement) => {
            document.querySelector('.pc-modal-content')!.innerHTML = '<pre><code class="hljs html xml">' + formattedSrc + '</code></pre';

            const btn_copy : any = document.querySelector('.md-pc-modal-copy');
            const closeBtn = document.querySelector('.pc-modal-close');

            let btn_copyTimeout: NodeJS.Timeout | null = null;
            const ClipboardJS = pcclp(btn_copy, src);

            ClipboardJS!.on('success', (e : any) => {
                if (btn_copyTimeout) {
                    clearTimeout(btn_copyTimeout);
                    btn_copyTimeout = null;
                }

                btn_copy!.className = btn_copy!.className.replace(' copied', '');
                btn_copy!.className += ' copied';

                btn_copyTimeout = setTimeout(() => {
                    btn_copy!.className = btn_copy!.className.replace(' copied', '');
                }, 1000);
            });

            const closeListener = () => {
                document.querySelector('.pc-modal-content')!.innerHTML = '';
                document.querySelector('.pc-modal')!.scrollTop = 0;
                closeBtn!.removeEventListener('click', closeListener);
                ClipboardJS!.destroy();
                document.documentElement.className = document.documentElement.className.replace(' pc-modal-opened', '');
            };

            closeBtn!.addEventListener('click', closeListener);
            document.documentElement.className += ' pc-modal-opened';
        };

        const parentEls = document.querySelectorAll('.pc-component');
        parentEls.forEach((parentEl) => {
            const btnsWrapper = document.createElement('div');
            btnsWrapper.className = 'pc-btns';

            const btn_copy = document.createElement('a');
            btn_copy.href = 'javascript:void(0)';
            btn_copy.className = 'md-pc-modal-copy copy';
            btn_copy.innerHTML = '<i class="ph-duotone ph-copy"></i>';

            const btn_md_collapse : any = document.createElement('a');
            btn_md_collapse.href = 'javascript:void(0)';
            btn_md_collapse.className = 'pc-collapse';
            btn_md_collapse.innerHTML = '<i class="ph-duotone ph-code"></i>';

            const blacklistStr = parentEl.getAttribute('data-blacklist') || null;
            const blacklist = (blacklistStr && blacklistStr.split(',')) || null;
            const src = pcodbnd(parentEl.innerHTML, blacklist);
            const formattedSrc = hljs.highlight('html', src).value;

            const btn_copyTimeout: NodeJS.Timeout | null = null;

            const codes : any = document.createElement('div');
            codes.className = 'pc-modal-content';
            codes.innerHTML = '<pre><code class="hljs html xml">' + formattedSrc + '</code></pre>';
            codes.appendChild(btn_copy);
            codes.appendChild(btn_md_collapse);
            parentEl.appendChild(codes);
            codes.childNodes[0].style.display = 'none';

            btn_md_collapse.addEventListener('click', () => {
                if (btn_md_collapse.parentElement.childNodes[0].style.display == 'none')
                    btn_md_collapse.parentElement.childNodes[0].style.display = 'block';
                else btn_md_collapse.parentElement.childNodes[0].style.display = 'none';
            });
        });
    }, []);

    return (
        <div>
            {/* Your UI Kit model component JSX here */}
        </div>
    );
};

export default UiKitModel;
