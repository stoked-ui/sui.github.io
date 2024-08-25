(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1678],{73896:function(e,n,t){"use strict";t.r(n),t.d(n,{demoComponents:function(){return i},demos:function(){return o},docs:function(){return s},srcComponents:function(){return a}});var s={en:{description:"Learn how to get support for MUI\xa0X components, including feature requests, bug fixes, and technical support from the team.",location:"/docs/data/stoked-ui/support/support.md",rendered:['<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="error-icon" viewBox="0 0 20 20">\n      <path fill-rule="evenodd" d="M2 7.4v5.2a2 2 0 0 0 .586 1.414l3.4 3.4A2 2 0 0 0 7.4 18h5.2a2 2 0 0 0 1.414-.586l3.4-3.4A2 2 0 0 0 18 12.6V7.4a2 2 0 0 0-.586-1.414l-3.4-3.4A2 2 0 0 0 12.6 2H7.4a2 2 0 0 0-1.414.586l-3.4 3.4A2 2 0 0 0 2 7.4Zm11.03-.43a.75.75 0 0 1 0 1.06L11.06 10l1.97 1.97a.75.75 0 1 1-1.06 1.06L10 11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="warning-icon" viewBox="0 0 20 20">\n      <path d="M2.33 17a.735.735 0 0 1-.665-.375.631.631 0 0 1-.094-.375.898.898 0 0 1 .115-.396L9.353 3.062a.621.621 0 0 1 .281-.27.85.85 0 0 1 .729 0 .622.622 0 0 1 .281.27l7.667 12.792c.07.125.108.257.114.396a.63.63 0 0 1-.093.375.842.842 0 0 1-.271.27.728.728 0 0 1-.394.105H2.33Zm7.664-2.5c.211 0 .39-.072.536-.214a.714.714 0 0 0 .218-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.531-.22.736.736 0 0 0-.536.215.714.714 0 0 0-.219.531c0 .212.072.39.215.536.143.146.32.219.531.219Zm0-2.5c.211 0 .39-.072.536-.216a.72.72 0 0 0 .218-.534v-2.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.531-.216.734.734 0 0 0-.536.216.72.72 0 0 0-.219.534v2.5c0 .212.072.39.215.534a.72.72 0 0 0 .531.216Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="success-icon" viewBox="0 0 20 20">\n      <path d="m8.938 10.875-1.25-1.23a.718.718 0 0 0-.521-.228.718.718 0 0 0-.521.229.73.73 0 0 0 0 1.062l1.77 1.771c.153.153.327.23.521.23a.718.718 0 0 0 .521-.23l3.896-3.896a.73.73 0 0 0 0-1.062.718.718 0 0 0-.52-.23.718.718 0 0 0-.521.23l-3.376 3.354ZM10 18a7.796 7.796 0 0 1-3.104-.625 8.065 8.065 0 0 1-2.552-1.719 8.064 8.064 0 0 1-1.719-2.552A7.797 7.797 0 0 1 2 10c0-1.111.208-2.15.625-3.115a8.064 8.064 0 0 1 4.27-4.26A7.797 7.797 0 0 1 10 2c1.111 0 2.15.208 3.115.625a8.096 8.096 0 0 1 4.26 4.26C17.792 7.851 18 8.89 18 10a7.797 7.797 0 0 1-.625 3.104 8.066 8.066 0 0 1-4.26 4.271A7.774 7.774 0 0 1 10 18Z"/>\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="info-icon" viewBox="0 0 20 20">\n      <path d="M9.996 14c.21 0 .39-.072.535-.216a.72.72 0 0 0 .219-.534v-3.5a.728.728 0 0 0-.214-.534.72.72 0 0 0-.532-.216.734.734 0 0 0-.535.216.72.72 0 0 0-.219.534v3.5c0 .213.071.39.214.534a.72.72 0 0 0 .532.216Zm0-6.5c.21 0 .39-.071.535-.214a.714.714 0 0 0 .219-.532.736.736 0 0 0-.214-.535.714.714 0 0 0-.532-.219.736.736 0 0 0-.535.214.714.714 0 0 0-.219.532c0 .21.071.39.214.535.143.146.32.219.532.219Zm.01 10.5a7.81 7.81 0 0 1-3.11-.625 8.065 8.065 0 0 1-2.552-1.719 8.066 8.066 0 0 1-1.719-2.551A7.818 7.818 0 0 1 2 9.99c0-1.104.208-2.14.625-3.105a8.066 8.066 0 0 1 4.27-4.26A7.818 7.818 0 0 1 10.009 2a7.75 7.75 0 0 1 3.106.625 8.083 8.083 0 0 1 4.26 4.265A7.77 7.77 0 0 1 18 9.994a7.81 7.81 0 0 1-.625 3.11 8.066 8.066 0 0 1-1.719 2.552 8.083 8.083 0 0 1-2.546 1.719 7.77 7.77 0 0 1-3.104.625Z"/>\n      </symbol>\n      </svg>','\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n        <symbol id="anchor-link-icon" viewBox="0 0 12 6">\n          <path d="M8.9176 0.083252H7.1676C6.84677 0.083252 6.58427 0.345752 6.58427 0.666585C6.58427 0.987419 6.84677 1.24992 7.1676 1.24992H8.9176C9.8801 1.24992 10.6676 2.03742 10.6676 2.99992C10.6676 3.96242 9.8801 4.74992 8.9176 4.74992H7.1676C6.84677 4.74992 6.58427 5.01242 6.58427 5.33325C6.58427 5.65409 6.84677 5.91659 7.1676 5.91659H8.9176C10.5276 5.91659 11.8343 4.60992 11.8343 2.99992C11.8343 1.38992 10.5276 0.083252 8.9176 0.083252ZM3.6676 2.99992C3.6676 3.32075 3.9301 3.58325 4.25094 3.58325H7.75094C8.07177 3.58325 8.33427 3.32075 8.33427 2.99992C8.33427 2.67909 8.07177 2.41659 7.75094 2.41659H4.25094C3.9301 2.41659 3.6676 2.67909 3.6676 2.99992ZM4.83427 4.74992H3.08427C2.12177 4.74992 1.33427 3.96242 1.33427 2.99992C1.33427 2.03742 2.12177 1.24992 3.08427 1.24992H4.83427C5.1551 1.24992 5.4176 0.987419 5.4176 0.666585C5.4176 0.345752 5.1551 0.083252 4.83427 0.083252H3.08427C1.47427 0.083252 0.167603 1.38992 0.167603 2.99992C0.167603 4.60992 1.47427 5.91659 3.08427 5.91659H4.83427C5.1551 5.91659 5.4176 5.65409 5.4176 5.33325C5.4176 5.01242 5.1551 4.74992 4.83427 4.74992Z" />\n        </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n      <path d="M22.8481 4C22.8481 2.9 21.9481 2 20.8481 2H4.84814C3.74814 2 2.84814 2.9 2.84814 4V16C2.84814 17.1 3.74814 18 4.84814 18H18.8481L22.8481 22V4ZM16.8481 11H13.8481V14C13.8481 14.55 13.3981 15 12.8481 15C12.2981 15 11.8481 14.55 11.8481 14V11H8.84814C8.29814 11 7.84814 10.55 7.84814 10C7.84814 9.45 8.29814 9 8.84814 9H11.8481V6C11.8481 5.45 12.2981 5 12.8481 5C13.3981 5 13.8481 5.45 13.8481 6V9H16.8481C17.3981 9 17.8481 9.45 17.8481 10C17.8481 10.55 17.3981 11 16.8481 11Z" />\n      </symbol>\n      </svg>','<h1>Support</h1><p class="description">Learn how to get support for MUI\xa0X components, including feature requests, bug fixes, and technical support from the team.</p>\n\n<h2 id="github">GitHub<a aria-labelledby="github" class="anchor-link" href="#github" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="github"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>We use GitHub issues as a bug and feature request tracker.</p>\n<p>If you think you&#39;ve found a bug, or you have a new feature idea:</p>\n<ol>\n<li>Please start by <a href="https://github.com/mui/mui-x/issues?q=is%3Aissue">making sure it hasn&#39;t already been reported or fixed</a>.\nYou can search through existing issues and pull requests to see if someone has reported one similar to yours.</li>\n<li>Then, if no duplicates exist, <a href="https://github.com/mui/mui-x/issues/new/choose">open an issue</a> in the MUI\xa0X repository.</li>\n</ol>\n<h3 id="new-issue-guidelines">New issue guidelines<a aria-labelledby="new-issue-guidelines" class="anchor-link" href="#new-issue-guidelines" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="new-issue-guidelines"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><ul>\n<li>Please follow one the issue templates provided on GitHub.</li>\n<li>Please begin the title with &quot;[component-name]&quot; (if relevant), and use a succinct description that helps others find similar issues.<ul>\n<li>❌ <em>&quot;It doesn&#39;t work&quot;</em></li>\n<li>✅ <em>&quot;[button] Add support for {{new feature}}&quot;</em></li>\n</ul>\n</li>\n<li>Please don&#39;t group multiple topics in one issue.</li>\n<li>Please don&#39;t comment &quot;+1&quot; on an issue. It spams the maintainers and doesn&#39;t help move the issue forward. Use GitHub reactions instead (\uD83D\uDC4D).</li>\n</ul>\n<h3 id="bug-reproductions">Bug reproductions<a aria-labelledby="bug-reproductions" class="anchor-link" href="#bug-reproductions" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="bug-reproductions"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>We require bug reports to be accompanied by a <strong>minimal reproduction</strong>.\nIt significantly increases the odds of fixing the problem.\nYou have a few possible options to provide it:</p>\n<h4>Use the live editors</h4><p>You can browse the documentation, find an example close to your use case, and then open it in a live editor:</p>\n<a href="/x/react-date-pickers/getting-started/#render-your-first-component">\n<span class="only-light-mode">\n<img src="/static/docs-infra/forking-an-example.png" alt="Forking an example" loading="lazy" width="1628" height="700" style="display: block; max-width: 774px;">\n</span>\n<span class="only-dark-mode">\n<img src="/static/docs-infra/forking-an-example-dark.png" alt="Forking an example" loading="lazy" width="1628" height="700" style="display: block; max-width: 774px;">\n</span>\n</a>\n\n<ul>\n<li><a href="/x/react-data-grid/#mit-license-free-forever">Data Grid</a></li>\n<li><a href="/x/react-date-pickers/getting-started/#render-your-first-component">Date Pickers</a></li>\n<li><a href="/x/react-charts/getting-started/#single-charts">Charts</a></li>\n<li><a href="/x/react-file-explorer/#file-explorer-basic">File Explorer</a></li>\n</ul>\n<h4>Use starter templates</h4><p>You can use a starter template to build a reproduction case with:</p>\n<!-- #default-branch-switch -->\n\n<ul>\n<li>A minimal Data Grid <a href="https://stackblitz.com/github/mui/mui-x/tree/master/bug-reproductions/x-data-grid?file=src/index.tsx">TypeScript template</a></li>\n<li>A plain React <a href="https://stackblitz.com/github/stackblitz/starters/tree/main/react">JavaScript</a> or <a href="https://stackblitz.com/github/stackblitz/starters/tree/main/react-ts">TypeScript</a> template</li>\n</ul>\n<h2 id="stack-overflow">Stack\xa0Overflow<a aria-labelledby="stack-overflow" class="anchor-link" href="#stack-overflow" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="stack-overflow"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>We use Stack\xa0Overflow for how-to questions. Answers are crowdsourced from expert developers in the MUI\xa0X community as well as MUI\xa0X maintainers.</p>\n<p>You can search through existing questions and answers to see if someone has asked a similar question using one of <a href="https://stackoverflow.com/questions/tagged/mui-x+or+mui-x-charts+or+mui-x-data-grid+or+mui-x-date-picker">these tags</a>:</p>\n<ul>\n<li>mui-x</li>\n<li>mui-x-data-grid</li>\n<li>mui-x-date-picker</li>\n<li>mui-x-charts</li>\n</ul>\n<p>If you cannot find your answer, <a href="https://stackoverflow.com/questions/ask?tags=reactjs%20mui-x">ask a new question</a> using the relevant tags.</p>\n<h2 id="technical-support">Technical support<a aria-labelledby="technical-support" class="anchor-link" href="#technical-support" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="technical-support"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><aside class="MuiCallout-root MuiCallout-info">\n            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">\n<use class="MuiCode-copied-icon" xlink:href="#info-icon" />\n</svg>\n            <div class="MuiCallout-content">\n            <p>The technical support covers only MUI\xa0X components.</p>\n\n</div></aside><p>When purchasing a MUI\xa0X Pro or Premium license you get access to technical support until the end of your active license.\nSupport is available on multiple channels, but the recommended channels are:</p>\n<ul>\n<li>GitHub: You can <a href="https://github.com/mui/mui-x/issues/new/choose">open a new issue</a> and leave your Order ID (or Support key), so we can prioritize accordingly.</li>\n<li>Email: If you need to share <strong>private information</strong> you can <a href="https://support.mui.com/hc/en-us/requests/new?tf_360023797420=mui_x">submit a request</a> or send an email to <a href="mailto:x@mui.com">x@mui.com</a>.</li>\n</ul>\n<p>Including your Order ID (or Support key) in the issue helps us prioritize the issues based on the following support levels:</p>\n<ol>\n<li>MUI\xa0X Pro: maintainers give these issues more attention than the ones from the community.</li>\n<li>MUI\xa0X Premium: The same as MUI\xa0X Pro, but with higher priority.</li>\n<li>MUI\xa0X Priority Support add-on (coming soon): Provides a 24h SLA for the first answer.</li>\n</ol>\n<h2 id="long-term-support-lts">Long-term support (LTS)<a aria-labelledby="long-term-support-lts" class="anchor-link" href="#long-term-support-lts" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="long-term-support-lts"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>Bug fixes, performance enhancements, and other improvements are delivered in new releases.\nHowever, we remain committed to providing security updates and addressing regressions for the immediate predecessor of the current major version.</p>\n<p>This includes issues introduced by external sources, like browser upgrades or changes to upstream dependencies.</p>\n<h3 id="supported-versions">Supported versions<a aria-labelledby="supported-versions" class="anchor-link" href="#supported-versions" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="supported-versions"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><ul>\n<li>MUI\xa0X v7: ✅ Stable major (Continuous support).</li>\n<li>MUI\xa0X v6: ⚠️ Long-term support (Guaranteed Support for security issues and regressions).</li>\n<li>MUI\xa0X v5: \uD83C\uDD67 No longer supported.</li>\n<li>MUI\xa0X v4: \uD83C\uDD67 No longer supported.</li>\n<li>MUI\xa0X v3: \uD83C\uDD67 Never existed.</li>\n<li>MUI\xa0X v2: \uD83C\uDD67 Never existed.</li>\n<li>MUI\xa0X v1: \uD83C\uDD67 Never existed.</li>\n</ul>\n<h2 id="community">Community<a aria-labelledby="community" class="anchor-link" href="#community" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="community"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><h3 id="social-media">Social media<a aria-labelledby="social-media" class="anchor-link" href="#social-media" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="social-media"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>The MUI\xa0X community is active on both <a href="https://x.com/MUI_hq">X/Twitter</a> and <a href="https://www.linkedin.com/company/mui/">LinkedIn</a>.\nThese are great platforms to share what you&#39;re working on and connect with other developers.</p>\n<h3 id="discord">Discord<a aria-labelledby="discord" class="anchor-link" href="#discord" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="discord"><svg><use xlink:href="#comment-link-icon" /></svg></button></h3><p>We have a <a href="https://mui.com/r/discord/">Discord Server</a> to bring the MUI\xa0X community together.\nOur tools are used by thousands of developers and teams all around the world, many of whom actively engage with the community.</p>\n<p>You can join Discord to engage in lively discussions, share your projects, and interact with developers just like you from all around the world. We&#39;d love for you to join us!</p>\n<aside class="MuiCallout-root MuiCallout-warning">\n            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon">\n<use class="MuiCode-copied-icon" xlink:href="#warning-icon" />\n</svg>\n            <div class="MuiCallout-content">\n            <p>How-to questions are not accepted on Discord, they should be asked on <a href="#stack-overflow">Stack\xa0Overflow</a>.</p>\n\n</div></aside><h2 id="custom-work">Custom work<a aria-labelledby="custom-work" class="anchor-link" href="#custom-work" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a><button title="Post a comment" class="comment-link" data-feedback-hash="custom-work"><svg><use xlink:href="#comment-link-icon" /></svg></button></h2><p>If your team gets stuck and needs help getting unblocked, MUI\xa0X&#39;s engineers may be available on a contract basis.</p>\n<p>Keep in mind that the work must be directly related to MUI\xa0X&#39;s products—we don&#39;t accept general web development or React work.</p>\n<p>Our contracting price starts at $70/hour (depending on current availability).</p>\n<p><a href="mailto:custom-work@mui.com">Send us an email</a> summarizing of your needs, and we&#39;ll let you know whether we can help (or else try to suggest alternatives).</p>\n'],toc:[{text:"GitHub",level:2,hash:"github",children:[{text:"New issue guidelines",level:3,hash:"new-issue-guidelines"},{text:"Bug reproductions",level:3,hash:"bug-reproductions"}]},{text:"Stack\xa0Overflow",level:2,hash:"stack-overflow",children:[]},{text:"Technical support",level:2,hash:"technical-support",children:[]},{text:"Long-term support (LTS)",level:2,hash:"long-term-support-lts",children:[{text:"Supported versions",level:3,hash:"supported-versions"}]},{text:"Community",level:2,hash:"community",children:[{text:"Social media",level:3,hash:"social-media"},{text:"Discord",level:3,hash:"discord"}]},{text:"Custom work",level:2,hash:"custom-work",children:[]}],title:"Support",headers:{components:[]}}},o={};o.scope={process:{},import:{}};var i={},a={}},54792:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Page}});var s=t(36063);t(92379);var o=t(71443),i=t(73896),a=t(651);function Page(){return(0,a.jsx)(o.Z,(0,s.Z)((0,s.Z)({},i),{},{disableAd:!0}))}},71443:function(e,n,t){"use strict";t.d(n,{Z:function(){return MarkdownDocs}});var s=t(36063),o=t(92379),i=t(39519),a=t.n(i),r=t(34930),l=t(66278),c=t(77789),u=t(92502),d=t(90523),h=t(273),m=t(22318),p=t(52950);t(93295),t(95339);var g=t(651);function JoyModeObserver(e){var n=e.mode,t=(0,c.tv)().setMode;return o.useEffect(function(){t(n)},[n,t]),null}function MarkdownDocs(e){var n=(0,l.Z)(),t=(0,r.useRouter)(),i=(0,d.ln)(t.asPath).canonicalAs,a=e.disableAd,v=void 0!==a&&a,f=e.disableToc,b=e.disableCssVarsProvider,k=e.demos,x=void 0===k?{}:k,w=e.docs,y=e.demoComponents,C=e.srcComponents,M=w[(0,m.fO)()]||w.en,I=i.startsWith("/joy-ui/")&&!(void 0!==b&&b),H=I?c.lL:o.Fragment,P=I?p.l:o.Fragment,U=(0,s.Z)({},I&&{mode:n.palette.mode});return(0,g.jsx)(h.Z,{cardOptions:{description:M.headers.cardDescription,title:M.headers.cardTitle},description:M.description,disableAd:v,disableToc:void 0!==f&&f,location:M.location,title:M.title,toc:M.toc,children:(0,g.jsxs)(H,{children:[I&&(0,g.jsx)(JoyModeObserver,{mode:n.palette.mode}),M.rendered.map(function(e,t){return(0,g.jsx)(u.Z,{demoComponents:y,demos:x,disableAd:v,localizedDoc:M,renderedMarkdownOrDemo:e,srcComponents:C,theme:n,WrapperComponent:P,wrapperProps:U},"demos-section-".concat(t))})]})})}JoyModeObserver.propTypes={mode:a().oneOf(["light","dark"])}},66706:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stoked-ui/docs/support",function(){return t(54792)}])}},function(e){e.O(0,[9774,9477,6221,3976,5386,3989,7809,7900,7146,5093,8997,2031,536,373,7066,2208,9738,947,5843,2376,634,2697,3133,7651,3552,5418,4059,2888,179],function(){return e(e.s=66706)}),_N_E=e.O()}]);