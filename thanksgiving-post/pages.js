const pages = [
`<h2>A Thanksgiving challenge</h2>
<p>To my fellow Bay Area transients heading home for Thanksgiving this week: ask someone at the dinner table how AI has actually made their life better. My guess is the answers sound nothing like what we hear in the SF echo chamber.</p>
<p>A Gallup poll from earlier this year asked Americans whether AI does more good or harm:</p>
<ul><li><b>39%</b> said more harm</li><li><b>Only 9%</b> said more good</li></ul>
<h2>The usual pattern of innovation</h2>
<p>Enterprise puts a new technology to work first. Ordinary people bear the early costs, and it takes another round of invention before households feel the full benefits.</p>
<p>This is what makes America the best country on earth to build and dream in. It doesn’t make it any more fun for the average consumer.</p>`,

`<h2>Looms: cheap cloth ≠ cheap clothes</h2>
<p>When factory looms spread in the early 1800s, mill owners could make 20x more cloth with far less labor. A crystal clear business win.</p>
<p>Meanwhile, handloom weavers lost work, mill workers breathed cotton dust, and industrial towns lived under coal smoke.</p>
<p>Cheap cloth also didn’t mean cheap clothes. That took a new wave of builders:</p>
<ul><li>The sewing machine</li><li>Department stores</li><li>Catalogs like Sears that shipped affordable clothing to every farmhouse in America</li></ul>`,

`<h2>Computing: same path</h2>
<p>Early computers were expensive, but financial firms had a very good reason to buy them. A bank could process thousands of transactions at once, and by the 1970s and 1980s hedge funds were leveraging algorithmic trading to drive unprecedented market alpha. None of it made it to the consumer.</p>
<p>It took longer, and a lot more invention, to get computers into our homes and eventually into our pockets. Online brokers let people trade from home, then Robinhood and others made it possible to buy $10 worth of stock from your phone without paying a commission.</p>
<h2>Installation vs. deployment</h2>
<p>Tech scholar Carlota Perez calls these the installation and deployment periods. A business can justify an expensive, hard-to-use technology if it makes the business more productive. Getting it into a household in a way that actually improves lives takes longer and takes a different kind of building.</p>`,

`<h2>AI’s installation period</h2>
<p>It’s bigger and faster than any before it, so the costs land harder:</p>
<ul><li>Mass layoffs and job insecurity</li><li>Endless AI slop</li><li>Security breaches</li><li>A sense that things are scary and getting worse</li></ul>
<p>Those costs are real.</p>
<h2>Finish the cycle</h2>
<p>We need to do the American thing and build things that make life better:</p>
<ul><li><b>Healthcare AI</b> that improves a family’s outcomes</li><li><b>Financial AI</b> that helps a household build wealth</li><li><b>Entertainment and creative AI</b> that expands the horizons of art and delight</li></ul>
<p class="close">Achieving AGI does not automatically make everyone’s life better. We have to go and build that part.</p>
<p>Happy Thanksgiving all!</p>`
];
const css = `*{margin:0;box-sizing:border-box}
body{width:1200px;height:1600px;background:#fff;color:#141414;font-family:Inter,sans-serif;padding:96px 96px 80px;display:flex;flex-direction:column;-webkit-font-smoothing:antialiased}
main{flex:1}
h2{font-size:46px;font-weight:700;letter-spacing:-0.02em;line-height:1.15;margin:0 0 26px}
p+h2,ul+h2{margin-top:56px}
p,li{font-size:35px;line-height:1.5;color:#2a2a2a}
p{margin-bottom:24px}
ul{margin:0 0 28px 0;padding-left:40px}
li{margin-bottom:10px;padding-left:6px}
li::marker{color:#999}
b{color:#141414;font-weight:650}
.close{font-weight:650;color:#141414;margin-top:36px}
footer{font-size:24px;color:#9a9a9a;display:flex;justify-content:flex-end}`;
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 1600 }, deviceScaleFactor: 2 });
  for (let i = 0; i < pages.length; i++) {
    await p.setContent(`<html><head><style>${css}</style></head><body><main>${pages[i]}</main><footer>${i+1} / ${pages.length}</footer></body></html>`);
    const over = await p.evaluate(() => document.querySelector('main').scrollHeight > document.querySelector('main').clientHeight);
    console.log('page', i+1, 'overflow', over);
    await p.screenshot({ path: `page-${i+1}.png` });
  }
  await b.close();
})();
