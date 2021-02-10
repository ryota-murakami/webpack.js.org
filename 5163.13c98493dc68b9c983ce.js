(self.webpackChunk=self.webpackChunk||[]).push([[5163],{5163:function(n){n.exports='<p>Because JavaScript can be written for both server and browser, webpack offers multiple deployment <em>targets</em> that you can set in your webpack <a href="/configuration">configuration</a>.</p> <aside class="warning"><h6 class="warning__prefix">warning</h6><p>The webpack <code>target</code> property is not to be confused with the <code>output.libraryTarget</code> property. For more information see <a href="/concepts/output/">our guide</a> on the <code>output</code> property.</p></aside> <h2 id="usage">Usage<a href="#usage" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>To set the <code>target</code> property, you simply set the target value in your webpack config:</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  target<span class="token operator">:</span> <span class="token string">\'node\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre> <p>In the example above, using <code>node</code> webpack will compile for usage in a Node.js-like environment (uses Node.js <code>require</code> to load chunks and not touch any built in modules like <code>fs</code> or <code>path</code>).</p> <p>Each <em>target</em> has a variety of deployment/environment specific additions, support to fit its needs. See what <a href="/configuration/target/">targets are available</a>.</p> <aside class="todo"><h6 class="todo__prefix">todo</h6><p>Further expansion for other popular target values</p></aside> <h2 id="multiple-targets">Multiple Targets<a href="#multiple-targets" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>Although webpack does <strong>not</strong> support multiple strings being passed into the <code>target</code> property, you can create an isomorphic library by bundling two separate configurations:</p> <p><strong>webpack.config.js</strong></p> <pre><code class="hljs language-javascript"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> serverConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n  target<span class="token operator">:</span> <span class="token string">\'node\'</span><span class="token punctuation">,</span>\n  output<span class="token operator">:</span> <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'dist\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    filename<span class="token operator">:</span> <span class="token string">\'lib.node.js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">//…</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> clientConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n  target<span class="token operator">:</span> <span class="token string">\'web\'</span><span class="token punctuation">,</span> <span class="token comment">// &#x3C;=== can be omitted as default is \'web\'</span>\n  output<span class="token operator">:</span> <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'dist\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    filename<span class="token operator">:</span> <span class="token string">\'lib.js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">//…</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">[</span>serverConfig<span class="token punctuation">,</span> clientConfig<span class="token punctuation">]</span><span class="token punctuation">;</span></code></pre> <p>The example above will create a <code>lib.js</code> and <code>lib.node.js</code> file in your <code>dist</code> folder.</p> <h2 id="resources">Resources<a href="#resources" aria-hidden="true" tabindex="-1"><span class="header-link"></span></a></h2> <p>As seen from the options above, there are multiple deployment <em>targets</em> that you can choose from. Below is a list of examples and resources that you can refer to.</p> <ul> <li><strong><a href="https://github.com/TheLarkInn/compare-webpack-target-bundles">compare-webpack-target-bundles</a></strong>: A great resource for testing and viewing different webpack <em>targets</em>. Also great for bug reporting.</li> <li><strong><a href="https://github.com/chentsulin/electron-react-boilerplate">Boilerplate of Electron-React Application</a></strong>: A good example of a build process for electron\'s main process and renderer process.</li> </ul> <aside class="todo"><h6 class="todo__prefix">todo</h6><p>Need to find up to date examples of these webpack targets being used in live code or boilerplates.</p></aside> '}}]);